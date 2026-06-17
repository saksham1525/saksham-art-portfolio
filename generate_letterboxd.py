"""
Run from the project root (no arguments needed):
    python3 generate_letterboxd.py

Automatically picks the newest letterboxd-* export folder in the same
directory and writes letterboxd_saksham.json next to this script.
"""

import csv
import json
from pathlib import Path


SCRIPT_DIR = Path(__file__).parent


def find_export_folder():
    candidates = sorted(
        SCRIPT_DIR.glob("letterboxd-*"),
        key=lambda p: p.stat().st_mtime,
        reverse=True,
    )
    folders = [p for p in candidates if p.is_dir()]
    if not folders:
        raise FileNotFoundError("No letterboxd-* export folder found next to this script.")
    chosen = folders[0]
    print(f"Using export folder: {chosen.name}")
    return chosen


def read_list_file(filepath):
    """
    Letterboxd list CSVs have two sections:
      Section 1 header: Date,Name,Tags,URL,Description  (list metadata)
      Section 2 header: Position,Name,Year,URL,Description  (film entries)
    Returns (list_name, [film_uris]).
    """
    lines = filepath.read_text(encoding="utf-8").splitlines()
    list_name = filepath.stem
    film_uris = []

    meta_header_idx = None
    films_header_idx = None

    for i, line in enumerate(lines):
        if line.startswith("Date,Name,Tags"):
            meta_header_idx = i
        elif line.startswith("Position,Name,Year,URL"):
            films_header_idx = i
            break

    if meta_header_idx is not None:
        for j in range(meta_header_idx + 1, min(meta_header_idx + 4, len(lines))):
            stripped = lines[j].strip()
            if stripped:
                parts = next(csv.reader([stripped]))
                if len(parts) >= 2 and parts[1].strip():
                    list_name = parts[1].strip()
                break

    if films_header_idx is not None:
        reader = csv.DictReader(lines[films_header_idx:])
        for row in reader:
            uri = row.get("URL", "").strip()
            if uri:
                film_uris.append(uri)

    return list_name, film_uris


def main():
    export = find_export_folder()
    output_path = SCRIPT_DIR / "letterboxd-saksham_1525.json"

    # 1. Base: watched.csv
    films = {}
    with (export / "watched.csv").open(encoding="utf-8") as f:
        for row in csv.DictReader(f):
            uri = row["Letterboxd URI"].strip()
            films[uri] = {
                "name": row["Name"].strip(),
                "year": int(row["Year"]),
                "letterboxd_uri": uri,
                "date_watched": row["Date"].strip(),
            }

    # 2. Ratings
    ratings_csv = export / "ratings.csv"
    if ratings_csv.exists():
        with ratings_csv.open(encoding="utf-8") as f:
            for row in csv.DictReader(f):
                uri = row["Letterboxd URI"].strip()
                if uri in films:
                    films[uri]["rating"] = float(row["Rating"])

    # 3. Reviews (URI is review permalink, not film URI — match by Name+Year)
    name_year_to_uri = {(v["name"], v["year"]): k for k, v in films.items()}
    reviews_csv = export / "reviews.csv"
    if reviews_csv.exists():
        with reviews_csv.open(encoding="utf-8") as f:
            for row in csv.DictReader(f):
                key = (row["Name"].strip(), int(row["Year"]))
                uri = name_year_to_uri.get(key)
                if uri is None:
                    continue
                review = row.get("Review", "").strip()
                if review:
                    films[uri]["review"] = review
                tags_raw = row.get("Tags", "").strip()
                if tags_raw:
                    films[uri]["tags"] = [t.strip() for t in tags_raw.split(",") if t.strip()]
                rating_str = row.get("Rating", "").strip()
                if rating_str and "rating" not in films[uri]:
                    films[uri]["rating"] = float(rating_str)

    # 4. Liked films
    likes_films = export / "likes" / "films.csv"
    if likes_films.exists():
        with likes_films.open(encoding="utf-8") as f:
            for row in csv.DictReader(f):
                uri = row["Letterboxd URI"].strip()
                if uri in films:
                    films[uri]["liked"] = True

    # 5. Lists
    lists_dir = export / "lists"
    if lists_dir.exists():
        for list_file in sorted(lists_dir.glob("*.csv")):
            list_name, uris = read_list_file(list_file)
            for uri in uris:
                if uri in films:
                    films[uri].setdefault("lists", [])
                    if list_name not in films[uri]["lists"]:
                        films[uri]["lists"].append(list_name)

    # 6. Sort and write
    sorted_films = sorted(films.values(), key=lambda x: x["date_watched"], reverse=True)
    output = {"total_films": len(sorted_films), "films": sorted_films}
    output_path.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Done. {len(sorted_films)} films → {output_path.name}")


if __name__ == "__main__":
    main()

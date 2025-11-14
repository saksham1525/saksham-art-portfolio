# Saksham Garg - Portfolio Website (React)

This is a React version of the portfolio website, eliminating code duplication through reusable components.

## Project Structure

```
saksham-react/
├── src/
│   ├── components/        # Reusable components (Header, Footer, etc.)
│   ├── pages/            # Page components (Home, Film, Poetry, etc.)
│   ├── data/             # Data files for content
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # All styles (same as original)
├── public/
│   └── images/           # All images
└── package.json
```

## Key Benefits Over Vanilla HTML

- **No Code Duplication**: Header/footer written once, reused everywhere
- **Data-Driven**: Content stored in data files, not repeated HTML
- **Easy Updates**: Change navigation in one place, updates all pages
- **Maintainable**: ~80% less code than the HTML version

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Visit http://localhost:5173

## Build for Production

```bash
npm run build
```

The `dist/` folder will contain the static HTML/CSS/JS files ready to deploy.

## Deployment

You can deploy this to:
- Vercel (automatic with Git push)
- Netlify (drag & drop the `dist` folder)
- GitHub Pages
- Any static hosting service

## Notes

- The styling is **identical** to the original HTML version
- All CSS preserved in `src/index.css`
- Images copied from original `/saksham/images/`


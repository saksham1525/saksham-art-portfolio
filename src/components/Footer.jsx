function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-footer-upper">
        <ul className="site-links">
          <li>
            <a href="https://vimeo.com/user217366048" target="_blank" rel="noopener noreferrer" title="Vimeo">
              <span>Vimeo</span>
              <svg className="social-icon" viewBox="0 0 32 32">
                <path d="M12.741 9.12c2.236-.424 2.236 3.431 2.776 5.552.501 2.044.848 3.239 1.311 3.239s1.311-1.158 2.275-2.931-.038-3.354-1.889-2.236c.733-4.474 7.712-5.515 6.825-.425s-5.977 9.407-7.48 10.41c-1.542 1.003-2.93-.385-3.431-1.426-.578-1.157-2.313-7.634-2.776-8.174-.463-.54-1.813.54-1.813.54l-.655-.848s2.737-3.277 4.857-3.701Z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@sakshamgarg3489" target="_blank" rel="noopener noreferrer" title="YouTube">
              <span>YouTube</span>
              <svg className="social-icon" viewBox="0 0 32 32">
                <path d="M24.325 8.309c.639.18 1.144.686 1.324 1.325.332 1.186.351 3.666.351 3.666s0 2.48-.351 3.666c-.18.639-.685 1.144-1.324 1.325-1.186.332-5.925.332-5.925.332s-4.739 0-5.925-.332c-.639-.18-1.144-.686-1.324-1.325C10.819 14.78 10.8 12.3 10.8 12.3s0-2.48.351-3.666c.18-.639.685-1.144 1.324-1.325C13.661 6.977 18.4 6.977 18.4 6.977s4.739 0 5.925.332zM16.675 15.075l3.9-2.775-3.9-2.775v5.55z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://letterboxd.com/saksham_1525/" target="_blank" rel="noopener noreferrer" title="Letterboxd">
              <span>Letterboxd</span>
              <svg className="social-icon" viewBox="0 0 24 24">
                <circle cx="6" cy="12" r="4" fillOpacity="0.9"/>
                <circle cx="12" cy="12" r="4" fillOpacity="0.9"/>
                <circle cx="18" cy="12" r="4" fillOpacity="0.9"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="main-footer-lower">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer


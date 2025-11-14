import { Link } from 'react-router-dom'

function HomeHeader() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-content">
          <div className="brand"></div>
          <nav className="main-nav">
            <Link to="/archive">archive</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader


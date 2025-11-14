import SidebarHeader from './SidebarHeader'
import ProjectNav from './ProjectNav'

function PageLayout({ sectionId, navItems, currentPath, children }) {
  return (
    <div id="container" className="clear">
      <SidebarHeader />
      <div id="main">
        <div id={sectionId} className="section">
          {navItems && <ProjectNav items={navItems} currentPath={currentPath} />}
          {children}
        </div>
      </div>
      <div id="push-footer"></div>
      <div id="full-frame-wrapper">
        <div id="full-frame">
          <img src="/images/background.png" alt="" />
          <div className="full-frame-control"></div>
        </div>
      </div>
    </div>
  )
}

export default PageLayout


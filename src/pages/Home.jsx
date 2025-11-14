import HomeHeader from '../components/HomeHeader'
import ProjectGrid from '../components/ProjectGrid'
import Footer from '../components/Footer'
import { homeProjects } from '../data/projects'

function Home() {
  return (
    <>
      <HomeHeader />
      <main className="main-content">
        <div className="container">
          <ProjectGrid projects={homeProjects} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home


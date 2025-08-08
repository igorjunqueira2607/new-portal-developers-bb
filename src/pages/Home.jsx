import BannerHome from "../components/BannerHome"
import ImplematationSection from "../components/ImplematationSection"
import NavBar from "../components/NavBar"
import SolutionSection from "../components/SolutionSection"

function Home() {
  return (
    <body class="flex flex-col justify-items-start overflow-x-hidden">
      <NavBar />
      <BannerHome />
      <ImplematationSection />
      <SolutionSection />
    </body>
  )
}

export default Home
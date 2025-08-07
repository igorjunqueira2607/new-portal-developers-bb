import BannerHome from "../components/BannerHome"
import ImplematationSection from "../components/ImplematationSection"
import NavBar from "../components/NavBar"

function Home() {
  return (
    <body class="flex flex-col justify-items-start">
      <NavBar />
      <BannerHome />
      <ImplematationSection />
    </body>
  )
}

export default Home
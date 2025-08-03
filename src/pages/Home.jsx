import BannerHome from "../components/BannerHome"
import NavBar from "../components/NavBar"

function Home() {
  return (
    <body class="flex flex-col justify-items-start">
      <NavBar />
      <BannerHome />
    </body>
  )
}

export default Home
import BaasData from "./BaaSData";
import ImplematationSteps from "./ImplemetationSteps";

function BannerHome () {
  return (
    <div class="w-full h-screen overflow-hidden mt-16 relative flex">
      <img src="/assets/Banner_Home-1.webp" class="w-max-full h-full scale-x-101 z-0"/>
      <div class="absolute top-1/6 w-5/12 text-justify left-1/7">
        <h1 class ="text-amarelo-bb text-8xl font-bold mb-5">Portal Developers BB</h1>
        <h2 class="text-amarelo-bb text-2xl font-normal">Bem-vindo(a) ao Portal Developers do BB. Aqui você irá encontrar tudo que precisa para conectar seu negócio com as APIs do Banco do Brasil de uma maneira simples e fácil.</h2>
      </div>
      {/* <ImplematationSteps /> */}
      <BaasData />
    </div>
  )
}

export default BannerHome;
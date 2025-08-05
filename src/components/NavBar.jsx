function NavBar () {
  return(
    <nav class="h-16 bg-azul-bb p-3 pr-10 gap-4 flex justify-between fixed w-screen top-0 border-b-4 border-amarelo-bb z-100">
      <div class="flex h-fit w-fit gap-4">
        <button class="max-h-full cursor-pointer"><img class="w-7" src="/assets/icons8-cardápio.svg"/></button>
        <img class="h-9 left-14" src="/assets/BancodoBrasil.Logomarca.Vers╞oPrincipal.Amarelo.RGB.svg"/>
      </div>
      <div class="h-full flex gap-5 ml-3 grow justify-items-start">
        <button class="h-full flex w-fit items-center cursor-pointer">
          <h1 class="text-branco-navbar content-center flex items-center">BaaS</h1>
          <img src="/assets/arrow-down-svgrepo-com.svg" class="h-5 ml-2"/>
        </button>
        <button class="h-full flex w-fit items-center cursor-pointer">
          <h1 class="text-branco-navbar content-center flex items-center">Para desenvolvedores</h1>
          <img src="/assets/arrow-down-svgrepo-com.svg" class="h-5 ml-2"/>
        </button>
        <button class="h-full flex w-fit items-center cursor-pointer">
          <h1 class="text-branco-navbar content-center flex items-center">Parcerias</h1>
          <img src="/assets/arrow-down-svgrepo-com.svg" class="h-5 ml-2"/>
        </button>
        <button class="h-full flex w-fit items-center cursor-pointer">
          <h1 class="text-branco-navbar content-center flex items-center">Suporte</h1>
          <img src="/assets/arrow-down-svgrepo-com.svg" class="h-5 ml-2"/>
        </button>
      </div>
      <button class="bg-amarelo-bb pl-14 pr-14 ">
        <h1 class="text-azul-bb">Entrar</h1>
      </button>
    </nav>
  )
}

export default NavBar
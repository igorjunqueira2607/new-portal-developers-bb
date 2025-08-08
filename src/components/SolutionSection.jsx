function SolutionSection () {
  return(
    <section class="flex flex-col items-center w-screen bg-branco-navbar h-screen pt-30 pb-30">
      <h1 class="text-azul-bb text-6xl font-bold">Conheça nossas soluções.</h1>
      <div class="w-2/3 bg-red-600 h-2/3 border-2 mt-30 border-gray-800">
        <menu class="grid grid-cols-6 border-b-2 h-1/10 border-amarelo-bb">
          <button class="h-full border-r-2">Soluções Transacionais</button>
          <button class="h-full border-r-2">Soluções de Crédito</button>
          <button class="h-full border-r-2">Soluções de Seguro</button>
          <button class="h-full border-r-2">Cartão de Crédito</button>
          <button class="h-full border-r-2">Corban Digital</button>
          <button class="h-full">Câmbio</button>
        </menu>
      </div>
    </section>
  )
}

export default SolutionSection;
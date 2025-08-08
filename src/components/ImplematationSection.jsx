import ImplematationSteps from "./ImplemetationSteps";

function ImplematationSection () {
  return (
    <section class="w-full h-fit overflow-hidden items-center relative flex flex-col bg-amarelo-bb pt-30 pb-30">
      <h1 class="text-azul-bb text-6xl font-bold mb-50">Crie sua aplicação de maneira simples e fácil!</h1>
      <ImplematationSteps />
    </section>
  )
}

export default ImplematationSection;
import ImplematationSteps from "./ImplemetationSteps";

function ImplematationSection () {
  return (
    <section class="w-full h-screen overflow-hidden items-center relative flex flex-col bg-branco-navbar pt-36">
      <h1 class="text-azul-bb text-6xl font-bold mb-50">Crie sua aplicação de maneira simples e fácil!</h1>
      <ImplematationSteps />
    </section>
  )
}

export default ImplematationSection;
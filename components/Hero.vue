<template>
  <section
    class="hero bg-primary relative w-full overflow-hidden flex items-center pb-24"
  >
    <div class="container w-full">
      <main class="mt-10 mx-auto sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
        <div class="text-left lg:text-center">
          <div class="sm:hidden">
            <h4 class="text-primary pb-4 font-medium">
              {{ blok.caption }}
            </h4>
            <h2 class="font-extrabold text-primary pb-8">
              {{ blok.titlep1 }}
              <br class="xl:hidden" />
              <span class="text-tertiary">{{ blok.titlep2 }}</span>
            </h2>
          </div>
          <div class="hidden md:block">
            <h3 class="text-primary pb-4 font-medium">
              {{ blok.caption }}
            </h3>
            <h1
              class="tracking-tight font-extrabold text-primary pb-8 text-4xl"
            >
              {{ blok.titlep1 }}
              <br class="xl:hidden" />
              <span class="text-tertiary">{{ blok.titlep2 }}</span>
            </h1>
          </div>
          <p class="text-secondary mt-3 md:mt-5 md:max-w-6xl mx-auto pb-4">
            {{ blok.description }}
          </p>
          <div
            class="mt-8 max-w-xl md:max-w-2xl sm:flex justify-start lg:justify-center lg:mx-auto md:mt-8"
          >
            <button-primary> {{ blok.buttonText }} </button-primary>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped lang="scss">
.hero {
  min-height: 60vh;
}
</style>

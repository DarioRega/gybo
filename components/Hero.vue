<template>
  <div
    class="relative w-full overflow-hidden flex min-h-auto items-center pb-24"
  >
    <main
      class="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"
    >
      <div class="text-left lg:text-center px-4">
        <div class="sm:hidden">
          <h4 class="text-primary pb-4 font-medium">
            {{ content.caption }}
          </h4>
          <h2 class="font-extrabold text-primary pb-8">
            {{ content.titlep1 }}
            <br class="xl:hidden" />
            <span class="text-tertiary">{{ content.titlep2 }}</span>
          </h2>
        </div>
        <div class="hidden md:block">
          <h3 class="text-primary pb-4 font-medium">
            {{ content.caption }}
          </h3>
          <h1 class="tracking-tight font-extrabold text-primary pb-8">
            {{ content.titlep1 }}
            <br class="xl:hidden" />
            <span class="text-tertiary">{{ content.titlep2 }}</span>
          </h1>
        </div>
        <p class="text-secondary mt-3 md:mt-5 md:max-w-6xl mx-auto pb-4">
          {{ content.description }}
        </p>
        <div
          class="mt-8 max-w-xl md:max-w-2xl sm:flex justify-start lg:mx-auto md:mt-8"
        >
          <button-primary> {{ content.button }} </button-primary>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log('PROPS CONTENT')
  },
}
</script>

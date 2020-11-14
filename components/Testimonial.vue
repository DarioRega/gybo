<template>
  <section
    class="testimonial py-12 bg-primary overflow-hidden md:py-20 lg:py-24"
  >
    <div
      v-if="blok"
      class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div class="relative">
        <div class="w-full testimonial__container">
          <div class="mx-auto w-48">
            <img
              :src="blok.logo.filename"
              :onerror="blok.logoSupportOldNavs.filename"
              :alt="blok.logoSupportOldNavs.alt"
              class="w-full h-full testimonial__logo"
            />
          </div>
        </div>
        <blockquote class="mt-8">
          <div class="max-w-3xl mx-auto text-center font-medium text-primary">
            <p>{{ blok.text }}</p>
          </div>
          <footer class="mt-8">
            <div class="md:flex md:items-center md:justify-center">
              <div
                class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center"
              >
                <div class="text-primary font-medium">
                  {{ blok.personName }}
                </div>

                <svg
                  class="hidden md:block mx-1 h-5 w-5 text-tertiary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h3L9 20H6l5-20z" />
                </svg>

                <div class="text-secondary">
                  <p>{{ blok.personFunction }}, {{ blok.company }}</p>
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>

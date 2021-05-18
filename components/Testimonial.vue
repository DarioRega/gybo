<template>
  <section class="testimonial bg-primary overflow-hidden">
    <div v-if="blok" class="relative mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative max-w-5xl mx-auto">
        <div class="w-full testimonial__container">
          <div
            class="mx-auto testimonial__logo"
            :class="blok.isLandscape ? 'is-landscape' : 'is-portrait'"
          >
            <img
              :src="
                currentTheme === 'dark'
                  ? blok.logoDark.filename
                  : blok.logo.filename
              "
              :onerror="
                currentTheme === 'dark'
                  ? blok.logoSupportOldNavsDark.filename
                  : blok.logoSupportOldNavs.filename
              "
              :alt="blok.logoSupportOldNavs.alt"
              class="w-full h-full"
            />
          </div>
        </div>
        <blockquote class="mt-8">
          <div class="mx-auto text-center font-medium text-primary">
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
                  class="hidden md:block mx-1 testimonial__separator text-tertiary"
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
import store from '@/store'

export default {
  name: 'Testimonial',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    currentTheme() {
      return store.currentTheme
    },
  },
  mounted() {
    console.log('TJIS BLOK TESTI', this.blok)
  },
}
</script>

<style lang="scss">
.testimonial {
  &__logo {
    &.is-landscape {
      width: 70%;
      @screen sm {
        width: 50%;
      }
    }
    &.is-portrait {
      @apply w-40;
    }
  }

  &__separator {
    @apply w-5 h-5;
  }
}
</style>

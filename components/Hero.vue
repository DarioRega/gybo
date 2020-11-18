<template>
  <section
    class="hero bg-primary relative w-full flex items-center section-spacer"
  >
    <div class="container mt-24">
      <main class="mx-auto">
        <div class="text-left lg:text-center">
          <div class="sm:hidden">
            <h4
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              class="text-primary pb-4 font-medium"
            >
              {{ blok.caption }}
            </h4>
            <h2
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              class="title-anim font-extrabold relative text-primary pb-4 lg:pb-8 xl:pb-10 overflow-hidden"
            >
              {{ blok.titlep1 }}
              <span class="text-tertiary">{{ blok.spanTitle }} </span>
              <transition name="word">
                <span v-show="currentSentenceId === 1" class="text-tertiary">
                  {{ blok.titlep2 }}
                </span>
              </transition>
              <transition name="word">
                <span v-show="currentSentenceId === 2" class="text-tertiary">
                  {{ blok.titlep3 }}
                </span>
              </transition>
            </h2>
          </div>
          <div class="hidden sm:block">
            <h3
              class="text-primary pb-4 font-medium"
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="700"
              data-aos-delay="600"
            >
              {{ blok.caption }}
            </h3>
            <div
              class="relative"
              data-aos="zoom-in-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <h1
                class="tracking-tight text-left lg:text-center font-extrabold text-primary overflow-hidden"
              >
                {{ blok.titlep1 }}
                <span class="relative text-tertiary overflow-visible"
                  >{{ blok.spanTitle }}
                </span>
              </h1>
              <br class="xl:hidden" />
              <div class="h-24 overflow-visible">
                <div>
                  <transition name="word">
                    <h1
                      v-show="currentSentenceId === 1"
                      class="flex-1 block text-left lg:text-center tracking-tight font-extrabold text-tertiary"
                    >
                      {{ blok.titlep2 }}
                    </h1>
                  </transition>
                </div>
                <div>
                  <transition name="word">
                    <h1
                      v-show="currentSentenceId === 2"
                      class="flex-1 block tracking-tight text-left lg:text-center font-extrabold text-tertiary"
                    >
                      {{ blok.titlep3 }}
                    </h1>
                  </transition>
                </div>
              </div>
            </div>
          </div>
          <p
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
            data-aos-delay="300"
            class="md:hidden text-secondary mt-3 md:mt-5 lg:mt-16 md:max-w-6xl mx-auto pb-4"
          >
            {{ blok.description }}
          </p>
          <p
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
            data-aos-delay="200"
            class="hidden md:block text-secondary mt-3 md:mt-5 lg:mt-16 md:max-w-6xl mx-auto pb-4"
          >
            {{ blok.description }}
          </p>

          <div
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="700"
            data-aos-delay="600"
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
  components: {},
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentSentenceId: 2,
      counterInteval: 1,
    }
  },
  created() {
    this.counterInteval = setInterval(
      function () {
        this.changeWords()
      }.bind(this),
      8000
    )
  },
  destroyed() {
    clearInterval(this.counterInteval)
  },
  methods: {
    changeWords() {
      if (this.currentSentenceId === 1) {
        this.currentSentenceId = 2
      } else {
        this.currentSentenceId = 1
      }
    },
  },
}
</script>
<style scoped lang="scss">
.hero {
  min-height: 60vh;
}
.word-enter-active {
  transition: all 1s;
}
.word-enter {
  opacity: 0;
  transform: translateY(3rem);
}
.word-leave {
  transform: translateY(3rem);
  opacity: 0;
}
@media only screen and (max-width: 390px) {
  .title-anim {
    @apply h-40;
  }
}
@media only screen and (min-width: 391px) {
  .title-anim {
    @apply h-32;
  }
}
</style>

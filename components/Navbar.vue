<template>
  <div
    class="fixed lg:relative inset-x-0 h-24 my-auto flex justify-between items-center z-20 bg-primary"
  >
    <div class="container mx-auto h-full relative">
      <nav
        class="relative flex items-center justify-between h-full md:justify-center"
      >
        <div
          class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
        >
          <div class="flex items-center justify-between w-full md:w-auto">
            <link-primary aria-label="Home" class="uppercase text-primary">
              <h3 class="font-medium tracking-tight text-primary">Gybo</h3>
            </link-primary>
            <div class="flex items-center md:hidden">
              <button
                id="main-menu"
                type="button"
                class="inline-flex items-center justify-center rounded-md text-tertiary focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-haspopup="true"
                @click="open"
              >
                <icon name="navigation-menu-1" size="100" />
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:flex md:space-x-10">
          <link-primary
            v-for="link in blok.headerlink"
            :key="link._uid"
            exact-active-class="text-primary font-bold"
            :to="link.path ? '/' + link.path : '/'"
            :alt="link.alt"
            class="px-3 py-2 text-secondary font-semibold lg:font-normal"
            >{{ link.name }}</link-primary
          >
        </div>
        <div
          class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
        >
          <div
            class="theme-toggler cursor-pointer focus:outline-none"
            tabindex="4"
            @click="toggleTheme"
          ></div>
        </div>
      </nav>
    </div>
    <transition
      enter-active-class="duration-150 eas-out"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-show="isOpen" class="bg-primary">
        <div
          class="absolute block top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50 bg-primary"
        >
          <div class="rounded-lg shadow-md relative border border-primary z-50">
            <div
              class="rounded-lg shadow-xs overflow-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <link-primary
                    aria-label="Home"
                    class="uppercase text-primary"
                  >
                    <h3 class="font-medium tracking-tight text-primary">
                      Gybo
                    </h3>
                  </link-primary>
                </div>
                <div
                  class="theme-toggler cursor-pointer focus:outline-none"
                  tabindex="4"
                  @click="toggleTheme"
                ></div>
                <div class="">
                  <button
                    type="button"
                    class="inline-flex items-center text-tertiary justify-center p-2 rounded-md text-gray-400 focus:outline-none transition duration-150 ease-in-out"
                    aria-label="Close menu"
                    @click="close"
                  >
                    <icon name="close" size="75" />
                  </button>
                </div>
              </div>
              <div v-if="blok.headerlink" class="px-2 pt-6 pb-3">
                <link-primary
                  v-for="link in blok.headerlink"
                  :key="link._uid"
                  exact-active-class="text-primary font-bold"
                  :to="link.path ? '/' + link.path : '/'"
                  :alt="link.alt"
                  class="px-3 py-2 text-secondary font-semibold lg:font-normal"
                  >{{ link.name }}</link-primary
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import store, { closeMenu, openMenu, setTheme } from '~/store'

export default {
  name: 'Navbar',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isOpen() {
      return store.isOpen
    },
    currentTheme() {
      return store.currentTheme
    },
  },
  mounted() {
    console.log('this.blok NAVBAR', this.blok)
  },
  methods: {
    open() {
      openMenu()
    },
    close() {
      closeMenu()
    },
    toggleTheme() {
      if (this.currentTheme.includes('light')) {
        setTheme('theme-dusk')
      } else {
        setTheme('theme-light')
      }
    },
  },
}
</script>

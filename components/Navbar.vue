<template>
  <div
    class="fixed lg:relative inset-x-0 h-24 my-auto flex justify-between items-center z-20 bg-primary"
  >
    <div class="container mx-auto w-full h-full px-4 sm:px-6 relative">
      <nav
        class="relative flex items-center justify-between h-full md:justify-center"
      >
        <div
          class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
        >
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="#" aria-label="Home">
              <img
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                alt="Logo"
              />
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <button
                id="main-menu"
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-haspopup="true"
                @click="open"
              >
                <icon name="hamburger" size="75" />
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:flex md:space-x-10">
          <link-primary
            v-for="link in blok.headerlink"
            :key="link._uid"
            :to="link.path ? '/' + link.path : '/'"
            :alt="link.alt"
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
        <!--          <span class="inline-flex rounded-md shadow">-->
        <!--            <a-->
        <!--              href="#"-->
        <!--              class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out"-->
        <!--            >-->
        <!--              Thème: Dark-->
        <!--            </a>-->
        <!--          </span>-->
        <!--        </div>-->
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
          <div class="rounded-lg shadow-md relative z-50">
            <div
              class="rounded-lg shadow-xs overflow-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                    alt=""
                  />
                </div>
                <div
                  class="theme-toggler cursor-pointer focus:outline-none"
                  tabindex="4"
                  @click="toggleTheme"
                ></div>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
                  :to="link.path ? '/' + link.path : '/'"
                  :alt="link.alt"
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

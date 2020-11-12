import Vue from 'vue'
const state = Vue.observable({
  isOpen: false,
  currentTheme: 'theme-light',
})
export const openMenu = () => (state.isOpen = true)
export const closeMenu = () => (state.isOpen = false)
export const setTheme = (theme) => (state.currentTheme = theme)
export default state

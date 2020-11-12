import Vue from 'vue'
const state = Vue.observable({ isOpen: false })
export const openMenu = () => (state.isOpen = true)
export const closeMenu = () => (state.isOpen = false)
export default state

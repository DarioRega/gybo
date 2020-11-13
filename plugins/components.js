import Vue from 'vue'
import Page from '@/components/Page'
import Teaser from '@/components/Teaser'
import Hero from '@/components/Hero'
import ButtonPrimary from '@/components/ButtonPrimary'
import LinkPrimary from '@/components/LinkPrimary'
import Navbar from '@/components/Navbar'
import ContentTwoColumns from '@/components/ContentTwoColumns'
import ContainerContentSwap from '@/components/ContainerContentSwap'
import ContentSwap from '@/components/ContentSwap'

Vue.component('page', Page)
Vue.component('teaser', Teaser)
Vue.component('hero', Hero)
Vue.component('content-two-columns', ContentTwoColumns)
Vue.component('container-swap', ContainerContentSwap)
Vue.component('content-swap', ContentSwap)

Vue.component('navbar', Navbar)
Vue.component('button-primary', ButtonPrimary)
Vue.component('link-primary', LinkPrimary)

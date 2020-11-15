<template>
  <section class="bg-primary section-spacer">
    <div class="container">
      <div v-if="blok" class="carousel w-full md:w-3/4 mx-auto">
        <no-ssr>
          <hooper :settings="hooperSettings">
            <slide
              v-for="(item, index) in blok.testimonial"
              :key="index"
              :index="index"
            >
              <testimonial :blok="item" class="px-0 md:px-12" />
            </slide>
            <hooper-navigation
              slot="hooper-addons"
              class="hidden sm:block"
            ></hooper-navigation>
            <hooper-pagination
              slot="hooper-addons"
              class="sm:hidden"
            ></hooper-pagination>
          </hooper>
        </no-ssr>

        <!--        <div v-for="item in blok.testimonial" :key="item._uid">-->
        <!--          <testimonial :blok="item" />-->
        <!--        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'ContainerTestimonials',
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        autoPlay: false,
        infiniteScroll: true,
        playSpeed: '3000',
      },
    }
  },
  mounted() {
    console.log('CONTAINER TESTIM', this.blok)
  },
}
</script>
<style lang="scss">
.carousel {
  .hooper {
    height: auto;

    &:focus {
      @apply outline-none;
    }

    .hooper-prev,
    .hooper-next {
      @apply bg-secondary shadow-base rounded-full text-primary p-4;

      &:hover {
        @apply shadow-full;
      }
      &:focus {
        @apply outline-none;
      }

      svg {
        @apply fill-current text-current;
        width: 3rem;
        height: 3rem;
      }
    }
    .hooper-pagination {
      top: -6rem;
      .hooper-indicators {
      }
    }
  }
}
</style>

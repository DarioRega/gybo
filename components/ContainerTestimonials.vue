<template>
  <section class="bg-primary section-spacer">
    <div class="container pb-8 sm:pb-0">
      <teaser
        v-for="item in blok.teaser"
        :key="item._uid"
        :blok="item"
        :is-nested="true"
        :should-animate="false"
      />

      <div v-if="blok" class="carousel w-full md:w-3/4 mx-auto mt-8">
        <no-ssr>
          <hooper :settings="hooperSettings">
            <slide
              v-for="(item, index) in blok.testimonial"
              :key="index"
              :index="index"
            >
              <testimonial :blok="item" />
            </slide>

            <hooper-navigation
              slot="hooper-addons"
              class="hidden sm:block"
            ></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
        </no-ssr>
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
        autoPlay: true,
        infiniteScroll: true,
        playSpeed: '3000',
        transition: 600,
      },
    }
  },
}
</script>
<style lang="scss">
.hooper {
  height: auto;
  cursor: grab;
  &:focus {
    @apply outline-none;
  }

  .hooper-prev {
    left: -8rem;
  }
  .hooper-next {
    right: -8rem;
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
    bottom: -4rem;
    .hooper-indicators {
      @apply w-64 justify-center;

      li {
        margin: 0 0.6rem;
      }
      @screen sm {
        display: none;
      }
    }
    .hooper-indicator {
      width: 20px;
      height: 8px;
      border: 1px solid;
      @apply border-tertiary transition-colors duration-100 ease-linear;

      &.is-active {
        @apply bg-tertiary;
      }
      &:focus {
        @apply outline-none;
      }
    }
  }
}
</style>

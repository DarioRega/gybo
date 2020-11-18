<template>
  <section class="bg-primary section-spacer mt-24">
    <div class="container">
      <div class="lg:max-w-none">
        <teaser
          v-for="item in blok.teaser"
          :key="item._uid"
          :blok="item"
          :is-nested="true"
        />
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-y-32">
        <process-step
          v-for="(item, index) in blok.step_item"
          :key="item._uid"
          :blok="item"
          :step-number="index + 1"
          class="mb-12"
          :class="[
            index % 2 === 0
              ? 'lg:pr-12 xl:pr-24 lg:border-r-4 border-tertiary'
              : 'lg:pl-12 xl:pl-24',
            index < 6 - 1 &&
              'border-b border-tertiary pb-8 lg:pb-0 lg:border-b-0',
          ]"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContainerProcessStep',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>

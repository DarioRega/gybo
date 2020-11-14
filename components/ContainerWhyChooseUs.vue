<template>
  <div class="bg-secondary py-24 overflow-hidden">
    <div class="relative container">
      <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div class="lg:col-span-1 sm:pr-8">
          <h2 class="font-extrabold tracking-tight">
            A better way to send money.
          </h2>
        </div>
        <div
          class="mt-10 sm:grid sm:grid-cols-2 sm:gap-x-16 sm:gap-y-16 lg:gap-y-32 lg:gap-x-20 lg:col-span-2 lg:mt-0"
        >
          <choose-us-arg />
          <choose-us-arg />
          <choose-us-arg />
          <choose-us-arg />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContainerWhyChooseUs',
}
</script>

<style scoped></style>

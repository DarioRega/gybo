<template>
  <div class="bg-secondary px-4 sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12">
    <div class="max-w-lg mx-auto lg:max-w-none">
      <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
        <input-form
          v-for="field in blok.fields"
          :key="field._uid"
          :blok="field"
        />
        <div class="">
          <span class="inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              class="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log('THIS BLOK CONTACT FORM', this.blok)
  },
}
</script>

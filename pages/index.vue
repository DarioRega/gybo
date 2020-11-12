<template>
  <Hero :content="content" />
</template>

<script>
export default {
  async asyncData(context) {
    const { $content, app } = context
    const content = await $content(`${app.i18n.locale}/index`).fetch()

    return {
      content,
    }
  },
}
</script>

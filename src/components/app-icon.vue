<template>
  <span
    v-if="source === 'font-awesome'"
    :class="[
      $style.fa,
      $style['fa-' + name],
    ]"
  />
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      default: 'font-awesome',
    },
    // http://fontawesome.io/icons/
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
$fa-font-path: 'font-awesome/fonts';

@import '~font-awesome/scss/font-awesome';
</style>

<script>
import NavBar from '@components/nav-bar'

export default {
  components: {
    NavBar,
  },
}
</script>

<template>
  <div :class="$style.container">
    <NavBar/>
    <slot/>
  </div>
</template>

<style lang="scss" module>
@import '~@design-variables';

.container {
  max-width: $content-width-max;
  padding: 0 $grid-padding;
  margin: 0 auto;
}
</style>

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
@import '~@styles/styles.scss';

.container {
  max-width: width(maxContentWidth);
  padding: 0 $grid-padding;
  margin: 0 auto;
  @extend %t-medium;
}

h1 {
  @extend %t-xlarge;
}
</style>

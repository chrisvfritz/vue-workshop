<script>
import NavBarRoutes from './nav-bar-routes'

export default {
  components: {
    NavBarRoutes,
  },
  data() {
    return {
      navRoutes: [
        {
          name: 'home',
          title: 'Home',
        },
        {
          name: 'exercises',
          title: 'Exercises',
        },
      ],
    }
  },
}
</script>

<template>
  <ul :class="$style.container">
    <NavBarRoutes :routes="navRoutes"/>
  </ul>
</template>

<style lang="scss" module>
@import '~@design';

.container {
  padding: 0;
  margin: 0 0 $grid-padding;
  text-align: center;
  list-style-type: none;

  > li {
    display: inline-block;
    margin-right: $grid-padding;
  }
}
</style>

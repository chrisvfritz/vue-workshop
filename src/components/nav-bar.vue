<script>
import { authGetters } from '@state/helpers'
import NavBarRoutes from './nav-bar-routes'

export default {
  components: {
    NavBarRoutes,
  },
  data() {
    return {
      persistentNavRoutes: [
        {
          name: 'home',
          title: 'Home',
        },
      ],
      loggedInNavRoutes: [
        {
          name: 'profile',
          title: () => 'Logged in as ' + this.currentUser.name,
        },
        {
          name: 'logout',
          title: 'Log out',
        },
      ],
      loggedOutNavRoutes: [
        {
          name: 'login',
          title: 'Log in',
        },
      ],
    }
  },
  computed: {
    ...authGetters,
  },
}
</script>

<template>
  <ul :class="$style.container">
    <NavBarRoutes :routes="persistentNavRoutes"/>
    <NavBarRoutes
      v-if="loggedIn"
      :routes="loggedInNavRoutes"
    />
    <NavBarRoutes
      v-else
      :routes="loggedOutNavRoutes"
    />
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

<script>
import { appInfo } from '../package.json'

export default {
  page: {
    // All subcomponent titles will be injected into this template
    titleTemplate(title) {
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${title} | ${appInfo.title}` : appInfo.title
    },
  },
}
</script>


<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<!-- This should generally be the only global CSS in the app -->
<style lang="scss">
@import 'normalize.css/normalize.css';
@import '~@design';

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: $sans-serif-font-stack;
  font-size: $base-font-size;
  line-height: $base-line-height;
  color: $base-text-color;
  cursor: default;
  user-select: none;
  background: $body-bg;
}

a,
a:visited {
  color: $base-link-text-color;
}
</style>

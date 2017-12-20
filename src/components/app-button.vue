<template>
  <button
    :class="$style.button"
    v-on="$listeners"
  >
    <slot/>
  </button>
</template>

<style lang="scss" module>
@import '~@design-variables';

.button {
  padding: $grid-padding / 2 $grid-padding;
  line-height: $base-line-height;
  color: $button-text-color;
  background: $button-bg;
  border: none;
}
</style>

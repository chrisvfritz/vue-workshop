<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
      }
    },
  },
}
</script>

<template>
  <input
    :type="type"
    :value="value"
    :class="$style.input"
    v-on="listeners"
  >
</template>

<style lang="scss" module>
@import '~@design';

.input {
  display: block;
  width: 100%;
  padding: $grid-padding / 2 $grid-padding;
  margin-bottom: $grid-padding;
  line-height: $base-line-height;
  border: 1px solid $base-text-color;
}
</style>

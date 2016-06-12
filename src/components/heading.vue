<template>
  <span>
    <h1 v-if="importance === 1"><slot></slot></h1>
    <h2 v-if="importance === 2"><slot></slot></h2>
    <h3 v-if="importance === 3"><slot></slot></h3>
    <h4 v-if="importance === 4"><slot></slot></h4>
    <h5 v-if="importance === 5"><slot></slot></h5>
    <h6 v-if="importance === 6"><slot></slot></h6>
  </span>
</template>

<script>
  export default {
    props: {
      importance: {
        type: Number,
        required: true,
        validator (value) {
          return [1, 2, 3, 4, 5, 6].some(acceptableValue => {
            return acceptableValue === value
          })
        }
      }
    }
  }
</script>

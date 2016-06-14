<template>
  <div>
    <heading :importance="importance">
      <a v-el:heading-anchor :name="headingId" :href="'#' + headingId">
        <slot v-ref="headingContent"></slot>
      </a>
    </heading>
  </div>
</template>

<script>
  import Heading from './heading'

  export default {
    components: {
      Heading
    },

    props: {
      importance: {
        type: Number,
        required: true
      },
      prefix: {
        type: String
      }
    },

    computed: {
      headingId () {
        const sanitizeForAnchor = text => {
          return text
            .trim()
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/\-+/g, '-')
            .replace(/^\W+/g, '')
            .replace(/\W+$/g, '')
        }

        const sanitizedPrefix = this.prefix ? sanitizeForAnchor(this.prefix) + '-' : ''
        return sanitizedPrefix + sanitizeForAnchor(this.$els.headingAnchor.textContent)
      }
    }
  }
</script>

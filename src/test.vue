<template>
  <div>test</div>
</template>

<script>
export default {
  props: {
    /**
     ** 使用 `Badge` 该参数、
     */
    showApp: {
      type: Array,
      default() {
        return [1];
      }
    }
  },
  data() {
    return {
      init: []
    };
  },
  methods: {
    /**
     * Sets the order
     *
     * @public
     * @version 1.0.5
     * @since Version 1.0.1
     * @param {string} key Key to order
     * @returns {string} Test
     */
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1

      /**
       * Success event.
       *
       * @event success
       * @type {object}
       */
      this.$emit('success', {
        demo: 'example'
      })
    },
  }
};
</script>

<style>
</style>
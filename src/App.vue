<template>
  <component :is="layout">
      <router-view />
  </component>
</template>

<script>
const default_layout = "side-and-navbar";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
  name: "app",
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

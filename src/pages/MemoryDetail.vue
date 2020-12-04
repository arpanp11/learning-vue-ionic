<template>
  <base-layout page-title="The Details" page-default-back-link="/memories">
    <h2 v-if="!loadedMomory">The details page</h2>
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      memories: null,
    };
  },
  computed: {
    loadedMomory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  watch: {
    $route(currentRoute) {
      this.memoryId = currentRoute.params.id;
    },
  },
};
</script>

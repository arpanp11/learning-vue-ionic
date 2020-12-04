<template>
  <base-layout
    :page-title="loadedMomory ? loadedMomory.title : 'Loading...'"
    page-default-back-link="/memories"
  >
    <h2 v-if="!loadedMomory">Could not find a memory for the given ID.</h2>
    <memory-overview
      v-else
      :title="loadedMomory.title"
      :image="loadedMomory.image"
      :description="loadedMomory.description"
    ></memory-overview>
  </base-layout>
</template>

<script>
import MemoryOverview from '../components/memories/MemoryOverview';

export default {
  components: {
    MemoryOverview,
  },
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  computed: {
    loadedMomory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  // watch: {
  //   $route(currentRoute) {
  //     this.memoryId = currentRoute.params.id;
  //   },
  // },
};
</script>

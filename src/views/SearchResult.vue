<template>
  <h2 class="text-xl">Search Result</h2>
  <SearchBar class="my-4" />
  <div class="flex flex-wrap">
    <div
      class="mb-10 basis-2/4"
      v-for="(entry, index) in searchResultState"
      :key="entry.link"
    >
      <div :class="[index % 2 === 0 ? 'mr-5' : 'ml-5']">
        <Card :entry="entry" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Card from "../components/Card.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import SearchBar from "../components/SearchBar.vue";

const route = useRoute();
const currPageNumber = ref(0);
const store = useStore();

onMounted(() => {
  // TODO: search with pagination from API
  currPageNumber.value = parseInt(route.params.pageNumber);
});

const searchResultState = computed(() => {
  return store.state.searchResultState;
});
</script>

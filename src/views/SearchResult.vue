<template>
  <div>
    <h3>Search Result</h3>
    <SearchBar/>
  </div>
  <div class="flex flex-wrap">
    <div class="mb-10 basis-2/4" v-for="entry in searchRes" :key="entry.link">
      <Card :entry="entry" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Card from "../components/Card.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import SearchBar from "../components/SearchBar.vue";

const route = useRoute();
const currPageNumber = ref(0);
const searchRes = ref([]);
const store = useStore();

onMounted(() => {
  searchRes.value = store.state.searchResultState;
  console.log("check", searchRes.value);

  // TODO: search with pagination from API
  currPageNumber.value = parseInt(route.params.pageNumber);
});
</script>

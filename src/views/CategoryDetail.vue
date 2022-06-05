<template>
  <!-- start loading spinner -->
  <div v-if="showLoadingSpinner" class="text-center">
    <svg
      role="status"
      class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <p>Loading data...</p>
  </div>
  <!-- end loading spinner -->

  <div v-if="!showLoadingSpinner">
    <div class="flex flex-wrap">
      <div
        class="mb-10 basis-2/4"
        v-for="(entry, index) in categoryEntries"
        :key="entry.link"
      >
        <div :class="[index % 2 === 0 ? 'mr-5' : 'ml-5']">
          <Card :entry="entry" />
        </div>
      </div>
    </div>

    <!-- start pagination -->
    <nav aria-label="Page navigation example">
      <div class="flex items-center justify-center">
        <ul class="inline-flex -space-x-px">
          <li v-if="pageAmount > 1" v-for="index in pageAmount">
            <router-link
              :to="`/category/${route.params.category}/${index}`"
              :class="[
                'py-2 px-3 ml-0 leading-tight bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
                index === 1
                  ? 'rounded-l-lg'
                  : index === pageAmount
                  ? 'rounded-r-lg'
                  : '',
                index === currPageNumber ? 'text-blue-600' : 'text-gray-500',
              ]"
            >
              {{ index }}</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- end pagination -->
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Card from "../components/Card.vue";
import { useRoute } from "vue-router";
import { apiUrl } from "../config";

const route = useRoute();
const showLoadingSpinner = ref(false);
const currPageNumber = ref(0);

let categoryEntries = ref([]);
let entriesPerPage = ref(10);
let pageAmount = ref(0);

onMounted(() => {
  showLoadingSpinner.value = true;
  currPageNumber.value = parseInt(route.params.pageNumber);
  getCategoryEntries();
});

watch(
  () => route.params,
  (toParams, previousParams) => {
    showLoadingSpinner.value = true;
    currPageNumber.value = parseInt(route.params.pageNumber);
    getCategoryEntries();
  }
);

async function getCategoryEntries() {
  const categoryName = route.params.category;
  const pageNumber = parseInt(route.params.pageNumber);

  const url = `${apiUrl}/api/v1/category/${categoryName}`;
  document.title = `DRFD | ${categoryName}`;

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.entries !== undefined && data.entries.websites.length < 10)
        entriesPerPage.value = data.entries.websites.length;
      let startIndex = pageNumber === 1 ? 0 : entriesPerPage.value * pageNumber;
      categoryEntries.value = data.entries.websites.slice(
        startIndex,
        startIndex + entriesPerPage.value
      );
      pageAmount.value = parseInt(
        data.entries.websites.length / entriesPerPage.value
      );
      showLoadingSpinner.value = false;
    });
}
</script>

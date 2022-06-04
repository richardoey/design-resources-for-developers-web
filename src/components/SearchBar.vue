<template>
  <div
    class="max-w-lg mx-auto mt-10 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40"
  >
    <div class="flex flex-col md:flex-row">
      <!-- Menu toggle button -->
      <div
        class="relative inline-block text-left"
        style="width: 130px"
        ref="filterButton"
      >
        <button
          @click="toggleFilter"
          class="flex content-start items-center justify-center h-full w-full px-2 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-l-md focus:outline-none hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        >
          <span class="mx-1">{{ chosenFilter }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="1.2em"
            height="1.2em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 20 20"
            class="hidden md:inline-block -mr-1 ml-2 h-5 w-5"
          >
            <g fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>

        <!-- Menu list -->
        <div
          :class="[isFilterHidden ? 'hidden' : '']"
          class="absolute left-0 z-20 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-700"
        >
          <a
            v-for="filter of filterArr"
            href="#"
            @click="chooseFilter(filter)"
            class="block px-4 py-2 text-sm text-gray-800 transition-colors duration-200 transform border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600"
            >{{ filter }}</a
          >
        </div>
      </div>

      <input
        @keyup.enter="search"
        type="text"
        placeholder="Search"
        v-model="keyword"
        class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { apiUrl } from "../config";
import { onClickOutside } from "@vueuse/core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const isFilterHidden = ref(true);
const searchRes = ref("");
const filterArr = ["Name", "Link", "Description", "Category"];
const chosenFilter = ref(filterArr[0]);
const keyword = ref("");
const filterButton = ref(HTMLDivElement);

onClickOutside(filterButton, () => {
  if (!isFilterHidden.value) isFilterHidden.value = true;
});

const search = async () => {
  const url = `${apiUrl}/api/v1/search/${chosenFilter.value.toLowerCase()}/${keyword.value.toLowerCase()}`;
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      searchRes.value = data;
      store.commit("mutateSearchResult", searchRes.value);
      router.push({
        path: `/search/${chosenFilter.value.toLowerCase()}/${keyword.value.toLowerCase()}`,
      });
    });
};

const toggleFilter = () => {
  if (isFilterHidden.value === true) {
    isFilterHidden.value = false;
  } else {
    isFilterHidden.value = true;
  }
};

const chooseFilter = (filter) => {
  chosenFilter.value = filter;
  isFilterHidden.value = true;
};
</script>

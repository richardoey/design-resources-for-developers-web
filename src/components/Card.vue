<template>
  <a
    href="#"
    class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl h-48 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src="#"
      alt=""
    />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5
        class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ entryName }}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ entryDescription }}
      </p>
      <div class="flex flex-row-reverse">
        <a
          target="blank"
          :href="entry.link"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View Page
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </a>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["entry"]);
const entryNameMaxLength = 15;
const entryDesciptionMaxLength = 100;

const entryName = computed(() => {
  return props.entry.name.length > entryNameMaxLength
    ? `${props.entry.name.substring(0, entryNameMaxLength)} ...`
    : props.entry.name;
});

const entryDescription = computed(() => {
  return props.entry.description.length > entryDesciptionMaxLength
    ? `${props.entry.description.substring(0, entryDesciptionMaxLength)} ...`
    : props.entry.description;
});
</script>

<template>
  <section class="bg-white dark:bg-gray-800">
    <nav
      class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
    >
      <div class="flex items-center justify-between">
        <div>
          <a
            class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
            href="#"
            >Design Resources for Developers Web</a
          >
        </div>

        <!-- Mobile menu button -->
        <div class="flex lg:hidden">
          <button
            type="button"
            class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        class="flex flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-mx-6 lg:space-y-0"
      >
        <a
          class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
          href="https://github.com/richardoey/design-resources-for-developers-web"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          target="blank"
          class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
          href="https://github.com/bradtraversy/design-resources-for-developers/blob/master/contributing.md"
          >Contributing</a
        >
      </div>
    </nav>

    <div class="container px-6 py-16 mx-auto text-center">
      <div class="max-w-lg mx-auto">
        <h1
          class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl"
        >
          Get inspiration and resources from here
        </h1>

        <p class="mt-6 text-gray-500 dark:text-gray-300">
          Curated list of design and UI resources from stock photos, web
          templates, CSS frameworks, UI libraries, tools and much
        </p>
        <div class="mx-auto mt-10">
          <SearchBar />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SearchBar from "../components/SearchBar.vue";
</script>

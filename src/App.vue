<template>
  <div class="bg-base-100 drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

    <div class="drawer-side">
      <aside class="bg-base-200 w-80">
        <div
          class="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex"
        >
          <div class="column-1">
            <p>Design Resources for Developers</p>
            <br />
            <input type="text" placeholder="Search resources..." class="input w-full max-w-xs" />
          </div>
        </div>
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <!-- Sidebar content here -->
          <li v-for="category in categories">
            <router-link :to="`/category/${category.category}`">{{ category.category }}</router-link>
          </li>
        </ul>
      </aside>
    </div>
    <div class="drawer-content" style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
      <Navbar />
      <!-- component matched by the route will render here -->
      <div class="p-6 pb-16">
        <div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
          <div class="prose w-full max-w-4xl flex-grow">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue';
import { apiUrl } from './config';

let categories = ref([]);

onMounted(() => {
  getCategories();
})

async function getCategories() {
  const url = `${apiUrl}/api/v1/categories`;
  await fetch(url)
    .then(response => response.json())
    .then(data => {
      categories.value = data.categories
    });
}

</script>

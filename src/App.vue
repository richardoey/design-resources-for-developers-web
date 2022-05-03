<template>
  <Navbar />
  <div class="w-full px-4 mx-auto max-w-8xl">
    <div class="lg:flex">
      <aside aria-label="Sidebar"
        class="fixed inset-0 z-20 flex-none hidden h-full w-80 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-52 lg:block">
        <div
          class="overflow-hidden overflow-y-auto z-20 h-full bg-white scrolling-touch max-w-2xs lg:h-screen lg:block lg:sticky top:24 lg:top-12 dark:bg-gray-900 lg:mr-0">
          <nav id="nav"
            class="pt-16 px-1 pl-3 lg:pl-0 lg:pt-2 overflow-y-auto font-medium text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)">
            <ul class="mb-0 list-unstyled">
              <li class="mt-8">
                <h4 class="mb-2 text-md font-semibold tracking-wide text-gray-900 uppercase lg:text-md dark:text-white">
                  Categories</h4>
              </li>
              <ul class="py-1 list-unstyled fw-normal small">
                <li v-for="category in categories"
                  class="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">
                  <router-link :to="`/category/${category.category}`">{{ category.category }}</router-link>
                </li>
              </ul>
            </ul>
          </nav>
        </div>
      </aside>
      <main id="content-wrapper" class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
        <div class="flex w-full">
          <div class="flex-auto max-w-5xl min-w-0 pt-6 lg:px-8 lg:pt-10 pb:12 xl:pb-24 lg:pb-16">
            
            <!-- dynamic content is here -->
            <router-view>
            </router-view>

          </div>
        </div>
      </main>
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

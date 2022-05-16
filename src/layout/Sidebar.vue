<template>
    <aside aria-label="Sidebar"
        class="fixed inset-0 z-20 flex-none h-full w-56 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-52 lg:block transition duration-200" :class="[showSidebar ? '' : 'hidden']">
        <div id="navWrapper"
            class="overflow-hidden overflow-y-auto z-20 h-full bg-white scrolling-touch max-w-2xs lg:h-screen lg:block lg:sticky top:24 lg:top-12 dark:bg-gray-900 lg:mr-0">
            <nav id="nav"
                class="pt-16 px-1 pl-3 lg:pl-0 lg:pt-2 overflow-y-auto font-medium text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)">
                <ul class="mb-0 list-unstyled">
                    <li class="mt-8">
                        <h4
                            class="mb-2 text-md font-semibold tracking-wide text-gray-900 uppercase lg:text-md dark:text-white">
                            Categories</h4>
                    </li>
                    <ul class="py-1 list-unstyled fw-normal small">
                        <li @click="changeCurrCategoryName(category.category)" v-for="category in categories"
                            :class="['py-2 transition-colors duration-200 relative block', category.category === currCategoryName ? 'text-blue-700 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-500' : 'hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white']">
                            <router-link :to="`/category/${category.category}/1`">{{ category.category }}
                            </router-link>
                        </li>
                    </ul>
                </ul>
            </nav>
        </div>
    </aside>
    <div :class="['fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/60 ', showSidebar ? '' : 'hidden']"
        id="sidebarBackdrop"></div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { apiUrl } from '../config';

const store = useStore();
const showSidebar = computed(() => store.state.showSidebar);

let categories = ref([]);

onMounted(() => {
    getCategories();
})

const currCategoryName = computed(() => {
    return store.state.currCategoryName
});

const changeCurrCategoryName = (categoryName) => {
    store.commit('changeCurrCategoryName', categoryName);

}

const getCategories = async () => {
    const url = `${apiUrl}/api/v1/categories`;
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            categories.value = data.categories
        });
}

</script>
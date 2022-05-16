<template>
    <header
        class="sticky top-0 z-40 flex flex-none w-full py-3 mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
        <div class="flex items-center justify-between w-full px-3 mx-auto max-w-8xl lg:px-4">
            <div class="flex items-center">
                <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar"
                    @click="toggleSidebarClick"
                    class="p-2 mr-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg id="toggleSidebarMobileHamburger" :class="[isHamburgerHidden ? 'hidden' : '', 'w-6 h-6']"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <svg id="toggleSidebarMobileClose" :class="[isMobileCloseHidden ? 'hidden' : '', 'w-6 h-6']"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <div class="flex items-center justify-between">
                    <a href="https://flowbite.com" class="flex">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Design
                            Resources for Developers</span>
                    </a>
                </div>
            </div>
            <div class="flex items-center">
                <ul id="flowbiteMenu" class="flex-col hidden pt-6 lg:flex-row lg:self-center lg:py-0 lg:flex">
                    <li class="mb-3 lg:px-2 xl:px-3 lg:mb-0">
                        <a target="_blank" href="https://github.com/richardoey/design-resources-for-developers-web">
                            <font-awesome-icon size="xl" :icon="['fab', 'github']" />
                        </a>
                    </li>
                    <li class="mb-3 lg:px-2 xl:px-3 lg:mb-0">
                        <a>Contributing</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'

const isHamburgerHidden = ref(false)
const isMobileCloseHidden = ref(true)
const store = useStore()

const toggleSidebarClick = () => {
    if (!isHamburgerHidden.value) {
        isMobileCloseHidden.value = false
        isHamburgerHidden.value = true
        store.commit('toggleShowSidebar');
    } else {
        isMobileCloseHidden.value = true
        isHamburgerHidden.value = false
        store.commit('toggleShowSidebar');
    }
}
</script>
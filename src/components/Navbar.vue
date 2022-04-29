<template>
    <div
        class="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content"
    >
        <nav class="w-full navbar bg-base-300">
            <div class="flex-none lg:hidden">
                <label for="my-drawer-3" class="btn btn-square btn-ghost drawer-button">
                    <font-awesome-icon :icon="['fa', 'bars']" />
                </label>
            </div>
            <Search />
            <div class="flex-none hidden lg:block">
                <ul class="menu menu-horizontal">
                    <li>
                        <a>
                            <font-awesome-icon size="xl" :icon="['fab', 'github']" />
                        </a>
                    </li>
                    <li>
                        <a>Contributing</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup>
import Search from './Search.vue';

</script>
<template>
    <div class="w-11/12 md:w-3/4 mb-[86px]">
        <div
            class="mt-10 grid grid-flow-row-dense grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 md:gap-6 xl:gap-8"
        >
            <section class="flex" v-for="entry in categoryEntries" :key="entry.link">
                <Card :entry="entry" />
            </section>
        </div>
        <div class="btn-group mt-4">
            <button class="btn btn-active">1</button>
            <button class="btn">2</button>
            <button class="btn">3</button>
            <button class="btn">4</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Card from '../components/Card.vue';
import { useRoute } from 'vue-router'
import { apiUrl } from "../config";

const route = useRoute()

let categoryEntries = ref([]);

onMounted(() => {
    getCategoryEntries();
})

watch(
    () => route.params,
    (toParams, previousParams) => {
        getCategoryEntries();
    }
)

async function getCategoryEntries() {
    const categoryName = route.params.category;
    const url = `${apiUrl}/api/v1/category/${categoryName}`;
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            categoryEntries.value = data.entries.websites.slice(0, 10)
        });
}

</script>
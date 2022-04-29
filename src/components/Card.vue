<template>
    <div class="w-80 bg-base-100 border rounded border-gray-300 hover:border-sky-400 ">
        <div class="card-body p-4">
            <h2 class="card-title text-black text-lg ">{{ entry.name }}</h2>
            <p class="text-slate-500 text-sm">{{ entry.description }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['entry']);

</script>
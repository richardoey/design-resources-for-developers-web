<template>
  <Navbar/>
    <div class="w-full mx-auto max-w-8xl">
        <div class="lg:flex">
            <Sidebar />
            <ContentWrapper />
        </div>
    </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
import ContentWrapper from './ContentWrapper.vue';

</script>
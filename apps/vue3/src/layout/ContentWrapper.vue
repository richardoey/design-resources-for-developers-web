<template>
    <main id="content-wrapper" class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
        <div class="flex w-full">
            <div class="flex-auto max-w-5xl min-w-0 pt-6 lg:px-8 lg:pt-10 pb:12 xl:pb-24 lg:pb-16">
                <!-- dynamic content is here -->
                <router-view>
                </router-view>
            </div>
        </div>
    </main>
</template>

<script setup></script>
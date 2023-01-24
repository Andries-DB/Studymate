<template>
    <div class="background flex items-center justify-center py-12 px-4">
        <div class="w-full max-w-md space-y-8">
            <div>
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-50">{{ title }}</h2>
            </div>
            <slot>

            </slot>
        </div>
    </div>
</template>

<script setup>
const {title} = defineProps({
        title: {
            type: String,
            required: true
    }
});
</script>

<style scoped>
    .background {
        height: 100vh;
        background-image: url("/assets/loginform-background.svg");
        background-position: center;
        background-size: cover;
    }
</style>


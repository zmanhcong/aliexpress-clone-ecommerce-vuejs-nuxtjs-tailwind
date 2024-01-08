<template>
    <!-- Overlay color in overall page -->
    <div class="fixed z-[-1] bg-[#F2F2F2] w-full h-[100vh]" />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
const route = useRoute();

let windowWidth = ref(process.client ? window.innerWidth : "");

onMounted(() => {
    userStore.isLoading = true;
    window.addEventListener("resize", function () {
        windowWidth.value = window.innerWidth;
    });
});

watch(
    () => windowWidth.value,
    () => {
        if (windowWidth.value > 768) {
            userStore.isMenuOverlay = false;
        }
    }
);

watch(
    () => route.fullPath,
    () => {
        userStore.isLoading = true;
    }
);
</script>

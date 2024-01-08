<template>
    <MainLayout>
        <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div
                v-if="products"
                class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
            >
                <div v-for="product in products.data" :key="product">
                    <ProductComponent :product="product" />
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

import MainLayout from "~/layouts/MainLayout.vue";

// Fetch products from API with "/api/prisma/get-all-products"
let products = ref(null);

onBeforeMount(async () => {
    let res = await useFetch("/api/prisma/get-all-products");
    products.value = res;
    setTimeout(() => {
        userStore.isLoading = false;
    }, 1000);
});
</script>

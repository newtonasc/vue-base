<script setup lang="ts">
import HeaderComponent from '@/components/base/HeaderComponent.vue';
import TopComponent from '@/components/base/TopComponent.vue';
import FooterComponent from '@/components/base/FooterComponent.vue';
</script>

<template>
  <div class="flex flex-col justify-between items-center w-screen h-screen">
    <HeaderComponent />
    <TopComponent />
    <div class="flex flex-col items-start justify-start w-screen h-full">
      <RouterView />
    </div>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import FilterComponent from '@/components/home/FilterComponent.vue';
import ResultComponent from '@/components/home/ResultComponent.vue';
import FilterButton from '@/components/mobile/FilterButton.vue';
</script>
<template>
  <div class="flex flex-row w-screen h-full p-2 gap-2 static">
    <FilterComponent class="hidden lg:flex" />
    <ResultComponent />
    <FilterButton />
  </div>
</template>

<script setup lang="ts">
import { IconListCheck } from '@tabler/icons-vue';
</script>
<template>
  <div
    class="flex flex-col w-full lg:w-7/12 xl:w-8/12 2xl:w-9/12 md:w-full h-full bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg lg:rounded-l-none shadow-sm overflow-hidden"
  >
    <div class="p-2">
      <span class="flex flex-row">
        <IconListCheck class="text-amber-900" />
        <span class="font-black text-amber-900">Result </span>
      </span>
    </div>
  </div>
</template>

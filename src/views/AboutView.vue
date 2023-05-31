<script setup lang="ts">
import { IconMessage } from '@tabler/icons-vue';
</script>
<template>
  <div class="flex flex-row w-screen h-full p-2 gap-2">
    <div
      class="flex flex-col w-full h-full bg-gradient-to-r from-blue-300 via-blue-100 to-teal-100 rounded-lg shadow-sm overflow-hidden"
    >
      <div class="p-2">
        <span class="flex flex-row">
          <IconMessage class="text-amber-900" />
          <span class="font-black text-amber-900">About </span></span
        >
      </div>
    </div>
  </div>
</template>

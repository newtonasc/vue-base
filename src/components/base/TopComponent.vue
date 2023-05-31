<script setup lang="ts">
import { IconMessage, IconHome, IconUser } from '@tabler/icons-vue';
</script>

<template>
  <div class="flex flex-col bg-gradient-to-r from-teal-300 to-teal-100 h-[80px] items-start justify-center w-screen">
    <div class="flex flex-row items-center justify-start">
      <RouterLink
        to="/"
        class="flex flex-col justify-center items-center font-slim border text-amber-900 text-xs border-amber-900 rounded-lg p-2 mx-4 my-2 overflow-hidden w-[60px] h-[60px]"
        ><IconHome /> Home</RouterLink
      >

      <RouterLink
        to="/users"
        class="flex flex-col justify-center items-center font-slim border text-amber-900 text-xs border-amber-900 rounded-lg p-2 mx-4 my-2 overflow-hidden w-[60px] h-[60px]"
        ><IconUser /> Users</RouterLink
      >

      <RouterLink
        to="/about"
        class="flex flex-col justify-center items-center font-slim border text-amber-900 text-xs border-amber-900 rounded-lg p-2 mx-4 my-2 overflow-hidden w-[60px] h-[60px]"
        ><IconMessage /> About</RouterLink
      >
    </div>
  </div>
</template>

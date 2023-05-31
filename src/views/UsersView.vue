<script setup lang="ts">
import { IconUser } from '@tabler/icons-vue';
import UserListComponent from '@/components/user/UserListComponent.vue';
</script>
<template>
  <div class="flex flex-row w-screen h-full p-2 gap-2">
    <div
      class="flex flex-col w-full h-full bg-gradient-to-r from-blue-300 via-blue-100 to-teal-100 rounded-lg shadow-sm overflow-hidden"
    >
      <div class="p-2 h-full relative">
        <span class="flex flex-row border-b-4 pb-1 border-amber-900">
          <IconUser class="text-amber-900" />
          <span class="font-black text-amber-900">Users </span></span
        >
        <UserListComponent />
      </div>
    </div>
  </div>
</template>

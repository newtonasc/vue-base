<script setup lang="ts">
import { IconFilter, IconX } from '@tabler/icons-vue';
import { ref } from 'vue';
import FilterComponent from '../home/FilterComponent.vue';

const dialog = ref(false);
</script>
<template>
  <div class="flex visible lg:hidden absolute bottom-2 left-2">
    <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
      <template #activator="{ props }">
        <button
          class="flex flex-row items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full w-[50px] h-[50px]"
          v-bind="props"
        >
          <IconFilter class="text-white" :size="28" />
        </button>
      </template>
      <v-card>
        <div
          class="flex flex-row bg-gradient-to-r from-orange-300 to-teal-100 h-[60px] items-center justify-between w-full px-4"
        >
          <h1 class="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-gray-500 to-black">
            FILTER
          </h1>
          <v-spacer></v-spacer>
          <div>
            <button variant="text" @click="dialog = false"><IconX class="stroke-[4px] hover:text-red-500" /></button>
          </div>
        </div>
        <v-card-text>
          <FilterComponent />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

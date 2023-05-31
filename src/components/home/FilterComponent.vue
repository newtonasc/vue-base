<script setup lang="ts">
import { IconFilter } from '@tabler/icons-vue';
import { ref } from 'vue';

const dialog = ref(false);
</script>
<template>
  <div
    class="flex-col w-full lg:w-5/12 xl:w-4/12 2xl:w-3/12 h-full bg-gradient-to-r from-blue-300 to-blue-100 rounded-lg lg:rounded-r-none shadow-sm overflow-hidden"
  >
    <div class="p-2">
      <v-dialog v-model="dialog" persistent width="auto">
        <template #activator="{ props }">
          <button
            class="px-6 py-2 text-green-100 rounded bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 flex flex-row gap-1 text-sm justify-center items-center shadow hover:shadow-md"
            v-bind="props"
          >
            <IconFilter class="text-white" :size="18" />
            Filter
          </button>
        </template>
        <v-card>
          <div class="flex flex-col bg-gradient-to-r from-teal-400 to-teal-100">
            <v-card-title class="text-h5"> What is Lorem Ipsum? </v-card-title>
            <v-card-text>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining <br />
                essentially unchanged.
              </p>
              <p>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                <br />
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="flex flex-row gap-2 justify-end w-full p-2">
                <button
                  class="group relative h-10 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
                  @click="dialog = false"
                >
                  <div
                    class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"
                  ></div>
                  <span class="relative text-black group-hover:text-white">Save</span>
                </button>
                <button
                  class="group relative h-10 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
                  @click="dialog = false"
                >
                  <div
                    class="absolute inset-0 w-3 bg-red-500 transition-all duration-[250ms] ease-out group-hover:w-full"
                  ></div>
                  <span class="relative text-black group-hover:text-white">Cancel</span>
                </button>
              </div>
            </v-card-actions>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

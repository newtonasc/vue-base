<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import type User from '@/models/Users';
import { getUserList } from '@/services/UserService';

let users = reactive({ data: [] as User[] });

onMounted(async () => {
  try {
    const { data } = await getUserList();
    users.data = data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="flex flex-row overflow-auto limited-height">
    <ul>
      <template v-for="user in users.data" :key="user.id">
        <li>{{ user.first_name }} {{ user.last_name }} ({{ user.email }})</li>
      </template>
    </ul>
  </div>
</template>

<style scoped>
.limited-height {
  height: calc(100vh - 240px);
}
</style>

<template>
  <q-page class="flex flex-center">
    <div>
      <ul>
        <li v-for="user in listUsers" :key="user.id">
          {{ user.name }} {{ user.surname }}
        </li>
      </ul>
    </div>
  </q-page>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const listUsers = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:7000/users");
    listUsers.value = response.data;
  } catch (err) {
    console.log(err);
  }
});
</script>

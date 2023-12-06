<script setup lang="ts">
import { RouterLink } from "vue-router";

const routes = ["Primary", "Buttons", "Dropdown", "Select", "TextField"];
</script>

<template>
  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
      <div class="flex justify-between mb-4">
        <div class="font-bold text-gray-900 dark:text-white">Torus UI</div>
      </div>
      <ul class="space-y-2 font-medium">
        <li v-for="route in routes">
          <RouterLink v-slot="{ isActive }" :to="{ name: route }">
            <div
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              :class="[isActive && 'text-white bg-app-primary-600 dark:bg-app-primary-600 hover:!bg-app-primary-700']"
            >
              {{ route }}
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>

  <div class="p-4 sm:ml-64">
    <router-view />
  </div>
</template>

<style scoped></style>

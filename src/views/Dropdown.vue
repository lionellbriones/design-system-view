<script setup lang="ts">
import { Dropdown } from "@toruslabs/vue-components";
import { ref } from "vue";
import { useSurface } from "../composables/surface";

const { surfaces, vSurface } = useSurface();

const selectedValue = ref("");
const items = [
  { name: "Lionell", value: "lionell" },
  { name: "Blu", value: "blu" },
  { name: "Owen", value: "owen" },
];
</script>

<template>
  <div class="grid grid-cols-4 border border-app-gray-300">
    <div v-for="(surface, index) in surfaces()" :class="[surface, 'p-3 space-y-2']" v-surface>
      <div class="dark:text-app-white font-bold text-lg">surface{{ index + 1 }} <span class="bgColor"></span></div>
      <Dropdown
        label="Dropdown"
        v-model="selectedValue"
        :classes="{ menuContainer: 'rounded-2xl' }"
        :buttonProps="{ pill: true, block: true }"
        :items="items"
      />
    </div>
  </div>
  <hr class="my-4" />
  <div class="grid grid-cols-4 border border-app-gray-300">
    <div v-for="(surface, index) in surfaces(true)" :class="[surface, 'p-3 space-y-2 dark']" v-surface>
      <div class="dark:text-app-white font-bold text-lg">surface{{ index + 1 }} <span class="bgColor"></span></div>
      <Dropdown
        label="Dropdown"
        v-model="selectedValue"
        :classes="{ menuContainer: 'rounded-2xl' }"
        :buttonProps="{ pill: true, block: true }"
        :items="items"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@toruslabs/vue-components";
import { useSurface } from "../composables/surface";

const { surfaces, vSurface } = useSurface();
</script>

<template>
  <div class="grid grid-cols-4 border border-app-gray-300">
    <div v-for="(surface, index) in surfaces()" :class="[surface, 'p-3 space-y-2']" v-surface>
      <div class="dark:text-app-white font-bold text-lg">surface{{ index + 1 }} <span class="bgColor"></span></div>
      <Button variant="primary" pill type="button">Primary</Button>
      <Button variant="primary" disabled pill type="button">Primary Disabled</Button>
      <Button variant="secondary" pill type="button">Secondary</Button>
      <Button variant="secondary" disabled pill type="button">Secondary Disabled</Button>
      <Button variant="tertiary" pill type="button">Tertiary</Button>
      <Button variant="tertiary" disabled pill type="button">Tertiary Disabled</Button>
      <Button variant="text" type="button">Text</Button>
      <Button variant="text" disabled type="button">Text Disabled</Button>
    </div>
  </div>
  <hr class="my-4" />
  <div class="grid grid-cols-4 border border-app-gray-300">
    <div v-for="(surface, index) in surfaces(true)" :class="[surface, 'p-3 space-y-2 dark']" v-surface>
      <div class="dark:text-app-white font-bold text-lg">surface{{ index + 1 }} <span class="bgColor"></span></div>
      <Button variant="primary" pill type="button">Primary</Button>
      <Button variant="primary" disabled pill type="button">Primary Disabled</Button>
      <Button variant="secondary" pill type="button">Secondary</Button>
      <Button variant="secondary" disabled pill type="button">Secondary Disabled</Button>
      <Button variant="tertiary" pill type="button">Tertiary</Button>
      <Button variant="tertiary" disabled pill type="button">Tertiary Disabled</Button>
      <Button variant="text" type="button">Text</Button>
      <Button variant="text" disabled type="button">Text Disabled</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, TextField } from "@toruslabs/vue-components";
import { ref } from "vue";
import Color from "color";

const primary = ref("#0346ff");
const oldGeneratedColors = ref<string[]>([]);
const newGeneratedColors = ref<string[]>([]);

function lightenColor(color: string, percent = 1) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const B = ((num >> 8) & 0x00ff) + amt;
  const G = (num & 0x0000ff) + amt;

  let finalR = 255;
  if (R < 255) finalR = R < 1 ? 0 : R;
  let finalB = 255;
  if (B < 255) finalB = B < 1 ? 0 : B;
  let finalG = 255;
  if (G < 255) finalG = G < 1 ? 0 : G;

  return `#${(0x1000000 + finalR * 0x10000 + finalB * 0x100 + finalG).toString(16).slice(1)}`;
}

function getColorsList(colorsAmount = 3, colorsShiftAmount = 50, mixColor = "black", rotate = 0, saturation = 20, mainColor = "#0346ff") {
  const colorsList = [];

  let step;
  for (step = 0; step < colorsAmount; step++) {
    colorsList.push(
      Color(mainColor)
        .rotate(((step + 1) / colorsAmount) * -rotate)
        .saturate(((step + 1) / colorsAmount) * (saturation / 100))
        .mix(Color(mixColor), ((colorsShiftAmount / 100) * (step + 1)) / colorsAmount)
        .hex()
    );
  }

  return colorsList;
}

function generateOld() {
  const themeValue = primary.value || "#0346ff";
  oldGeneratedColors.value = [];
  oldGeneratedColors.value.push(lightenColor(themeValue as string, -30));
  oldGeneratedColors.value.push(lightenColor(themeValue as string, -20));
  oldGeneratedColors.value.push(lightenColor(themeValue as string, -10));
  oldGeneratedColors.value.push(themeValue as string);
  oldGeneratedColors.value.push(lightenColor(themeValue as string, 15));
  oldGeneratedColors.value.push(lightenColor(themeValue as string, 30));
  oldGeneratedColors.value.push(lightenColor(themeValue as string, 45));
  oldGeneratedColors.value.push(lightenColor(themeValue as string, 60));
  oldGeneratedColors.value.push(lightenColor(themeValue as string, 80));
  oldGeneratedColors.value.push(lightenColor(themeValue as string, 90));
}
function generateNew() {
  const darkSet = getColorsList(3, 50, "black", 0, 20, primary.value);
  const lightSet = getColorsList(6, 85, "white", 0, 20, primary.value);
  newGeneratedColors.value = [...darkSet.reverse(), ...[primary.value], ...lightSet];
}

function generate() {
  generateOld();
  generateNew();
}

function apply(themeSet: string[]) {
  const rootElement = document.querySelector(":root") as HTMLElement;
  rootElement.style.setProperty(`--app-primary-900`, themeSet[0]);
  rootElement.style.setProperty(`--app-primary-800`, themeSet[1]);
  rootElement.style.setProperty(`--app-primary-700`, themeSet[2]);
  rootElement.style.setProperty(`--app-primary-600`, themeSet[3]);
  rootElement.style.setProperty(`--app-primary-500`, themeSet[4]);
  rootElement.style.setProperty(`--app-primary-400`, themeSet[5]);
  rootElement.style.setProperty(`--app-primary-300`, themeSet[6]);
  rootElement.style.setProperty(`--app-primary-200`, themeSet[7]);
  rootElement.style.setProperty(`--app-primary-100`, themeSet[8]);
  rootElement.style.setProperty(`--app-primary-50`, themeSet[9]);
}
</script>

<template>
  <ul>
    <li>web3auth: #0346ff</li>
    <li>safe: #5DF0EB</li>
    <li>moca: #ffcf00</li>
  </ul>
  <div class="max-w-md space-y-4">
    <TextField v-model="primary" />
    <div class="flex gap-4 justify-end">
      <Button @on-click="generate">Generate</Button>
    </div>
  </div>
  <div class="max-w-md grid grid-cols-2 mt-4">
    <div>
      <div class="flex gap-2">
        <h2>Old</h2>
        <button class="text-blue-600" @click="apply(oldGeneratedColors)">Apply</button>
      </div>
      <div
        v-for="(color, index) in oldGeneratedColors"
        class="w-full p-4 text-center"
        :class="index > 2 ? 'text-black' : 'text-white'"
        :style="{ background: color }"
      >
        {{ 900 - index * 100 }}: {{ color }}{{ index === 3 ? "*" : "" }}
      </div>
    </div>
    <div>
      <div class="flex gap-2">
        <h2>New</h2>
        <button class="text-blue-600" @click="apply(newGeneratedColors)">Apply</button>
      </div>
      <div
        v-for="(color, index) in newGeneratedColors"
        class="w-full p-4 text-center"
        :class="index > 2 ? 'text-black' : 'text-white'"
        :style="{ background: color }"
      >
        {{ 900 - index * 100 }}: {{ color }}{{ index === 3 ? "*" : "" }}
      </div>
    </div>
  </div>
</template>

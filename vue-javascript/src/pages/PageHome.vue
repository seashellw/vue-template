<script setup>
import AppButton from "@/components/public/AppButton.vue";
import { useAppState } from "./app-state";

const appState = useAppState();
const { increment } = appState;
console.log(appState.count);
</script>

<template>
  <div>
    <AppButton @click="increment">{{ appState.count }}</AppButton>
  </div>
</template>

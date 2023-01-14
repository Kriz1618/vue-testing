<template>
  <h2>Counter: {{ counterStore.count }}</h2>
  <button id="add" @click="counterStore.handleAdd">+1</button>
  <button id="dis" @click="counterStore.handleDis">-1</button>
</template>

<script>
import { counterStore } from '../store/counterStore';

export default {
  setup() {
    return { counterStore };
  }
}
</script>


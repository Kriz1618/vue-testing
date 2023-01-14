<template>
  <h2>Counter: {{ count }}</h2>
  <button id="add" @click="updateCount(1)">+1</button>
  <button class="dis" @click="updateCount(-1)">-1</button>
</template>

<script>

export default {
  data: () => ({
    msg: 'Counter',
    count: 0
  }),
  methods: {
    updateCount(qty) {
      this.count += qty;
    }
  }
}
</script>


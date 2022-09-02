<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { RouterView } from "vue-router";

defineComponent({
  components: {
    RouterView,
  },
});
</script>

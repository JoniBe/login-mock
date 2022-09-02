<template>
  <div class="flex flex-row">
      <input id="checkbox" type="checkbox" class="custom-checkbox" />
      <label for="checkbox" class="custom-checkbox-label text-white">{{ label }}</label>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, defineProps } from "@vue/runtime-core";

defineComponent({
  name: "CustomCheckbox",
});

defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.custom-checkbox {
  margin: 5px 5px 5px 5px;
  height: 15px;
  width: 15px;
  vertical-align: middle;
}

.custom-checkbox-label {
    font-size: 0.813;
}
</style>

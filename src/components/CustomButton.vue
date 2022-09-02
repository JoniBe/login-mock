<template>
  <button type="button" @click="onClickHandler" class="custom-button">
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "@vue/runtime-core";

defineComponent({
  name: "CustomButton",
});

defineProps({
  label: {
    type: String,
    default: "Accept",
  },
});

const emits = defineEmits(["click"]);

const onClickHandler = () => {
  emits("click");
};
</script>

<style scoped>
.custom-button {
  font-size: 16px;
  color: #555555;
  line-height: 1.2;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 120px;
  height: 50px;
  border-radius: 25px;
  background: #9152f8;
  background: -webkit-linear-gradient(bottom, #7579ff, #b224ef);
  background: -o-linear-gradient(bottom, #7579ff, #b224ef);
  background: -moz-linear-gradient(bottom, #7579ff, #b224ef);
  background: linear-gradient(bottom, #7579ff, #b224ef);
  position: relative;
  z-index: 1;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.custom-button:before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background-color: #fff;
  top: 0;
  left: 0;
  opacity: 1;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.custom-button:hover {
  color: #fff;
}

.custom-button:hover:before {
  opacity: .15;
}
</style>

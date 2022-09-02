<template>
  <div class="login-form-container">
    <div class="flex flex-col my-auto">
      <div class="logo">
        <img :src="imgLogo" class="h-40 w-auto mx-auto" />
      </div>

      <div class="text-white text-center text-3xl">
        <h2>LOG IN</h2>
      </div>

      <div class="py-2">
        <CustomInput v-model="model.username" label="Username" />
      </div>

      <div class="py-2">
        <CustomInput
          type="password"
          v-model="model.password"
          label="Password"
        />
      </div>

      <div class="py-2">
        <CustomCheckbox label="Remember me" />
      </div>

      <div class="py-2 mx-auto">
        <CustomButton @click="onLoginHandler" label="Login" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  defineComponent,
  defineProps,
  defineEmits,
  ref,
  watch,
} from "@vue/runtime-core";

import imgLogo from "/src/assets/imgs/mock-logo.png";

import CustomButton from "/src/components/CustomButton.vue";
import CustomInput from "/src/components/CustomInput.vue";
import CustomCheckbox from "/src/components/CustomCheckbox.vue";

defineComponent({
  name: "LoginForm",
  components: {
    CustomButton,
    CustomInput,
    CustomCheckbox,
  },
});

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
      username: "",
      password: "",
    }),
  },
});

const emits = defineEmits(["on-login"]);

const model = ref({
  username: "",
  password: "",
});

watch(props, (value) => {
  if (value.modelValue) model.value.password = "";
  model.value.username = "";
});

const onLoginHandler = () => {
  const dto = {
    ...model.value,
  };

  emits("on-login", dto);
};
</script>

<style scoped>
.login-form-container {
  width: 500px;
  border-radius: 10px;
  overflow: hidden;
  padding: 55px 55px 37px 55px;
  background: #9152f8;
  background: -webkit-linear-gradient(top, #7579ff, #b224ef);
  background: -o-linear-gradient(top, #7579ff, #b224ef);
  background: -moz-linear-gradient(top, #7579ff, #b224ef);
  background: linear-gradient(top, #7579ff, #b224ef);
}
</style>

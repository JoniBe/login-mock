<template>
  <div class="login-page h-screen w-screen">
    <LoginForm @on-login="onLoginHandler" v-model="model" />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "@vue/runtime-core";

import LoginForm from "./components/LoginForm.vue";

defineComponent({
  name: "LoginView",
  components: {
    LoginForm,
  },
});

const model = ref({
  username: '',
  password: ''
})

const onLoginHandler = async (data: { username: string; password: string }) => {
  if (data.username && data.password) {
    const {username, password} = data;

    const response = await fetch("src/assets/data/users.json");

    const { users } = await response.json();

    const exist = users.find(
      (u: any) => u.username == username.toLowerCase() && u.password == password
    );

    if (exist) {
      alert("You have successfully logged into the application!");
      model.value = {
        username: '',
        password: ''
      }
    } else {
      alert("Please, verify username and/or password!")
    }
  } else {
    alert("Please, fill out all the fields!");
  }
};
</script>

<style scoped>
.login-page {
  background-image: url("src/assets/imgs/bg-01.jpg");
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;
}

.login-page:after {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>

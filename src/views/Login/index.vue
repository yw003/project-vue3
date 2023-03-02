<template>
  <div class="login">
    <Header title="登录" />
    <div class="img">爱购</div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="user"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="pass"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
        <van-button
          round
          block
          type="primary"
          native-type="submit"
          class="register"
          @click="goRegister"
        >
          去注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
import { Toast } from "vant";
export default {
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    const data = reactive({
      username: "",
      password: "",
    });
    const onSubmit = (val) => {
      console.log(localStorage.userInfo);
      if (!localStorage.userInfo) {
        Toast("账号未注册！");
        return;
      } else {
        let userInfo = JSON.parse(localStorage.userInfo);
        if (userInfo["user"] === val["user"]) {
          if (userInfo["pass"] === val["pass"]) {
            Toast("登陆成功");
            localStorage.setItem("isLogin", "login");
            router.push("/");
          } else {
            Toast.fail("密码错误");
          }
        } else {
          Toast.fail("账号不存在");
        }
      }
    };
    const goRegister = () => {
      router.push({
        path: "register",
      });
    };
    return {
      ...toRefs(data),
      onSubmit,
      goRegister,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
  }
}
</style>

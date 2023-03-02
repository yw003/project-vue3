<template>
  <div class="userinfo">
    <Header title="账号管理" />
    <van-cell-group inset>
      <van-field v-model="user" label="昵称" placeholder="请输入昵称" />
      <van-field
        v-model="sign"
        label="个性签名"
        placeholder="个性签名"
        disabled
      />
      <van-field v-model="pass" label="密码" placeholder="请输入密码" />
    </van-cell-group>
    <van-button class="save-btn" round block type="primary" @click="save"
      >保存</van-button
    >
    <van-button class="save-btn" round block type="success" @click="loginOut"
      >退出登录</van-button
    >
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { reactive, toRefs } from "vue";
import { Toast } from "vant";
import { useRouter } from "vue-router";
export default {
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    const data = reactive({
      user: "",
      sign: "加油",
      pass: "dasdasda",
    });
    const save = () => {
      if (data.user && data.pass) {
        let userInfo = JSON.parse(localStorage.userInfo);
        let newUserInfo = {
          user: data.user || userInfo.user,
          pass: data.pass || userInfo.pass,
        };
        localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
        Toast("修改成功");
        router.push("/");
      } else {
        Toast("请输入内容");
      }
    };
    const loginOut = () => {
      localStorage.removeItem("isLogin");
      router.push("/my");
      Toast("退出成功");
    };
    return {
      ...toRefs(data),
      save,
      loginOut,
    };
  },
};
</script>

<style lang="scss" scoped>
.userinfo {
  .save-btn {
    width: 80%;
    margin: 20px auto;
  }
}
</style>

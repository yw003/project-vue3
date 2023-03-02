<template>
  <div class="footer">
    <router-link to="/">
      <i class="iconfont">&#xe64f;</i>
      <span>首页</span>
    </router-link>
    <router-link to="/cart">
      <i class="iconfont">&#xe640;</i>
      <span>购物车</span>
    </router-link>
    <router-link to="/order">
      <i class="iconfont">&#xe601;</i>
      <span>订单</span>
    </router-link>
    <router-link to="/my">
      <i class="iconfont">&#xe600;</i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "Footer"
}
</script>

<style lang="scss">
.footer {
  width: 100%;
  // border: 1px solid;
  height: 40px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i{
      font-size: 24px;
    }
    span {
      font-size: 12px;
    }
  }
  a.router-link-active {
    color: red;
  }
}
</style>
<template>
  <div class="content-item">
    <div class="left">
      <img src="" alt />
      <div class="text">
        <div class="title">{{}}</div>
        <van-stepper min v-model="num" @change="" />
      </div>
    </div>
    <div class="price">￥{{}}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { setup } from "mockjs";
export default {
  setup(props) {
    const num = ref(0);
    return { num };
  },
};
</script>

<style lang="scss">
.content-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .price {
    font-size: 16px;
    font-weight: 600;
    margin-right: 10px;
  }
  .left {
    display: flex;
    align-items: center;
    flex: 1;
    img {
      margin-left: 10px;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      border-radius: 10px;
    }
    .text {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;
      position: relative;
      flex: 1;
      .title {
        font-size: 14px;
      }
      .van-icon {
        color: red;
        font-size: 20px;
        position: absolute;
        right: 4px;
        bottom: 4px;
      }
    }
  }
}
</style>

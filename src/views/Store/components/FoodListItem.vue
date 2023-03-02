<template>
  <div class="content-item">
    <div class="left">
      <img :src="item.pic" alt />
      <div class="text">
        <div class="title">{{ item.title }}</div>
        <van-stepper min v-model="item.num" @change="changeNum(item)" />
      </div>
    </div>
    <div class="price">￥{{ item.price }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    item: {
      type: Object,
    },
  },
  setup(props) {
    let store = useStore();
    const value = ref(0);
    const changeNum = (a) => {
      store.commit("addCart", JSON.parse(JSON.stringify(a)));
    };
    return { value, changeNum };
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

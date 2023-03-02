<template>
  <div class="storeDetails">
    <Header title="店铺" />
    <div class="content">
      <div class="img"></div>
      <div class="foodSort">
        <div class="name">
          {{ title }}
          <img :src="url" alt class="store-img" />
        </div>
        <van-tabs color="#ffc400">
          <van-tab
            v-for="(item, index) in storeData"
            :title="item.name"
            :key="index"
          >
            <FoodList :foodData="item.data" :index="index" />
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon
        icon="cart-o"
        text="购物车"
        :badge="num"
        @click="goCart"
      />
      <!-- <van-action-bar-button type="warning" text="加入购物车" @click="addCart" /> -->
      <van-action-bar-button type="danger" text="立即下单" @click="goBuy" />
    </van-action-bar>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import data1 from "@/mock/sort";
import FoodList from "./components/FoodLists.vue";
import { reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Toast } from "vant";
export default {
  components: {
    Header,
    FoodList,
  },
  setup() {
    let store = useStore();
    let $router = useRouter();
    const data = reactive({
      title: "鱼拿酸菜鱼",
      url: " https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
      storeData: data1.storeData,
    });
    // 购物车数量
    let num = computed(() => {
      return store.state.cartList.length;
    });
    //跳转购物车
    const goCart = () => {
      if (store.state.cartList.length == 0) {
        // Toast('提示内容');
        Toast("请先选择商品");
      } else {
        $router.push({
          path: "cart",
        });
      }
    };
    // 下单
    const goBuy = () => {
      if (store.state.cartList.length == 0) {
        // Toast('提示内容');
        Toast("请先选择商品");
      } else {
        $router.push({
          path: "createOrder",
        });
        console.log("buy");
      }
     
    };
    return {
      ...toRefs(data),
      num,
      goCart,
      goBuy,
    };
  },
};
</script>

<style lang="scss">
.storeDetails {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
    .img {
      background: url("../../assets/yuna.jpg") no-repeat center/cover;
      width: 100%;
      height: 150px;
    }
    .foodSort {
      // height: 500px;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;
      .sort {
        margin-top: 10px;
      }
      .name {
        display: flex;
        padding: 20px;
        font-size: 16px;
        justify-content: space-between;
        .store-img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>

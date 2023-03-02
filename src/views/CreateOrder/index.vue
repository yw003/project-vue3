<template>
  <div class="order">
    <Header title="生成订单" />
    <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
    <div class="content">
      <div v-for="(item, index) in store.state.orderList" :key="index">
        <van-card
          :num="item.num"
          :price="item.price"
          :title="item.title"
          :thumb="item.pic"
        />
      </div>
    </div>
    <div class="pay-wrap">
      <div class="price">
        <span>商品金额</span>
        <span>￥{{ totalPrice }} </span>
      </div>
      <van-button type="danger" class="pay-btn" @click="handleOrder"
        >生成订单</van-button
      >
    </div>
  </div>
</template>

<script>
import { Header } from "@/components/Header.vue";
import { reactive, toRefs, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { Dialog } from "vant";
export default {
  components: {
    Header,
  },
  setup() {
    let data = reactive({
      tel: "11111",
      name: "as",
      totalPrice: 0,
    });
    let store = useStore();
    let router = useRouter();
    let route = useRoute();
    //点击编辑地址
    const onEdit = () => {
      router.push({
        path:'address'
      })
    };
    // 计算总金额
    const initPrice = () => {
      let price = 0;
      if (store.state.orderList.length) {
        store.state.orderList.forEach((item) => {
          price += item.num * item.price;
        });
      }
      data.totalPrice = price;
    };
    // 生成订单
    const handleOrder = () => {
      Dialog({
        title: "提示",
        message: "生成订单成功。",
      }).then(() => {
        // on close
        // console.log(route.query);
        let newList = store.state.cartList.filter((item) => {
          return !route.query.list.includes(item.id + "");
        });
        store.commit("delete", newList);
        store.commit("orderListF");
        // return;
        router.push({
          path: "order",
        });
      });
    };
    onMounted(() => {
      initPrice();
    });
    return {
      ...toRefs(data),
      store,
      onEdit,
      handleOrder,
    };
  },
};
</script>

<style lang="scss">
.order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .pay-wrap {
    padding: 10px 0;
    width: 100%;
    height: 124px;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    text-align: center;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    > .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 5%;
      // margin: 10px 0;
      font-size: 14px;
      border-bottom: 1px solid #e9e9e9;
      margin-bottom: 10px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>

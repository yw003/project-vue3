<template>
  <div class="order">
    <Header title="订单" />
    <van-tabs color="#ffc400">
      <van-tab v-for="(item, index) in navList" :title="item" :key="index">
        <div v-for="(i, n) in store.state.orderListFin" :key="n">
          <div v-if="store.state.orderListFin.length && item == '全部'">
            <van-card
              :num="i.num"
              :price="i.price"
              :title="i.title"
              :thumb="i.pic"
            />
          </div>
          <div v-else>
            <Empty />
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Empty from "@/components/Empty.vue";
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Header,
    Empty,
  },
  setup() {
    const store = useStore();
    const data = reactive({
      navList: ["全部", "交易完成", "待付款", "代发货", "已发货"],
    });
    return {
      ...toRefs(data),
      store,
    };
  },
};
</script>

<style></style>

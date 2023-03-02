<template>
  <div class="cart">
    <Header title="购物车" :edit="true" />
    <Empty v-if="num == 0" />
    <CartDetail v-else/>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { onMounted } from "vue";
import { reactive } from "vue";
import Empty from "@/components/Empty.vue";
import Header from "@/components/Header.vue";
import CartDetail from "./components/CartDetail.vue";
export default {
  components: { Empty, Header, CartDetail },
  setup() {
    let store = useStore();
    let list = reactive({})
    let num = computed(() => {
      return store.state.cartList.length;
    });
    const init = () => {
      list = store.state.cartList
      // console.log(list);
    };
    //
    onMounted(() => {
      init();
    });
    return { num,list };
  },
};
</script>

<style lang="scss"></style>

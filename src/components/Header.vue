<template>
  <div class="header">
    <van-icon
      name="arrow-left"
      size="20"
      @click="
        () => {
          $router.go(-1);
        }
      "
    />
    <span>{{ title }}</span>
    <div style="width: 10px; height: 10px" v-if="!edit"></div>
    <div class="edit" v-if="edit" @click="hangdleEdit">
      {{ store.state.showEdit ? "编辑" : "完成" }}
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { Toast } from "vant";
export default {
  props: ["title", "edit"],
  setup() {
    const store = useStore();
    const hangdleEdit = () => {
      if (store.state.cartList.length) {
        store.commit("editChange");
        store.commit("changeDelete");
      } else {
        Toast.fail("请添加商品到购物车");
      }
    };
    return {
      hangdleEdit,
      store,
    };
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  line-height: 40px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  background-color: #fff;
  font-weight: 600;
  border-bottom: 1px solid #dad8d4;
  > span {
    font-size: 18px;
  }
  .edit {
    font-size: 16px;
  }
}
</style>

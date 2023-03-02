<template>
  <div>
    <Header title="地址管理" />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { reactive, toRefs, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: {
    Header,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    //新增地址
    const onAdd = () => {
      router.push({
        path: "addressEdit",
        query: {
          type: "add",
        },
      });
    };
    const onEdit = (item) => {
      router.push({
        path: "addressEdit",
        query: {
          id: item.id,
          type: "edit",
        },
      });
    };
    let data = reactive({
      list: [],
      chosenAddressId:1001 
    });
    const init = () => {
      data.list = store.state.userAddress.map((item) => {
        return {
          id: item.id,
          name: item.name,
          tel: item.tel,
          address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
          isDefault: item.isDefault,
        };
      });
    };
    onMounted(() => {
      init();
    });
    return {
      ...toRefs(data),
      onAdd,
      onEdit,
    };
  },
};
</script>

<style lang="scss" scoped>
// ::v-deep .van-button--danger {
//   background-color: #ffc400;
//   border-color: #ffc400;
// }
// ::v-deep .van-switch--on {
//   background-color: #ffc400;
// }
// ::v-deep .van-radio__icon {
//   display: none;
// }
</style>

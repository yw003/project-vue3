<template>
  <div>
    <Header :title="address" />
    <van-address-edit
      :area-list="areaList"
      :address-info="{
        name: '11',
        tel: '111',
        addressDetail: '11',
        areaCode:'110201'
      }"
      show-delete
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { reactive, toRefs, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  components: {
    Header,
  },
  setup() {
    let data = reactive({
      areaList: {
        province_list: {
          110000: "广东省",
          120000: "浙江省",
        },
        city_list: {
          110100: "广州市",
          110200: "深圳市",
          120100: "杭州市",
          120200: "宁波市",
        },
        county_list: {
          110101: "天河区",
          110102: "海珠区",
          110201: "南山区",
          120102: "上城区",
          130102: "下城区",
        },
      },
      addressInfo: {},
    });
    const store = useStore();
    const route = useRoute();
    //保存地址
    const onSave = (content) => {
      console.log(content);
    };
    const onDelete = () => {};
    const init = () => {
      store.state.userAddress.forEach((item) => {
        if (item.id === Number(route.query.id)) {
          data.addressInfo = item;
          console.log(item);
        }
        // console.log(data.addressInfo);
      });
    };
    //
    const address = computed(() => {
      return route.query.type == "add" ? "新增地址" : "地址编辑";
    });
    onMounted(() => {
      init();
    });
    return {
      ...toRefs(data),
      address,
      onSave,
      onDelete,
    };
  },
};
</script>

<style></style>

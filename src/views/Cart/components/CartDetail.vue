<template>
  <div class="cartDetil">
    <div class="content-item">
      <van-checkbox-group v-model="checked" @change="selectOne">
        <div
          class="left"
          v-for="(item, index) in store.state.cartList"
          :key="index"
        >
          <van-checkbox :name="item.id" v-model="item.add"></van-checkbox>
          <img :src="item.pic" alt />
          <div class="text">
            <div class="title">{{ item.title }}</div>
            <van-stepper min v-model="item.num" @change="changeNum(item)" />
          </div>
          <div class="price">￥{{ item.price }}</div>
        </div>
      </van-checkbox-group>
      <!-- 提交订单 -->
      <van-submit-bar
        :price="allPrice"
        button-text="结算"
        @submit="onSubmit"
        class="submit-all"
        v-if="store.state.isDelete"
      >
        <van-checkbox v-model="allChecked" @click="choseAll" class="allSelect"
          >全选</van-checkbox
        >
        <!-- <template #tip>
          你的收货地址不支持配送, <span @click="onClickLink">修改地址</span>
        </template> -->
      </van-submit-bar>
      <!--  -->
      <div class="buy" v-else>
        <div class="left1">
          <van-checkbox v-model="allChecked" @click="choseAll" class="allSelect"
            >全选</van-checkbox
          >
        </div>
        <div class="delete" @click="handleDelete">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Toast } from "vant";
export default {
  setup(props) {
    let store = useStore();
    let router = useRouter();
    let data = reactive({
      checked: [],
      num: 0,
      allChecked: true,
    });
    //
    // 增减商品数量
    const changeNum = (prpo) => {
      // console.log(prpo.num);
    };
    // 单选
    const selectOne = (params) => {
      if (params.length === store.state.cartList.length) {
        data.allChecked = true;
      } else {
        data.allChecked = false;
      }
      data.checked = params;
    };
    // 第一次进入页面全选
    const init = () => {
      data.checked = store.state.cartList.map((item) => item.id);
    };
    // 点击结算按钮
    const onSubmit = () => {
      if (data.checked.length) {
        store.commit("pay", updateData());
        router.push({
          path: "createOrder",
          query: { list: data.checked },
        });
      } else {
        Toast.fail("请选择要结算的商品！");
      }
    };
    const onClickLink = () => Toast("修改地址");
    onMounted(() => {
      init();
    });
    //全选
    const choseAll = () => {
      if (data.checked.length !== store.state.cartList.length) {
        init();
      } else {
        data.checked = [];
      }
    };
    // 计算总金额
    const allPrice = computed(() => {
      let countList = updateData();
      let count = 0;
      countList.forEach((a) => {
        count += a.num * a.price;
      });
      return count * 100;
    });
    const updateData = (type) => {
      return store.state.cartList.filter((item) => {
        return type === "delete"
          ? !data.checked.includes(item.id)
          : data.checked.includes(item.id);
      });
    };
    // 点击删除商品
    const handleDelete = () => {
      if (data.checked.length) {
        store.commit("delete", updateData("delete"));
        data.checked = [];
        if (!store.state.cartList.length) {
          store.commit("editChange", "delete");
        }
      } else {
      }
    };
    return {
      init,
      store,
      allPrice,
      changeNum,
      selectOne,
      ...toRefs(data),
      onSubmit,
      onClickLink,
      choseAll,
      handleDelete,
    };
  },
};
</script>

<style lang="scss" scoped>
.cartDetil {
  .content-item {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 10px;
    margin: 20px 20px;
    padding: 10px 0;
    .submit-all {
      position: fixed;
      bottom: 40px;
      .allSelect {
        position: absolute;
        left: 20px;
      }
    }
    .buy {
      position: fixed;
      bottom: 40px;
      right: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      background-color: #fff;
      border-radius: 10px;
      height: 50px;
      align-items: center;
      padding: 0 16px;
      box-sizing: border-box;
      .left1 {
        display: flex;
        // align-items: center;
      }
      .delete {
        color: #fff;
        background-color: red;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 600;
        width: 110px;
        height: 40px;
        text-align: center;
        line-height: 40px;
      }
    }
    .price {
      font-size: 16px;
      font-weight: 600;
      margin-right: 10px;
    }
    .left {
      display: flex;
      align-items: center;
      flex: 1;
      margin-bottom: 10px;
      margin-left: 10px;
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
          margin-bottom: 10px;
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
}
</style>

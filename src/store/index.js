import { createStore } from "vuex";
import createPersistedstate from 'vuex-persistedstate'

export default createStore({
  namespaced: true,
  state: {
    cartList: [],
    isDelete: true,
    showEdit: true,
    orderList: [],
    userAddress: [
      {
        id: 1001,
        name: 'jason',
        tel: '15874859686',
        province: '广东省',
        city: '深圳市',
        county: '南山区',
        addressDetail: '深圳湾',
        isDefault: true,
        areaCode: '110101',
      },
      {
        id: 1002,
        name: 'allen',
        tel: '15874859685',
        province: '湖北省',
        city: '武汉市',
        county: '武昌区',
        addressDetail: '黄鹤楼',
        isDefault: false,
        areaCode: '110101',
      },
    ], //收件人地址
    orderListFin: []
  },
  getters: {},
  mutations: {
    // 加入购物车
    addCart(state, value) {
      // console.log(value);
      if (state.cartList.length == 0) {
        state.cartList.push(value)
      } else {
        state.cartList = state.cartList?.map((item) => {
          // console.log(item);
          if (item.id == value.id) {
            item = value
          }
          return item
        })
      }
      let newArr = state.cartList.find((item) => {
        if (item.id == value.id) {
          return item
        }
      })
      // console.log(newArr);
      if (newArr === undefined) {
        state.cartList.push(value)
      }
      state.cartList = state.cartList.filter((item) => {
        return item.num != 0
      })
      // console.log(JSON.parse(JSON.stringify(state.cartList)));
    },
    //
    changeDelete(state, val) {
      state.isDelete = !state.isDelete
    },
    //购物车生成订单时，剩余未选中的商品
    delete(state, val) {
      state.cartList = val
    },
    editChange(state, val) {
      if (val) {
        state.showEdit = true
      } else {
        state.showEdit = !state.showEdit
      }
    },
    // 结算生成的订单
    pay(state, val) {
      state.orderList = val
      console.log(state.orderList);
    },
    // 多个订单拼接
    orderListF(state, val) {
      state.orderListFin = state.orderListFin.concat(state.orderList)
    }
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedstate()
  ]
});

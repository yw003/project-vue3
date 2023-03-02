import { createStore } from "vuex";
import createPersistedstate from 'vuex-persistedstate'
import mutations  from "./mutations";
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
        areaCode: '110201',
      },
      {
        id: 1002,
        name: 'allen',
        tel: '15874859685',
        province: '浙江省',
        city: '杭州市',
        county: '上城区',
        addressDetail: 'dsada',
        isDefault: false,
        areaCode: '120102',
      },
    ], //收件人地址
    orderListFin: []
  },
  getters: {},
  mutations,
  actions: {},
  modules: {},
  plugins: [
    // createPersistedstate()
  ]
});

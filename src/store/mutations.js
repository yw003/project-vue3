import { ADDCART } from './mutation-types'
export default {
    // 加入购物车
    [ADDCART](state, value) {
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
    },
    //新增地址
    addAddress(state, value) {
        state.userAddress.map((item) => {
            if (value.isDefault) {
                item.isDefault = false
            }
        })
        state.userAddress.push(value)
    },
    //编辑地址
    editAddress(state, val) {
        state.userAddress = state.userAddress.map(item => {
            if (val.isDefault) {
                item.isDefault = false
            }
            return item.id === val.id ? val : item
        })
    },
    deleteAddress(state, value) {
        state.userAddress = state.userAddress.filter((item) => {
            return !(item.id === value.id)
        })
        if (value.isDefault) {
            state.userAddress[0].isDefault = true
        }
    }
}
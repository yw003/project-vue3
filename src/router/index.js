import { createRouter, createWebHistory } from "vue-router";
import { Toast } from "vant";
// import HomeView from "../views/HomeView.vue";
import Home from '../views/Home/Home.vue'
import CreateOrder from '../views/CreateOrder/index.vue'
import Cart from '../views/Cart/Cart.vue'
import My from '../views/My/My.vue'
import Store from '../views/Store/index.vue'
import Order from '../views/Order/order.vue'
import Address from '../views/Address/index.vue'
import AddressEdit from '../views/AddressEdit/index.vue'
import userInfoEdit from '../views/userInfoEdit/index.vue'
import Login from '../views/Login/index.vue'
import Register from '../views/Register/index.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      TabbarShow: true // 不需要显示 底部导航
    }
  },
  {
    path: "/createOrder",
    name: "createOrder",
    component: CreateOrder,
    meta: {
      // TabbarShow: true 
      ifAuth: true
    }
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    meta: {
      TabbarShow: true,
      ifAuth: true
    }
  },
  {
    path: "/my",
    name: "my",
    component: My,
    meta: {
      TabbarShow: true,
      ifAuth: true
    }
  },
  {
    path: '/store',
    name: 'store',
    component: Store,
    meta: {
      TabbarShow: false
    }
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    meta: {
      TabbarShow: true,
      ifAuth: true
    }
  },
  {
    path: '/address',
    name: 'address',
    component: Address,
    meta: {
      TabbarShow: false,
      ifAuth: true
    }
  },
  {
    path: '/addressEdit',
    name: 'addressEdit',
    component: AddressEdit,
    meta: {
      TabbarShow: false,
      ifAuth: true
    }
  },
  {
    path: '/userInfoEdit',
    name: 'userInfoEdit',
    component: userInfoEdit,
    meta: {
      TabbarShow: false,
      ifAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      TabbarShow: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      TabbarShow: false
    }
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.ifAuth) {
    if (localStorage.isLogin === 'login') {
      next()
    } else {
      next('/login')
      Toast('请先去登录')
    }
  }else{
    next()
  }
})

export default router;

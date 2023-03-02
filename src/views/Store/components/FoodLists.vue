<template>
  <div class="food" v-if="index ===0">
    <van-tree-select
      v-model:main-active-index="activeIndex"
      height="88vw"
      :items="items"
      @click-nav="navClick"
    >
      <template #content>
        <div v-for="(item,index) in subItem" class="item-bg" :key="index">
          <FoodListItem :item="item" />
        </div>
      </template>
    </van-tree-select>
  </div>
  <div v-else>{{ foodData.content }}</div>
</template>

<script>
import { toRefs, reactive } from 'vue';
import FoodListItem from './FoodListItem.vue'
import { useStore } from 'vuex';
export default {
  components: {
    FoodListItem
  },
  props: ['index', 'foodData'],
  setup(props) {
    let store = useStore()
    let data = reactive({
      activeIndex: 0,
      items: [],
      subItem: []
    })
    //初始化数据
    const initData = () => {
      let newData = [];
      props.foodData?.items?.forEach((item, index) => {
        newData.push({
          text: item.text
        })
        if (data.activeIndex === index) {
          data.subItem = item.children
        }
      })
      data.items = newData
    }
    initData()
    const navClick = (i) => {
      data.activeIndex = i
      initData()
    }
    return {
      ...toRefs(data),
      navClick
    }
  }
}
</script>

<style lang="scss">
.food-list {
  margin-top: 20px;
  .item-bg {
    padding: 10px;
  }
}
::v-deep .van-tree-select__item--active {
  color: #ffc400;
}
::v-deep .van-sidebar-item--select::before {
  background-color: #ffc400;
}
</style>
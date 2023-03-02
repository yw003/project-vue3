<template>
  <div class="navList">
    <div class="item" v-for="(item,index) in navList" :key="index" @click="toStore">
      <img :src="item.pic" alt />
      <div class="text">
        <p>{{item.title }}</p>
        <p>{{item.sales }}</p>
        <p>起送费 ￥{{item.price }} 免配送费</p>
        <p>
          <span v-for="(pro,num) in item.label" :key="num">{{ pro }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  props: ['navList'],
  setup() {
    const router = useRouter()
    const toStore = () => {
      router.push({
        name: 'store'
      })
    }
    return {
      toStore
    }
  }
}
</script>

<style lang="scss">
.navList {
  margin-top: 20px;
  .item {
    margin-bottom: 20px;
    display: flex;
    background-color: #fff;
    padding: 10px 10px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 10px;
    }
    .text {
      margin-left: 20px;
      p:nth-child(1) {
        font-size: 16px;
      }
      p:nth-child(4) {
        > span {
          margin-right: 10px;
          width: 50px;
          line-height: 20px;
          display: inline-block;
          background-color: hsl(54, 73%, 75%);
          text-align: center;
        }
      }
      p {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
<template>
  <div class="home">
    <div class="content">
      <!-- 头部 -->
      <div class="header">
        <div class="text">aigou</div>
        <div class="public">
          <van-icon name="friends-o" size="20" />
          <span>登录</span>
        </div>
      </div>
      <!-- 主要内容 -->
      <div class="main">
        <div class="main-bg">
          <div class="search">
            <input type="text" />
            <span>搜索</span>
          </div>
          <div class="sort">
            <div class="big-sort">
              <div v-for="(item,index) in big_sort" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`" />
                </svg>
                <span>{{ item.name }}</span>
              </div>
            </div>
            <div class="small-sort">
              <div v-for="(item,index) in small_sort" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`" />
                </svg>
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <van-tabs v-model:active="active" class="van-tabs">
          <van-tab v-for="(item,index) in centent_nav_list" :key="index" :title="item.tab">
            <NaveList :navList="item.data" />
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>

import { reactive, toRefs, ref } from 'vue';
import sortData from '../../mock/sort.js'
import NaveList from './components/NavList.vue'
export default {
  components: {
    NaveList
  },
  setup() {
    let data = reactive(sortData)
    const active = ref(0)
    return {
      ...toRefs(data),
      active
    }
  }
}

</script>

<style lang="scss" scoped>
.goods-head {
  width: 100%;
  height: 200px;
  border: 1px solid;
}
.home {
  .content {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 20px 40px 20px;
      background-image: linear-gradient(#ffc400, #fff);
      .text {
        font-size: 18px;
        font-weight: 600;
      }
      .public {
        span {
          margin-left: 5px;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
    .main {
      margin-top: -30px;
      .main-bg {
        background-image: linear-gradient(#fff, #f5f5f5);
        padding: 10px 20px 0px 20px;
        border-radius: 30px 30px 0 0;
        .search {
          position: relative;
          input {
            width: 100%;
            border: 1px solid #ffc400;
            border-radius: 30px;
            height: 30px;
            padding: 0 30px 0 20px;
            box-sizing: border-box;
          }
          > span {
            position: absolute;
            right: -5px;
            top: 1px;
            background-color: #ffc400;
            border-radius: 20px;
            width: 50px;
            line-height: 30px;
            font-size: 18px;
            text-align: center;
          }
        }
        .sort {
          padding: 20px 0;
          .big-sort {
            display: flex;
            > div {
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              .icon {
                width: 50px;
                height: 50px;
                margin-bottom: 8px;
              }
            }
          }
          .small-sort {
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
            > div {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 20%;
              .icon {
                width: 30px;
                height: 30px;
                margin-bottom: 8px;
              }
            }
          }
        }
      }
      .van-tabs {
        padding: 0 20px 10px;
      }
    }
  }
}
::v-deep .van-tabs__wrap {
  border-radius: 10px;
}
</style>
import Mock from 'mockjs'
//import data from './data.json'
import homeApi from './mockData/homeApi'
Mock.mock('/home/data',homeApi.getHomeData)

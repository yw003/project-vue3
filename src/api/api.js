import axios from './request'
//首页数据列表接口
export const getApiHomeData = (param) => {
    return axios.request({
        url: '/home/data',
        method: 'get',
        data: param
    })
} 

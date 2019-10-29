
import{
  getMultiData
} from '../../service/home.js'
Page({
  data:{
    banners:[],
    recommends:[]

  },
  onLoad: function (options){
    getMultiData().then(
      (res)=>{
        console.log(res)
        const banners=res.data.data.banner.list;
        const recommends=res.data.data.recommend.list;
        console.log(banners)
        console.log(recommends)
        this.setData({
          banners,
          recommends
        })
      }
    )
  }

  
})
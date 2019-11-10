
import{
  getMultiData,
  getGoodsData
} from '../../service/home.js'
Page({
  data:{
    banners:[],
    recommends:[],
    titles: ['流行', '新款', '精选'],
    goods:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell: {page:0,list:[]}
    }
  },
  onLoad: function (options){
    //请求轮播图以及推荐数据
    this._getMultidata()
    //请求商品数据
    this._getGoodsData('sell')

  },
  //------------网络请求函数-------------------
  _getMultidata(){
    getMultiData().then(
      (res) => {
        console.log(res)
        const banners = res.data.data.banner.list;
        const recommends = res.data.data.recommend.list;
        console.log(banners)
        console.log(recommends)
        this.setData({
          banners,
          recommends
        })
      }
    )
  },
  _getGoodsData(type){
    //1.获取页码
    const page =this.data.goods[type].page+1;
    //2.发送网络请求
    getGoodsData(type,page).then(res=>{
      console.log(res)
      const list=res.data.data.list;
      //es6...语法
      const oldList=this.data.goods[type].list;
      oldList.push(...list)
      //将数据设置到data中的goods中
      const typeKey = `good.${type}.list`;
      const pageKey = `good.${type}.page`;
      this.setData({
        [typeKey]:oldList,
        [pageKey]:9
      })

    })
  },
    //------------事件监听函数-------------------
  handleTabClick(event){
    const index =event.detail.index;
    console.log(index)
  }

})
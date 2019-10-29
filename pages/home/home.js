<<<<<<< HEAD

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

  
=======
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
>>>>>>> 6065e5c5dc0cce77ad6fcb75b9f0f5634271c092
})
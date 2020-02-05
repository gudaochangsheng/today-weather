// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:["河北省","衡水市","桃城区"],
    now:"衡水市"
  },

  changeRegion:function(e){
    this.setData({
      region:e.detail.value
    })
    this.getWeather();//更新天气
  },

  getWeather:function(){
    var that=this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location:that.data.region[1],
        key:'2df0b00b583d4b3f8ed4b48687981e04'
      },
      success:function(res){
        // console.log(res.data)
        that.setData({
          now: res.data.HeWeather6[0].now
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
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
})
// pages/flashCard/flashCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardFace: "什么是行内元素？"
  },

  /**点击‘上一张’按钮 */
  previousCard: function(){
    this.setData({
      cardFace: "什么是块级元素？"
    });
  },

  /**点击‘翻转’按钮触发翻转卡片事件 */
  flipCard: function(){
    this.setData({
      cardFace: "不知道"
    });
  },

  /**点击‘下一张’按钮 */
  nextCard: function(){
    this.setData({
      cardFace: "什么是设计模式？"
    });
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
})
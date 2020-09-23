// pages/flashCard/flashCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardFace: '',
    cardBack: '',
    animationMain: null, //正面
    animationBack: [], //背面
    dataList: [],
    id: 0
  },

  rotateFn(e) {
    var id = e.currentTarget.dataset.id
    this.animation_main = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear'
    })
    this.animation_back = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear'
    })
    // 点击正面

    if (id == 1) {
      this.animation_main.rotateY(180).step()
      this.animation_back.rotateY(0).step()
      this.setData({
        animationMain: this.animation_main.export(),
        animationBack: this.animation_back.export(),
      })
    }
    // 点击背面
    else {
      this.animation_main.rotateY(0).step()
      this.animation_back.rotateY(-180).step()
      this.setData({
        animationMain: this.animation_main.export(),
        animationBack: this.animation_back.export(),
      })
    }
  },

  /**点击‘上一张’按钮 */
  previousCard: function () {
    if(this.data.id == 0){
      wx.showToast({
        title: '已经是第一张了~',
        icon: 'none'
      });
      return
    }
    var me = this;
    var index = me.data.id - 1;
    this.setData({
      cardFace: me.data.dataList[index].question,
      cardBack: me.data.dataList[index].answer.replace(/\$/g, '\n'),
      id: index
    });

  },

  /**点击‘下一张’按钮 */
  nextCard: function () {
    if(this.data.id == this.data.dataList.length-1){
      wx.showToast({
        title: '已经是最后一张了~',
        icon: 'none'
      });
      return
    }
    var me = this;
    var index = me.data.id + 1;
    this.setData({
      cardFace: me.data.dataList[index].question,
      cardBack: me.data.dataList[index].answer.replace(/\$/g, '\n'),
      id: index
    });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.cloud.callFunction({
      name: 'getTestCard'
    }).then(res=>{
      const dataList = res.result.data;
      that.setData({
        cardFace: dataList[0].question,
        cardBack: dataList[0].answer.replace(/\$/g, '\n'),
        dataList: dataList,
      });
    })
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
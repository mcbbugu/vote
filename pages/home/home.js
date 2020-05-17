// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    voteList: [{
      "image": "../../images/voteList.jpg",
      "title": "今天去哪里吃饭今天去哪里吃饭今天去哪里吃饭",
      "peopelNum": 3
    },
    {
      "image": "../../images/voteList.jpg",
      "title": "今天去哪里吃饭",
      "peopelNum": 3
    },
    {
      "image": "../../images/voteList.jpg",
      "title": "今天去哪里吃饭",
      "peopelNum": 3
    }
      , {
      "image": "../../images/voteList.jpg",
      "title": "今天去哪里吃饭",
      "peopelNum": 3
    },
    {
      "image": "../../images/voteList.jpg",
      "title": "今天去哪里吃饭今天去哪里吃饭今天去哪里吃饭",
      "peopelNum": 3
    }],
    nav: [{ index: 0, name: "热门投票" }, { index: 1, name: "我发起的" }, { index: 2, name: "我关注的" }],
    index: 0 //导航下标
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
    setTimeout(res => {
      this.setData({
        isLoading: false
      })
    }, 1000)
  },

  clickBtn(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      index: index
    })
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
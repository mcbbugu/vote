// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    whichBtn: 1,
    voteList:[{
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
      }]
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

  // 按钮切换 start
  clickLaunch(){
    this.setData({
      whichBtn: 1
    })
  },
  clickFollow() {
    this.setData({
      whichBtn: 2
    })
  },
  // 按钮切换 end

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
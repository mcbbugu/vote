// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    nav: [{ index: 0, name: "热门投票" }, { index: 1, name: "我发起的" }, { index: 2, name: "我关注的" }],
    index: 0, //导航下标
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData();
  },

  loadData(){
    this.setData({
      voteList: [{
        "image": "https://cdn.dribbble.com/users/722246/screenshots/10679571/media/685720351a2b2378e6257bb4ddb4cb0e.jpg",
        "title": "今天去哪",
        "peopelNum": 3
      },
      {
        "image": "https://cdn.dribbble.com/users/1787323/screenshots/11427608/media/8fda96ec0ca9b0477fbd612f709e5c37.png",
        "title": "今天去哪里吃饭",
        "peopelNum": 3
      },
      {
        "image": "https://cdn.dribbble.com/users/1787323/screenshots/11397135/media/dc4a0d66338b878728b8211cc2023398.png",
        "title": "今天去哪里吃饭",
        "peopelNum": 3
      }
        , {
        "image": "https://cdn.dribbble.com/users/1787323/screenshots/11365170/media/e6c6ad993c83c7b66770d49b41c47856.png",
        "title": "今天去哪里吃饭",
        "peopelNum": 3
      },
      {
        "image": "https://cdn.dribbble.com/users/1787323/screenshots/11115035/media/acd6ef3bfd4fd4d9a38d2ee945d3bce8.png",
        "title": "今天去哪里吃",
        "peopelNum": 3
      }],
      avatorImageList: ["https://cdn.dribbble.com/users/1787323/screenshots/11115035/media/acd6ef3bfd4fd4d9a38d2ee945d3bce8.png","https://cdn.dribbble.com/users/722246/screenshots/10679571/media/685720351a2b2378e6257bb4ddb4cb0e.jpg",
    "https://cdn.dribbble.com/users/1787323/screenshots/11365170/media/e6c6ad993c83c7b66770d49b41c47856.png",
    "https://cdn.dribbble.com/users/1787323/screenshots/11427608/media/8fda96ec0ca9b0477fbd612f709e5c37.png",
        "https://cdn.dribbble.com/users/1787323/screenshots/11115035/media/acd6ef3bfd4fd4d9a38d2ee945d3bce8.png"
      ]
    })
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
    this.setData({
      voteList: this.data.voteList.concat({
        "image": "https://cdn.dribbble.com/users/722246/screenshots/10679571/media/685720351a2b2378e6257bb4ddb4cb0e.jpg",
        "title": "今天去哪里吃饭今天去哪",
        "peopelNum": 3
      }, {
          "image": "https://cdn.dribbble.com/users/722246/screenshots/10679571/media/685720351a2b2378e6257bb4ddb4cb0e.jpg",
          "title": "今天去哪里吃饭今天去哪里",
          "peopelNum": 3
        }, {
          "image": "https://cdn.dribbble.com/users/1787323/screenshots/11115035/media/acd6ef3bfd4fd4d9a38d2ee945d3bce8.png",
          "title": "今天去哪里吃饭今天去哪里吃饭今天去哪里吃饭",
          "peopelNum": 3
        }, {
          "image": "https://cdn.dribbble.com/users/1787323/screenshots/11365170/media/e6c6ad993c83c7b66770d49b41c47856.png",
          "title": "今天去哪里吃饭",
          "peopelNum": 3
        },
        {
          "image": "https://cdn.dribbble.com/users/1787323/screenshots/11115035/media/acd6ef3bfd4fd4d9a38d2ee945d3bce8.png",
          "title": "今天去哪里吃饭今天去哪里吃饭今天去哪里吃饭",
          "peopelNum": 3
        })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
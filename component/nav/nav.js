// component/nav/nav.js
Component({

  options: {
    multipleSlots: true
  },

  properties: {

  },

  ready() {
    let {
      statusBarHeight,
      navBarHeight
    } = app.globalData;

    this.setData({
      statusBarHeight,
      navBarHeight
    })
  },

  methods: {
    back() {
      wx.navigateBack({
        delta: 1
      })
    }
  }
})

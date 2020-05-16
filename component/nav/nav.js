// component/nav/nav.js
const app = getApp()
Component({
  options: {
    multipleSlots: true
  },

  properties: {
    title: {
      type: String,
      value: ''
    },
    bgColor: {
      type: String,
      value: ""
    },
    hastop: {
      type: Boolean,
      value: false
    }
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

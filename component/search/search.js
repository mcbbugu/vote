// component/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputFocus: false,
    input: "",
    recordList: [
      {
        "index": 0,
        "content": "吃饭",
      }, {
        "index": 0,
        "content": "去西湖玩儿",
      }, {
        "index": 0,
        "content": "吃饭",
      }
    ],
    historyList: [{
        "index": 0,
        "content": "我",
      }, {
        "index": 0,
        "content": "杭州",
      },
      {
        "index": 0,
        "content": "吃喝",
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputFocus(e) {
      this.setData({
        inputFocus: true
      })
    },

    inputBlur(){
      this.setData({
        inputFocus: false
      })
    },

    clickRecord(e){
      let record = e.currentTarget.dataset.record;
      this.setData({
        input: record
      })
    }
  }
})
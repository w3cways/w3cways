
const app = getApp();
let GlobalData = app.globalData
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    position: Object
  },




  attached: function () {
    let safeArea = GlobalData.systemInfo.safeArea || null;
    if (safeArea) {
      this.setData({
        safeArea
      });
    }
  },
  detached: function () {
    // 在组件实例被从页面节点树移除时执行

  },
  ready: function () {

  },

  pageLifetimes: {
    show: function () {
      let safeArea = this.data.safeArea || null;
      this.setData({
        position: null
      });
      try {
        let position = wx.getStorageSync('chengchema')
        if (!position) {
          position = {
            left: (safeArea.width - 50 - 10) + "px",
            top: parseInt(safeArea.height / 2 + 100) + "px"
          }
        }
        this.setData({
          position,
          isShow: true
        });

      } catch (e) {
        // Do something when catch error
      }
    },
    hide: function () {
      // 页面被隐藏
      this.setData({
        position: null,
        isShow: false
      })
    },
    resize: function (size) {
      // 页面尺寸变化
    }
  },

  data: {
    safeArea: null
  },

  /**
   * 组件的方法列表
   */

  methods: {
    setPosition(position) {
      wx.setStorage({
        key: "chengchema",
        data: position
      })
    }
  }
})

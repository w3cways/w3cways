App({
  onLaunch: function () {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
       
        that.globalData.systemInfo = res
      }
    })
  },
  globalData: {
    systemInfo:null
  }
})

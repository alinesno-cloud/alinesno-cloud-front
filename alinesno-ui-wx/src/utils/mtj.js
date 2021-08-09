//设置上级缓存
const showMethod = function (event, methodName) {
  var mtj = new Mtj();
  var g = getCurrentPages().pop();
  var app = getApp();
  var t = this;
  t.setData({
    cdn: app.globalData.cdn,
  });
  var ep9 = '/' + g.route + '?';
  for (var k in g.options) {
    ep9 = ep9 + k + '=' + g.options[k] + '&';
  }
  var current_url = ep9.substr(0, ep9.length - 1);
  console.log("当前URL：" + current_url);

  if (!mtj.is_empty(g.options.pid)) {
    var pid = parseInt(g.options.pid);
    if (pid > 0) {
      wx.setStorageSync('pid', pid);
      console.log('pid设置pid：' + pid);
    }
  }
  if (!mtj.is_empty(g.options.scene)) {
    var scene = g.options.scene;
    var arr = scene.split("_");
    var pid = parseInt(arr[1]);
    if (arr[0] == 'pid' && pid > 0) {
      wx.setStorageSync("pid", pid);
      console.log('scene设置pid：' + pid);
    }

  }




}


//加载多媒体
const loadVedio = function (event, methodName) {
  var app = getApp();

  app.globalData.innerAudioContext = wx.createInnerAudioContext();
  app.globalData.innerAudioContext.onPlay((res) => {
    console.log('开始播放')
    app.globalData.play_status = true;
    app.globalData.play_status_callback(app.globalData.play_status);

  })
  app.globalData.innerAudioContext.onWaiting((res) => {
    console.log('加载中');
    app.globalData.play_status = true;
    app.globalData.play_status_callback(app.globalData.play_status);


  });
  app.globalData.innerAudioContext.onPause((res) => {

    app.globalData.play_status = false;
    app.globalData.play_status_callback(app.globalData.play_status);


  })
  app.globalData.innerAudioContext.onEnded(() => {
    console.log('播放结束');
    app.globalData.play_status = false;
    app.globalData.play_status_callback(app.globalData.play_status);


  })
  app.globalData.innerAudioContext.onTimeUpdate(() => {
    console.log('进度');
    wx.hideLoading();
    // console.log('进度更新了总进度为：' + innerAudioContext.duration + '当前进度为：' + innerAudioContext.currentTime);
    app.globalData.play_status = true;
    app.globalData.play_status_callback(app.globalData.play_status);


  });
  console.log(app.globalData.innerAudioContext);
  // app.globalData.innerAudioContext = innerAudioContext;


  const recorderManager = wx.getRecorderManager();
  recorderManager.onStart(() => {
    console.log('recorder start');
  })
  recorderManager.onPause(() => {
    console.log('recorder pause');
  })
  recorderManager.onStop((res) => {
    console.log('recorder stop', res)
    if (res.fileSize > 0) {
      console.log(res);
      wx.showLoading({
        title: '上传中',
        mask: true
      });
      wx.uploadFile({
        url: app.globalData.url + 'api/Upload/index',
        filePath: res.tempFilePath,
        name: 'file',
        formData: {
          'fileSize': res.fileSize,
          'duration': res.duration,
          'type': 'audio'
        },
        success(res) {
          console.log(res);
          wx.hideLoading();
          var data = JSON.parse(res.data);
          if (data.status == '0') {
            wx.showModal({
              title: '提示',
              content: data.info,
              showCancel: false
            })

          } else {
            app.globalData.recorder_callback(data.data);

          }

        }
      })
    }

  })
  recorderManager.onFrameRecorded((res) => {
    const {
      frameBuffer
    } = res
    console.log('frameBuffer.byteLength', frameBuffer.byteLength)
  });
  app.globalData.recorderManager = recorderManager;
}



class Mtj {
  constructor() {

  }
  is_empty(a) {
    if (typeof (a) == 'undefined' || a == undefined || a == "" || a == null) {
      return true;
    } else {
      return false;
    }
  }

  get_time() {
    return (Date.parse(new Date())) / 1000;
  }


}


const proxy = (obj, methodName, custom) => {
  if (obj[methodName]) {
    let method = obj[methodName]
    obj[methodName] = function (event) {
      custom.call(this, event, methodName)
      method.call(this, event)
    }
  } else {
    obj[methodName] = function (event) {
      custom.call(this, event, methodName)
    }
  }
}

let _Page = Page
let _App = App
Page = obj => {
  proxy(obj, 'onLoad', loadVedio);
  proxy(obj, 'onLoad', showMethod);
  _Page(obj)
}
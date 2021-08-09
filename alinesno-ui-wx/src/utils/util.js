var app = getApp();
const url = app.globalData.url;


//是否存在
function isNotEmpty(val) {
  if (typeof (val) == 'undefined') {
    return false;
  }
  if (val != '' && val != null && val != undefined)
    return true;
  else
    return false;
}

function isEmpty(val) {
  return !isNotEmpty(val);
}



/**
 * post_data 请求数据
 * method： 请求类型
 * onSuccess 返回数据
 */
function ajax(post_data) {
  var type = typeof (post_data);
  if (type == 'object') {
    var success = arguments[1] ? arguments[1] : null;
    var error = arguments[2] ? arguments[2] : null;
    var is_asynch = arguments[3] ? arguments[3] : false;
    var no_show_load = arguments[4] ? arguments[4] : false;
    _ajax(post_data, success, error, is_asynch);
  } else if (type == 'string') {
	 //例子：/api/user/get_info
    var data = arguments[1] ? arguments[1] : {};
    var arr = post_data.split("/");
    data.m = arr[1];
    data.c = arr[2];
    data.a = arr[3];
    var success = arguments[2] ? arguments[2] : null;
    var error = arguments[3] ? arguments[3] : null;
    var is_asynch = arguments[4] ? arguments[4] : false;
    var no_show_load = arguments[5] ? arguments[5] : false;
    _ajax(data, success, error, is_asynch,no_show_load);
  }
}

function _ajax(post_data) {
  var is_asynch = arguments[3] ? arguments[3] : false;
  var no_show_load = arguments[4] ? arguments[4] : false;
  if (app.globalData.is_load == 0 && is_asynch == false) {
    console.log('请勿频繁请求');
    return false;
  }
  if (is_asynch == false) {
    app.globalData.is_load = 0;
  }
  !no_show_load && wx.showLoading({
    title: '加载中',
    mask: true
  });
  var success = arguments[1] ? arguments[1] : null;
  var error = arguments[2] ? arguments[2] : null;
  post_data.token = wx.getStorageSync('token');

  console.log(post_data);
  wx.request({
    url: url + "/" + post_data.m + "/" + post_data.c + "/" + post_data.a,
    data: post_data,
    method: 'POST',
    header: {
      'Accept-Language': 'zh-CN,zh'
     },
    fail: function (res) {
      app.globalData.is_load = 1;
      wx.hideLoading();
      wx.showToast({
        title: '请求失败',
        image: '../../images/info.png',
        duration: 2000
      })
    },
    success: function (res) {
      wx.hideLoading();
      app.globalData.is_load = 1;
      var data = res.data;
      if (data.status == '-1') {

        wx.showModal({
          title: '提示',
          content: '该功能需要登录，是否前往登录',
          success(res) {
            if (res.confirm) {
              to_login();
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })


      } else if (data.status == '-3') {
        to_login();
      } else if (data.status == '-2') {
        wx.navigateTo({
          url: '/pages/shop/login/login',
        })
      } else if (data.status == '0') {
        if (isNotEmpty(data.info) == true) {
          wx.showToast({
            title: data.info,
            icon: 'none',
            duration: 3000,
            mask: true,
            complete: function () {
              (error && typeof (error) == "function") && setTimeout(function () {
                error(data);
              }, 3000);

              if (isNotEmpty(data.url) == true) {
                setTimeout(function () {

                  wx.navigateTo({
                    url: data.url
                  })
                }, 3000)
              }

            }
          })
        } else {

          (error && typeof (error) == "function") && error(data);
          if (isNotEmpty(data.url) == true) {

            wx.navigateTo({
              url: data.url
            })
          }
        }
      } else if (data.status == '1') {


        if (isNotEmpty(data.info) == true) {
          wx.showToast({
            title: data.info,
            duration: 2000,
            mask: true,
            complete: function () {
              (success && typeof (success) == "function") && setTimeout(function () {
                success(data);
              }, 2000);

              if (isNotEmpty(data.url) == true) {
                setTimeout(function () {

                  wx.navigateTo({
                    url: data.url
                  })
                }, 2000)
              }


            }
          })
        } else {

          (success && typeof (success) == "function") && success(data);
          if (isNotEmpty(data.url) == true) {

            wx.navigateTo({
              url: data.url
            })

          }
        }


      }
    }
  })

}

/**
 * title 提示的内容
 * mask  是否显示透明蒙层，防止触摸穿透
 * duration 提示的延迟时间
 * icon  图标
 * image
 **/
//显示信息
function showToast(title = "", duration = "2000", mask = true, icon = "none", image = "") {
  wx.showToast({
    title: title,
    icon: icon,
    mask: mask,
    duration: duration,
    image: image
  });
}

//显示信息
function show_msg(msg) {
  wx.showToast({
    title: msg,
    icon: 'none',
    mask: true,
    duration: 2000
  });
}
//================


//跳转到登录页面
function to_login() {
  var current_url = get_current_url();
  wx.setStorageSync('to_url', current_url);
  wx.redirectTo({
    url: "/pages/login/login"
  });
  return false;
}



//获取当前url
function get_current_url() {
  var ep = getCurrentPages().pop();
  var ep9 = '/' + ep.route + '?';
  for (var k in ep.options) {
    ep9 = ep9 + k + '=' + ep.options[k] + '&';
  }
  return ep9.substr(0, ep9.length - 1);
}

function share() {
  var ep = getCurrentPages().pop();
  var uinfo = wx.getStorageSync('uinfo');
  var pid = isNotEmpty(uinfo.id) ? uinfo.id : '';


  var ep9 = '/' + ep.route + '?pid=' + pid + "&";
  for (var k in ep.options) {
    if (k != 'pid') {
      ep9 = ep9 + k + '=' + ep.options[k] + '&';
    }
  }
  var url = ep9.substr(0, ep9.length - 1);
  console.log("分享链接：" + url);
  //imageUrl title
  return {
    path: url
  }
}



function alert(json) {
  var title = isNotEmpty(json.title) ? json.title : '提示';
  var content = isNotEmpty(json.content) ? json.content : '';
  var success = isNotEmpty(json.success) ? json.success : null;
  var cancel = isNotEmpty(json.cancel) ? json.cancel : null;
  var showCancel = isNotEmpty(json.showCancel) ? json.showCancel : false;
  wx.showModal({
    title: title,
    content: content,
    showCancel: showCancel,
    success(res) {
      if (res.confirm) {
        (success && typeof (success) == "function") && success();
      } else if (res.cancel) {
        (cancel && typeof (cancel) == "function") && cancel();
      }
    }
  })
}

//支付功能
function pay(ordernum) {
  ajax({
    m: 'MallApi',
    c: 'OrderCreate',
    a: 'pay',
    ordernum: ordernum,
  }, function (res) {
    wx.requestPayment({
      'timeStamp': res.data.parameters.timeStamp,
      'nonceStr': res.data.parameters.nonceStr,
      'package': res.data.parameters.package,
      'signType': 'MD5',
      'paySign': res.data.parameters.paySign,
      'success': function (res) {
        wx.showToast({
          title: '付款成功',
          duration: 2000,
          mask: true,
          complete: function () {
            setTimeout(function () {
              wx.redirectTo({
                url: '/pages/goods/order/order',
              })
            }, 2000);
          }
        })
      },
      'fail': function (res) {
        show_msg('支付取消');
      },
      'complete': function (res) {}
    })

  }, function (res) {

    wx.redirectTo({
      url: '/pages/goods/order/order',
    })
  });
}

function toNum(str) {
  if (typeof (str) != 'number') {
    str = parseFloat(str);
  }
  if (isNaN(str)) {
    str = 0;
  }


  return parseFloat(str.toFixed(2));

}

//上传图片
function upload_img(callback) {
  var count = arguments[1] ? arguments[1] : 1;
  wx.chooseImage({
    count: count,
    sizeType: ['compressed'],
    sourceType: ['album', 'camera'],
    success: function (res) {
      wx.showLoading({
        title: '加载中',
      });
      var tempFilePaths = res.tempFilePaths
      var post_data = {};
      post_data.m = 'home';
      post_data.c = 'ajax';
      post_data.a = 'upload_images';
      console.log(tempFilePaths);
      for (var i in tempFilePaths) {
        var file = tempFilePaths[i];
        wx.uploadFile({
          url: url + '/index.php/' + post_data.m + '/' + post_data.c + '/' + post_data.a,
          filePath: file,
          name: 'file',
          formData: post_data,
          success: function (res) {
            console.log(res);
            var data = JSON.parse(res.data);
            wx.hideLoading();
            if (data.status == '0') {
              wx.showToast({
                title: '上传失败',
                icon: 'none',
                duration: 2000
              });
              return false;
            } else {
              callback && callback(data.data);
            }
          },
          fail: function (e) {
            console.log(e);
          },
        })
      }

    }
  })

}

//上传文件
function upload_file(callback) {
  var count = arguments[1] ? arguments[1] : 1;
  wx.chooseMessageFile({
    count: count,
    type: 'file',
    extension:['doc', 'docx', 'ppt', 'pptx', 'xls','xlsc','pdf','txt'],
    success(res) {
      wx.showLoading({
        title: '加载中',
      });
      console.log(res.tempFiles);
      var post_data = {
        token: wx.getStorageSync('token'),
        m: 'home',
        c: 'ajax',
        a: 'upload_images',
        type: 'file'
      };
      console.log(res);
      for (var i in res.tempFiles) {
        var tempFilePaths = res.tempFiles[i].path;
        wx.uploadFile({
          url: url + '/' + post_data.m + '/' + post_data.c + '/' + post_data.a ,
          filePath: tempFilePaths,
          name: 'file',
          formData: post_data,
          success(res) {
            console.log(res);
            var data = JSON.parse(res.data);
            wx.hideLoading();
            if (data.status == '0') {
              wx.showToast({
                title: data.info,
                icon: 'none',
                duration: 2000
              });
              return false;
            } else {
              callback && callback(data.data);
            }

          }
        })

      }



    }
  })


}
//显示文件
function show_file (file) {
  var index1 = file.lastIndexOf(".");
  var index2 = file.length;
  var type = file.substring(index1+1, index2);
  wx.downloadFile({
    url: file,
    success: function (res) {
      const filePath = res.tempFilePath
      wx.openDocument({
        filePath: filePath,
        fileType: type,
        success: function (res) {
          console.log('打开文档成功')
        },
        complete: function () {

        },
        fail:function(e){
          console.log(e);
        },
      })
    }
  })

}


module.exports = {
  ajax: ajax,
  toNum:toNum,
  showToast: showToast,
  to_login: to_login,
  isNotEmpty: isNotEmpty,
  isEmpty: isEmpty,
  get_current_url: get_current_url,
  show_msg: show_msg,
  pay: pay,
  share: share,
  alert: alert,
  upload_img: upload_img,
  upload_file: upload_file,
  show_file:show_file
}
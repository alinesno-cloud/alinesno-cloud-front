 module.exports = {
  // 请求域名 格式：正式域名
	// HTTP_REQUEST_URL:'http://111.59.6.110:8082',
	// 请求域名 格式： https://您的域名 测试
	HTTP_REQUEST_URL:'http://luqiao-gateway.lbxinhu.linesno.com',
  // Socket链接 暂不做配置
  WSS_SERVER_URL:'wss://111.59.6.110:8082/wss',
  // 请求头
  HEADER:{
    'Content-Type': 'application/json'
  },
  // Socket调试模式
  SERVER_DEBUG: true,
  // 心跳间隔
  PINGINTERVAL:3000,

  // 回话密钥名称 请勿修改此配置
  TOKENNAME: 'X-AUTH-TOKEN',
}
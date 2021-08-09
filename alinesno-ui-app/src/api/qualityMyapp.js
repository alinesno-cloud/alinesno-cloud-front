import request from '@/utils/request.js'


/**
 * 获取预警信息1
 */
export function getYujinmsg(data){
  return request.get("/api/security/quality/warnInfo", data, { noAuth: true });
}


/**
 * 获取代办任务
 */
export function getDaiban(){
  return request.get(uni.getStorageSync('systemType')==1 ? "/api/security/myApplication/upComingTask" : "/api/security/quality/upComingTask", {}, { noAuth: true });
}

/**
 * 获取最新动态1
 */
export function getZuixinDt(data){
  return request.get("/api/security/quality/latestNews", data);
}

/**
 * 获取最新消息--检查数据1
 */
export function getZuixinJc(data){
  return request.get("/api/security/quality/newCheckMessage", data);
}

/**
 * 获取最新消息--问题整改1
 */
export function getZuixinYhzg(data){
  return request.get("/api/security/quality/newCorrectMessage", data);
}

/**
 * 获取最新消息--质量验收1
 */
export function getZuixinCqwzg(data){
  return request.get("/api/security/quality/newAcceptMessage", data);
}

/**
 * 获取最新消息--复查未通过
 */
export function getZuixinFcwtg(data){
  return request.get("/api/security/myApplication/newReviewFailMessage", data);
}
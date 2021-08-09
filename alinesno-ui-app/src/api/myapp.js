import request from '@/utils/request.js'


/**
 * 获取预警信息
 */
export function getYujinmsg(data){
  return request.get("/api/security/myApplication/warnInfo", data, { noAuth: true });
}


/**
 * 获取代办任务
 */
export function getDaiban(){
  return request.get(uni.getStorageSync('systemType')==1 ? "/api/security/myApplication/upComingTask" : "/api/security/quality/upComingTask", {}, { noAuth: true });
}

/**
 * 获取最新消息--检查数据
 */
export function getZuixinJc(data){
  return request.get("/api/security/myApplication/newCheckMessage", data);
}

/**
 * 获取最新消息--隐患整改
 */
export function getZuixinYhzg(data){
  return request.get("/api/security/myApplication/newCorrectMessage", data);
}

/**
 * 获取最新消息--超期
 */
export function getZuixinCqwzg(data){
  return request.get("/api/security/myApplication/newDelayCorrectMessage", data);
}

/**
 * 获取最新消息--复查未通过
 */
export function getZuixinFcwtg(data){
  return request.get("/api/security/myApplication/newReviewFailMessage", data);
}
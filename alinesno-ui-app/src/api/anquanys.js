import request from '@/utils/request.js'


/**
 * 安全验收统计信息
 */
export function anquanIndex(data){
  return request.get("/api/security/AcceptanceRequest/statistics", data);
}


/**
 * 我的工作
 */
export function myWork(data){
  return request.get("/api/security/AcceptanceRequest/statistics", data);
}

/**
 * 验收记录
 */
export function myYanshouSq(data){
  return request.get("/api/security/AcceptanceRequest/acceptanceRecordList", data);
}


/**
 * 验收详情
 */
export function myYsDetail(data){
  return request.get("/api/security/AcceptanceRequest/acceptanceDetail", data);
}





/**
 * 设备验收记录
 */
export function getSbList(data){
  return request.get("/api/security/AcceptanceRequest/acceptDeviceRecords", data);
}





/**
 * 查询设备
 */
export function searchSb(data){
  return request.get("/api/security/AcceptanceRequest/getDevice", data);
}


/**
 * 设备验收详情
 */
export function getSbDetail(data){
  return request.get("/api/security/AcceptanceRequest/getDeviceDetail", data);
}

/**
 * 设备详情--删除图片
 */
export function delectImg(data){
  return request.post("/api/security/AcceptanceRequest/delPic", data);
}


/**
 * 设备详情--添加图片
 */
export function addImg(data){
  return request.post("/api/security/AcceptanceRequest/addPic", data);
}


/**
 * 获取验收的类型
 */
export function getYsType(data){
  return request.get("/api/security/AcceptanceType/getAcceptType", data);
}


/**
 * 获取验收的内容
 */
export function getYsMain(data){
  return request.get("/api/security/AcceptanceType/acceptanceContent", data);
}


/**
 * 我的申请
 */
export function getMySq(data){
  return request.get("/api/security/AcceptanceRequest/myApply", data);
}


/**
 * 我的验收
 */
export function getMyysList(data){
  return request.get("/api/security/AcceptanceRequest/myAcceptance", data);
}


/**
 * 进行验收
 */
export function upYanshouRw(data){
  return request.post("/api/security/AcceptanceRequest/acceptance", data);
}



/**
 * 申请验收
 */
export function uploadYanshou(data){
  return request.post("/api/security/AcceptanceRequest/applyAcceptance", data);
}



/**
 * 指派任务 
 */
export function zhipaiYs(data){
  return request.post("/api/security/AcceptanceRequest/assignAcceptance", data);
}



/**
 * 抄送消息
 */
export function getYscs(data){
  return request.get("/api/security/AcceptanceRequest/copyMessageRecords", data);
}
import request from '@/utils/request.js'

/**
 * 16.1 危险作业首页
 */
export function getDangerWorkInfo(){
  return request.get("/api/security/DangerWork/getInfo",);
}

/**
 * 16.2 作业申请
 */
export function addDangerWork(data){
  return request.post("/api/security/DangerWork/addDangerWork", data);
}

/**
 * 16.3 作业列表
 */
export function getDangerWorkList(data){
  return request.get("/api/security/DangerWork/getDangerWorkList", data);
}


/**
 * 16.4 作业列表--详情
 */
export function getDangerWorkDetail(data){
  return request.get("/api/security/DangerWork/getDangerWorkDetail", data);
}


/**
 * 16.5 提交作业条件验收
 */
export function addDangerWorkYs(data){
  return request.post("/api/security/DangerWork/addDangerWorkAcceptance", data);
}

/**
 * 16.6 取危险作业类别检查列表
 */
export function getDangerWorkType(data){
  return request.get("/api/security/DangerWork/getAcceptanceChecksList", data);
}

/**
 *  16.7 检查任务列表
 */
export function getDangerWorkCheckList(data){
  return request.get("/api/security/DangerWork/getCheckTaskList", data);
}


/**
 *  16.8.1 检查任务详情-基本信息
 */
export function getDwCheckDetailJc(data){
  return request.get("/api/security/DangerWork/getCheckTaskBaseDetail", data);
}

/**
 *  16.8.2 检查任务详情-危险因素
 */
export function getDwCheckDetailWxys(data){
  return request.get("/11", data);
}

/**
 *  16.8.3 检查任务详情-检查记录
 */
export function getDwCheckDetailJcjl(data){
  return request.get("/111", data);
}

/**
 *  16.9 待验收-详情-指派任务
 */
export function getDwAssignTask(data){
  return request.post("/api/security/DangerWork/assignTask", data);
}


/**
 * 16.10 抄送消息
 */
export function getDangerWorkCsList(data){
  return request.get("/api/security/DangerWork/getMyMessage", data);
}


/**
 * 16.11  危险作业类别检查
 */
export function getDangerWorkTypeList(data){
  return request.get("/api/security/DangerWorkTypeChecks/getSelectData", data);
}


/**
 * 16.12  危险作业列表
 */
export function getDangerWorkLists(data){
  return request.get("/api/security/DangerWorkType/getSelectData");
}


/**
 * 16.11 获取作业使用的设备列表
 */
export function getSheibeiList(data){
  return request.get("/api/security/DangerWork/getDeviceList");
}
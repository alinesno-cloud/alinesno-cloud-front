import request from '@/utils/request.js'

/**
 * 6.0 风险管控-首页
 */
export function getInfo(){
  return request.get("/api/security/RiskSourcesMonitor/getInfo");
}

/**
 * 6.1发起风险源监管列表
 */
export function getRiskSourceMonitorList(data){
  return request.get("/api/security/RiskSourcesMonitor/getRiskSourceMonitorList", data);
}

/**
 * 6.1.1 添加风险源监管
 */
export function addRiskSourceTask(data){
  return request.post("/api/security/RiskSourcesMonitor/addRiskSourceTask", data);
}

/**
 * 6.1.2发起风险源监管-详情
 */
export function getRiskSourceMonitorDetail(id){
  return request.get("/api/security/RiskSourcesMonitor/getRiskSourceMonitorDetail", {id:id});
}

/**
 * 6.2 风险源清单查询
 */
export function getRiskSourceInfo(data){
  return request.get("/api/security/RiskSourcesMonitor/getRiskSourceInfo", data);
}

/**
 * 6.3 风险源清单查询-详情
 */
export function getRiskSourceDetail(id){
  return request.get("/api/security/RiskSourcesMonitor/getRiskSourceDetail", {riskSourceId:id});
}

/**
 * 6.4 风险源清单详情-保存实际通过时间
 */
export function saveRiskSourcePassTime(data){
  return request.post("/api/security/RiskSourcesMonitor/saveRiskSourcePassTime", data);
}

/**
 * 6.7 监管记录查询
 */
export function getSuperviseRecord(data){
  return request.get("/api/security/RiskSourcesMonitorRecord/getSuperviseRecord", data);
}

/**
 * 6.7.1监管记录 详情
 */
export function getRiskSourceMonitorRecordDetail(id){
  return request.get("/api/security/RiskSourcesMonitorRecord/getRiskSourceMonitorRecordDetail", {id:id});
}

/**
 * 6.7.2监管记录-详情（已通过）
 */
export function getPassRiskSourceMonitorRecordDetail(id){
  return request.get("/api/security/RiskSourcesMonitorRecord/getPassRiskSourceMonitorRecordDetail", {id:id});
}

/**
 * 6.8 风险源预警列表
 */
export function getRiskSourceWarnInfo(data){
  return request.get("/api/security/RiskSourcesMonitor/getRiskSourceWarnInfo",data);
}

/**
 * 6.8.1风险源预警列表-详情
 */
export function getRiskSourceWarnDetail(monitorRecordId){
  return request.get("/api/security/RiskSourcesMonitor/getRiskSourceWarnDetail", {monitorRecordId:monitorRecordId});
}

/**
 * 6.10 我的监管工作查询
 */
export function getMySuperviseTask(data){
  return request.get("/api/security/RiskSourcesMonitor/getMySuperviseTask", data);
}

/**
 * 6.10.1 监管工作-进行监管
 */
export function doSupervise(data){
  return request.post("/api/security/RiskSourcesMonitor/doSupervise", data);
}

/**
 * 6.10.2 监管工作-监管审核
 */
export function auditSupervision(data){
  return request.post("/api/security/RiskSourcesMonitor/auditSupervision", data);
}

/**
 * 6.10.3 监管工作-监管审核页面数据
 */
export function getAuditSupervisionData(monitorRecordId){
  return request.get("/api/security/RiskSourcesMonitor/getAuditSupervisionData", {monitorRecordId:monitorRecordId});
}


/**
 * 6.15 解除预警
 */
export function disarmWarning(riskId){
  return request.post("/api/security/disarmWarning", {riskId:riskId});
}

/**
 * 6.16 抄送消息
 */
export function getMyRiskSource(data){
  return request.get("/api/security/RiskSourcesMonitor/getMyMessage", data);
}



/**
 * 6.12  获取监管闲情
 */
export function getRiskDetail(data){
  return request.get("/api/security/RiskSourcesMonitor/getRiskSourceTaskDetail", data);
}

/**
 * 6.8.1风险源预警列表-预警解除
 */
export function setJieshuYj(data){
  return request.post("/api/security/RiskSourcesMonitor/disarmWarning", data);
}


/**
 * 6.11 获取监管审核列表
 */
export function getJghshLists(data){
  return request.get("/api/security/RiskSourcesMonitor/auditSupervisionList", data);
}
import request from '@/utils/request.js'

/**
 * 获取所有dept的树形菜单
 * @ //isTree 是否转成树形数据结构 1-是(默认) 2-否(列表形式)
 */
export function getDeptListTree(data){
  return request.get("/api/security/Dept/getUserDeptTree", data);
}

/**
 * 获取检查的类型
 */
export function getJcList() {
	return request.get("/api/security/qualityCheckTypeRest/checkType");
}

// 获取项目所属区域列表
export function getAreaDeptList(data){
  return request.get("/api/security/ProjectArea/getAreaByProjectId", data);
}

/**
 * 获取参建对的单位列表
 * @ deptId 部门id
 */
export function getCjlist(data){
  return request.get("/api/security/BuildCompany/getDutyCompanyList", data);
}

/**
 * 获取项目的人员列表
 */
export function getUserList(data) {
	return request.get("/api/security/Users/getDeptUser", data);
}

/**
 * 提交质量检查
 */
export function submitQuality(data) {
	return request.post("/api/security/quality/checkRecord", data);
}

/**
 * 获取质量验收类型
 */
export function getQualityTypeList(data) {
	return request.get("/api/security/QualityAcceptanceTypeRest/acceptType", data);
}

/**
 * 获取问题类型
 */
export function getQualityProblemTypeList(data) {
	return request.get("/api/security/QualityProblemTypeRest/problemType", data);
}

//获取检查类型接口
export function getCheckTypeList(data) {
	return request.get("/api/security/qualityCheckTypeRest/checkType", data);
}

/**
 * 获取质量验收申请
 */
export function sumitAccept(data) {
	return request.post("/api/security/quality/acceptanceApply", data);
}

/**
 * 获取相关问题
 */
export function correctRecord(data) {
	return request.get("/api/security/quality/correctRecordAccount", data);
}

/**
 * 提交质量罚款
 */
export function sumitPunishment(data) {
	return request.post("/api/security/QualityPunishesRest/punishes", data);
}

/**
 * 平面图分析(工序平面标记接口(接口文档11.1)还没写好,暂时先用安全的(接口文档4.11))
 */
export function getAnalysisList(data) {
	return request.get("/api/security/quality/ProjectArea/getPicSign", data);
}
/**
 * 工序平面图分析(16.42 平面图分析)
 */
export function getQualityAnalysisList(data) {
	return request.get("/api/security/quality/ProjectArea/getPicSign", data);
}

export function getQuestionList(data) {
	return request.get("/api/security/quality/correctRecordAccount", data);
}

import request from '@/utils/request.js'

// 我的工作的相关接口

/** 
 *	我的未检查任务列表
 */
export function getMyUncheckTasks(data) {
	return request.get("/api/security/myWork/myUncheckTasks", data);
}

/** 
 *	我的检查记录列表
 */
export function getCheckRecordList(data) {
	return request.get("/api/security/quality/myCheckRecordList", data);
}

/** 
 *	检查任务详情
 */
export function getTaskDetail(data) {
	return request.get("/api/security/myWork/taskDetail", data);
}


/** 
 *	检查任务详情检查记录
 */
export function getDetailCheckRecord(data) {
	return request.get("/api/security/myWork/taskDetailCheckRecords", data);
}


/** 
 *	任务指派
 */
export function assignTask(data) {
	return request.post("/api/security/myWork/assignTask", data);
}

/** 
 *	整改任务列表
 */
export function getRectifyWork(data) {
	return request.get("/api/security/quality/myCorrectRecordList", data);
}

/** 
 *	复查任务列表
 */
export function getRecheckWork(data) {
	return request.get("/api/security/quality/myReviewRecordList", data);
}

/** 
 *	检查类型获取
 */
export function getCheckType(data) {
	return request.get("/api/security/qualityCheckTypeRest/checkType", data);
}

/** 
 *	检查记录详情
 */
export function getCheckRecordDetail(data) {
	return request.get("/api/security/quality/checkRecordDetail", data);
}

/** 
 *	进行整改
 */
export function rectifyTask(data) {
	return request.post("/api/security/quality/correct", data);
}


/** 
 *	进行复查
 */
export function reviewTask(data) {
	return request.post("/api/security/quality/review", data);
}

/** 
 *	质量检查-抄送消息
 */
export function checkCopyMessage(data) {
	return request.get("/api/security/quality/checkCopyMessage", data);
}

/** 
 *	验收不通过记录
 */
export function failAcceptRecord(data) {
	return request.get("/api/security/quality/myFailAcceptRecords", data);
}


/** 
 *	获取我的验收记录
 */
export function getMyAcceptRecord(data) {
	return request.get("/api/security/quality/myAcceptRecords", data);
}


/** 
 *	检查工作——任务指派
 */
export function checkAssignTask(data) {
	return request.post("/api/security/quality/assignCheck", data);
}


/** 
 *	复查工作——任务指派
 */
export function recheckAssignTask(data) {
	return request.post("/api/security/quality/assignReview", data);
}

/** 
 *	整改工作——任务指派
 */
export function rectifyAssignTask(data) {
	return request.post("/api/security/quality/assignCorrect", data);
}

/** 
 *	验收记录详情
 */
export function acceptDetail(data) {
	return request.get("/api/security/quality/acceptDetail", data);
}

/** 
 *	质量验收
 */
export function acceptQuality(data) {
	return request.post("/api/security/quality/acceptance", data);
}

/** 
 *	质量验收
 */
export function acceptAssign(data) {
	return request.post("/api/security/quality/assignAccept", data);
}

/** 
 *	质量验收
 */
export function acceptCopyMessage(data) {
	return request.get("/api/security/quality/acceptCopyMessage", data);
}


/** 
 *	质量验收
 */
export function unreadDot(data) {
	return request.get("/api/security/myWork/quality/redPoint", data);
}
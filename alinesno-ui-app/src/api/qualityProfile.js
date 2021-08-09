import request from '@/utils/request.js'

export function getMyAcceptRecords(data) {
	return request.get('/api/security/quality/myAcceptRecords', data)
}


export function myCorrectRecordList(data) {
	return request.get('/api/security/quality/myCorrectRecordList', data)
}

export function getMyUncheckTasks(data){
  return request.get("/api/security/myWork/myUncheckTasks", data);
}

export function getUserDeptTree(data) {
	return request.get('/api/security/Dept/getUserDeptTree', data)
}

/**
 * 获取所有组织并统计通讯录人数
 * @param {Object} deptId
 */
export function getUsersByDeptId(deptId) {
	return request.get('/api/security/Users/getUsersByDeptId/' + deptId)
}

/**
 * 获取所有部门并统计通讯录人数
 * @param {Object} bumenId
 */
export function getUsersByBumenId(bumenId) {
	return request.get('/api/security/Users/getUsersByBumenId/' + bumenId)
}

/**
 * 获取所有部门
 */
export function getAllBuMen() {
	return request.get('/api/security/Users/getAllBuMen')
}

/**
 * 获取所有组织
 */
export function getAllZuZhi() {
	return request.get('/api/security/Users/getAllZuZhi')
}

/**
 * 获取短信验证码
 * @param {Object} phone
 */
export function getCode(phone) {
	return request.post('/api/security/Comment/sendSms', phone)
}

/**
 * 根据用户 id (复查人、检查人等) 获取通讯录的成员名称
 * @param {Object} userId
 */
export function getUserById(userId) {
	return request.get('/api/security/Users/getUserById/' + userId)
}

export function getMyPicture(userId) {
	return request.get('/api/security/quality/getMyPicture')
}


/**
 * 测试是否有网络
 */
export function getNetWork() {
	return request.get("/api/security/Users/getNetWork");
}

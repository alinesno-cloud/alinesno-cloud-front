import request from '@/utils/request.js'

// 隐患排查的相关接口


/**
 * 获取我的工作列表    500
 */
export function getMyworkList(data) {
	return request.get("/api/security/DangerWork/myWorkList");
}

/**
 * 获取我的整改工作列表  
 */
export function getZhenggai(data) {
	return request.get("/api/security/DangerCheckRecord/checkRecordList/1");
}


/**
 * 获取我的代办跟踪
 */
export function getMyDbgz(data) {
	return request.get("/api/security/Message/getToDoTrackingList", data);
}


//  检查任务相关

/**
 * 添加检查任务
 */
export function addJianchaRw(data) {
	return request.post("/api/security/DangerCheckTask/addCheckTask", data);
}

/**
 * 获取检查的类型
 */
export function getJcList() {
	return request.get("/api/security/DangerCheckType/dangerTypeList");
}



/**
 * 获取隐患的类型
 */
export function getYhList(data) {
	return request.get("/api/security/DangerType/getUserDeptTree", data);
}


/**
 * 获取项目的人员列表
 */
export function getUserList(data) {
	return request.get("/api/security/Users/getDeptUser", data);
}

/**
 * 获取项目的人员列表 --- 带部门分类
 */
export function getUserListDept(data) {
	return request.get("/api/security/Users/getBumenUser", data);
}



/**
 * 获取检查任务的列表
 */
export function getJcrwList(data) {
	return request.get("/api/security/DangerCheckTask/checkTaskList", data);
}


/**
 * 获取检查任务的详情-基础信息
 */
export function getJcrwDetail(data) {
	return request.get("/api/security/DangerCheckTask/checkTaskBaseInfo", data);
}


/**
 * 获取检查任务的详情--危险因素
 */
export function getJcrwDetailWx(data) {
	return request.get("/api/security/DangerCheckTaskFactors/taskFactorsList", data);
}


/**
 * 获取检查任务的详情--检查记录
 */
export function getJcrwDetailJilu(data) {
	return request.get("/api/security/DangerCheckRecord/checkRecordList", data);
}



/**
 * 获取检查记录的详情
 */
export function getJcjlDetail(data) {
	return request.get("/api/security/DangerCheckRecord/checkRecordDetail", data);
}



/**
 * 提交检查
 */
export function submitJiancha(data) {
	return request.post("/api/security/DangerCheckRecord/addCheckRecord", data);
}


/**
 * 任务指派
 */
export function zhipaiRenwu(data) {
	return request.post("/api/security/DangerCorrectFlow/taskAssignment", data);
}




// 获取台账的相关内容

/**
 *  获取预警台账
 */
export function getYjList(data) {
	return request.get("/api/security/getHiddenDangerWarnInfo", data);
}



//添加罚款


/**
 *  添加罚款
 */
export function addFakuan(data) {
	return request.post("/api/security/SafePunishes/addSafePunishes", data,);
}


/**
 *  罚款台账
 */
export function getFakuanList(data) {
	return request.get("/api/security/SafePunishes/punishesList", data);
}


/**
 *  罚款详情
 */
export function getFakuanDetail(data) {
	return request.get("/api/security/SafePunishes/punishesDetail", data);
}


/**
 *  获取罚款依据
 */
export function getFakuanYiju(data) {
	return request.get("/api/security/SafePunishesReasonType/safePunishesReasonList", data);
}

/**
 *  添加安全罚款依据类型
 */
export function addFakuanType(data) {
	return request.post("/api/security/SafePunishesReasonType/addNew", data);
}

/**
 *  添加罚款依据
 */
export function addFakuanYiju(data) {
	return request.post("/api/security/SafePunishesReason/addNew", data);
}


// 发起随机，专项检查
/**
 *  起随机，专项检查
 */
export function addZxCheck(data) {
	return request.post("/api/v1/security/addRandomCheckTask", data);
}


/**
 *  专项检查台账
 */
export function getZxtzLists(data) {
	return request.get("/api/security/DangerCheckTask/specialCheckTaskInfo", data);
}


/**
 *  专项检查台账详情
 */
export function getZxtzDetail(data) {
	return request.get("/api/security/getSpecialCheckDetail", data);
}




/**
 *  获取隐患台账
 */
export function getYhtzLists(data) {
	return request.get("/api/security/getHiddenDangerWarnInfo", data);
}


/**
 *  获取隐患台账详情
 */
export function getYhtzDetail(data) {
	return request.get("/api/security/getSpecialCheckDetail", data);
}



/**
 *  提交隐患闭合
 */
export function addYhbh(data) {
	return request.post("/api/security/DangerCorrectFlow/finishDanger", data);
}



/**
 *  指派整改人和复查人
 */
export function addRwzpZg(data) {
	return request.post("/api/security/DangerCorrectFlow/recordAssignment", data);
}


/**
 *  提交整改
 */
export function upZhenggai(data) {
	return request.post("/api/security/DangerCorrectFlow/doCheck", data);
}


/**
 *  提交延期申请
 */
export function upZhenggaiYq(data) {
	return request.post("/api/security/DangerCorrectFlow/extensionApply", data);
}


/**
 *  进行复查
 */
export function upFucha(data) {
	return request.post("/api/security/DangerCorrectFlow/doReview", data);
}

/**
 *  发起专项检查
 */
export function addZxjcCheck(data) {
	return request.post("/api/security/DangerCheckSpecialTask/addCheckSpecialTask", data);
}


/**
 *  获取专项列表
 */
export function getZxLists(data) {
	return request.get("/api/security/DangerCheckSpecialTask/checkSpecialTaskList", data);
}

/**
 *  获取专项列表--详情
 */
export function getZxDetail(data) {
	return request.get("/api/security/DangerCheckSpecialTask/specialTaskDetail", data);
}


/**
 *  结束专项检查
 */
export function stopZxjc(data) {
	return request.post("/api/security/DangerCheckSpecialTask/finishSpecialTask", data);
}


/**
 *  发起停工整改
 */
export function addTgzhengai(data) {
	return request.post("/api/security/SafeWorkStopings/addSafeWorkStoping", data);
}


/**
 *  获取检查表的列表
 */
export function getCheckLists() {
	return request.post("/api/v1/security/checkGuideList");
}


/**
 *  获取隐患排查首页数据
 */
export function getYinhuanIndex() {
	return request.get("/api/security/DangerCheckRecord/dangerIndex");
}


/**
 *  获取罚款审批流程
 */
export function getsafeDetail(data) {
	return request.get("/api/security/SafePunishes/safePunishesDetail", data);
}


/**
 *  获取安全罚款列表
 */
export function safaLists(data) {
	return request.get("/api/security/SafePunishes/safePunishesList", data);
}


/**
 *  获取我的抄送消息
 */
export function getMyCaosong(data) {
	return request.get("/api/security/Message/getCopyMessageList", data);
}


/**
 *  全部标记已读
 */
export function getAllyidu(data) {
	return request.post("/api/security/Message/readAllMessage", data);
}


/**
 *  全部标记已读
 */
export function addSuiji(data) {
	return request.post("/api/security/DangerCheckRecord/addRandomCheck", data);
}


/**
 *  获取检查表列表
 */
export function getCheckGuideList(data) {
	return request.get("/api/security/DangerCheckGuide/getCheckGuideList", data);
}


/**
 *  获取检查表及表项列表
 */
export function getCheckGuideListItem(data) {
	return request.get("/api/security/DangerCheckGuide/getCheckGuideAndItemList", data);
}



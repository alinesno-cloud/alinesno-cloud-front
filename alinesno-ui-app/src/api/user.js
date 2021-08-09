import request from '@/utils/request.js'

/**
 * 用户登录
 */
export function login(data){
  return request.post("/api/v1/login", data, { noAuth: true });
}


/**
 * 忘记密码
 */
export function forgetPassword(data){
  return request.post("/api/security/Users/forgetPassword", data, { noAuth: true });
}


/**
 * 获取验证码
 */
export function getCode(data){
  return request.post("/api/security/Users/forgetPassword", data, { noAuth: true });
}

/**
 * 修改密码
 */
export function updatePwd(data){
  return request.post("/api/security/Users/modifyPassword", data, { noAuth: true });
}


/**
 * 修改手机号
 */
export function updatePhone(data){
  return request.post("/api/security/Users/forgetPassword", data, { noAuth: true });
}

/**
 * 反馈
 */
export function feetBack(data){
  return request.post("/api/security/myFeedBack", data, { noAuth: true });
}



/**
 * 设置
 */
export function setApp(data){
  return request.post("/api/security/personalSetting", data, { noAuth: true });
}


/**
 * 获取用户信息
 */
export function getUserinfo(){
  return request.post("/api/v1/security/userIndexData");
}

/**
 * 获取用户二维码
 */
export function getUserUrl(url){
  return request.post(url);
}



/**
 * 获取用户的角色列表 
 */
export function getJiese(data){
  return request.get("/api/security/UserAuthority/roleList", data);
}

/**
 * 获取用户个人角色
 */
export function getJieseBumen(data){
  return request.get("/api/v1/security/userRoleList", data);
}


/**
 * 获取用户的通讯录
 */
export function getLianxi(){
  return request.get("/api/security/myAddressBook");
}


/**
 * 获取提及我的
 */
export function getTijiMy(){
  return request.get("/api/security/remindMe");
}


/**
 * 获取我的收藏
 */
export function getMygz(){
  return request.get("/api/security/myCollect");
}


/**
 * 获取我的评论
 */
export function getMypl(){
  return request.get("/api/security/myComment");
}



//  获取我的审批


/**
 * 获取审批汇总
 */
export function getSpdata(){
  return request.get("/api/security/myApproveIndex");
}



/**
 * 获取我的延期申请
 */
export function getYqsq(data){
  return request.get("/api/security/myDelayCorrectApprove", data);
}


/**
 * 获取我的审批--安全罚款
 */
export function getAnqufk(data){
  return request.get("/api/security/myPunishesApprove", data);
}

/**
 * 提交安全罚款的审批结果
 */
export function addAnquan(data){
  return request.post("/api/security/SafePunishes/approveSafePunishes", data);
}


/**
 * 获取我的审批--停工令
 */
export function getTgl(data){
  return request.get("/api/security/myStopWorkApprove", data);
}

/**
 * 提交安停工令的审批结果
 */
export function addTinggong(data){
  return request.post("/api/security/SafeWorkStopings/approveStopping", data);
}


/**
 * 添加收藏
 */
export function addCollects(data){
  return request.post("/api/security/Collects/add", data);
}



/**
 * 获取我的在线相册
 */
export function getPiclists(data){
  return request.get("/api/security/getMyPicture", data);
}


/**
 * 停工令审批
 */
export function approvalTgl(data){
  return request.post("/api/security/stopWorkApproved/v1", data);
}



/**
 * 延期申请审批
 */
export function approvalYqsq(data){
  return request.post("/api/security/DangerCorrectFlow/approveExtension", data);
}

/**
 *  获取停工申请详情
 */
export function getStopDetail(data) {
	return request.get("/api/security/stopWorkDetail", data);
}
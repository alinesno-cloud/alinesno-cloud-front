import request from '@/utils/request.js'


/**
 * 获取项目
 */
export function getDeptList(data){
  return request.get("/api/security/Dept/authDept", {});
}

// 项目分布相关的
/**
 * 获取全部项目列表
 */
export function projectList(){
  return request.get("/api/v1/security/projectList");
}

/**
 * 获取我关注的项目列表
 */
export function projectListIsgz(){
  return request.get("/api/v1/security/myFollowProject");
}

/**
 * 搜索项目
 */
export function searchProject(data){
  return request.get("/api/security/ProjectArea/getSelectData", data);
}

/**
 * 获取所有dept的树形菜单
 * @ //isTree 是否转成树形数据结构 1-是(默认) 2-否(列表形式)
 */
export function getDeptListTree(data){
  return request.get("/api/security/Dept/getUserDeptTree", data);
}

// 获取项目所属区域列表
export function getAreaDeptList(data){
  return request.get("/api/security/ProjectArea/getAreaByProjectId", data);
}


/**
 * 查询项目所属的区域
 */
export function searchAddress(data){
  return request.get("/api/v1/security/seachProjectArea");
}


/**
 * 项目区域下拉列表
 */
export function cityList(data){
  return request.get("/api/security/ProjectArea/getSelectData", data);
}


// 组织结构相关

/**
 * 获取组织的树形结构
 * @ deptType // 	
显示到的最低层级(1、公司 5、项目  6、部门  7、承建单位（分包))
 */
export function getZhuzhi(data){
  return request.get("/api/v1/security/deptTreeList", data, { isfrom: 2});
}


/**
 * 获取部门的所有干岗位和人员列表 
 * @ deptId 部门id
 */
export function getBmList(data){
  return request.get("/api/v1/security/deptStationPeopleList", data);
}


/**
 * 获取项目的所有干岗位和人员列表
 * @ deptId 部门id
 */
export function getBmUserlist(data){
  return request.get("/api/v1/security/deptPeopleList", data);
}


/**
 * 获取参建对的单位列表
 * @ deptId 部门id
 */
export function getCjlist(data){
  return request.get("/api/security/BuildCompany/getDutyCompanyList", data);
}


/**
 * 获取兼任的组织
 * @ deptId 部门id
 */
export function getJrlist(){
  return request.get("/api/security/Dept/authOrg");
}


/**
 * 获取现场的平面图
 * @ deptId 部门id
 */
export function getProjectMap(data){
  return request.get("/api/security/ProjectArea/getProjectPic", data);
}



/**
 * 删除文件
 * @ deptId 部门id
 */
export function delectFile(data){
  return request.post("/api/security/common/delObject", data);
}



/**
 * 获取评论
 * @ deptId 部门id
 */
export function getPinlun(data){
  return request.get("/api/security/Comment/records", data);
}

/**
 * 风险源下拉列表
 */
export function RgetSelectData(){
  return request.get("/api/security/RiskSources/getSelectData",);
}

/**
 * 项目区域下拉列表
 */
export function PgetSelectData(){
  return request.get("/api/security/ProjectArea/getSelectData",);
}

/**
 * 公司 、项目、承建下拉列表
 */
export function getSelectData(data){
  return request.get("/api/security/Dept/getSelectData", {deptType: data});
}

/**
 * 1.4 新增收藏
 */
export function CollectsAdd(data){
  return request.post("/api/security/Collects/add",data);
}


/**
 * 1.3 增加评论
 */
export function addComment(data){
  return request.post("/api/security/Comment/addComment",data);
}

/**
 * 1.4.1删除收藏
 */
export function removeComment(data){
  return request.get("/api/security/Collects/remove",data);
}


/**
 * 获取检查单位
 */
export function jianchaDepts(data){
  return request.get("/api/security/Dept/getStopWorkingCheckDept",data);
}


/**
 * 获取平面图
 */
export function getPlanMap(data){
  return request.get("/api/security/ProjectArea/getPicSign",data);
}

/**
 * 标记全部已读
 */
export function upAllRead(data){
  return request.get("/api/security/Message/allRead", data);
}


/**
 * 获取城市数据
 */
export function getCityList(data){
  return request.get("/api/security/BasicArea/getArea", data);
}


/**
 * 获取项目分布
 */
export function getDeptListFenbu(data){
  return request.get("/api/security/Dept/getDeptDistributed", data);
}

/**
 * 切换兼任角色
 */
export function updateJuese(data){
  return request.post("/api/v1/switchLoginStation", data, { isfrom: 2});
}


/**
 * 获取检查任务的标点
 */
export function getTaskPic(data){
  return request.get("/api/security/ProjectArea/getTaskPic", data);
}
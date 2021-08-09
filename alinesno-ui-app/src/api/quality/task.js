import request from '@/utils/request.js'

/**
 * 获取检查任务
 * 
 */
export function getcheckTasksList(data){
  return request.get("/api/security/myWork/checkTasksAccount", data);
}
import request from '@/utils/request.js'

/**
 * 添加检查任务
 */
export function addTask(data){
  return request.post("/api/security/quality/addCheckTask", data);
}
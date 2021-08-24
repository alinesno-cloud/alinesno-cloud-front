// import { get } from '@/axios'
// const BASE_URL = "/packages/Organization/mockData/"
// // 获取组织机构根节点
// export const GET_DEPT_ROOT = () => get( BASE_URL + 'depRoot.json' )

// // 根据部门id获取分页人员信息
// export const GET_PAGE_EMPLOYEE = data => get( BASE_URL + 'userData.json', data )

// // 获取组织机构子节点
// export const GET_DEPT_TREE = data => get( BASE_URL + 'depChild.json', data )

// // 获取组织机构下人员信息
// export const GET_USER_BY_DEPT = data => get( BASE_URL + 'userData.json', data )

// 从正式借口获取后
import request from 'alinesno-ui/src/utils/request'
// 获取组织机构根节点
export const GET_DEPT_ROOT = () => {
    return request({
        url: '/organize/department',
        method: 'get'
    })
}
// 根据部门id获取分页人员信息
export const GET_PAGE_EMPLOYEE = () => {
    return request({
        url: '/organize/account',
        method: 'get'
    })
}
// 获取组织机构子节点
export const GET_DEPT_TREE = () => {
    return request({
        url: '/organize/department',
        method: 'get'
    })
}
// 获取组织机构下人员信息
export const GET_USER_BY_DEPT = () => {
    return request({
        url: '/organize/account',
        method: 'get'
    })
}
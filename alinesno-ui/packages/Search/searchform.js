import timefilters from "./timefilters";

/**
 * 时间搜索
 * @param {*} context 
 * @param {*} ref 
 * @param {*} form 
 * @returns 
 */
export default function searchParam(context, ref, form) {
    let paramArr = []
    let formname = ref.$vnode.data.ref
    for (let i in form) {
        if (form[i] instanceof Array) {
            if (context.$refs[`${formname}.${i}`].$attrs.range) {
                if (context.$refs[`${formname}.${i}`].$vnode.data.model.value instanceof Array) {
                    const timeArr = context.$refs[`${formname}.${i}`].$vnode.data.model.value
                    if (timeArr[0] instanceof Date) {
                        const strings = context.$refs[`${formname}.${i}`].$attrs.range
                        var split = strings.split('|');
                        let start = {'column': split[0], 'type': 'eq', 'value': timefilters(timeArr[0])}
                        let end = {'column': split[1], 'type': 'eq', 'value': timefilters(timeArr[1])}
                        paramArr.push(start)
                        paramArr.push(end)
                    }
                }
            }
        } else {
            const wrapper = context.$refs[`${formname}.${i}`].$attrs.wrapper === undefined ? 'eq' : context.$refs[`${formname}.${i}`].$attrs.wrapper
            const properties = context.$refs[`${formname}.${i}`].$vnode.data.model.value
            let obj = {'column': i, 'type': wrapper, 'value': properties}
            paramArr.push(obj)
        }
    }
    return paramArr
}

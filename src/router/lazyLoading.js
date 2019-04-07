/**
 * Created by wangkai on 2019-04-06
 * 路由懒加载函数
 */

/**
 * 通过异步形式加载路由
 * @param dir
 * @returns {function(): (Promise<*>|*)}
 */
export default dir => () => import(`views/${dir}`)

import { ceil } from 'lodash'
const DEFAULT_PAGINATION = 10;

/**
 * 生成BaseList的state结构
 * @returns {Object}
 */
export function generateBaseListState() {
  // 参考资料：https://vuex.vuejs.org/zh/guide/modules.html#%E6%A8%A1%E5%9D%97%E9%87%8D%E7%94%A8
  // 如果我们使用一个纯对象来声明模块的状态，那么这个状态对象会通过引用被共享，导致状态对象被修改时 store 或模块间数据互相污染的问题
  // 因此解决办法也是相同的——使用一个函数来声明模块状态（仅 2.3.0 + 支持）
  return {
    list: {
      data: [], // 列表数据
      pagination: DEFAULT_PAGINATION, // 列表的分页信息
      conditions: {}, // 列表的查询条件
      loading: false // 列表的loading状态
    },
    current: {
      data: {}, // 当前查看的项的信息
      loading: false // 详情的loading状态
    }
  }
}

export const baseListMutations = {
  CHANGE_LIST_LOADING,
  CHANGE_CURRENT_LOADING,
  SAVE_LISTDATA_PAGINATION_AND_CONDITIONS,
  SAVE_CURRENT_DETAIL
}

/**
 * 修改模块的loading状态
 * @param {Object} state Vuex state
 * @param {Boolean} loading 加载中
 */
export function CHANGE_LOADING(state, loading) {
  state.loading = loading
}

/**
 * 保存数据
 * @param {Object} state Vuex state
 * @param {Object} data 数据对象
 */
export function SAVE_DATA(state, data) {
  state.data = data
}

/**
 * 修改详情页相关的loading状态
 * @param {Object} state Vuex state
 * @param {Boolean} loading 加载中
 */
export function CHANGE_CURRENT_LOADING(state, loading) {
  state.current.loading = loading
}

/**
 * 保存当前查看的列表中的某个item
 * @param {Object} state Vuex state
 * @param {Object} data 当前查看的item的详情
 */
export function SAVE_CURRENT_DETAIL(state, data) {
  state.current.data = data
}

/**
 * 修改列表loading状态
 * @param {Object} state Vuex state
 * @param {Boolean} loading 加载中
 */
export function CHANGE_LIST_LOADING(state, loading) {
  state.list.loading = loading
}

/**
 * 保存列表数据、分页信息和查询条件
 * @param {Object} state Vuex state
 * @param {Object} payload vuex action payload
 * @param {Array<Object>} payload.data 列表数据
 * @param {Object} payload.pagination 分页信息
 * @param {Object} payload.conditions 查询条件
 */
export function SAVE_LISTDATA_PAGINATION_AND_CONDITIONS(state, { data, pagination, conditions }) {
  state.list.data = data || []
  state.list.pagination = pagination || DEFAULT_PAGINATION
  state.list.conditions = conditions || {}
}

/**
 * 保存列表数据
 * @param {Object} state Vuex state
 * @param {Array<Object>} list 列表数据
 */
export function SAVE_LIST_DATA(state, list) {
  state.list = list || []
}

/**
 * 保存列表数据
 * @param {Object} state Vuex state
 * @param {Array<Object>} list 列表数据
 */
export function SAVE_DATA_IN_LIST(state, list) {
  state.list.data = list || []
}

/**
 * 保存分页信息
 * @param {Object} state Vuex state
 * @param {Object} pagination 分页信息
 */
export function SAVE_PAGINATION(state, pagination) {
  state.pagination = pagination
}

/**
 * 保存查询条件
 * @param {Object} state Vuex state
 * @param {Object} conditions 查询条件
 */
export function SAVE_FILTER_VALUE(state, conditions) {
  state.conditions = conditions
}

/** 下面是针对loading more功能的扩展 */

export const reusableLoadMoreListState = Object.assign({
  needReload: false
}, generateBaseListState())

export const reusableLoadMoreListMutations = Object.assign({
  CHANGE_LIST_LOADING,
  CHANGE_CURRENT_LOADING,
  SAVE_LOADMORE_LISTDATA_PAGINATION_AND_CONDITIONS,
  SAVE_CURRENT_DETAIL,
  MARKED_RELOAD
}, baseListMutations)

/**
 * 保存列表数据和分页信息
 * @param {Object} state Vuex state
 * @param {Object} payload vuex action payload
 * @param {Array<Object>} payload.data 列表数据
 * @param {Object} payload.pagination 分页信息
 */
export function SAVE_LOADMORE_LISTDATA_PAGINATION_AND_CONDITIONS(state, { data, pagination, conditions, isReload }) {
  state.list.conditions = conditions || {}
  if (!isReload) {
    if (pagination.currentPage > 1) {
      state.list.data = state.list.data.concat(data)
    } else {
      state.list.data = data || []
    }
    state.list.pagination = pagination
  } else {
    state.list.data = data
    state.list.pagination.amount = pagination.amount
    state.list.pagination.totalPages = ceil(pagination.amount / state.list.pagination.size)
  }
}

/**
 * 标记是否需要刷新
 * @param {Object} state Vuex state
 * @param {Boolean} value 是否需要刷新
 */
export function MARKED_RELOAD(state, value) {
  state.needReload = value
}

/** actions **/
/**
 * 刷新当前列表
 * @param {Object} Object Vuex state
 * @param {String} methodName 需要dispatch的名字
 * @param {String} markedKey reload 的标记名字
 */
export function reloadCurrentList({ state, dispatch, commit }, methodName, markedKey) {
  const { pagination: { currentPage, size }, conditions } = state.list
  dispatch(methodName, {
    payload: {
      conditions,
      pagination: {
        page: 1,
        size: size * currentPage
      },
      isReload: true
    }
  })
  commit(markedKey, false)
}

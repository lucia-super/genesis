import { generateBaseListState, baseListMutations } from '../../reusable'

export default {
    namespaced: true,
    state: generateBaseListState(),

    mutations: {
        ...baseListMutations
    },

    actions: {
        fetchList({ commit }) {
            commit('CHANGE_LIST_LOADING', true)
            const data = [{ key: "template1", value: "1" }, { key: "template2", value: "2" }, { key: "template3", value: "4" }, { key: "template1", value: "1" }, { key: "template1", value: "1" }]
            const pagination = {
                size: 5,
                currentPage: 1,
                amount: 10,
                totalPages: 100
            }
            commit('SAVE_LIST_DATA', { data, pagination })
            commit('CHANGE_LIST_LOADING', false)
        },
        fetchDetail({ commit }) {
            commit('CHANGE_CURRENT_LOADING', true)
            const response = { "name": "你好", "key": "数据来自不同的地方" }
            commit('SAVE_CURRENT_DETAIL', response)
            commit('CHANGE_CURRENT_LOADING', false)
        },
    }
}
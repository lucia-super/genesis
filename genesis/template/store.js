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
            // commit('SAVE_LISTDATA_PAGINATION_AND_CONDITIONS', { data, pagination, conditions: payload.conditions })
            commit('CHANGE_LIST_LOADING', false)
        },
        fetchDetail({ commit }) {
            commit('CHANGE_CURRENT_LOADING', true)
            // commit('SAVE_CURRENT_DETAIL', response)
            commit('CHANGE_CURRENT_LOADING', false)
        },
    }
}
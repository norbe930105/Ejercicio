const state = {
    titleProperty: 'Home'
};

const getters = {
    currentPage(state) {
        return state.titleProperty;
    }
};

const actions = {
    changePage({ commit }, title) {
        commit('setCurrentPage', title);
    }
};

const mutations = {
    setCurrentPage(state, title) {
        state.titleProperty = title;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}

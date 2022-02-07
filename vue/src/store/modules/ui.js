const state = {
  box: {
    items: Array.apply(null, new Array(12)).map((item, idx) => {
      return {
        name: 'box - ' + (idx + 1)
      };
    }),
    numOfColumns: 1
  }
};

const getters = {
  numOfColumns (state, getters) {
    return state.box.numOfColumns;
  }
};
const actions = {};
const mutations = {
  setNumOfColumns: (state, value) => {
    state.box.numOfColumns = value;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

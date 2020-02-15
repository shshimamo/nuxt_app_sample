import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function(){
        return {
            message: 'count number.',
            counter: 0,
        };
    },
    mutations: {
      // 第一引数は必ずstateが渡される
      count: function(state, n) {
        state.counter += n;
      },
      reset: function(state) {
          state.counter = 0;
      }
    },
  })
}

export default createStore


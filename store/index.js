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
      count: function(state, obj) {
        state.message =obj.message;
        state.counter += obj.add;
      },
      reset: function(state) {
          state.counter = 0;
      }
    },
  })
}

export default createStore


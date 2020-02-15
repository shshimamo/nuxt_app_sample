import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    // componentのdataと同じように関数として値を用意
    // 値をオブジェクト形式でreturnする
    state: function(){
        return {
            message: 'This is store message!',
        };
    },
  })
}

export default createStore

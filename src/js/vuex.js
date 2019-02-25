import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const vuex_store = new Vuex.Store({
  //在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，
//将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到
  strict: process.env.NODE_ENV !== 'production', 

  state:{
    user_name:'张三',
    obj:{
      message:"123"
    }
  },
  mutations:{
    showUserName(state){
      alert(state.user_name);
    },
    updateMessage(state,message){
      state.obj.message = message
    }
  },

})

export default vuex_store
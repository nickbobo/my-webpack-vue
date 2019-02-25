import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'


Vue.use(Vuex)

const state = {
	name:'',
	sex:'',
	title_name:'首页',
	userInfo:null,
    user_name:'张三',
    message:'123',
    obj:{
      message:"123"
    }
}



export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production', 
	state,
	mutations
})
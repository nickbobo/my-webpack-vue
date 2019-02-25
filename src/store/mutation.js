import {
	ADD_USER,
	SHOW_USER_NAME,
	UPDATE_MESSAGE,
	UPDATE_TITLE,
} from './mutation-types.js'

export default {
	// 记录当前经度纬度
	[ADD_USER](state, {
		name,
		sex
	}) {
		console.info(state)
		user.name = name;
		user.sex = sex;
	},
	//显示用户姓名
	[SHOW_USER_NAME](state,{
		user_name
	}){
		state.name = user_name
	},
	//修改message字段
	[UPDATE_MESSAGE](state,{
		message
	}){
		console.info(state)
		state.obj.message = message;
	},
	//修改title标题
	[UPDATE_TITLE](state,{
		title
	}){
		state.title_name=title
	}
}


import fetch from '../config/fetch'
import axios from 'axios'
export const addUser = (name, sex) => {
	console.info(name, sex)
}
//接口调用
export const updateMessage = () => {
	// state.obj.message = message;
	// console.info(state,message)
	// // return state
	// let msg = {
	// 	state:'404',
	// 	msg:'访问错误'
	// }
	return 123
}
export const logins = () =>{
	axios({
		method: 'get',
		changeOrigin : true,   //允许跨域
		url: 'https://suggest.taobao.com/sug?code=utf-8&q=%E7%94%B5%E8%84%91&callback=cb',
		data: {
		//   code: 'utf-8',
		//   info: '12'
		}
	})
}
export const login = data => fetch('https://suggest.taobao.com/sug?code=utf-8&q=%E7%94%B5%E8%84%91&callback=cb', {
	method: "GET",
	headers: {
        'Content-Type': 'application/json',
		'Accept': 'application/json',
		token:''
	},
	// credentials: 'include',
	// body: JSON.stringify({ username: "henry", password: "321321" })
}).then(res => {
	return res.json();
  }).then(res => {
	console.log(res);
  })
export const showUserName = (state) => {
	alert(state.user_name);
}


// if(self.fetch) {
//     // 使用 fetch 框架处理
// } else {
//     // 使用 XMLHttpRequest 或者其他封装框架处理
// }


// fetch('/v1/users/add', {
// 	name:name,
// 	sex:sex
// }, 'POST');


import App from '../App.vue'

import secondcomponent from '../component/secondcomponent.vue'
import firstcomponent from '../component/firstcomponent.vue'
import parent from '../parent.vue'
import index from '../component/index.vue'
import Calc from '../component/calc.vue'
import demo from '../component/demo.vue'


import MintUiBotton from '../mint-ui/botton.vue'

import elementUi from '../elementUi.vue'
import elementUiDemo from '../element-ui/demo.vue'

import mintUiDemo from '../mint-ui/demo.vue'
import iscroll from '../mint-ui/iscroll.vue'

import bootstrapTest from '../bootstrap/test1.vue'

export default [{
    path: '/',
    component: App, //顶层路由
    children: [{
        path: '',
        redirect: '/component'
    }, {
        path: '/secondcomponent',
        component: secondcomponent
    }, {
        path: '/component',
        component: parent,
        children: [
            { path: '', component: index },
            { path: 'secondcomponent', component: secondcomponent },
            { path: 'firstcomponent', component: firstcomponent },
            { path: 'calc', component: Calc },
            { path:'demo',component:demo}
        ]
    }, {
        path: '/elementUi',
        component: parent,
        children: [
            { path: '', component: elementUiDemo, name: 'elementUiDemo' },
            { path: 'mituibotton', component: MintUiBotton }
        ]
    }, {
        path: '/mintUi',
        component: parent,
        children: [
            { path: '', component: mintUiDemo },
            { path: 'iscroll', component: iscroll },
            { path: 'mituibotton', component: MintUiBotton },
            { path: 'bootstraptest', component: bootstrapTest },
        ]
    }]
}]
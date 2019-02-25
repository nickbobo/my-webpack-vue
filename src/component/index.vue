<template>
  <div id="index">
    <el-card class="box-card">
      <ul id = "router">
        <h5>router路由1</h5>

        <li><router-link :to = "{path:'/component/firstcomponent',query:{num:1}}">firstcomponent</router-link> </li>
        <li><router-link :to = "{path:'/component/secondcomponent',query:{num:2}}">secondcomponent</router-link> </li>
      </ul>
    </el-card>


    <el-card class="box-card">
      <ul id = "router">
        <li><router-link :to = "{path:'/component/demo',query:{num:1}}">demo</router-link> </li>
      </ul>
    </el-card>



    <el-card class="box-card hide">
      <ul id = "router">
        <h5>mint-ui</h5>
        <li><router-link :to = "{path:'/parent/foo',query:{num:1}}">firstcomponent</router-link> </li>
        <li><router-link :to = "{path:'/parent/bar',query:{num:2}}">secondcomponent</router-link> </li>
      </ul>
    </el-card>

    <transition :name="transitionName"> 
      <router-view class = "Router"></router-view>
    </transition> 
  </div>
</template>
<script>
import mybase from "../js/mybase"
import firstcomponent from '../component/firstcomponent.vue'
import secondcomponent from '../component/secondcomponent.vue'
export default {
  name: 'index',
  data () {
    return {
      show: false,
      hide:false,
      msg: 'Welcome to Your VueApp',
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10,
      txt:'',
      transitionName: 'slide-left'
    }
  },
  watch:{
    'txt'(a,b){
      console.info(a,b);
      var info={old:a,new:b};
      if(a==123){
          info.new={c:"3",d:'4'};
          console.info(info)
      }
    }
  },
  methods: {

    //js 调用文件事件
    onMybase:function(){
      mybase.TosteMsg();
    },
    startHacking: function () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    },
    //js钩子css3过渡
    // beforeEnter: function (el) {
    //   el.style.opacity = 0
    //   el.style.transformOrigin = 'right'
    //   console.info("1");
    // },
    // enter: function (el, done) {
    //   Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
    //   Velocity(el, { fontSize: '1em' }, { complete: done })
    //   console.info("2");
    // },
    // leave: function (el, done) {
    //   Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
    //   Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
    //   Velocity(el, {
    //     rotateZ: '45deg',
    //     translateY: '30px',
    //     translateX: '30px',
    //     opacity: 0
    //   }, { complete: done })
    //   console.info("3");
    // },

    //列表进入和离开过渡
    // randomIndex: function () {
    //   return Math.floor(Math.random() * this.items.length)
    // },
    // add: function () {
    //   this.items.splice(this.randomIndex(), 0, this.nextNum++)
    // },
    // remove: function () {
    //   this.items.splice(this.randomIndex(), 1)
    // },
  },
  components:{firstcomponent,secondcomponent}
}

</script>

<style>
#index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
      width: 100%;
    left: 0;
}
</style>

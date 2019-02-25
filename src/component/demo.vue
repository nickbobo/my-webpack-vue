<template>
  <div id="demo">
    <!-- <li size="large"><router-link :to = "{path:'/mintUi/mituibotton',query:{num:1}}">mituibotton</router-link> </li> -->
    <!-- <iscroll-view ref="scrollview" class="scroll-view"> -->
    <div class="center">
      <el-button v-on:click="hide = !hide">api</el-button>

      <!-- <router-link :to = "{path:'/mintUi/mituibotton',query:{num:1}}">mituibotton</router-link> -->
      <div v-if="hide">
        <h1></h1>
        <h2>Essential Links</h2>
        <ul>
          <li>
            <a href="https://vuejs.org" target="_blank">Core Docs</a>
          </li>
          <li>
            <a href="https://forum.vuejs.org" target="_blank">Forum</a>
          </li>
          <li>
            <a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a>
          </li>
          <li>
            <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
          </li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
          <li>
            <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
          </li>
          <li>
            <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
          </li>
          <li>
            <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
          </li>
          <li>
            <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
          </li>
        </ul>
      </div>
      <div>
        <input name value="hello vue!">
        <h2>{{txt}}</h2>
      </div>
      <div class="demo">
        <el-button @click.native="startHacking">Let's do it1</el-button>
        <el-button @click.native="onMybase">mybase</el-button>
        <h5>单元素-组件的过渡</h5>
        <div class="demo_title">
          <el-button v-on:click="show = !show">Toggle</el-button>
          <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
          >
            <p v-if="show" class="transition_show">Demo</p>
          </transition>
          <!--           <transition
            appear
            appear-class="custom-appear-class"
            appear-active-class="custom-appear-active-class">
            <p v-if="show" class="transition_shows">Demo</p>
          </transition>-->
        </div>
        <el-button v-on:click="ToastTest">Toast</el-button>
        <div>{{msg}}</div>
        <el-button @click.native="openTop">openTop</el-button>
        <el-button @click.native="opencenter">opencenter</el-button>
        <el-button @click.native="openLoading">openLoading</el-button>
        <div class="demo">
          <el-button v-on:click="add">Add</el-button>
          <el-button v-on:click="remove">Remove</el-button>
          <transition-group name="list" tag="p">
            <span v-for="item in items" v-bind:key="item" class="list-item">{{ item }}</span>
          </transition-group>
        </div>

        <!-- <div v-demo="{ color: 'white', text: 'hello!' }"></div> -->

        <el-button @click.native="onMessageBox">弹出框</el-button>

        <el-card class="box-card transition-show">
          <el-button @click.native="showMe = !showMe">element-ui淡入淡出</el-button>
          <el-button @click.native="zoomShow = !zoomShow">element-ui缩放</el-button>
          <el-button @click.native="collapseShow = !collapseShow">element-ui展开折叠</el-button>
          <el-collapse-transition>
            <div v-show="collapseShow">
              <transition name="el-fade-in">
                <div v-show="showMe" class="transition-box">.elfade-in</div>
              </transition>
            </div>
          </el-collapse-transition>
          <transition name="el-zoom-in-center">
            <div v-show="zoomShow" class="transition-box">.elfade-in</div>
          </transition>
        </el-card>

        <transition :name="transitionName">
          <router-view class="Router"></router-view>
        </transition>
      </div>
    </div>

    <table>
      <tr>
        <th colspan="3">父组件数据</th>
      </tr>
      <tr>
        <td>name</td>
        <td>{{ name }}</td>
        <td>
          <input type="text" v-model="name">
        </td>
      </tr>
      <tr>
        <td>age</td>
        <td>{{ age }}</td>
        <td>
          <input type="text" v-model="age">
        </td>
      </tr>
    </table>

    <!-- </iscroll-view> -->
  </div>
</template>
<script>
import Vue from "vue";
import mybase from "../js/mybase";

var myMixin = {
  created: function() {
    this.hello();
  },
  methods: {
    hello: function() {
      console.log("hello from mixin!");
    }
  }
};

// Vue.directive("demo", function(el, binding) {
//   console.log(binding.value.color); // => "white"
//   console.log(binding.value.text); // => "hello!"
// });
// 定义一个使用混合对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
});
var component = new Component();
console.info(component);

var MyPlugin = {};

MyPlugin.install = function(Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function() {
    console.info(444);
    // 逻辑...
  };
  // // 2. 添加全局资源
  Vue.directive("my-directive", {
    bind(el, binding, vnode, oldVnode) {
      // 逻辑...
      console.info(333);
    }
    // ...
  });
  // // 3. 注入组件
  Vue.mixin({
    created: function() {
      // 逻辑...
      //console.info(111,this)
    }
    // ...
  });
  // 4. 添加实例方法
  Vue.prototype.$myMethod = function(options) {
    // 逻辑...
    console.info(2222);
  };
};

Vue.use(MyPlugin, { someOption: true });

//Vue.prototype.$myMethod();

console.info(MyPlugin);

export default {
  name: "demo",
  data() {
    return {
      zoomShow: true,
      collapseShow: true,
      showMe: true,
      show: false,
      hide: false,
      msg: "Welcome to Your VueApp",
      transitionName: "slide-left",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,

      txt: "",

      name: "keepfool",
      age: "28",
      myName: "",
      myAge: ""
    };
  },
  watch: {
    txt(a, b) {
      console.info(a, b);

      var info = { old: a, new: b };
      if (a == 123) {
        info.new = { c: "3", d: "4" };
        console.info(info);
      }
    },
    $route(to, from, next) {
      let isBack = this.$router.isBack;
      console.info("123:", isBack);
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    }
  },
  mounted() {
      console.info(this.$store.state.obj.message)
  },
  methods: {
    onClickMe: function() {},
    ToastTest: function() {
      // console.info(this.msg,this.$msg)
      if (this.msg) {
        // this.msg = "";
      } else {
        this.msg = this.msg;
      }
    },
    openTop: function() {
      console.info("top")
      this.$toast.top("top");
    },
    opencenter: function() {
      this.$toast.center("center");
    },
    openLoading: function() {
      this.$loading("loading...");
      let self = this;
      setTimeout(function() {
        self.closeLoading();
      }, 2000);
    },
    closeLoading() {
      this.$loading.close();
    },
    //js 调用文件事件
    onMybase: function() {
      mybase.TosteMsg();
    },
    startHacking: function() {
      this.$notify({
        title: "It Works",
        message:
          "We have laid the groundwork for you. Now it's your time to build something epic!",
        duration: 6000
      });
    },
    //js钩子css3过渡
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.transformOrigin = "left";
      console.info("1");
    },
    enter: function(el, done) {
      Velocity(el, { opacity: 1, fontSize: "1.4em" }, { duration: 300 });
      Velocity(el, { fontSize: "1em" }, { complete: done });
      console.info("2");
    },
    leave: function(el, done) {
      Velocity(el, { translateX: "15px", rotateZ: "50deg" }, { duration: 600 });
      Velocity(el, { rotateZ: "100deg" }, { loop: 2 });
      Velocity(
        el,
        {
          rotateZ: "45deg",
          translateY: "30px",
          translateX: "30px",
          opacity: 0
        },
        { complete: done }
      );
      console.info("3");
    },
    //列表进入和离开过渡
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
    onMessageBox: function() {
      this.$prompt("注册", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
        // inputPattern:
        // innutErrorMessage:'不正确',
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的内容是：" + value
          });
        })
        .then(({ aaa }) => {
          this.$message({
            type: "success",
            message: "你的内容是：" + aaa
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入!"
          });
        });
    }
  }
};
</script>
// 
<style  lang="scss" scoped="" type="text/css" >
.scroll-view {
  touch-action: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0;
  overflow: hidden;
}

.transition-show {
  height: 400px;
}
.transition-box {
  border-radius: 4px;
  background-color: #20a0ff;
  text-align: center;
  margin-top: 20px;
  left: -100px;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
}

.demo {
  border: 1px solid #eee;
  border-radius: 2px;
  margin-top: 1em;
  margin-bottom: 100px;
  font-size: 1.2em;
  line-height: 1.5em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-top: 0px;
  padding-top: 10px;
}
.transition_show,
.transition_shows {
  margin-left: 50%;
  margin-top: -30px;
  width: 100px;
}

.demo_title {
  height: 150px;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}

.hide {
  display: none;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
}

.lx-toast {
  position: fixed;
  bottom: 100px;
  left: 50%;
  width: 180px;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  margin-left: -100px;
  text-align: center;
  z-index: 9999;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  animation: show-toast 0.5s;
  -webkit-animation: show-toast 0.5s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.lx-toast.lx-toast-top {
  top: 50px;
  bottom: inherit;
}
.lx-toast.lx-toast-center {
  top: 50%;
  margin-top: -20px;
  bottom: inherit;
}
@keyframes show-toast {
  from {
    opacity: 0;
    transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }
}

.lx-load-mark {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
.lx-load-box {
  position: fixed;
  z-index: 3;
  width: 7.6em;
  min-height: 7.6em;
  top: 180px;
  left: 50%;
  margin-left: -3.8em;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  border-radius: 5px;
  color: #ffffff;
}
.lx-load-content {
  margin-top: 64%;
  font-size: 14px;
}
.lx-loading {
  position: absolute;
  width: 0px;
  left: 50%;
  top: 38%;
}
.loading_leaf {
  position: absolute;
  top: -1px;
  opacity: 0.25;
}
.loading_leaf:before {
  content: " ";
  position: absolute;
  width: 9.14px;
  height: 3.08px;
  background: #d1d1d5;
  box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;
  border-radius: 1px;
  -webkit-transform-origin: left 50% 0px;
  transform-origin: left 50% 0px;
}
.loading_leaf_0 {
  -webkit-animation: opacity-0 1.25s linear infinite;
  animation: opacity-0 1.25s linear infinite;
}
.loading_leaf_0:before {
  -webkit-transform: rotate(0deg) translate(7.92px, 0px);
  transform: rotate(0deg) translate(7.92px, 0px);
}
.loading_leaf_1 {
  -webkit-animation: opacity-1 1.25s linear infinite;
  animation: opacity-1 1.25s linear infinite;
}
.loading_leaf_1:before {
  -webkit-transform: rotate(30deg) translate(7.92px, 0px);
  transform: rotate(30deg) translate(7.92px, 0px);
}
.loading_leaf_2 {
  -webkit-animation: opacity-2 1.25s linear infinite;
  animation: opacity-2 1.25s linear infinite;
}
.loading_leaf_2:before {
  -webkit-transform: rotate(60deg) translate(7.92px, 0px);
  transform: rotate(60deg) translate(7.92px, 0px);
}
.loading_leaf_3 {
  -webkit-animation: opacity-3 1.25s linear infinite;
  animation: opacity-3 1.25s linear infinite;
}
.loading_leaf_3:before {
  -webkit-transform: rotate(90deg) translate(7.92px, 0px);
  transform: rotate(90deg) translate(7.92px, 0px);
}
.loading_leaf_4 {
  -webkit-animation: opacity-4 1.25s linear infinite;
  animation: opacity-4 1.25s linear infinite;
}
.loading_leaf_4:before {
  -webkit-transform: rotate(120deg) translate(7.92px, 0px);
  transform: rotate(120deg) translate(7.92px, 0px);
}
.loading_leaf_5 {
  -webkit-animation: opacity-5 1.25s linear infinite;
  animation: opacity-5 1.25s linear infinite;
}
.loading_leaf_5:before {
  -webkit-transform: rotate(150deg) translate(7.92px, 0px);
  transform: rotate(150deg) translate(7.92px, 0px);
}
.loading_leaf_6 {
  -webkit-animation: opacity-6 1.25s linear infinite;
  animation: opacity-6 1.25s linear infinite;
}
.loading_leaf_6:before {
  -webkit-transform: rotate(180deg) translate(7.92px, 0px);
  transform: rotate(180deg) translate(7.92px, 0px);
}
.loading_leaf_7 {
  -webkit-animation: opacity-7 1.25s linear infinite;
  animation: opacity-7 1.25s linear infinite;
}
.loading_leaf_7:before {
  -webkit-transform: rotate(210deg) translate(7.92px, 0px);
  transform: rotate(210deg) translate(7.92px, 0px);
}
.loading_leaf_8 {
  -webkit-animation: opacity-8 1.25s linear infinite;
  animation: opacity-8 1.25s linear infinite;
}
.loading_leaf_8:before {
  -webkit-transform: rotate(240deg) translate(7.92px, 0px);
  transform: rotate(240deg) translate(7.92px, 0px);
}
.loading_leaf_9 {
  -webkit-animation: opacity-9 1.25s linear infinite;
  animation: opacity-9 1.25s linear infinite;
}
.loading_leaf_9:before {
  -webkit-transform: rotate(270deg) translate(7.92px, 0px);
  transform: rotate(270deg) translate(7.92px, 0px);
}
.loading_leaf_10 {
  -webkit-animation: opacity-10 1.25s linear infinite;
  animation: opacity-10 1.25s linear infinite;
}
.loading_leaf_10:before {
  -webkit-transform: rotate(300deg) translate(7.92px, 0px);
  transform: rotate(300deg) translate(7.92px, 0px);
}
.loading_leaf_11 {
  -webkit-animation: opacity-11 1.25s linear infinite;
  animation: opacity-11 1.25s linear infinite;
}
.loading_leaf_11:before {
  -webkit-transform: rotate(330deg) translate(7.92px, 0px);
  transform: rotate(330deg) translate(7.92px, 0px);
}
@-webkit-keyframes opacity-0 {
  0% {
    opacity: 0.25;
  }
  0.01% {
    opacity: 0.25;
  }
  0.02% {
    opacity: 1;
  }
  60.01% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}
@-webkit-keyframes opacity-1 {
  0% {
    opacity: 0.25;
  }
  8.34333% {
    opacity: 0.25;
  }
  8.35333% {
    opacity: 1;
  }
  68.3433% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}
@-webkit-keyframes opacity-2 {
  0% {
    opacity: 0.25;
  }
  16.6767% {
    opacity: 0.25;
  }
  16.6867% {
    opacity: 1;
  }
  76.6767% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}
@-webkit-keyframes opacity-3 {
  0% {
    opacity: 0.25;
  }
  25.01% {
    opacity: 0.25;
  }
  25.02% {
    opacity: 1;
  }
  85.01% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}
@-webkit-keyframes opacity-4 {
  0% {
    opacity: 0.25;
  }
  33.3433% {
    opacity: 0.25;
  }
  33.3533% {
    opacity: 1;
  }
  93.3433% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}
@-webkit-keyframes opacity-5 {
  0% {
    opacity: 0.270958333333333;
  }
  41.6767% {
    opacity: 0.25;
  }
  41.6867% {
    opacity: 1;
  }
  1.67667% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.270958333333333;
  }
}
@-webkit-keyframes opacity-6 {
  0% {
    opacity: 0.375125;
  }
  50.01% {
    opacity: 0.25;
  }
  50.02% {
    opacity: 1;
  }
  10.01% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.375125;
  }
}
@-webkit-keyframes opacity-7 {
  0% {
    opacity: 0.479291666666667;
  }
  58.3433% {
    opacity: 0.25;
  }
  58.3533% {
    opacity: 1;
  }
  18.3433% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.479291666666667;
  }
}
@-webkit-keyframes opacity-8 {
  0% {
    opacity: 0.583458333333333;
  }
  66.6767% {
    opacity: 0.25;
  }
  66.6867% {
    opacity: 1;
  }
  26.6767% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.583458333333333;
  }
}
@-webkit-keyframes opacity-9 {
  0% {
    opacity: 0.687625;
  }
  75.01% {
    opacity: 0.25;
  }
  75.02% {
    opacity: 1;
  }
  35.01% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.687625;
  }
}
@-webkit-keyframes opacity-10 {
  0% {
    opacity: 0.791791666666667;
  }
  83.3433% {
    opacity: 0.25;
  }
  83.3533% {
    opacity: 1;
  }
  43.3433% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.791791666666667;
  }
}
@-webkit-keyframes opacity-11 {
  0% {
    opacity: 0.895958333333333;
  }
  91.6767% {
    opacity: 0.25;
  }
  91.6867% {
    opacity: 1;
  }
  51.6767% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.895958333333333;
  }
}

table {
  width: 100%;
  /* margin: 20px; */
}

td,
th {
  border: 1px solid #bcbcbc;
  padding: 5px 10px;
}

th {
  background: #42b983;
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
}

tr:nth-of-type(odd) {
  background: #fff;
}

tr:nth-of-type(even) {
  background: #eee;
}

fieldset {
  border: 1px solid #bcbcbc;
  padding: 15px;
}

input {
  outline: none;
}

input[type="text"] {
  border: 1px solid #ccc;
  padding: 0.5rem 0.3rem;
}

input[type="text"]:focus {
  border-color: #42b983;
}

// button {
//   outline: none;
//   padding: 5px 8px;
//   color: #fff;
//   border: 1px solid #bcbcbc;
//   border-radius: 3px;
//   background-color: #009a61;
//   cursor: pointer;
// }
// button:hover {
//   opacity: 0.8;
// }

#app {
  margin: 0 auto;
  max-width: 480px;
}

#searchBar {
  margin: 10px;
  padding-left: 20px;
}

#searchBar input[type="text"] {
  width: 80%;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>

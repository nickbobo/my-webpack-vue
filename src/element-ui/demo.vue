<template><div>
  <button @click="toshow">点击让子组件显示</button> 
<component v-bind:is="which_to_show" class="animated rotateInUpLeft" transition="bounce"></component>
    <h1>{{price}}</h1>
    <h1>{{price | myCurrency('￥')}}</h1>
    <p>{{msg | cal(10,20)}}</p>  <!--过滤器函数始终以表达式的值作为第一个参数。带引号的参数视为字符串，而不带引号的参数按表达式计算。-->
    <!-- <input type="text" v-model="msg"> 用户从input输入的数据在回传到model之前也可以先处理 -->
  </div>
</template>


<script type="text/javascript">
import { mapState, mapMutations } from "vuex";

// import { updateMessage } from "../service/getData";
export default {
  activate(done) {
    console.log("car activate"); // missing: no trigger
    done();
  },
  data() {
    return {
      msg: this.$store.state.obj.message,
      path: this.$route.path,
      which_to_show: "first",
      message: this.$store.state.obj.message,
      price: 356
      // query:this.$route.query,
      // matched:this.$route.matched,
    };
  },
  watch: {
    "$store.state.obj.message"(to, from) {
      // console.info(this)
      // let isBack = this.$router.isBack
      // console.info("123:",isBack);
      // if (isBack) {
      //   this.transitionName = 'slide-right'
      // } else {
      //   this.transitionName = 'slide-left'
      // }
      // this.$router.isBack = false
    }
  },

  mounted() {
    console.info(this);
    // this.$on(this.$router,function(){
    //   console.info(11)
    // })
    // alert(111)
    // console.info(this.$store.state.obj.message)
    //router.push({name: 'index',params:{username:'张三'}});
  },
  //过滤器的本质 就是一个有参数有返回值的方法
  filters: {
    change:function(value){
      return value
    },
    myCurrency: function(myInput, arg1) {
      // console.log(arg1);
      //根据业务需要，对传来的数据进行处理
      // 并返回处理后的结果
      var result = arg1 + myInput;
      return result;
    },
    cal: function(myInput, arg1) {
      // console.log(arg1);
      //根据业务需要，对传来的数据进行处理
      // 并返回处理后的结果
      var result = arg1 + myInput;
      return result;
    }
  },
  methods: {
    ...mapMutations(
      ["UPDATE_MESSAGE"]
      //       {
      //     message:state => state.obj.message
      // }
    ),
    toshow() {
      var arr = ["first", "second", "third"];
      var index = arr.indexOf(this.which_to_show);
      if (index < 2) {
        this.which_to_show = arr[index + 1];
      } else {
        this.which_to_show = arr[0];
      }
    },

    updateMessages(e) {
      //接口调用
      // let msg = updateMessage(this.$store.state, e.target.value);
      // this.$store.commit('updateMessage',e.target.value)
      let obj = {
        message: e.target.value
      };
      this.UPDATE_MESSAGE(obj);
      this.message = this.$store.state.obj.message;
      this.msg = this.$store.state.obj.message;
    }
  },

  //-----------------------------华丽分割线（自定义组件切换）--------------------------------
  components: {
    first: {
      template: "<div>组件1</div>"
    },
    second: {
      template: "<div>组件2 {{hello}}</div>",
      deactivated() {
        console.info(111);
      },
      data() {
        return {
          hello: "123"
        };
      }
    },
    third: {
      template: "<div>组件3</div>"
    }
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
</style>
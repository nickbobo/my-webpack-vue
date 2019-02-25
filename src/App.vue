<template>
  <div id="app">
    <mt-header v-show = "header_stata"  :title="title">
        <mt-button  slot="left"  icon="back" @click.native="goBack"></mt-button>
      <mt-button slot="right" icon="more"></mt-button>
    </mt-header>


    <div class="page-tabbar" >
          <li v-for = "(item,index) in List" :key="index" @click="onSelect(item.id)" v-bind:class="{active: item.isSeclected}">  
          <router-link :to="item.path">{{item.title}}</router-link></li>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>  
  </div>
</template>

<script>
let myFirstPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("1212"); 
    }, 1250);
});
myFirstPromise.then(function(successMessage){
    console.log("Yay! " + successMessage);
});

  import {mapState,mapMutations} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      header_stata:true,
      show: false,
      hide:false,
      title:this.$store.state.title_name,
      selected: 2,
      id:1,
      List:[{
        id:1,
        title:'首页',
        path:'/component',
      },{
        id:2,
        title:'elementUi',
        path:'/elementUi',
      },{
        id:3,
        title:'mintUi',
        path:'/mintUi',
      }]
    }
  },
  watch:{
    '$store.state.title_name'(to,from) {
      this.title = this.$store.state.title_name;
    }
  },
  moutend(){
    // console.info(this)
  },
  methods:{
    ...mapMutations(['UPDATE_TITLE']),
    onSelect:function(i){
      this.id=i-1;
      this.UPDATE_TITLE({title:this.List[i-1].title});
    },
    isItemSelected: function (item_id) {
      var self = this;
      if (undefined == self.fetchedItems[item_id]) {
          return false;
      }
      return self.fetchedItems[item_id].isSeclected;

    },
    goBack(){
      this.goBack;

    },
    goBack() {
      history.go(-1);
      this.UPDATE_TITLE({title:this.List[this.id].title});
    },
  }
}
</script>

<style>
.router-link-exact-active.router-link-active{
  color: #13CE66;
}
.center{
  margin-top: 50px;
}
.mint-tab-item-label{
      height: 35px;
    line-height: 35px;
    font-size: 20px;
}
  .page-tabbar {
    position: fixed;
    /* bottom: 0; */
    width: 100%;
    margin-bottom: 0;
    bottom: 0;
    height: 40px;
    z-index: 999;
    
    background: #26a2ff;
  }
  .page-tabbar a{
    color: #fff;
    height: 40px;
    width: 100%;
    text-align: center;
    display: -webkit-box;
    -webkit-box-pack: center;
  }
.page-tabbar li {
    width: 33%;
    margin: 0;
    border: 0px;
    float: left;
    display: block;
        height: 40px;
    line-height: 40px;
}
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
body{
    margin: 0;}
.buttom{
    width: 100%;
    position: fixed;
    bottom: 0px;
    left:0px;    
    padding: 0;
    margin: 0;
        z-index: 999;
    background: #ddded7;
}
.buttom li{
      line-height: 45px;
  height:45px;
}

.box-card{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
    position: absolute;
    width: 100%;
    top: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}
#router{
}   
.fade-enter, .fade-leave-to {
  opacity: 0
}

.demo{
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
    /*overflow-x: auto;*/

}
.transition_show,.transition_shows{
  margin-left:50%;
  margin-top: -30px;
  width:100px;
}

.demo_title{
  height:300px;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}

.hide{
  display:none;
}


.Router {
position: absolute;
width: 100%;
transition: all .9s ease;
top: 0px;
left:0px;

height:100%;
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











.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
  position: absolute;
  top: 50px;
  width: 100%;
  margin-bottom: 50px;
  background: white;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}



.mint-header{
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;
  z-index: 9999;
}

h1.mint-header-title{
  font-size: 20px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  margin: 0;
}
.mint-header-button.is-right{
  height: 40px;
}
.mint-header .mint-button{
  height: 40px;
}

</style>


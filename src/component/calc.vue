<template>
  <div id = "calc">
<!--      <mt-header fixed title="calc">
        <mt-button  slot="left"  icon="back" @click.native="goBack"></mt-button>
      <mt-button slot="right" icon="more"></mt-button>
    </mt-header> 
 -->
    <div>
      <!-- <h1>calc</h1> -->
      <ul>
        <li v-for="(item,index) in items" :key="index" @click="onActive(item)" :class="{'active':item.active}">
          {{item.name}} 
          <span>
              {{item.price}}
          </span>
        </li>
      </ul>
      <p>Total: <span>{{total()}}</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    name:'calc',
    data() {
      return{
        //currency:0,
        items:[{
          name:'web',
          price:300,
          active:false
        },{
          name:'web2',
          price:400,
          active:false
        },{
          name:'web3',
          price:500,
          active:false
        },{
          name:'web4',
          price:600,
          active:false
        },{
          name:'web5',
          price:700,
          active:false
        }]
      }
    },
    methods:{
      onActive:function(i){
        i.active = !i.active;
      },
      total:function(){
        var total = 0;
        this.items.forEach( function(s){
          if(s.active){
            total+=s.price;
          }
        });
        return total;
      },
      goBack(){
        this.goBack;
      },
      goBack() {
        history.go(-1);
      },
    }
  }

</script>

<style type="text/css">
  
/*  .active{
    background: #456;
    color:#000;
  }
*/
#calc .return{
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: left;
    background-color: #d6d6d6;
    margin: 0px auto;
    padding: 0;
    padding-left: 10px;
}
#calc{
  width: 100%;
  font-size:20px;
}

#calc li{list-style:none;}
/*#calc div{
    width:400px;
    background-color:#61a1bc;
    margin:50px auto;
    padding:35px 60px;
}*/
#calc h1{
    /*font-size:44px;*/
    text-align:center; 
}
#calc ul{
    font-size:20px;
    text-align:left;
    margin:20px 0 15px;
}
#calc ul li{
    padding:20px 0px;
  background-color:#e35885;
      padding-left: 100px;

  cursor:pointer;
  margin:0;
    margin-bottom:8px;
  width:100%;
}
#calc ul li span{    right: 100px;
    color: #fff;
    margin-left: 0;
    position: absolute;}
#calc ul li.active{
    background-color:#8ec16d;
}
#calc p{
    border-top:1px solid rgba(255,255,255,0.5);
  padding:15px 30px;
  font-size:20px;
  text-align: left;
}
#calc p span{float:right;}

</style>
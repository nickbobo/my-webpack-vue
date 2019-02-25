
<template>
  <div id = "iscroll" >



<div class="container">
  <div class="jumbotron">
    <h1>我的第一个 Bootstrap 页面</h1>
    <p>重置窗口大小，查看响应式效果！</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>学的不仅是技术，更是梦想！</p>
      <p>再牛逼的梦想,也抵不住你傻逼似的坚持！</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>学的不仅是技术，更是梦想！</p>
      <p>再牛逼的梦想,也抵不住你傻逼似的坚持！</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3> 
      <p>学的不仅是技术，更是梦想！</p>
      <p>再牛逼的梦想,也抵不住你傻逼似的坚持！</p>
    </div>
  </div>
</div>



    <div class="container">
      <h2>表格</h2>
      <p>创建响应式表格 (将在小于768px的小型设备下水平滚动)。另外：添加交替单元格的背景色：</p>      
      <div class="table-responsive">          
       <table class="table table-striped table-bordered">
         <thead>
           <tr>
             <th>#</th>
             <th>Name</th>
             <th>Street</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>1</td>
             <td>Anna Awesome</td>
             <td>Broome Street</td>
           </tr>
           <tr>
             <td>2</td>
             <td>Debbie Dallas</td>
             <td>Houston Street</td>
           </tr>
           <tr>
             <td>3</td>
             <td>John Doe</td>
             <td>Madison Street</td>
           </tr>
         </tbody>
       </table>
      </div>
    </div>



      <h2>图像</h2>
      <p>创建响应式图片(将扩展到父元素)。 另外：图片以椭圆型展示：</p>            
      <!-- <img src="http://www.runoob.com/try/demo_source/cinqueterre.jpg" class="img-responsive img-circle" alt="Cinque Terre" width="304" height="236">   -->
      <img src="http://www.runoob.com/try/demo_source/cinqueterre.jpg" class="testimg img-rounded">
      <h4>img-rounded</h4>
      <img src="http://www.runoob.com/try/demo_source/cinqueterre.jpg" class="testimg img-circle">
      <h4>img-circle</h4>
      <img src="http://www.runoob.com/try/demo_source/cinqueterre.jpg" class="testimg img-polaroid">
      <h4>img-polaroid</h4>


    <div class="btn-toolbar">
      <h2>图标</h2>
      <p>插入图标:</p>      
      <p>云图标: <span class="glyphicon glyphicon-cloud"></span></p>      
      <p>信件图标: <span class="glyphicon glyphicon-envelope"></span></p>            
      <p>搜索图标: <span class="glyphicon glyphicon-search"></span></p>
      <p>打印图标: <span class="glyphicon glyphicon-print"></span></p>      
      <p>下载图标：<span class="glyphicon glyphicon-download"></span></p>  
    </div>
    <div class="btn-toolbar">
      <!-- <div class="btn-group"> -->
        <a class="btn" href="#"><i class="glyphicon glyphicon-align-left"></i></a>
        <a class="btn" href="#"><i class="glyphicon glyphicon-align-center"></i></a>
        <a class="btn" href="#"><i class="glyphicon glyphicon-align-right"></i></a>
        <a class="btn" href="#"><i class="glyphicon glyphicon-align-justify"></i></a>
      <!-- </div> -->
    </div>

<div class="btn-toolbar">
  <h2>布局</h2>
  <small>本行内容是在标签内</small><br>
  <strong>本行内容是在标签内</strong><br>
  <em>本行内容是在标签内，并呈现为斜体</em><br>
  <p class="text-left">向左对齐文本</p>
  <p class="text-center">居中对齐文本</p>
  <p class="text-right">向右对齐文本</p>
  <p class="text-muted">本行内容是减弱的</p>
  <p class="text-primary">本行内容带有一个 primary class</p>
  <p class="text-success">本行内容带有一个 success class</p>
  <p class="text-info">本行内容带有一个 info class</p>
  <p class="text-warning">本行内容带有一个 warning class</p>
  <p class="text-danger">本行内容带有一个 danger class</p>
  <p>使用 <kbd>ctrl + p</kbd> 来打开打印窗口。</p>
</div>


  <h2>代码</h2>
  <p><var>X</var> = <var>a</var><var>b</var> + <var>y</var></p>
  <p>使用 code 元素来表示代码片段:</p>
  <p>以下是 HTML 元素: <code>span</code>, <code>section</code>, 和 <code>div</code> 。</p>
    <div class="container">
  <h2>代码</h2>
  <p>使用 pre 元素输出多行:</p>
  <pre>在 pre 元素中的文本
  宽度的显示与文本的宽度一样，
  保留了  空  格 和

  换行。</pre>
  <p>如果你添加 .pre-scrollable 类,  pre 元素最大的高度 max-height 为 350px ，并生成一个 Y 轴的滚动条:</p>
  <pre class="pre-scrollable">在 pre 元素中的文本
  宽度的显示与文本的宽度一样，
  保留了  空  格 和

  换行。</pre>
</div>

<div class="table-responsive">
<h3>上下文表格布局</h3>

  <table class="table">
        <thead>
      <tr>
        <td>类</td>
        <td>描述</td></tr>
    </thead>
    <tbody>
      <tr class="active">
      <td>.active</td>
        <td>对某一特定的行或单元格应用悬停颜色</td></tr>
      <tr class="success">
      <td>.success</td>
        <td>  表示一个成功的或积极的动作</td></tr>
      <tr class="warning">
      <td>.warning</td>
        <td>表示一个需要注意的警告</td></tr>
      <tr class="danger">
      <td>.danger</td>
        <td>表示一个危险的或潜在的负面动作</td></tr>
    </tbody>
  </table>
</div>
<div class="table-responsive">
<h3>响应式表格布局</h3>
  <table class="table">
    
    <thead>
      <tr>
        <td>产品</td>
        <td>付款日期</td>
        <td>状态</td></tr>
    </thead>
    <tbody>
      <tr>
        <td>产品1</td>
        <td>23/11/2013</td>
        <td>待发货</td></tr>
      <tr>
        <td>产品2</td>
        <td>10/11/2013</td>
        <td>发货中</td></tr>
      <tr>
        <td>产品3</td>
        <td>20/10/2013</td>
        <td>待确认</td></tr>
      <tr>
        <td>产品4</td>
        <td>20/10/2013</td>
        <td>已退货</td></tr>
    </tbody>
  </table>
</div>
<form role="form">
  <div class="form-group">
    <label for="name">名称</label>
    <input type="text" class="form-control" id="name" 
         placeholder="请输入名称">
  </div>
  <div class="form-group">
    <label for="inputfile">文件输入</label>
    <input type="file" id="inputfile">
    <p class="help-block">这里是块级帮助文本的实例。</p>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> 请打勾
    </label>
  </div>
  <button type="submit" class="btn btn-default">提交</button>
</form>

<div class="dropdown">
    <button type="button" class="btn dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">主题
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
        <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">Java</a>
        </li>
        <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">数据挖掘</a>
        </li>
        <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">数据通信/网络</a>
        </li>
        <li role="presentation" class="divider"></li>
        <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">分离的链接</a>
        </li>
    </ul>
</div>
<!-- Button to trigger modal -->

<!--     <div class="center">
      <h1>mint-ui iscroll</h1>

      <mt-actionsheet
        cancel-text=""
        :actions="actions"
        v-model="sheetVisible">
      </mt-actionsheet>
      <mt-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></mt-actionsheet>
    </div> -->
  </div>
</template>

<script>

  import { addUser } from '../service/getData'
  import {takePhoto,openAlbum,goBack,Indicator} from 'mint-ui'
  
  import {mapState,mapMutations} from 'vuex'



  export default {
    name: 'mintui',
    data() {
      return {
        sheetVisible: false,
        sheetVisible2: false,
        actions: [],
        actions2: []
      };
    },
    computed: {
        ...mapState([
            'userInfo'
        ]),
    },
    mounted(){
      this.actions = [{
        name: '拍照',
        method: this.takePhoto
      }, {
        name: '从相册中选择',
        method: this.openAlbum
      }];

      this.actions2 = [{
        name: '确定'
      }, {
        name: '返回上一步',
        method: this.goBack
      }];

      // console.info(this.user)

      
      this.getList("11",1)

      // this.ADD_USER();
       // console.info(this.user)
        if(this.user){
          console.info(this.user)
        this.user.name='张三';
        this.user.sex='男';
            this.getList(this.user);
        }else{
            console.log(this.user)
        }
    },

    methods: {
      ...mapMutations([
        'ADD_USER','UPDATE_MESSAGE'
      ]),
      getList(user){
        // this.state =  addUser(user);
        this.UPDATE_MESSAGE({message:'321'});
        
        console.info('-->>',this.$store.state);

        // this.$router.push('/mintUi');
      },
        //  async getList(orderid){
        //     // this.feedlist=await getFeedbackList(orderid);
        //     console.log(this.feedlist);
        // },

      takePhoto() {
        console.log('taking photo');
      },

      openAlbum() {
        console.log('opening album');
      },


      openIndicator(){
        Indicator.open({text:"加载中...",spinnerType:'fading-circle'});
        setTimeout(() => Indicator.close(),2000);
      },

    }
  };
</script>

<style type="text/css">
  #mintui{
    width: 100%;
         
  }
  .mitui{
    font-family: 'Avenir', Helvetica, Arial, sans-serif; 
  }
  .mint-actionsheet-listitem{
    margin-left:0px;
  }
  .testimg{
    width: 10rem;
  }
</style>
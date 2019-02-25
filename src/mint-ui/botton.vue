<template>
  <div id = "mintui" class="mintui">


<!--   <mt-header fixed title="仅图标">
      <mt-button  slot="left"  icon="back" @click.native="goBack"></mt-button>
    <mt-button slot="right" icon="more"></mt-button>
  </mt-header> -->


<div class="center">
  <h1>mint-ui_Action Sheet</h1>
  <mt-button
    @click.native="sheetVisible = true" size="large">
    选择操作
  </mt-button>
  <mt-button @click.native="
    sheetVisible2 = true" 
    size="large">不带取消按钮的 action sheet
  </mt-button>

  <mt-button
    @click.native="openIndicator" size="large">
    点击弹出 Indicator
  </mt-button>


  <mt-actionsheet
    cancel-text=""
    :actions="actions"
    v-model="sheetVisible">
  </mt-actionsheet>
  <mt-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></mt-actionsheet>
  </div>
</div>
</template>

<script>
  import { takePhoto, openAlbum,goBack ,Indicator  } from 'mint-ui';
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
    },
    methods: {
      goBack(){
        this.goBack;
      },
      takePhoto() {
        console.log('taking photo');
      },

      openAlbum() {
        console.log('opening album');
      },

      goBack() {
        history.go(-1);
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
  .mint-actionsheet-listitem{
    margin-left:0px;
  }
</style>
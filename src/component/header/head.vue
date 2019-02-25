<template>
    <div id="mit-ui_demo" class="mintui">
         <mt-header fixed title="仅图标">
            <mt-button  slot="left"  icon="back" @click.native="goBack"></mt-button>
          <mt-button slot="right" icon="more"></mt-button>
        </mt-header> 
    </div>
</template>
<script>
import { goBack } from 'mint-ui';
import { navs } from '../js/route';
export default {
    name: 'mintui',
    data() {
        return {
        };
    },
    // created() {
    //     this.navs = navs;
    // },
    methods:{
      goBack(){
        this.goBack;
      },
      goBack() {
        history.go(-1);
      }
    }

};
</script>
<style type="text/css">
#mintui {
    width: 100%;
}

.mint-actionsheet-listitem {
    margin-left: 0px;
}

.page-title {
    font-size: 20px;
    margin: 20px auto;
    text-align: center;
    display: block;
    line-height: 1;
}

.mint-cell-title {
    text-align: left;
}

span {
    font-family: Helvetica Neue, Helvetica, STHeiTi, Arial, sans-serif;
}
</style>

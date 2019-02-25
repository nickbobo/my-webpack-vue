<template>
  <div id = "iscroll" class="mintui">

    <div class="center">
      <div v-iscroll="getIscroll" id="scroll">
        <div>
          <div>TEXT1</div>
          <div>TEXT2</div>
          <div>TEXT3</div>
          <div>TEXT4</div>
          <div>TEXT5</div>
          <div>TEXT6</div>
          <div>TEXT7</div>
          <div>TEXT8</div>
          <div>TEXT9</div>
        </div>    
      </div>
    </div>
  </div>
</template>

<script>
  import { takePhoto, openAlbum,goBack ,Indicator  } from 'mint-ui';
  export default {
    name: 'mintui',
    data() {
      return {
        title:true
      };
    },
    methods: {
      getIscroll(iscroll) {
          if (iscroll) {
              iscroll.on('scrollStart', function() {
                console.info(this.maxScrollY - this.y)
            })
          }
      }
    }
  }
</script>

<style type="text/css">
  #mintui{
    width: 100%;
  }
  .mint-actionsheet-listitem{
    margin-left:0px;
  }
  #scroll {
  height: 4rem;
  font-size: 1rem;
  overflow: hidden;
}
</style>
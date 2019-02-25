<template>
  <div id="firstcomponent">
    <el-card class="box-card">
      <h5>组件firstcomponent{{this.$route.query.num}}</h5>
    </el-card>
  </div>
</template>
<script type="text/javascript">
import Vue from "vue";
Vue.component("button-counters", {
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function() {
    return {
      counter: 12
    };
  },
  methods: {
    increment: function() {
      this.counter += 1;
      this.$emit("increment");
    }
  }
});

export default {
  name: "firstcomponent",
  data() {
    return {
      total: 0,
      author: "微信公众号 战宇"
    };
  },
  methods: {
    incrementTotal: function() {
      this.total += 1;
    },
    goback: function() {
      this.$router.goBack();
    }
  }
};
</script>

<style type="text/css">
#firstcomponent {
  width: 100%;
  left: 0;
  top: 50px;
}
</style>
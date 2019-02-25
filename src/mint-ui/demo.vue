<template>
  <div id="mit-ui_demo" class="mintui">
    <div class="center">
      <h1>mint-ui_Demo</h1>
      <div v-for="(item,index) in list " :key="index" @click="onSelect(item.id)">
        <router-link class="mint-cell" :to="{path:item.path,query:{num:1}}">
          <span class="mint-cell-mask"></span>
          <div class="mint-cell-wrapper">{{item.title}}</div>
          <i class="mint-cell-allow-right"></i>
        </router-link>
      </div>
      <a href="http://localhost:63342/api/es6api/index.html">es6 api</a>
      <mt-button @click.native="sheetVisible2 = true" size="large">mint-ui_Action Sheet</mt-button>
    </div>
  </div>
</template>
<script>
import { takePhoto, openAlbum, goBack, Indicator } from "mint-ui";
import { mapState, mapMutations } from "vuex";
import { logins,updateMessage } from "../service/getData"
import { navs } from "../js/route";
export default {
  name: "mintui",

  data() {
    return {
      sheetVisible: false,
      sheetVisible2: false,
      actions: [],
      actions2: [],
      navs: [],
      list: [
        {
          id: 1,
          title: "iscroll",
          path: "/mintUi/iscroll"
        },
        {
          id: 2,
          title: "bootstrap",
          path: "/mintUi/bootstraptest"
        },
        {
          id: 3,
          title: "mituibotton",
          path: "/mintUi/mituibotton"
        },
        {
          id: 4,
          title: "calc",
          path: "/component/calc"
        },
        {
          id: 4,
          title: "豆瓣电影排行",
          path: "/component/secondcomponent"
        }
      ]
    };
  },
  mounted() {
    // this.login;
    console.info(logins());
  },
  created() {
    this.navs = navs;
  },
  methods: {
    ...mapMutations(["UPDATE_TITLE"]),
    onSelect: function(id) {
      this.UPDATE_TITLE({ title: this.list[id - 1].title });
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

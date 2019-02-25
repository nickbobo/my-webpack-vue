<template>
  <div id="secondcomponent">
    <el-card class="box-card">
      <!-- <h5>组件secondcomponent{{this.$route.query.num}}</h5> -->
      <!-- <a href="http://www.baidu.com">written by {{author}}</a> -->
      <div slot="header" class="clearfix">
        <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h1>
      </div>
      <div v-for="(article,index) in articles" :key="index" class="text item">
        <div @click="openUrl(article.url)">
          <el-card class="box-card">{{article.title}}</el-card>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "secondcomponent",
  props: {
    index: { default: 0 },
    isShow: {
      default: true
    }
  },
  data() {
    return {
      author: "hello",
      articles: [
        {
          title: "看「变形金刚5」前的功课，我都给你做好了",
          url: "http://mp.weixin.qq.com/s/fVZ6uk5dlVKpYb6YXK5PIw"
        },
        {
          title:
            "《变形金刚》前世今生—电影宇宙 在争议中突飞猛进 在票房上高奏凯歌",
          url: "http://murl.tv/jdGe"
        },
        {
          title: "《变形金刚》前世今生—中国故事 从“假想敌”到“合作伙伴” ",
          url: "http://murl.tv/jbEy"
        },
        {
          title: "《变形金刚》前世今生—传奇诞生 伟大始于一场“偶遇” ",
          url: "http://murl.tv/j9CE"
        },
        {
          title: "迈克尔·贝：电影是拍给观众而非影评人看",
          url: "http://mp.weixin.qq.com/s/s3-39G6wkF0ZwDdOTBJySg"
        },
        {
          title: "30年过去了，你真的看懂[变形金刚]了吗？",
          url: "http://mp.weixin.qq.com/s/1FvXbu4kmwlRUbiUHWacZQ"
        }
      ]
    };
  },
  mounted: function() {
    // this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
    //     headers: {
    //     },
    //     emulateJSON: true
    // }).then(function(response) {
    //   // 这里是处理正确的回调
    //     this.articles = response.data.subjects
    //     // this.articles = response.data["subjects"] 也可以
    // }, function(response) {
    //     // 这里是处理错误的回调
    //     console.log(response)
    // });
  },
  methods: {
    goback1: function() {
      this.$router.goBack();
    },
    openUrl: function(url) {
      window.location.href = url;
    }
  }
};
</script>
<style type="text/css">
#secondcomponent {
  width: 100%;
  left: 0;
  top: 50px;
}
</style>
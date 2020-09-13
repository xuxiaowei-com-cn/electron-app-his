<template>

  <!-- 外层容器-架构 -->
  <el-container id="app-layout-container">

    <!-- 侧边栏容器 -->
    <el-aside id="app-aside" v-show="this.$store.state.appAside" width="auto">
      <XxwAside/>
    </el-aside>

    <!-- 外层容器-主内容 -->
    <el-container id="app-container">

      <!-- 顶栏容器 -->
      <el-header id="app-header" v-show="this.$store.state.appHeader">
        <XxwHeader/>
      </el-header>

      <!-- 主要区域容器 -->
      <el-main id="app-main">
        <!-- 主内容头部 -->
        <router-view name="Header"/>
        <!-- 主内容 -->
        <router-view name="Index"/>
        <!-- 主内容公共部分 -->
        <router-view name="Common"/>
        <!-- 主内容脚部 -->
        <router-view name="Footer"/>
      </el-main>

      <!-- 脚部 -->
      <el-footer id="app-footer" v-show="this.$store.state.appFooter">
        <span id="copyright">&copy;&nbsp;2020&nbsp;</span>
        <el-link href="http://xuxiaowei.com.cn" target="_blank">徐晓伟工作室</el-link>
        <el-link href="http://beian.miit.gov.cn" target="_blank">鲁ICP备19009036号-1</el-link>
      </el-footer>

    </el-container>

  </el-container>
</template>

<script>
import XxwAside from '../src/views/layout/xxw-aside.vue';
import XxwHeader from '../src/views/layout/xxw-header.vue';

export default {
  name: 'App',
  components: {
    XxwAside,
    XxwHeader,
  },
}
</script>

<style scoped lang="scss">
@import "css/style.scss";

/* 全局样式/外层容器-架构 */
#app-layout-container {
  font-family: $font-family;
  /* Webkit 引擎：抗锯齿很好 */
  -webkit-font-smoothing: antialiased;
  /* Gecko 引擎：抗锯齿很好 */
  -moz-osx-font-smoothing: grayscale;
  color: $color;

  /* 侧边栏容器 */
  #app-aside {
    /* 隐藏 X 轴 */
    overflow-x: hidden;
  }

  /* 外层容器-主内容 */
  #app-container {

    /* 顶栏容器 */
    #app-header {
      height: 40px !important;
    }

    /* 脚部 */
    #app-footer {
      text-align: center;

      /* 版权 */
      #copyright {
        color: $span-color;
      }

    }
  }
}

</style>

<style scoped lang="sass">

</style>

<style>

</style>

<template>

  <!-- 外层容器-架构 -->
  <el-container id="app-layout-container">

    <!-- 侧边栏容器 -->
    <el-aside id="app-aside" v-show="true" width="auto">
      侧边栏容器
    </el-aside>

    <!-- 外层容器-主内容 -->
    <el-container id="app-container">

      <!-- 顶栏容器 -->
      <el-header id="app-header" v-show="true">
        顶栏容器
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
      <el-footer id="app-footer" v-show="true">
        <span>&copy;&nbsp;2020&nbsp;</span>
        <el-link href="http://xuxiaowei.com.cn" target="_blank">徐晓伟工作室</el-link>
        <el-link href="http://beian.miit.gov.cn" target="_blank">鲁ICP备19009036号-1</el-link>
      </el-footer>

    </el-container>

  </el-container>
</template>

<style scoped lang="scss">

</style>

<style scoped lang="scss">

</style>

<style>

</style>

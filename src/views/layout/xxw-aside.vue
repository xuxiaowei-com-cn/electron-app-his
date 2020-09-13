<template>
  <el-container id="xxw-aside-layout-container">
    <!--
        default-active：当前激活菜单的 index
        collapse：是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
        router：是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
        unique-opened：是否只保持一个子菜单的展开
        open：sub-menu 展开的回调
        close：sub-menu 收起的回调
     -->
    <el-menu :default-active="this.$store.state.appAsideDefaultActive"
             :collapse="this.$store.state.appAsideCollapse"
             :router="true"
             :unique-opened="true"
             class="el-menu-vertical-demo"
             @open="menuOpen"
             @close="menuClose">
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-postcard"></i>
          <span slot="title">门诊医生站</span>
        </template>
        <el-menu-item index="/opd">门诊医生站</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-wallet"></i>
          <span slot="title">住院医生站</span>
        </template>
        <el-menu-item index="/ipd">住院医生站</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-notebook-1"></i>
          <span slot="title">护士站</span>
        </template>
        <el-menu-item index="/nd">护士站</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-container>
</template>

<script>
export default {
  name: 'XxwAside',
  data() {
    return {};
  },
  methods: {
    menuOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    menuClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="scss">

.el-aside {

  /* 收起 左侧菜单过度，防止动画突变 */
  .el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  /* 左侧菜单 展开时最小宽度 */
  .el-menu-item {
    min-width: 200px;
  }

}

</style>

<style scoped lang="sass">

</style>

<style>

</style>

<template>
  <el-container id="xxw-aside-layout-container">
    <el-menu :default-active="this.$store.state.appAsideDefaultActive"
             :collapse="this.$store.state.appAsideCollapse"
             :router="true"
             :unique-opened="true"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose">
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
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="scss">

.el-aside {

  .el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-menu-item {
    min-width: 200px;
  }

}

</style>

<style scoped lang="sass">

</style>

<style>

</style>

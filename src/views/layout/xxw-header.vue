<template>
  <el-container id="xxw-aside-container">
    <i class="el-icon-s-fold appAsideCollapse"
       v-if="!this.$store.state.appAsideCollapse"
       @click="setAppAsideCollapse(true)"></i>
    <i class="el-icon-s-unfold appAsideCollapse"
       v-if="this.$store.state.appAsideCollapse"
       @click="setAppAsideCollapse(false)"></i>
  </el-container>
</template>

<script>
export default {
  name: 'XxwHeader',
  methods: {
    setAppAsideCollapse: function (value) {
      this.$store.commit('setAppAsideCollapse', value);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../css/style.scss";

#xxw-aside-container {
  .appAsideCollapse {
    font-size: 25px;
    line-height: 40px;
    cursor: pointer;
    color: $ico-color;
  }

  .appAsideCollapse:hover {
    color: $hover-color;
    border-color: $hover-border-color;
    background-color: $hover-background-color;
  }
}
</style>

<style scoped lang="sass">

</style>

<style>

</style>

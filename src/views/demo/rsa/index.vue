<template>
  <el-container id="rsa">
    <h2>Rsa</h2>
  </el-container>
</template>

<script>
require('jsencrypt/bin/jsencrypt.min');

export default {
  name: 'Rsa',
  created() {
   const jsencrypt = new JSEncrypt();
   jsencrypt.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCD5XD8TEL7d6EwN6WohUhLMPbx7LumqTY4hD0wHQDVB8QcOtyKiHTJEL+KnmY662gkDJnxiaeMUqX5c2AneXf3wLCYi6I8JmFqSNhOdxNdo/YvklPcmBAmxpW2grZdO4J2MWVykHrAMD07YJOKXDZcwe4HQgpoIH7hKvalcc4QnQIDAQAB')
   console.log(jsencrypt.encrypt('你好'));
  }
};
</script>

<style scoped lang="scss">

</style>

<style scoped lang="sass">

</style>

<style>

</style>

<template>
  <div class="index-show">
    <div class="box">
      <h1>使用说明</h1>
      <h3>在输入框中输入json文件名称，即可显示书签内容！</h3>
      <h4>sq1.json</h4>
      <h4>sq2.json</h4>
      <h4>sq3.json</h4>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  .index-show{
    height: calc(100vh - 60px);
    display: grid;
    justify-items: center;
    align-items: center;
  }
  .box{
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    text-align: center;
  }
  h4:hover{
    color: #ffc82e;
    cursor: pointer;
  }
</style>
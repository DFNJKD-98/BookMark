<template>
  <div class="group">
    <div class="group-title">
      <h3 :id="group['id']">{{group['title']}}</h3>
    </div>
    <div class="units">
      <unit v-for="unit in group['data']" :linkinfo="unit"/>
    </div>
  </div>
</template>

<script>
  import unit from "components/common/unit";
  export default {
      name: "UnitGroup",
      components: {
          unit
      },
      props: {
          group: Object
      }
  }
</script>

<style scoped>
  .group-title{
    margin: 10px auto 20px;
    padding: 14px 10% 4px;
    width: 40%;
    min-width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-bottom: 2px solid #2E1437;
  }
  .units{
    display: grid;
    grid-template-columns: repeat(auto-fill, 260px);
    grid-template-rows: repeat(auto-fill, 120px);
    grid-auto-columns: 260px;
    grid-auto-rows: 120px;
    align-items: center;
    justify-items: center;
    justify-content: space-around;
    align-content: center;
    gap: 20px;
  }
</style>
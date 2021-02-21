<template>
  <div class="one-tab">
    <div class="top"></div>
    <tab-bar @SearchUrl="flush" ref="tabBar" :groupsList="groupsList"/>
    <router-view name="index"/>
    <router-view name="group" v-for="group in groupsList" :group="group"/>
    <div id="bottom"></div>
  </div>
</template>

<script>
  import {request} from "network/request";
  import UnitGroup from "components/content/UnitGroup";
  import TabBar from "components/content/TabBar";

  export default {
      name: "BookMark",
      data(){
          return{
              groupsList: [],
              groupsLength: 0
          }
      },
      components: {
        UnitGroup,
        TabBar
      },
      methods: {
          flush(url){
              request({
              url: '/bookmark/'+ url+'.json'
          }).then(res => {
              this.groupsLength = res['data']['groupsLength'];
              this.groupsList = res['data']['groupsList'];
              alert('请求数据成功！');
          }).catch(err => {
              console.log(err);
              alert('请求数据失败！\n');
          })
          }
      }
    }
</script>

<style scoped>
  .one-tab{
    min-height: 100vh;
    padding-top: 60px;
    background: linear-gradient(200deg, #9b43af 1%, 15%, #cc2b5e 90%);
  }
</style>
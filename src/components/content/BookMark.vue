<template>
  <div class="one-tab">
    <div class="top"></div>
    <tab-bar @SearchUrl="flush" ref="tabBar" :groupsList="groupsList" :jsonNameList="jsonNameList"/>
    <router-view name="index"/>
    <router-view name="group" v-for="(group, index) in groupsList" :group="group" :key="index"/>
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
              groupsLength: 0,
              jsonNameList: [{'title': 'sq1'}]
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
          },
          jsonName(){
            request({
              url: '/jsonName.json'
            }).then((result) => {
              this.jsonNameList = result['data'];
            }).catch((err) => {
              console.log(err);
              throw err;
            });
          }
      },
      created(){
        this.jsonName();
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
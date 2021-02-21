<template>
  <nav class="fixed-top">
    <h3 class="web-title">DFNJKD98书签管理</h3>
    <div class="menu">
      <router-link to="index" tag="button">首页</router-link>
      <router-link to="group" tag="button">书签组</router-link>
      <hide-btn btnName="切换内容" :groupsList="jsonNameList" :liClick="liClick"></hide-btn>
      <hide-btn btnName="跳转分组" :groupsList="groupsList"></hide-btn>
    </div>
  </nav>
</template>

<script>
  import HideBtn from "components/common/HideBtn";
    export default {
        name: "TabBar",
        data(){
            return{
                url: 'sq1',
                liClick: (jsonFileName) => {
                    this.url = jsonFileName;
                    this.flush();
                    return false;
                }
            }
        },
        props: {
            groupsList: Array,
            jsonNameList: {
              type: Array,
              default: [{'title': 'sq1'}]
            }
        },
        components:{
            HideBtn
        },
        methods: {
            flush(){
                this.$emit('SearchUrl', this.url);
            },
        },
        created() {
            this.flush()
        }
    }
</script>

<style scoped>
  @media (min-width: 940px) {
    nav{
      grid-template-columns: 3fr 4fr 4fr;
    }
  }
  @media (max-width: 940px) {
    nav{
      grid-template-columns: 1fr 1fr;
    }
    nav .web-title{
      display: none;
    }
  }
  @media (max-width: 740px) {
    nav{
      grid-template-columns: 100%;
    }
    nav .search{
      display: none;
    }
  }
  nav{
    min-width: 300px;
    display: grid;
    grid-template-rows: 48px;
    justify-items: center;
    align-items: center;
    background: linear-gradient(30deg, #9b43af 1%, 15%, #cc2b5e 90%);
  }
  nav .web-title{
    color: white;
    font-weight: 500;
  }
  button{
    height: 48px;
    color: #ffffff;
    border: none;
    border-bottom: 2px solid transparent;
    background-color: transparent;
    transition: all .2s linear;
  }
  button:hover{
    border-bottom: 2px solid #ffc82e;
  }
</style>
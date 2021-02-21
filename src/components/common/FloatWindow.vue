<template>
  <div class="float-window">
    <ul>
      <slot name="top">
        <li><a href="#top" class="special">TOP</a></li>
      </slot>
      <li v-for="group in groupsList" @click="liClickEvent(group['title'])">
        <a :href='"#"+group["id"]'>
          {{group['title']}}
        </a>
      </li>
      <slot name="bottom">
        <li><a href="#bottom" class="special">BOTTOM</a></li>
      </slot>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "FloatWindow",
        data(){
            return{

            }
        },
        props: {
            groupsList: Array,
            liClick: Function
        },
        methods:{
            liClickEvent(jsonFileName){
                if(this.liClick !== undefined){
                    this.liClick(jsonFileName);
                }
            }
        }
    }
</script>

<style scoped>
  ul{
    width: 160px;
    height: 320px;
    margin: 0;
    padding: 4px 0;
    border: 2px solid #793e87;
    border-radius: 4px;
    border-right: none;
    list-style-type: none;
    background: linear-gradient(to right, #793A87, #5f2b6a);
    display: none;
    overflow: scroll;
    overflow-x: hidden;
  }
  ul::-webkit-scrollbar{
    width: 2px;
    height: 1px;
    background-color: #ffc82e;
  }
  li{
    height: 44px;
    color: #fffbfd;
    text-align: center;
    line-height: 44px;
    border-bottom: 1px solid rgb(206, 136, 229);
    /*border-top: 1px solid rgb(206, 136, 229);*/
  }
  li:hover{
    background-color: rgb(235, 157, 90);
    cursor: pointer;
  }
  li a{
    color: rgba(32, 32, 32, 0.95);
    display: block;
  }
  li a:hover{
    color: rgba(32, 32, 32, 0.95);
    text-decoration: none;
  }
  li a.special{
    color: rgb(239, 46, 103);
    font-weight: 500;
  }
  .rightFloat{
    display: block;
    position: fixed;
    top: 120px;
    right: 0;
  }
</style>
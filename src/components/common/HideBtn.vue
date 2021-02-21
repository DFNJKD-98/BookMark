<template>
  <div class="hide-btn">
    <button @click="showFloatWindow(btnShow, btnHide)" ref="hideBtn">{{btnName}}</button>
    <float-window :groupsList="groupsList" :liClick="liClick" ref="floatWinUl"/>
  </div>
</template>

<script>
  import FloatWindow from "components/common/FloatWindow";
  export default {
      name: "HideBtn",
      data(){
          return {
              show: 0
          }
      },
      components: {
          FloatWindow
      },
      props: {
          groupsList: Array,
          btnName: {
              type: String,
              default: 'button',
              required: true
          },
          btnShow: String,
          btnHide: String,
          liClick: Function
      },
      methods: {
          showFloatWindow(show, hide){
                if(this.show === 0){
                    $(this.$refs.floatWinUl.$el.childNodes[0]).addClass('rightFloat');
                    this.show = 1;
                    if(show !== undefined){
                        this.$refs.hideBtn.innerText = show;
                    }
                }
                else {
                    $(this.$refs.floatWinUl.$el.childNodes[0]).removeClass('rightFloat');
                    this.show = 0;
                    if(hide !== undefined){
                        this.$refs.hideBtn.innerText = hide;
                    }
                }
            }
      }
  }
</script>

<style scoped>
  .hide-btn{
    display: inline-block;
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
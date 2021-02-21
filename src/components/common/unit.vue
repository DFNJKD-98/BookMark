<template>
  <div class="unit-cell">
    <div class="top-info">
      <a :href="linkinfo.link" target="_blank">
        <img :src="linkinfo.image" :alt="linkinfo.default">
      </a>
    </div>
    <div class="bottom-info">
      <p>{{linkinfo.para}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "unit",
        props: {
            linkinfo: {
                type: Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
  .unit-cell{
    display: inline-block;
    border: none;
    border-radius: 4px;
    margin: 10px;
    overflow: hidden;

    width: 100%;
    height: 120px;
    min-width: 180px;
    min-height: 90px;

    background-color: transparent;
    box-shadow:
            /*inset 0 0 0 rgba(194, 194, 194, 0.96),*/
            /*inset 0 0 0 rgba(194, 194, 194, 0.96),*/
            inset 0 0 0 transparent,
            inset 0 0 0 transparent,
            2px 2px 12px rgba(46, 20, 55, 0.49),
            -2px -2px 12px rgba(46, 20, 55, 0.49);
    transition: all .2s ease-out;
  }
  .unit-cell:hover{
    box-shadow:
            inset 2px 2px 14px rgba(46, 20, 55, 0.49),
            inset -2px -2px 14px rgba(46, 20, 55, 0.49);
    color: #ffad5e;
  }
  .top-info{
    width: 100%;
    height: 50px;
    padding: 14px 0 8px 0;
    border-bottom: 3px solid #2E1437;
  }
  .top-info a{
    display: block;
    width: 100%;
    padding: 0 80% 0 10%;
  }
  .top-info img{
    width: 22px;
    height: 22px;
  }
  .bottom-info p{
    height: 70px;
    padding: 4px 18px 0;
    margin: 0;
    font-size: 14px;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
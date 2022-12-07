<template>
  <div class="baseChip" title="Подробнее">
    <span class="baseChip__dash">#</span>
    {{tag}}
  </div>
</template>

<script>
  export default {
    name: "HintChip",
    props: {
      tag: String
    }
  }
</script>

<style scoped>
  .baseChip{
    font-size: 14px;
    display: inline-block;
    border: 2px solid #f9e6df;
    padding: 10px;
    margin: 5px;
    -webkit-border-radius: 20px 0 20px 0;
    -moz-border-radius: 20px 0 20px 0;
    border-radius: 20px 0 20px 0;
    color: #999999;
    transition: 0.5s;
  }
  .baseChip:hover{
    background-color: #f9e6df;
  }
  .baseChip__dash{
    font-weight: bold;
  }
</style>

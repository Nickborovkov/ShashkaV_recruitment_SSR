<template>
  <div style="width: 200px;">
    <div style="color: #d39999; font-size: 50px; text-align: center">{{perk}}</div>
    <div style="width: 100%; height: 1px; background-color: #dddddd; margin: 15px 0"></div>
    <div style="font-size: 20px; text-align: center">{{description}}</div>
  </div>
</template>

<script>
  export default {
    name: "PerkCard",
    props: {
      perk: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
    }
  }
</script>

<style scoped>

</style>

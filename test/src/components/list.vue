<template>
  <div>
    <div v-for="item in list" :key="item.symbol">
      {{ item.symbol }} {{ item.icon }}
      <img :src="item.icon"/>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    image(icon) {
        const iconPath = `file-loader?name=assets/${icon}!@maticnetwork/token-assets/icons/${icon}`;
      console.log(iconPath);
      return require(iconPath);
    },
  },
  props: {
    list: Object,
  },
}
</script>

<style></style>

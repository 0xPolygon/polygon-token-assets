<template>
  <div class="token-item col content-center">
    <img v-if="token.image" class="token-item__img" :src="token.image" />
    <div class="token-item__img" v-else>Image not found</div>
    <h3 class="text-secondary">{{ token.symbol }}</h3>
  </div>
</template>

<script>
// import { getImage } from "../utils";
export default {
  props: {
    token: Object,
  },
  created() {
    // token.image = getImage(this.token.icon)
  },
}
</script>

<style scoped>
.token-item {
  border: 1px solid;
  padding: 10px 30px;
}
.token-item__img {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  text-align: center;
}
</style>

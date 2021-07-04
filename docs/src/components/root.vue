<template>
  <div class="col content-center mt-20px">
    <h1 class="primary-text">Polygon Token Assets</h1>
    <token-item v-for="token in tokens" :token="token" :key="token.icon" />
  </div>
</template>

<script>
import tokens from '@maticnetwork/token-assets'
import TokenItem from './token-item.vue'
export default {
  components: { TokenItem },
  created(){
    this.tokens = tokens;
  }
}
</script>

<style></style>

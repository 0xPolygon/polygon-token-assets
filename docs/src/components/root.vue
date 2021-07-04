<template>
  <div class="root col content-center mt-20px">
    <h1 class="text-primary">Polygon Token Assets</h1>
    <div class="row xs-12 mt-20px">
      <token-item v-for="token in tokens" :token="token" :key="token.icon" />
    </div>
  </div>
</template>

<script>
import tokens from '@maticnetwork/token-assets'
import TokenItem from './token-item.vue'
export default {
  components: { TokenItem },
  created() {
    this.tokens = tokens
  },
}
</script>

<style scoped>
.root{

}
</style>

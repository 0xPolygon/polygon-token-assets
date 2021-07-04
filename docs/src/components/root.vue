<template>
  <div class="root col content-center mt-20px">
    <h1 class="text-primary">Polygon Token Assets</h1>
    <div>
      <input
        v-model="searchText"
        placeholder="Search token"
        type="text"
        class="textbox mt-20px"
        width="100px"
        height="150px"
      />
    </div>
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
  data() {
    return {
      searchText: '',
    }
  },
  watch: {
    searchText() {
      const result = {}
      const regex = new RegExp(this.searchText, 'i')
      for (const key in tokens) {
        const token = tokens[key]
        if (token.symbol.match(regex)) {
          result[key] = token
        }
      }
      this.tokens = result
    },
  },
}
</script>

<style scoped>
.root {
}
</style>

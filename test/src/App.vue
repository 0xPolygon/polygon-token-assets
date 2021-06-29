<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <StudentGrid :list="list" />
  </div>
</template>

<script>
import StudentGrid from './components/list.vue'
import list from '@maticnetwork/token-assets'

const getiImage = (icon) => {
  const iconPath = `file-loader?name=assets/${icon}!@maticnetwork/token-assets/icons/${icon}`
  console.log(iconPath)
  return require("file-loader?name=assets/KAI.svg!@maticnetwork/token-assets/icons/KAI.svg")
  // return require(`file-loader?name=assets/${icon}!@maticnetwork/token-assets/icons/${icon}`)
}
const tokens = list;
for(var tokenId in tokens){
  tokens[tokenId].icon = getiImage(tokens[tokenId].icon).default
}

export default {
  name: 'app',
  components: {
    StudentGrid,
  },
  async beforeCreate() {
    this.list = list
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

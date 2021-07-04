<template>
  <div class="col">
    {{token}}
    <h3>{{ token.symbol }}</h3>
    <img :src="token.image" />
  </div>
</template>

<script>
export default {
  props: {
    token: Object,
  },
  // created() {
  //   token.image = getImage(this.token.icon)
  // },
}
</script>

<style></style>

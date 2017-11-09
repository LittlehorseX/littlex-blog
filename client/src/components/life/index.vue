<template>
  <div id="life">
    <MenuBar menuId="life" menuName="闲时" :type="$store.state.type" :curTag="$store.state.tags"></MenuBar>
    <router-view />
  </div>
</template>

<script>
import MenuBar from 'common/menubar'

export default {
  name: 'life',
  components: {
    MenuBar
  },
  mounted () {
    this.$store.commit('setMenu', 'life')
  },
  data () {
    return {
      list: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#life {
  height: 100%;
  display: flex;
}
</style>

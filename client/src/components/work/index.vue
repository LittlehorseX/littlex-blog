<template>
  <div id="work">
    <MenuBar menuId="work" menuName="工作" :type="$store.state.type" :curTag="$store.state.tags"></MenuBar>
    <router-view />
  </div>
</template>

<script>
import MenuBar from 'common/menubar'

export default {
  name: 'work',
  components: {
    MenuBar
  },
  mounted () {
    this.$store.commit('setMenu', 'work')
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
#work {
  height: 100%;
  display: flex;
}
</style>

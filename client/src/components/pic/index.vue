<template>
  <div id="pic">
    <MenuBar menuId="pic" menuName="图片"></MenuBar>
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
  data () {
    return {
    }
  },
  mounted () {
    this.$store.commit('setMenu', 'pic')
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pic {
  height: 100%;
  display: flex;
}
</style>

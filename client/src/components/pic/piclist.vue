<template>
  <div id="list">
    <div class="picitem" v-for="item in piclist">
      <img :src="item.picData" alt="">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
import api from '../../api/index.js'

export default {
  name: 'piclist',
  data () {
    return {
      piclist: []
    }
  },
  async mounted () {
    this.$store.commit('setType', 'list')
    this.$store.commit('setTags', this.$route.params.type)
    await api.getPicList(this.$route.params.type).then(res => {
      this.piclist = res.data.data
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#list {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 25px 10% 25px 8%;
}
#list .picitem {
  width: 150px;
  height: 120px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#list .picitem img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10%;
}
#list .picitem span {
  display: inline-block;
  margin-top: 10px;
}
</style>

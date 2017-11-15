<template>
  <div id="pic">
    <div class="picUrl" :style="{ backgroundImage: 'url(' + picData.url + ')' }"></div>
    <div class="title">{{picData.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'picdetail',
  data () {
    return {
      picData: {
        url: '',
        title: ''
      }
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pic {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  padding: 25px 10% 25px 8%;
}
#pic .picUrl {
  margin: 40px 40px;
  width: 100%;
  height: 70%;
  background-repeat: no-repeat;
  background-position: center center;
  /*background-size: 100% 100%;*/
}
#pic .title {
  font-size: 30px;
  font-weight: bold;
  margin: 0px auto;
}
</style>

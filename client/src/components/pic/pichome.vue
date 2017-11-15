<template>
  <div id="pic">
    <div class="picList" v-on:mouseout="()=> activeIndex = -1">
      <div v-for="(item, index) in picList" class="picItems" v-on:mouseenter="() => activeIndex = index">
        <div :class="['picItem', `picItem${index}`]" v-on:mouseenter="() => activeIndex = index">
          <router-link :to="{name: 'piclist', params: {type: item.url}}"></router-link>
        </div>
        <div class="title" v-show="activeIndex === index" v-on:mouseenter="() => activeIndex = index">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pichome',
  data () {
    return {
      activeIndex: -1,
      picList: [{
        id: '001',
        title: 'DRAW',
        url: 'draw',
        picUrl: require('../../assets/pic01.png')
      }, {
        id: '001',
        title: 'TRAVEL',
        url: 'travel',
        picUrl: require('../../assets/pic02.png')
      }, {
        id: '001',
        title: 'SELF',
        url: 'self',
        picUrl: require('../../assets/pic03.png')
      }, {
        id: '001',
        title: 'FOOD',
        url: 'food',
        picUrl: require('../../assets/pic04.png')
      }]
    }
  },
  mounted () {
    this.$store.commit('setType', 'home')
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pic {
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;
  padding-left: 10%;
}
.picList {
  display: flex;
  width: 75%;
  height: 45%;
  border: 2px solid #000;
}
.picItems {
  position: relative;
  width: 100%;
  border: 2px solid #000;
}
.picItems a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.picItems .title {
  position: absolute;
  top: 50%;
  font-weight: bold;
  font-size: 26px;
}
.picItem {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.picItem:hover {
  opacity: 0.4;
}
.picItem0 {
  background: url('../../assets/pic02.png') no-repeat center center;
}
.picItem1 {
  background: url('../../assets/pic04.png') no-repeat center center;
}
.picItem2 {
  background: url('../../assets/pic03.png') no-repeat center center;
}
.picItem3 {
  background: url('../../assets/pic01.png') no-repeat center center;
}
</style>

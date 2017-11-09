<template>
  <div class="home">
    <Menulist v-on:curIndex="changePic"/>
    <div class="infoRoom">
      <div class="infoDiv">
        <div class="rings">
          <span class="ring one"></span>
          <span class="ring two"></span>
          <span class="ring three"></span>
        </div>
        <div class="info one" v-if="cur === 0"></div>
        <div class="info two" v-if="cur === 1"></div>
        <div class="info three" v-if="cur === 2"></div>
        <div class="info four" v-if="cur === 3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Menulist from './menulist'

export default {
  name: 'home',
  components: {
    Menulist
  },
  data () {
    return {
      cur: 0,
      menuPic: ['../../assets/life.png', '../../assets/work.png', '../../assets/pic.png', '../../assets/library.png']
    }
  },
  methods: {
    changePic (index) {
      this.cur = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
  height: 100%;
}
.infoRoom {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.infoRoom .infoDiv {
  width: 400px;
  height: 400px;
  position: relative;
}
.infoRoom .infoDiv .rings {
  width: 400px;
  height: 400px;
  position: absolute;
}
.infoRoom .infoDiv .rings .ring {
  position: absolute;
  display: block;
  width: 400px;
  height: 400px;
}
.infoRoom .infoDiv .rings .ring.one {
  background: url('../../../src/assets/ring1.png') no-repeat center center;
  background-size: 370px 370px;
  animation: rotate 190s infinite linear;
}
.infoRoom .infoDiv .rings .ring.two {
  background: url('../../../src/assets/ring2.png') no-repeat center center;
  background-size: 370px 370px;
  animation: revrotate 180s infinite linear;
}
.infoRoom .infoDiv .rings .ring.three {
  top: 66px;
  left: 66px;
  width: 256px;
  height: 256px;
  border-radius: 100%;
  border: 6px solid #000;
}

.infoRoom .infoDiv .info {
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 120px 120px;
  opacity: 0.8;
}
.infoRoom .infoDiv .info.one {
  background-image: url('../../assets/life.png');
}
.infoRoom .infoDiv .info.two {
  background-image: url('../../assets/work.png');
}
.infoRoom .infoDiv .info.three {
  background-image: url('../../assets/pic.png');
}
.infoRoom .infoDiv .info.four {
  background-image: url('../../assets/library.png');
}
@keyframes rotate {
  0% { transform:rotate(0deg); }
  100% { transform:rotate(-360deg);}
}
@keyframes revrotate {
  0% { transform:rotate(0deg); }
  100% { transform:rotate(360deg);}
}
</style>

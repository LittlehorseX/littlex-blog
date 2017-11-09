<template>
  <div id="menu">
    <div class="menuList" >
      <div class="menuLine"></div>
      <div v-for="(item, index) in navList" class="menuItem" v-on:mouseenter="changeLinePos(index)">
        <strong><router-link :to="navList[index].link">{{item.title}}</router-link></strong>
        <small>{{item.des}}</small>
        <div class="alive" v-if="index === 0">
          <span class="bar one"></span>
          <span class="bar two"></span>
          <span class="bar three"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menulist',
  data () {
    return {
      navList: [
        {title: '闲时', link: 'life', des: 'kill boring', iconUrl: ''},
        {title: '工作', link: 'work', des: 'for money', iconUrl: ''},
        {title: '图片', link: 'pic', des: 'show time', iconUrl: ''},
        {title: '实验室', link: 'library', des: 'try intresting', iconUrl: ''}]
    }
  },
  methods: {
    changeLinePos (index) {
      this.$emit('curIndex', index)
      const line = document.getElementsByClassName('menuLine')[0]
      line.style.top = 20 + 64 * index + 'px'
      line.style.transition = 'top 400ms cubic-bezier(0.145, 1.075, 0.345, 1.12) 100ms'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#menu {
  width: 280px;
  height: 100%;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.menuList {
  position: relative;
}
.menuLine {
  position: absolute;
  top: 20px;
  width: 4px;
  height: 44px;
  background-color: #000;
}
.menuItem {
  padding: 10px 0 10px 20px;
  margin: 20px 0;
  line-height: 24px;
  display: flex;
  /*align-items: flex-start;*/
  /*justify-content: flex-end;*/
}
.menuItem strong {
  font-size: 24px;
}
.menuItem small {
  margin-left: 10px;
}
.menuItem .alive {
  display: inline-flex;
  flex-direction: column;
  height: 24px;
  width: 24px;
  margin-left: 15px;

}
.menuItem .alive .bar {
  width: 100%;
  height: 3px;
  margin-top: 4px;
  background: #000;
  animation-name: bar-move;
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.menuItem .alive .bar.two {
  animation-name: bar-move2;
  animation-duration: .9s;
}
.menuItem .alive .bar.three {
  animation-name: bar-move3;
  animation-duration: 1.4s;
}
@keyframes bar-move {
  from {width: 20%;}
  to {width: 90%;}
}
@keyframes bar-move2 {
  from {width: 10%;}
  to {width: 120%;}
}
@keyframes bar-move3 {
  from {width: 20%;}
  to {width: 100%;}
}
</style>

<template>
  <div id="menubar">
    <small class="toHome"><router-link to="/home">- H O M E -</router-link></small>
    <div class="head">
      <img src="./../assets/me.png" alt="" v-if="this.$route.path.indexOf('pic') === -1">
      <img src="./../assets/me2.png" alt="" v-else>
    </div>
    <strong class="name">LittlehorseX</strong>
    <span class="flag">多喝热水</span>
    <div class="menuTitle" >
      <strong><router-link :to="`/${menuId}`">{{menuName}}</router-link></strong>
      <div class="alive">
        <span class="bar one"></span>
        <span class="bar two"></span>
        <span class="bar three"></span>
      </div>
    </div>
    <router-link class="edit" :to="`/${menuId}/edit/${$route.params.id}`" v-if="this.$store.state.type === 'detail'"></router-link>
    <router-link class="add" :to="`/${menuId}/edit/new`" v-if="this.$store.state.type === 'list'"></router-link>
    <div class="tags" v-if="this.$store.state.menu !== 'pic' && this.$store.state.type !== 'list'">
      <span @click="tagClick(item)" :class="['tag', {'curTag': $store.state.tags.indexOf(item) !== -1}]" v-for="item in tags[menuId]">{{item}}</span>
    </div>
    <div class="pictags" v-if="this.$store.state.menu === 'pic' && this.$store.state.type !== 'home' && this.$store.state.type !== 'list'">
      <span @click="picTagClick(item)" :class="[`tag${index}`, {'curTag': $store.state.tags[0] === item}]" v-for="(item, index) in tags.pic">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menubar',
  props: {
    type: {
      type: String,
      default: 'list'
    },
    menuId: {
      type: String,
      default: 'life'
    },
    menuName: {
      type: String,
      default: '闲时'
    },
    curTag: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      tags: {
        'life': ['吃吃吃', '电影咖', '旅行', '随手'],
        'work': ['doing', 'node', '建站相关'],
        'pic': ['draw', 'travel', 'self', 'food']
      }
    }
  },
  mounted () {
  },
  methods: {
    tagClick (tag) {
      if (this.$store.state.type === 'edit') {
        let tags = this.$store.state.tags.length === 0 ? [] : this.$store.state.tags
        const index = tags.indexOf(tag)
        if (index === -1) {
          tags.push(tag)
        } else {
          tags.splice(index, 1)
        }
        this.$store.commit('setTags', tags)
      }
    },
    picTagClick (tag) {
      if (this.$store.state.type === 'edit') {
        this.$store.commit('setTags', [tag])
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#menubar {
  width: 30%;
  height: 100%;
  padding-left: 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.head {
  margin: 20%;
  width: 70%;
}
.head img {
  width: 100%;
  height: 100%;
}
.name {
  font-size: 20px;
  color: #333;
}
.flag {
  margin-top: 10px;
  font-size: 14px;
  color: #888;
}
.toHome {
}
.menuTitle {
  display: flex;
  position: relative;
  line-height: 24px;
  margin-top: 20px;
}
.menuTitle strong {
  font-size: 24px;
}
.menuTitle .alive {
  display: inline-flex;
  flex-direction: column;
  height: 24px;
  width: 24px;
  margin-left: 15px;
}
.menuTitle .alive .bar {
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
.menuTitle .alive .bar.two {
  animation-name: bar-move2;
  animation-duration: .9s;
}
.menuTitle .alive .bar.three {
  animation-name: bar-move3;
  animation-duration: 1.4s;
}
.add, .edit {
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-top: 10px;
  background: url(./../assets/add.png) no-repeat center center;
  background-size: 20px 20px;
}
.edit {
  background: url(./../assets/edit.png) no-repeat center center;
  background-size: 20px 20px;
}
.tags {
  margin: 20px 20px 0;
}
.tags span {
  display: inline-block;
  font-size: 14px;
  padding: 3px 5px 3px 5px;
  cursor: pointer;
  border: 1px solid #aaa;
  border-radius: 5px;
  margin: 5px;
  color: #aaa;
}
.tags .curTag {
  font-weight: bold;
  color: #000;
  border-color: #000;
}
.pictags {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px 0;
}
.pictags span {
  display: inline-block;
  font-size: 12px;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
  color: #fff;
}
.pictags .tag0 {
  background-color: rgba(144, 78, 133, 0.8);
}
.pictags .tag1 {
  background-color: rgba(206, 130, 22, 0.8);
}
.pictags .tag2 {
  background-color: rgba(99, 97, 145, 0.8);
}
.pictags .tag3 {
  background-color: rgba(136, 182, 52, 0.8);
}
.pictags .curTag {
  font-weight: bold;
  font-size: 18px;
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

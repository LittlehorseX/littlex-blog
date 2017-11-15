<template>
  <div id="article" v-if="articleList.length > 0">
    <div class="articleItem" v-for="item in articleList">
      <strong><router-link :to="`/life/article/${item._id}`">{{item.title}}</router-link></strong>
      <span class="info">
        <span class="tags" v-if="item.tags">
            - {{item.tags.join(' & ')}}
        </span>
        <span class="time"> {{item.lastEditTime}} - </span>
      </span>
      <div class="des">{{item.content.slice(0, 60) + '...'}}</div>
    </div>
  </div>
</template>

<script>
import api from '../../api/index.js'

export default {
  name: 'list',
  data () {
    return {
      articleList: []
    }
  },
  async mounted () {
    this.$store.commit('setType', 'list')
    await api.getArticleList('life').then(res => {
      this.articleList = res.data.data
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#article {
  width: 70%;
  height: 100%;
  padding: 0 10% 0 8%;
}
.articleItem {
  /*border: 1px solid #000;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  /*padding: 20px 50px;*/
  margin-top: 30px;
}
.articleItem strong {
  font-size: 20px;
}
.articleItem .info {
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 12px;
  line-height: 12px;
  padding: 2px;
  color: #777;
}
.articleItem .des {
  color: #444;
  align-self: left;
}
</style>

<template>
  <div id="article">
    <div type="text" class="title" value="标题">{{detailData.title}}</div>
    <small class="time">创建于：{{detailData.createTime.slice(0, 10)}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更新于：{{detailData.lastEditTime}}</small>
    <div class="content" ref="myContent"></div>
  </div>
</template>

<script>
import api from '../../api/index.js'

export default {
  name: 'detail',
  data () {
    return {
      detailData: {
        title: '测试',
        createTime: '1970-01-01',
        detailData: '1970-01-01',
        content: '23213大哈顺利到家啊'
      }
    }
  },
  async mounted () {
    this.$store.commit('setType', 'detail')
    api.getArticleDetail(this.$route.params.id).then(res => {
      this.detailData = res.data.data
      this.$store.commit('setTags', res.data.data.tags)
      let objE = document.createElement('div')
      objE.innerHTML = res.data.data.content
      objE.childNodes.forEach(item => {
        this.$refs.myContent.append(item)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#article {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 25px 10% 25px 10%;
}
#article .title {
  padding: 20px 15px;
  font-weight: bold;
  font-size: 26px;
}
#article .time {
  padding-left: 15px;
  font-size: 12px;
  color: #666;
}
#article .content {
  padding: 20px 15px;
}
</style>

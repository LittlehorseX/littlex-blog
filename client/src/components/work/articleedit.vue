<template>
  <Editor :handleSave="handleSave"/>
</template>

<script>
import Editor from 'common/editor/index'
import api from '../../api/index.js'
const moment = require('moment')

export default {
  name: 'edit',
  components: {
    Editor
  },
  mounted () {
    this.$store.commit('setType', 'edit')
  },
  methods: {
    handleSave () {
      const title = document.getElementById('title').value
      const id = this.$route.params.id
      if (this.$store.state.tags.length === 0) {
        console.log('请选择标签')
      } else if (title.length === 0) {
        console.log('请填写标题')
      } else {
        const editorRoom = document.getElementById('editorRoom')
        if (id === 'new') {
          api.createArticle({
            type: 'work',
            title,
            tags: this.$store.state.tags,
            content: editorRoom.innerHTML,
            lastEditTime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
          }).then(res => {
            if (res.data.success) {
              this.$router.push({name: 'workdetail', params: {id: res.data.data._id}})
            } else {
              console.log('保存文章失败')
            }
          })
        } else {
          api.updateArticle({
            id,
            title,
            tags: this.$store.state.tags,
            content: editorRoom.innerHTML,
            lastEditTime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
          }).then(res => {
            if (res.data.success) {
              this.$router.push({name: 'workdetail', params: {id}})
            } else {
              console.log('保存文章失败')
            }
          })
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

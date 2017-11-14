<template>
  <div id="list">
    <div id="title">标题：<input type="text" v-model="title"></div>
    <input id="picinput" type="file" accept="image/png,image/jpg,image/jpeg" v-on:change="show"></input>
    </form>
    <img id="picshow" src="" alt="">
    <span id="save" :class="[{saveborder: showButton && title.length > 0}]" v-on:click="savepic">{{showButton && title.length > 0? '保存' : ''}}</span>
  </div>
</template>

<script>
import api from '../../api/index.js'

export default {
  name: 'picedit',
  data () {
    return {
      title: '未命名',
      showButton: false
    }
  },
  mounted () {
    this.$store.commit('setType', 'edit')
  },
  methods: {
    show (e) {
      const file = e.target.files[0]
      const r = new FileReader()
      r.onload = (e) => {
        document.getElementById('picshow').src = e.target.result
      }
      r.readAsDataURL(file)
      r.onloadend = () => {
        this.showButton = true
      }
    },
    savepic () {
      const type = this.$store.state.tags
      if (type.length === 0) {
        this.$notice.open({type: 'error', content: '请选择分类'})
      } else {
        const para = {
          type,
          title: this.title,
          picData: document.getElementById('picshow').src || ''
        }
        api.uploadPic(para).then(res => {
          if (res.data.success) {
            this.$notice.open({type: 'success', content: '上传图片成功'})
            this.$router.push({name: 'piclist', params: {type: type}})
          } else {
            this.$notice.open({type: 'error', content: '上传图片失败'})
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 10%;
}
#list #title input {
  padding: 4px 10px;
  margin: 10px 0 15px 10px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid #000;
}
#list #picshow {
  display: block;
  margin-top: 15px;
  align-self: center;
  height: 50%;
}
#list #save {
  display: inline-block;
  margin-top: 20px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  padding: 3px 10px;
  /*border: 1px solid #000;*/
  border-radius: 5px;
  cursor: pointer;
}
#list .saveborder {
  border: 1px solid #000;
}
</style>

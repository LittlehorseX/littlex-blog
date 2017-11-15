<template>
  <div id="list">
    <div class="picitem" v-for="(item, index) in piclist">
      <img :src="item.url" alt="">
      <div v-if="editing[index] === false">
        <span class="title" v-on:click="editingStateChange(index)">{{item.title}}</span>
        <span class="delete" v-on:click="deletePic(item, index)"></span>
      </div>
      <input v-else type="text" v-on:blur="editingStateChange(index, item)" v-model="item.title">
    </div>
    <Modal :show="showModal" title="确定删除这张图片吗" :handleOk="handleDel" :handleCancle="cancleDel"/>
  </div>
</template>

<script>
import Modal from 'common/modal/index.vue'
import api from '../../api/index.js'

export default {
  name: 'piclist',
  components: {
    Modal
  },
  data () {
    return {
      showModal: false,
      delId: '',
      piclist: [],
      editing: []
    }
  },
  async mounted () {
    this.$store.commit('setType', 'list')
    this.$store.commit('setTags', [this.$route.params.type])
    await api.getPicList(this.$route.params.type).then(res => {
      const data = res.data.data
      this.piclist = data
      this.initEditing(data.length)
    })
  },
  methods: {
    deletePic (item, index) {
      this.showModal = true
      this.delId = {
        id: item._id,
        index
      }
    },
    cancleDel () {
      this.showModal = false
    },
    handleDel () {
      api.delPic(this.delId.id)
      .then(res => {
        if (res.data.success) {
          this.$notice.open({type: 'success', content: '删除图片成功'})
          this.piclist.splice(this.delId.index, 1)
        } else {
          this.$notice.open({type: 'error', content: '删除图片失败'})
        }
      })
      this.showModal = false
    },
    initEditing (length) {
      for (let i = 0; i < length; i++) {
        this.editing.push(false)
      }
    },
    editingStateChange (index, item) {
      let temp = this.editing.slice(0)
      temp[index] = !temp[index]
      this.editing = temp
      if (temp[index] === false) {
        const para = {
          id: item._id,
          title: item.title
        }
        api.updatePic(para)
        .then(res => {
          if (res.data.success) {
            this.$notice.open({type: 'success', content: '更新成功'})
          } else {
            this.$notice.open({type: 'error', content: '更新失败'})
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
#list .picitem div {
  width: 100%;
  height: 20px;
  margin-top: 10px;
  padding-left: 20px;
  box-sizing: border-box;
}
#list .picitem .title {
  display: inline-block;
  width: 80%;
}
#list .picitem .delete {
  float: right;
  display: inline-block;
  width: 20%;
  height: 20px;
  background: url('../../assets/trash.png') no-repeat center center;
  background-size: 80% 80%;
  cursor: pointer;
}
#list .picitem input {
  box-sizing: border-box;
  width: 100%;
  height: 22px;
  border: 1px solid #000;
  margin-top: 10px;
  padding: 3px 5px;
  border-radius: 5px;
  
}
</style>

<template>
  <div id="edit">
    <!--<form class="editForm">-->
      <input type="text" id="title" :value="data.title">
      <div id="editor">
        <ul id="toolbar">
          <li v-for="item in btnInfo" @click="handleBtn(item)" @mousedown="prevent">{{item.title}}</li>
          <li @click="handleCancle">取消</li>
          <li @click="handleSave">保存</li>
        </ul>
        <div id="editorRoom" ref="editorRoom">
        </div>
      </div>
    <!--</form>-->
  </div>
</template>

<script>
import api from '../../api/index.js'

export default {
  name: 'edit',
  props: {
    tag: {
      type: Array,
      default: () => []
    },
    handleSave: {
      type: Function,
      default: () => {
        console.log('保存')
      }
    }
  },
  watch: {
    tag (value) {
      this.tags = value
    }
  },
  data () {
    return {
      tags: [],
      data: {title: '', content: []},
      btnInfo: [{
        title: 'B',
        command: 'bold',
        arg: 'p'
      }, {
        title: 'I',
        command: 'italic',
        arg: null
      }, {
        title: 'S',
        command: 'strikeThrough',
        arg: null
      }, {
        title: '“',
        command: 'formatBlock',
        arg: 'BLOCKQUOTE'
      }, {
        title: '”',
        command: 'formatBlock',
        arg: 'p'
      }, {
        title: '1',
        command: 'insertOrderedList',
        arg: null
      }, {
        title: '●',
        command: 'insertUnorderedList',
        arg: null
      }, {
        title: 'H1',
        command: 'formatBlock',
        arg: 'H1'
      }, {
        title: 'H2',
        command: 'formatBlock',
        arg: 'H2'
      }, {
        title: 'H3',
        command: 'formatBlock',
        arg: 'H3'
      }, {
        title: 'H4',
        command: 'formatBlock',
        arg: 'H4'
      }]
    }
  },
  mounted () {
    this.initEditor()
    document.execCommand('insertParagraph', false, null)
    const id = this.$route.params.id
    if (id !== 'new') {
      api.getArticleDetail(id).then(res => {
        this.data.title = res.data.data.title
        this.$store.commit('setTags', res.data.data.tags)
        let objE = document.createElement('div')
        objE.innerHTML = res.data.data.content
        this.data.content = objE.childNodes
        objE.childNodes.forEach(item => {
          this.$refs.editorRoom.append(item)
        })
      })
    }
  },
  methods: {
    initEditor () {
      const editorRoom = document.getElementById('editorRoom')
      editorRoom.contentEditable = 'true'
    },
    handleBtn (item) {
      console.log(item.title)
      console.log(document.getSelection())
      const a = document.execCommand(item.command, false, item.arg)
      console.log(a)
    },
    prevent (e) {
      e.preventDefault()
    },
    handleCancle () {
      console.log('cancle')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#edit {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 25px 10% 25px 10%;
}
#edit input {
  width: 100%;
  padding: 20px 15px;
  font-size: 26px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #d9d9d9;
}
#editor #toolbar {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0 4px;
  background-color: #dedede;
}
#editor #toolbar li {
  line-height: 16px;
  font-size: 12px;
  color: #555;
  padding: 4px 5px;
  cursor: pointer;
}
#editor #toolbar li:hover {
  background-color: #555;
  color: white;
}
#editor #editorRoom {
  padding: 20px 15px 15px;
  /*-webkit-user-modify: read-write;*/
}
</style>

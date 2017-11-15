<template>
    <div>
      <textarea id="editor" style="opacity: 0"></textarea>
    </div>
</template>
<script>
  import {marked} from 'utils/index.js'
  import SimpleMDE from 'simplemde'

  export default{
    props: {
      content: {
        type: String,
        default: ''
      }
    },
    mounted () {
      const smde = new SimpleMDE({
        initialValue: this.content,
        // autoDownloadFontAwesome: false,
        element: document.getElementById('editor'),
        previewRender: (plainText) => {
          return marked(plainText)
        },
        spellChecker: false
      })
      smde.codemirror.on('change', () => {
        let value = smde.value()
        if (this.content === value) {
          return
        }
        this.content = value
      })
    }
  }
</script>

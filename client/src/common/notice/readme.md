
### 使用前准备

main.js中

```javascript
import notice from 'common/notice/index.js'
import 'common/notice/index.css'

Vue.prototype.$notice = notice
```

### 使用方法

```javascript
this.$notice.open({
  type: '....',
  content: '....'
})

this.$notice.success('...')
this.$notice.error('...')
this.$notice.warning('...')
this.$notice.info('...')
```

> type类型： success、error、warning、info

<template>
  <div class="notification" v-if="show">
    <span></span>
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'notification',
  data () {
    return {
      message: '',
      show: true,
      timer: null
    }
  },
  mounted () {
    if (this.timer) {
      clearTimeout(this.timer)
    } else {
      this.timer = setTimeout(() => {
        this.show = false
      }, 3000)
    }
  }
}
</script>

<style>
.notification {
  
}
</style>

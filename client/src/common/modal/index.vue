<template>
  <div class="modal" v-if="show">
    <div class="modal-box">
      <div class="modal-body">
        <div class="modal-title" v-if="title.length > 0">{{title}}</div>
        <div class="modal-content" v-if="content.length > 0">{{content}}</div>
      </div>
      <div class="modal-btns">
        <button class="btn btn-white" v-on:click="handleCancle">{{cancleText}}</button>
        <button class="btn btn-blue" v-on:click="handleOk">{{okText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'confirm'
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancleText: {
      type: String,
      default: '取消'
    },
    handleOk: {
      type: Function,
      default: () => {
        console.log('确认')
      }
    },
    handleCancle: {
      type: Function,
      default: () => {
        console.log('取消')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
  color: rgba(0, 0, 0, .65);
}
.modal .modal-box {
  width: 500px;
  padding: 30px 40px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.modal .modal-box .modal-body {
  line-height: 1.5;
}
.modal .modal-box .modal-body .modal-title {
  font-weight: bold;
  font-size: 16px;
}
.modal .modal-box .modal-body .modal-content {
  margin-top: 8px;
  font-size: 14px;
}
.modal .modal-box .modal-btns{
  box-sizing: border-box;
  margin-top: 30px;
  align-self: flex-end;
}
.btn {
  height: 30px;
  display: inline-block;
  border-radius: 5px;
  padding: 0 10px;
  margin-left: 10px;
  font-size: 14px;
  background-color: #fff;
  cursor: pointer;
  font-weight: 700;
}
.btn-white {
  border: 1px solid #aaa;
  color: rgba(0, 0, 0, .65);
}
.btn-blue {
  background-color: lightskyblue;
  color: #fff;
  border: none;
}
</style>

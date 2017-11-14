function notice (para) {
  const notificationList = document.getElementsByClassName('notification')
  let notification
  if (notificationList.length > 0) {
    notification = notificationList[0]
  } else {
    notification = document.createElement('div')
    notification.setAttribute('class', 'notification')
    document.body.append(notification)
  }
  let boxNode = `
    <div class="notification-box notification-${para.type}">
      <span class="msg">${para.content}</span>
    </div>`
  const objE = document.createElement('div')
  objE.innerHTML = boxNode
  const ele = objE.childNodes[1]
  notification.append(ele)
  setTimeout(() => {
    ele.style.marginLeft = '0'
  }, 0)
  setTimeout(() => {
    ele.style.marginLeft = '300px'
  }, 2500)
  setTimeout(() => {
    notification.removeChild(ele)
  }, 2800)
}

const api = {
  open: notice
}

const typeList = ['success', 'info', 'warning', 'error']

typeList.forEach(type => {
  api[type] = args => api.open({
    type,
    content: args
  })
})

export default api

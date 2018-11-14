// new 出来的实例可以被监听
function Producer() {
  if(!(this instanceof Producer)) {
    throw new Error('Class constructor Producer cannot be invoked without "new"')
  }
  this.listeners = [];
}

// 加入监听的方法
Producer.prototype.addListener = function(listener) {
  if(typeof listener === 'function') {
    this.listeners.push(listener);
  } else {
    throw new Error('listener is must be a function')
  }
}

// 移除监听的方法
Producer.prototype.removeListener = function(listener) {
  this.listeners.splice(this.listeners.indexOf(listener),1)
}

// 发送通知的方法
Producer.prototype.notify = function(message) {
  this.listeners.forEach(listener => {
    listener(message);
  })
}
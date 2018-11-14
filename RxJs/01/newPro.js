
import Producer from './Producer_ES6';

var egghead = new Producer(); 
// new 出一个 Producer 实例叫 egghead

function listener1(message) {
    console.log(message + 'from listener1');
}

function listener2(message) {
    console.log(message + 'from listener2');
}

egghead.addListener(listener1); // 注册监听
egghead.addListener(listener2);

egghead.notify('A new course!!') // 当某件事情方法时，执行
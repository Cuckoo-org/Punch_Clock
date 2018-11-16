
import { timer } from 'rxjs';
import { subscriber } from './subscriber';
// 当 timer 有两个参数时，第一个参数代表要发出第一个值的等待时间(ms)，
// 第二个参数代表第一次之后发送值的间隔时间，所以这段代码会先等一秒发送 1 之后每五秒发送 2, 3, 4, 5...。
const source = timer(1000, 1000);
const subscription =  source.subscribe(subscriber);

// 也可以接受一个参数，等一秒后发送 1 同时通知结束

// 取消订阅， unsubscribe
setTimeout(() => {
    subscription.unsubscribe()
},5000)

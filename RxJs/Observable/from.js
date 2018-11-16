
import { Observable, from } from 'rxjs';

const arr = ['Jerry', 'Anna', 2016, 2017, '30 days'];
const subscriber = {
    next: function(value) {
        console.log(value);
    },
    complete: function() {
        console.log('complete!')
    },
    error: function(error) {
        console.log(error)
    }
};
// from 可以接受任何可列举的参数
const source = from(arr);
source.subscribe(subscriber);

// from 可以接收字符串(string)
const source1 = from('铁人赛');
source1.subscribe(subscriber)

// 可以传入 Promise 事件
const source2 = from( new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello RxJs!')
    }, 3000)
}) );
source2.subscribe(subscriber);

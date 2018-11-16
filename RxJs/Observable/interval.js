
import { Observable, interval } from 'rxjs'
import { subscriber } from './subscriber';

// 在 JS 中我们可以用 setInterval 来建立一个持续的行为，这也能用在 Observable 中

// 定时器方式
const source = Observable.create(function(observer) {
    let i = 0, timer;
    timer = setInterval(() => {
        observer.next(i++);
        if(i === 10) {
            clearInterval(timer)
            observer.complete();
        }
    },100)
});

// source.subscribe(subscriber);

// rxjs 的 interval
// interval 有一个参数必须是数值(Number)，这的数值代表发出讯号的间隔时间(ms)
const source1 = interval(100);
source1.subscribe(subscriber);
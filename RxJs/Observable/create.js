
import { Observable } from 'rxjs'; 

// 创建 Observable
const observable = Observable.create(function(observer) {
    observer.next('Jerry');
    observer.next('Anna');

    // 处理异步行为
    setTimeout(() => {
        observer.next('Rx js')
    },0)
});

console.log('start');
observable.subscribe(function(value) {
    console.log(value);
});
console.log('end');

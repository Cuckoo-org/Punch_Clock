
// fromEventPattern 这个方法是给类事件使用
// 类事件就是其行为跟事件相似，同时具有监听和移除监听的行为

import { fromEventPattern } from 'rxjs';
import { subscriber } from './subscriber';
import Producer from '../01/Producer_ES6';

const producer = new Producer();
const source = fromEventPattern(
    (handler) => producer.addListener(handler),
    (handler) => producer.removeListener(handler) 
);
source.subscribe(subscriber);

producer.notify('Hello! Can you hear me ?')

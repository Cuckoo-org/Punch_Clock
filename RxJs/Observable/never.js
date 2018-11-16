
import { never } from 'rxjs';
import { subscriber } from './subscriber';

const source = never();
source.subscribe(subscriber);

/*
数学上还有一个跟零(0)很像的数，那就是 无穷(∞)，在 Observable 
的世界里我们用 never 来建立无穷的 observable
never 会给我们一个无穷的 observable，如果我们订阅它又会发生什么事呢？
...什么事都不会发生，它就是一个一直存在但却什么都不做的 observable。
*/
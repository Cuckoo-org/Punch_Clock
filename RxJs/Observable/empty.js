
import { empty } from 'rxjs';
import { subscriber } from './subscriber';

const source = empty();
source.subscribe(subscriber);

// empty 会给我们一个空的 Observable，订阅的这个 observable会发生什么事情
// 它会立即发送 complete 的讯息
// 可以直接把 empty 想成没有做任何事，但它至少会告诉你它没做任何事。



import IteratorES6 from './Iterator_ES6';
const arr = [1,2,3];

const iterator = arr[Symbol.iterator]();

iterator.next();
iterator.next();
iterator.next();
iterator.next();


const newIterator = new IteratorES6(arr);
newIterator.next();
newIterator.next();
newIterator.next();
console.log(newIterator.next())
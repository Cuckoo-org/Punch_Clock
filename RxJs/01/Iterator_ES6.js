// 如何实现简单的 Iterator Pattern

export default class IteratorFromArray {
    constructor(arr) {
        this._array = arr;
        this._cursor = 0;
    }

    next() {
        return this._cursor < this._array.length ?
            {value: this._array[this._cursor++], done: false}:
            {done: true}
    }

    map(callback) {
        const iterator = new IteratorFromArray(this._array);

        return {
            next: () => {
                const {done, value} = iterator.next();
                return {
                    done,
                    value: done? undefined: callback(value)
                };
            }
        };
    }
}

var iterator = new IteratorFromArray([1,2,3]);
var newIterator = iterator.map(value => value + 3);

newIterator.next();
newIterator.next();
console.log(newIterator.next());

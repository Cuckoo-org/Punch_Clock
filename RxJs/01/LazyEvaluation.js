// generator（生成器）
function* getNumbers(words) {
    for(let word of words) {
        if(/^[0-9]+$/.test(word)) {
            yield parseInt(word,10)
        }
    }
};

const iterator = getNumbers('30 天精通 RxJS');

iterator.next();
console.log(iterator.next());
console.log(iterator.next());
iterator.next();
console.log(iterator.next());

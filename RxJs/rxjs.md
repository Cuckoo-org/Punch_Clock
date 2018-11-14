
## Async 常见问题
* 竞态条件（Race Condition）
* 内存泄漏 （Memory Leak）
* 复杂的状态（Complex State）
* 例外处理（Exception Handling）

## 各种不同的API
* DOM Events
* XMLHttpRequest
* fetch
* WebSockets
* Server Worker
* Node Stream
* Timer

## RxJS
RxJS 是一套借由 `Observable sequences` 来组合非同步行为和事件基础程序的 `Library`！

## Functional Programming
`Functional Programming` 是一种编程范式(`programming paradigm`)，就像 `Object-oriented Programming(OOP)`一样，就是一种写程式的方法论

## Expression, no Statement

## Pure Function
Pure function 是指 一个 function 给予相同的参数，永远会回传相同的返回值，并且没有任何显著的副作用(Side Effect)

## 递归优化
[尾调用优化](https://juejin.im/entry/592e8a2d0ce463006b510b34)

## 迭代器 Iterator Pattern
Iterator 是一个事件，它就像一个指针（pointer），指向一个资料结构并产生一个序列（sequence），这个序列会有创建对象中的所有元素（element）
* 渐进式取得资料的特性，可以用来做延迟运算（Lazy evaluation）
* Iterator 本身是序列，可以实例所有数组的运算方法（map,filter...）

## Observable
Observer 跟 Iterator 有个共同特性，就是他们都是`渐进式`（`progressive`）的取得资料，差别只在于`Observer`是生产者（`Producer`）推送资料（`push`），而`Iterator`是消费者（`Consumer`）拉取资料（`pull`）. <br/>

`Observable` 其实就是两个 `Pattern` （模式）思想的结合，`Observable`具备生产者推送资料的特性，同时能像序列，拥有序列处理资料的方法（map,filter...）。
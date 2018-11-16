
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

* Observer (观察者)
* Subject (订阅者)
* Schedulers (操作符)

## 建立 Observable: create
最基本的方法是通过`create`，create 方法在 Rx.Observable 事件中，要传入一个 callback function ，这个 callback function 会接收一个 observer 参数 <br />

通常都使用 creation operator 像是 from, of, fromEvent, fromPromise 等 <br/>

RxJS 通常处理异步的行为，但也可以处理同步行为

## 观察者 Observer
Observable 可以被订阅（subscribe），或者可以被观察，而订阅Observable的事件又称为观察者(Observer)。观察者是一个具有三个方法（method）的`事件`，每当`Observable`发生事件时，便会呼叫观察者相对相应的方法。
观察者的三个方法(method)：

* next: 每当 Observable 发送新的值，next方法就会被调用
* complete: 在Observable没有其他的资料可以取得时，complete方法就会被调用，在complete执行之后，next方法就不会再起作用
* error: 每当Observable内发生错误时，error方法就会被调用

## Creation Operator （创建 运算符）

`Observable` 有许多创建实例的方法，称为 `creation operator`。下面我们列出 RxJS 常用的 `creation operator`。
* create
* of
* from
* fromEvent
* fromPromise
* never
* empty
* throw
* interval
* timer

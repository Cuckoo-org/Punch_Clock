
export default class Producer {
    constructor() {
        this.listeners = [];
    }

    addListener(listener) {
        if(typeof listener === 'function') {
            console.log('addListener')
            this.listeners.push(listener);
        } else {
            throw new Error('listener is must be a function')
        }
    }

    removeListener(listener) {
        console.log('removeListener')
        this.listeners.splice(this.listeners.indexOf(listener),1)
    }

    notify(message) {
        this.listeners.forEach((listener) => {
            listener(message)
        })
    }
}
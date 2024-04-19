let state = {
    counter: 100,
}

const eventBus = {
    events: {},
    subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(callback)
    },
    publish(event, data) {
        if (this.events[event]) {
            this.events[event].forEach((callback) => {
                callback(data)
            })
        }
    },
}

function increment() {
    state.counter++
    eventBus.publish('counter-updated', state.counter)
    console.log(eventBus)
}

function decrement() {
    state.counter--
    eventBus.publish('counter-updated', state.counter)
}

export { increment, decrement, eventBus }

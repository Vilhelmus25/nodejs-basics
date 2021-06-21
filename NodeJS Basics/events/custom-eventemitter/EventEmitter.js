class EventEmitter {
    constructor() {
        this.events = []
    }

    on(eventType, listener) {
        this.events[eventType] = this.events[eventType] || []
        this.events[eventType] = [...this.events[eventType], listener]      // spread operator a ... Ez hozzáfűzi a listenert most
    }

    emit(eventType) {
        if (this.events[eventType])
            this.events[eventType].forEach(listener => listener())
    }
}

module.exports = EventEmitter

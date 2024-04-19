const data = {
    _state: {
        name: {
            value: 'doctor',
            selector: 'h1',
        },
        age: {
            value: 3,
            selector: 'h2',
        },
        health: {
            value: 123,
            selector: 'h3',
        },
    },
    _renderFunctions: {
        name: (value) => `Name: ${value}`,
        age: (value) => `Age: ${value} years`,
        health: (value) => `Health: ${value}%`,
    },
    get state() {
        return this._state
    },
    set state(newState) {
        const prevState = { ...this._state }
        Object.keys(newState).forEach((key) => {
            if (this._state[key]) {
                if (this._state[key].value !== newState[key].value) {
                    this._state[key].value = newState[key].value
                    this._render(key, newState[key].value)
                }
            } else {
                this._state[key] = newState[key]
                this._render(key, newState[key].value)
            }
        })
        Object.keys(prevState).forEach((key) => {
            if (!newState[key]) {
                delete this._state[key]
                this._removeElement(key)
            }
        })
    },
    _render(key, value) {
        const selector = this._state[key].selector
        const renderFunction = this._renderFunctions[key] || ((value) => value)
        const element = document.querySelector(selector)
        if (element) {
            element.innerHTML = renderFunction(value)
        } else {
            const newElement = document.createElement(selector)
            newElement.innerHTML = renderFunction(value)
            document.body.appendChild(newElement)
            console.warn(
                `No element found for selector "${selector}" creating 1`
            )
        }
    },
    _removeElement(key) {
        const selector = this._state[key].selector
        const element = document.querySelector(selector)
        if (element) {
            element.remove()
        }
    },
    addState(key, value, selector, renderFunction) {
        this._state[key] = { value, selector }
        if (renderFunction) {
            this._renderFunctions[key] = renderFunction
        }
        this._render(key, value)
    },
}

function updateState(e) {
    const value = e.value
    data.state = {
        ...data.state,
        name: {
            value,
            selector: 'h1',
        },
    }
}

// Usage

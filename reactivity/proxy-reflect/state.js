export const createState = (initialState) => {
    const state = {
        value: initialState.value,
        element: initialState.element,
    }
    const handler = {
        get(target, prop, receiver) {
            return Reflect.get(...arguments)
        },
        set(target, prop, value, receiver) {
            Reflect.set(target, 'value', value, receiver)
            render()
            return true
        },
    }
    function render() {
        state.element.innerHTML = state.value.toString()
    }
    return new Proxy(state, handler)
}

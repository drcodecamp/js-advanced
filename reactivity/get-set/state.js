export const createState = (initialState) => {
    return {
        _state: initialState.value,
        get state() {
            return this._state
        },
        set state(newState) {
            this._state = newState
            this.render()
        },
        render() {
            initialState.element.innerHTML = this._state
        },
    }
}


import { createStore } from 'redux';

const defaultState = {
    products: {}
}

const reducer = (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type) {
        default:
            return {...state}
    }
}

const store = createStore(reducer);

export default store;
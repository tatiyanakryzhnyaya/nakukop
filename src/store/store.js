
import { createStore } from 'redux';
import names from "../api/names.json";
import {Value as data } from "../api/data.json";
import  { LOAD_GROUPS } from "./constants";

const defaultState = {
    products: [],
    groups: {}
}

const reducer = (state, action) => {
    const {type} = action;
    switch (type) {
        case LOAD_GROUPS:
            return {
                ...state,
                products:  data.Goods,
                fullProducts: names
            }
        default:
            return {...state}
    }
}

const store = createStore(reducer, defaultState);

export default store;
import { createStore } from 'redux'

let Store = {
    setStore:(newValue) =>{
        let info = createStore(getValue , newValue);

        return info;
    }
};

function getValue(value) {
    return value;
}

export {
    Store
}
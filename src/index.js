import {createStore} from "redux";

const add = document.getElementById("Plus");
const minus = document.getElementById("Minus");
const num = document.querySelector("span");

const PLUS = "ADD";
const MINUS = "MINUS";


num.innerText = 0;

const countModifier = (count = 0, action ) => {
    switch (action.type) {
        case PLUS:
            return count + 1;
        case MINUS:
            return count - 1;
        default :
            return count;
    }
}

const countStore = createStore(countModifier);

const onChange = () => {
    num.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handlePlus = () => {
    countStore.dispatch({type: PLUS});
}

const handleMinus = () => {
    countStore.dispatch({type: MINUS});
}


add.addEventListener('click', handlePlus);
minus.addEventListener('click', handleMinus);
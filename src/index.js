import {createStore} from "redux";

const plus = document.getElementById("Plus");
const minus = document.getElementById("Minus");
const num = document.querySelector("span");

num.innerText = 0;

const countModifier = (count = 0, action ) => {
    if(action.type === "Add") {
        return count + 1;
    } else if (action.type === "Minus") {
        return count - 1;
    } else {
        return count;
    }
}

const countStore = createStore(countModifier);

const onChange = () => {
    num.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handlePlus = () => {
    countStore.dispatch({type:"Add"});
}

const handleMinus = () => {
    countStore.dispatch({type:"Minus"});
}


plus.addEventListener('click', handlePlus);
minus.addEventListener('click', handleMinus);
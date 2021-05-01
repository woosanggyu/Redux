import {createStore} from "redux";

const plus = document.getElementById("Plus");
const minus = document.getElementById("Minus")
const num = document.querySelector("span")

const countModifier = (count = 0) => {
    
    return count;
}

const countStore = createStore(countModifier);

console.log(countStore.getState());
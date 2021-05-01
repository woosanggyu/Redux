import {createStore} from "redux";

const plus = document.getElementById("Plus");
const minus = document.getElementById("Minus")
const num = document.querySelector("span")

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

//오브젝트 형식이어야 함.
countStore.dispatch({ type : "Add"});

console.log(countStore.getState())
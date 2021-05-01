const plus = document.getElementById("Plus");
const minus = document.getElementById("Minus")
const num = document.querySelector("span")

let count = 0;

num.innerText = count;

const updateText = () => {
    num.innerText = count;
}

const handlePlus = () => {
    count = count + 1;
    updateText()
}

const handleMinus = () => {
    count = count - 1;
    updateText()
}


plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);

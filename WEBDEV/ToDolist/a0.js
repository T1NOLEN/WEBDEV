let text = document.getElementById("text");
text.innerHTML = "TO DO";
// console.log(text);

let box = document.querySelector('#box');
let input = document.querySelector('.todo_input');
let btn = document.querySelector('.btn');

const listItems = document.getElementById("box").getElementsByTagName("li");
const removeButton = document.getElementById("btn_rem");

console.log();


btn.addEventListener('onclick', addElement);

function addElement(){

    let new_el = document.createElement("li");
    new_el.innerHTML = input.value;

    box.appendChild(new_el);

    input.value = "";
}
removeButton.addEventListener("click", removeElement);

function removeElement(){
    if(listItems.length === 0) return;

    const last = listItems[listItems.length - 1];
    last.parentNode.removeChild(last)}


const inputbox = document.getElementById("input-box");
const add= document.getElementById("add");
const listcontainer = document.getElementById("list-container");
var count = 0;
let res = document.getElementById("reset");

function addtask(){
    if(inputbox.value === ''){
        alert("You must Enter something");
        res.remove();
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);

    }
    inputbox.value = "";
    savedata();
    remaining();
}




const left_tasks =  document.getElementById('left')

function remaining(){
    let itemlist = document.getElementById('list-container');
    if(itemlist.children.length == 0){
        left_tasks.innerHTML = "";
    }
    else{
        left_tasks.innerHTML = `${itemlist.children.length} Tasks left`;
    }
}




listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
        remaining();
    }
},false);


function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}

showtask()

document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.getElementById('input-box');
    var button = document.getElementById('add');
    window.addEventListener('keydown', function(event) {
        // Check if the key pressed is Enter (key code 13)
        if (event.keyCode === 13) {
            if (document.activeElement === inputField) {
                button.click();
            }
        }
    });
});



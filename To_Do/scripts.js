const list = document.getElementById("list");
const inputbox = document.getElementById("input_box");

showtask();

function addtask(){
    if(inputbox.value===''){
        alert("You must write something to add in the list:");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerText="\u00d7";
        li.appendChild(span);
        inputbox.value='';
        savedata();
    }
}

list.addEventListener("click" , function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("cheaked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}  , false);


function savedata(){
    localStorage.setItem("data" , list.innerHTML);
}
function showtask(){
    list.innerHTML = localStorage.getItem("data");
}

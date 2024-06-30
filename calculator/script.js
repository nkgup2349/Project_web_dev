let res = document.getElementById("result");

function myvalue(v){
    res.value+= v;
} 
function result(){
    res.innerHTML="<br>";  
    res.value=eval(res.value); 
}

function cls(){
    res.value = "";
}


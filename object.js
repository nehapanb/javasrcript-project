/*
let object={

    name:"Neha",
    age:24,
    contact:70000
}

for (k in object){
    console.log(object[K])
}*/

let object ={
 name : document.querySelector("#name").value,
 age : document.querySelector("#age").value,
contact : document.querySelector("#contact").value,
}
localStorage.setItem("data",JSON.stringify(object))
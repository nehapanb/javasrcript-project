function save(){
let data = {
 name : document.querySelector("#name").value,
Age : document.querySelector("#age").value,
contact : document.querySelector("#contact").value
}
localStorage.setItem("mydata",JSON.stringify(data))
//let d = Json.stringify(data)
}

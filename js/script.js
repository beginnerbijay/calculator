 let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector("input");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(event)=>{
        console.log(event.target);
    if(event.target.innerHTML == "="){
        string =eval(string)
        input.value = string
    }else if(event.target.innerHTML == "C"){
        string = ""
        input.value = string
    }else{
        string = string + event.target.innerHTML
        input.value = string
    }
})})

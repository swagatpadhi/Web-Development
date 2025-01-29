var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = 0

btn.addEventListener("click", function(){
    if(flag == 0) {
        bulb.style.backgroundColor = "yellow"
        flag = 1
    }else {
        bulb.style.backgroundColor = "transparent"
        flag = 0
    }
})

var h = document.querySelectorAll("h1")
console.log(h)

h.forEach(function(val){
    console.log(val)
})
var con = document.querySelector("#container")
var love = document.querySelector("i")

con.addEventListener("dblclick", function(){
    love.style.opacity = 0.8
    love.style.transform = "translate(-50%, -50%) scale(2)"
    
    setTimeout(function(){
        love.style.transform = "translate(-50%, -50%) scale(0)"
    }, 500 )
})
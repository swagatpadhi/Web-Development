var istatus = document.querySelector("h5")
var addFriend = document.querySelector("#add")
var flag = 0

addFriend.addEventListener("click", function(){
    if(flag == 0) {
        istatus.innerHTML = "Friend"
        istatus.style.color = "green"
        addFriend.innerHTML = "Remove"
        addFriend.style.backgroundColor = "grey"
        flag = 1
    }
    else{
        istatus.innerHTML = "F, 44"
        istatus.style.color = "yellow"
        addFriend.innerHTML = "Add"
        addFriend.style.backgroundColor = "cornflowerblue"
        flag = 0
    }
})

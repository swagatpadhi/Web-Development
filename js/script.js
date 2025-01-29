function abcd() {
    console.log(this)
}

var obj = {
    age: 100
}

var bindedFnc = abcd.bind(obj)
bindedFnc()
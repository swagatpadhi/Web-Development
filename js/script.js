console.log(typeof {})
console.log(typeof [])
console.log(Array.isArray([]))
console.log(Array.isArray({}))

var obj = {
    name: "Swagat",
    age: 21,
    gender: "M"
}
console.log(obj)
delete obj.age
console.log(obj)
console.log(obj.age)
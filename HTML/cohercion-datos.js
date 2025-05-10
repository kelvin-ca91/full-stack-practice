let a = 1
let b = "1"
let c = true

// if (a === b) {
//   console.log("son iguales")
// } else {
//   console.log("son diferentes")
// }

if (a === c) {
  console.log("son iguales")
} else {
  console.log("son diferentes")
}

let arr = [1, 2, 3]
// ...arr => 1,2,3 
let arr2 = [...arr]

arr2[0] = 10
console.log('arr => ' + arr)
console.log('arr2 => ' + arr2)
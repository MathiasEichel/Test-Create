function sum(a,b) {
    return a+b
} 
const sum_ = (a,b) => a+b

function posNumber(number) {
    return number > 0
}
let posNumber_ = number => number > 0

function randomNum() {
    return Math.random()
}
let randomNum_ = () => Math.random()

// document.addEventListener('click', function() {
//     console.log('pressed key')
// })

// document.addEventListener('click', () => console.log('pressed key'))

c = sum(1,2)
c_ = sum_(1,2)
d = posNumber(-2)
d_ = posNumber_(-2)
e = randomNum()
e_ = randomNum_()
console.log('c= ' + c)
console.log('c_= ' + c_)
console.log('d= ', d)
console.log('d_= ', d_)
console.log('e= ' + e)
console.log('e_= ' + e_)






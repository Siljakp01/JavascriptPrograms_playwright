function printHello()
{
    console.log("Hello World")
}
printHello()

function addNumbers(a,b)
{
   let sum=a+b 
   console.log(sum)
}
addNumbers(10,20)
addNumbers(100,150)
/*return*/
function subNumbers(a,b)
{
    let diff=a-b
    return diff
}
const output=subNumbers(90,40)
console.log(output)
console.log(subNumbers(60,25))
/* Anonymous function*/

const greet=function ()
{
    console.log("Hai")
}
greet()

//Arrow function

const display=()=>{console.log("good morning" )}
display()

const add =(a,b)=>a+b
const a=add(23,23)
console.log(a)
const fruits = ["Apple", "Banana", "Orange"];
fruits.push("grapes")
console.log(fruits)
fruits.splice(1,0,"pomo")
console.log(fruits)
fruits.splice(2,3,"papaya")
console.log(fruits)
for (const fruit of fruits)
{
    console.log(fruit)
}

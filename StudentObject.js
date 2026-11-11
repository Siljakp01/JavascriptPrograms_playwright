const student={
    name:"silja",
    age:40,
    city:"trivandrum"
}
console.log(student.name)//dot notation
console.log(student["age"])
student.gender="female"//add
console.log(student)
student.age=50//update
console.log(student.age)
delete student.city//delete
console.log(student)
for(let key in student)
{
    console.log(key +":" +student[key])
}

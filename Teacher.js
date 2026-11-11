import {Employee} from "./Employee.js"
class Teacher extends Employee{

constructor(subject)
{
    super(123,"Silja")
this.subject=subject

}
responsibility()
{
    console.log(`${this.subject} is teaching`)
}
display()
{
    console.log("details are displayed")
}
}

const teacherobj=new Teacher("English")

    teacherobj.responsibility()
    teacherobj.display()
    teacherobj.Printdisplay()

const Emplyeeobj =new Employee(1234,"kiran")
Emplyeeobj.responsibility()
Emplyeeobj.Printdisplay()
console.log(Emplyeeobj.empName)

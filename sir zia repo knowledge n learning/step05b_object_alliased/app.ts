//step 05 b object alliased
// anonymous

let teacher : {name: string, exp: number} = {
    name: "Zeeshan",
    exp: 10
    }

    
// Aliased Object Type
type Student = {
    name: string,
    age?: number
    }
    
    let student: Student = {
    name: "Hira",
    age: 30
    }
    
    console.log(student["name"]);
    console.log(student.age);

    // is ki misal ye h k pehly define kr dete string number etc lekin alag type 
    // bna ke. type ke andar define krty hain aur type k andar hi answer dena prta h.

// Interfaces

interface Manager {
    name: string,
    subordiates?: number
    }
    
    let storeManager: Manager = {
    name: "Bilal"
    }
// interfacce properties aur methods ko define kr rha hota h ye b blue print
// content h. structure aur aur shape b bayan krta h 
// improve code readability and maintainabilty

// type allias / alliased typ object

type Teacher = {
    name: string,
    exp: number
}

let myTeacher : Teacher = {
    name: "John",
    exp: 10
}
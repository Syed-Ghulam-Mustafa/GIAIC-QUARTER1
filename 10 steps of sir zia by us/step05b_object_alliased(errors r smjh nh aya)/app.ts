// is mein main ny sir zia ko follow kiya h to boht zyada errors hyn


//anonymous

let teacher : {name:"string",exp:number} = {
    name: "Zeeshan",
    exp: 10
}

//Alliased Object Type
type Student = {
name: "string",
age?: number
}

let student : Student = {
    name: "Hira",
    age:30
}

console.log(student["name"]);
console.log(student.age);

// Interfaces
interface Manager {
    name: string;
    subordites?: number
}

let storeManager : Manager = {
    name: "Bilal"
}





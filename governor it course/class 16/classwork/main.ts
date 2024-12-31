//tutorialsteacher.com

// Union Type

//Definining a Union Type.

let age: number = 20
let userId: number = 12345

//Union literals type

let userId2 : number | string = 123456 //programing language mein iski 
// type 2 types ka union hai.

userId2 = "giaic123"


//Type Allias

type StudentType = string | number | boolean
let studentId : StudentType = 1234

studentId = "giaic890"

// Narrowing

// narrow mein specificilly define krna prega k agar string hotonis tarah handle kro
// aur agr numbr ho to istarah handle kro.
//agr generic ho means donu chl rhy hon to phr zrurt nh h narrowing ki.

function testingNarrowing (params: string | number) {
    if (typeof(params) == "number")
    return Math.round(params)  //Argument of type 'string | number' 
    if (typeof params == "string") {
        return params.toUpperCase()
    }
}
console.log(testingNarrowing('ali'))

type teacherNamestype = "Hina" | "Anas" | "fahad" | "ahmed" | 2 | "Daniyal Nagori" 
let teacherNames : teacherNamestype =  "Daniyal Nagori" //error qk upar waly names k ilawa name h

teacherNames = "Hina"
if(typeof(teacherNames) == "string"){
    console.log("teacher name is Hina")
}else if(teacherNames == "Anas"){
    console.log("teacher name is Anas")
}
    
// Loops

//for loop

for (let a = 1; a<=10; a++) {
    console.log ("today is sunday "+ a)
}

for (let i =10; i>=1; i--) {
    console.log(i);
    
}

// while loop
 let i = 9
while (i < 4) {
    console.log("Block statement ");
    
}

for (let index =0;
    index < Array.length;
    index ++
){}

// do {}

let step = 0
 while (step < 10) {
    console.log("Abdullah moving to gate");
    step = step + 1 //agr ye nh likhengy to while loop nh chlega.
}

let steps : number = 0;
do {
    console.log("Abdullah Running" + steps);
    
} while (steps < 4); //0 se 3 tk repeat krega yani 4 times. 0 is liye qk steps ki value 0 h upar aur 3 is liye qk 
                     // steps < 4 h means less than 4.

// for of 

let arrayData = [10, 20, 30, 40 ,50]

for (let element of arrayData ){
    console.log(element)
}

// for in 

for (let element3 in arrayData) {
    console.log(element3);
    
}

// for loop
// let arrayData2 : any = {
//     name : "Fahad",
//     class : "Sunday"
// }; 

let studentToLeave = [
    "Bilal",
    "Saad",
    "Asad",
    "Abdullah",
    "Fahad",
]

for (let index = 0;
    index < studentToLeave.length; index++)
     {
    if (studentToLeave[index] == "Abdullah") {
        console.log ("Abdullah Run");
break;
    } else {
        console.log(studentToLeave[index]);
        console.log("Bye Bye !")
        continue;
    }
}


// Enum

const ty = 2796 //this is student role_id

enum Role {
    STUDENT_ROLE = 2796,
    ADMIN_ROLE = 796,
SUPER_ADMIN_ROLE = 879}
    // if (role_id == ty)
    //     console.log("Provide Access for student");

    // if (role_Id == Role.SUPER_ADMIN_ROLE) {
    //     TestContext()
    //     console.log(" ");
    // }

    // else if (roleId == Role.STUDENT_ROLE) {
    //     console.log("operation");
        
    // }





















    //important topics
    // asynchronous programming
    


    //topics covered in last video
    //asynchronous
    // callback help
    /*concurrency





    array string reverse in javascript   (from google) */

    enum Role {
        StudentRole = 44,
        AdminRole = 22,
        SuperAdminRole = 11
    }

    enum colors {
        orange,
        yellow
    }




        
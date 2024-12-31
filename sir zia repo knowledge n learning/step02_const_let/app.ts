//const ka istmal hum tb krty hain jb value change nh krani hoti

//use const where variable values do not change
const a = 5;
const b : number = 33;
const c ="best";

//I suggest use let instead of var everywhere,
//becuase let has blocked scope
if (true) {
    let z = 4;
    //use z
    }
    else {
    let z = "string";
    //use z
    
    console.log("let: " + z);// Error: z is not defined in this scope
    }

    //z py error araha tha us error ko khtm krny k liye pure console.log ko 
    // curly bracket k andar dal diya. (pehly bahir tha.)

    let school = "abc high school"
    school = "HED high school"
    console.log(school);
    
    
    
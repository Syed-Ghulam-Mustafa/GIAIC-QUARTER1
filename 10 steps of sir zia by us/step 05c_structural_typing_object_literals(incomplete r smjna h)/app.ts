// these two interfaces are completely tranferabble
// in a structural type system

interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}

let ball : Ball = {diameter: 10}
let sphere : Sphere = {diameter:20}


// If we add in a type which structurally contains all of
  // the members of Ball and Sphere, then it also can be
  // set to be a ball or sphere.
  
  interface Tube {
    diameter: number;
    length: number;
  }

  let tube : Tube = {diameter: 12, length: 3}

  // tube = ball //error property length nh h ball mein.

  ball = tube;

   // Because a ball does not have a length, then it cannot be
  // assigned to the tube variable. However, all of the members
  // of Ball are inside tube, and so it can be assigned.
 // TypeScript is comparing each member in the type against
  // each other to verify their equality.

  // left side py jisko rkhengy uski requirements dekhta hai. left side tube ko rkha to error de diya kyunke ball mein length nh tha
  // left side py ball ko rkha to error nh dia qk ball mein sirf diameter h aur wo tube mein b hai.
  // (ye mera personal opinion hai)


//===================================================

// Now lets do it Case By Case


//Case when "FRESH"" object literal are assigned to a variable 
//Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type, 
//it is an error for the object literal to specify properties that don't exist in the target type.
//The rationale for the below two errors is that since the fresh types of the object literals are 
//never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost. 


let myType = { name: "Zia", id:1};

// Case1
myType = {id:2, name: "Tom"}
//Object literals can only have properties that exist in contextual type

// Case2a
// myType = { id: 2,  name_person: "Tom" }; //yahan error h qk upar myType = {nmae:"Zia",id:1} diya tha means name aur id
// aur yahan name ki jaga name_person likha h is liye error h.

//Case 2b 
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: {id: number, [x: string] :any;}//Note now 'x' can have any name, just that the property should be of type string

x = {id: 1, fullname: "Zia"};// Ok, `fullname` matched by index signature


//Case 3
myType = { id: 2,  name: "Tom", age: 22 };//Case 3: Error, excess property
// yhan py error h qk age wali property extra add kr di hai. upar sirf name aue id btaya tha


//=================================================


//Case when STALE object literal are assigned to a variable 

let myType2 = { id: 2,  name: "Tom" };


//Case 1
myType = myType2;//Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object

let myType3 = { id: 2,  name_person: "Tom" };

//Case 2: Error, renamed or missing property, rule same for stale and fresh object


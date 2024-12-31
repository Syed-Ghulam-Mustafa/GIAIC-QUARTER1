// step 09d
// Rest Parameters

// Rest parameter in named function

function myFunc (a:number , ...b:number[]) :number {
//return a + b.push()
return a + b.unshift()
}  // join method nh chlta number array mn add krny k liye. wo string ka h method

//myFunc(2,7,9,9,6,4)
let result = myFunc(5,7,4,9,7)
console.log(result);

function Greet (a: string, ...b : string []) : string {
    return a + b.join(" ")
}

console.log(Greet("Hello","lee market","saddar town","karachi", "Pakistan"));





let mydetails =function(a:string,...b:number[]):string{
    return a  +  b.push()

}
let result1= mydetails("syed ghulam mustafa",123,222,111)
console.log(result);

function add(a:number,...b:number[]){
    return a + b.push()

}
let c =add(1223,222,33)
console.log(c);

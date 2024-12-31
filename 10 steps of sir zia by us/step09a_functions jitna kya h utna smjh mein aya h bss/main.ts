//Note: All parameters are required

//Named function
function add(x: number, y: number): number {
    return x+y;
}
console.log(add(6,4))

//Anonymous function
let myAdd1 = function(x: number, y: number): number { 
    return x+y; 
};
console.log(myAdd1(4,4));


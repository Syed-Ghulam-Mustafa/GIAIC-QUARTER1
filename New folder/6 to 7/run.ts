let ounpage : unknown = "syed ghulam mustafa"
console.log((ounpage as string ).length);

let name1 : any = 112233
console.log((name1 as number ));

//enum
enum color {red , green , blue}
let c: color = color.blue
console.log(color.blue);

enum color1 {orang=1,apple,pinapple}
let  colorindex  = color1[3]
console.log(colorindex);


enum animal {elephant=3,loin,wildcat}
let animal1 = animal[4]
console.log(animal1);

//const enum
const enum favfruit{apple,pomegranede,pinapple}
let fruit = favfruit.pomegranede
console.log(fruit);

const enum color2 {red,yellow,blue,green}
let colorindex1 = color2["yellow"]
console.log(colorindex1);

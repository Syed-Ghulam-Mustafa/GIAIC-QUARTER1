enum Color { red,green,blue}
let c: Color = Color.green
enum Color1 {Red=1,green,blue}
let ColorName: string = Color1[2]
console.log(ColorName)

enum Color2 {Red=1, Green = 2, Blue = 4}
let colorIndex = Color2 ["Blue"]
console.log(colorIndex);

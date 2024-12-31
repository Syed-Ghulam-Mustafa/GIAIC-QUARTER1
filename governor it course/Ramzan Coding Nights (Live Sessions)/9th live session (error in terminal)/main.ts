
// words counter
// 9th live session of ramzan coding nights by asharib ali and sir ameen alam
// samjh agya hai main.ts ki puri file mein kahin bhi koi error b show nh ho rha phr b terminal mein TypeError arha hai aur program chal nh rha.
// is liye isko dobara krna b h aur samjhna b hai InshaALLAH.


// import the inquirer module which is a command line for Node.js
import inquirer from "inquirer";

// Declare a constant 'answers' and assign it to the result of inquirer.prompt function

const answers: {
    Sentence: String
} = await inquirer.prompt([
    {
    name: "sentence",
    type: "input",
    message: "What is your sentence?"
    }
])

const words = answers.Sentence.trim().split(" ")
console.log(words)
console.log(`The sentence has ${words.length} words.`)

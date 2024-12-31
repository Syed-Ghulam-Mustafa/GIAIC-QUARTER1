// TODO List learn by Ramzan coding nights 7th live session Sir Ameen Alam, Miss Manal and Sir Bilal

import inquirer from "inquirer"

let todos = [];
let condition_for_whiile = true;

while (condition_for_whiile) {
    let todoQuestions= await inquirer.prompt([{
        name: "firstQuestion",
        type:"input",
        message: "What would you like to add in your todo list?"
    },
    {
        name: "secondQuestion",
        type:"confirm",
        message: "Are you sure to add in the list?",
        default: true
    
    }
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    condition_for_whiile = todoQuestions.secondQuestion
}

// homework for this todo list.
// line no 3 se line 25 tk jo coding hai isko console.log krwany py
// khali list b print ho rhi hai. ye nh hona chahye. jo answer print hota h us mein khali wala part na aye.
// 1. delete 2. view 3. update ye 3 options b shamil krny hyn is program mein


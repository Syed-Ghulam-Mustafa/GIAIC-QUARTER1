import inquirer from "inquirer";
// install inquirer  done
// array             done
//function
//operators
// await inquirer.prompt ke andar type "list" denge to wo choices dega  aur agr type "input" denge to simple print krega choice nh dega.
let todos = [];
async function createTodo(todos) {
    let ans = await inquirer.prompt({
        type: "list",
        name: "todo",
        message: "select an operation",
        choices: ["Add", "Update", "view", "delete"],
    });
    if (ans.select == "Add") {
        let addTodo = await inquirer.prompt({
            type: "input",
            name: "adding todo",
            message: "Add items in the list.",
        });
        todos.push(addTodo["adding todo"]);
        console.log(todos);
    }
    if (ans.select == "Update") { }
    if (ans.select == "view") { }
    if (ans.select == "delete") { }
}

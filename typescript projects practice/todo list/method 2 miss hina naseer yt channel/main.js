import inquirer from "inquirer";
// inquirer  done
// array     done
// function  done
// operators
// homework miss hina ne ye diya hai ke jis tarah todo list mein add waly part mein hum ny foreach ka function chlaya h console.log ko comment kr k to ab wo print mein array k bajaye list ki form mein print kr rha hai. jb ke pehly console.log lga hua tha to wo array ki surat mein print kr rha tha.
// same isi tarah hum ny khud se ye kam krna hai ke remaining 3 parts yani update, view, aur delete mein b for each lgana hai aur inko b list ki surat mein print krwana hai.
// update wala part is tarah hoga k pehly wo add krega phir update krega phr aik new array return krdega.
// for example. Syed
//   Akber for example ye nam mujy change kr k Azhsr krna h.
// Shah
// Syed
// Akber Azhar
// Shah
// Syed
// Azhar
// Shah
let todos = [];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["add", "update", "view", "delete"],
        });
        if (ans.select == "add") {
            let addTodo = await inquirer.prompt({
                name: "todo",
                message: "add a task in the list",
                type: "input"
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
            // console.log(todos);
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                name: "todo",
                message: "update a task",
                type: "list",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                name: "todo",
                message: "add a task in the list",
                type: "input"
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log("**** TODO LIST ****");
            console.log(todos);
            console.log("    ***********    ");
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                name: "todo",
                message: "update a task",
                type: "list",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);

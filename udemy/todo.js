import fs from "node:fs";

const filePath = "./tasks2.json";

const loadTask = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    console.log("error getting the values");
    return [];
  }
};

const saveTask = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTask();
  tasks.push({ task });
  saveTask(tasks);
  console.log(`${task} added succesfully`);
};

const listTask = () => {
  const listArr = loadTask();
  listArr.forEach((index, item) => {
    console.log(`${index + 1} - ${item.task}`);
  });
};

const removeTask = (index) => {
  const tasks = loadTask()
  const taskIndex = parseInt(index) - 1

  if(taskIndex < 0 || taskIndex > tasks.length){
    console.log("give an appropriate index")
    return 
  }

  const removedTask = tasks.splice(taskIndex, 1)[0]

  saveTask(tasks)

  console.log(`removed ${removeTask.tasks} from list`)


};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "addTask") {
  addTask(argument);
} else if (command === "listTask") {
  listTask();
} else if (command === "removeTask") {
  removeTask(argument);
} else {
  console.log("enter a valuable option");
}

/** import fs from "node:fs"
const filePath = "./tasks.json"


// loading the current task
const loadTask= ()=>{
    try {
       const dataBuffer =  fs.readFileSync(filePath)
       const dataJSON = dataBuffer.toString()
       JSON.parse(dataJSON)
    } catch (error) {
        console.log("error getting the data")
    }
    return []
}

//saving the current task
const saveTask = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJSON)
}

//adding the task
const addTask = (task)=>{
    const tasks = loadTask()
    tasks.push({task})
    saveTask(tasks)
    console.log("Task added", task)
}

const listTask = ()=>{
    const tasksArr = loadTask()
    tasksArr.forEach((task, index) =>
      console.log(`${index + 1} - ${tasksArr.task}`)
    );
}

const command = process.argv[2]
const argument = process.argv[3]

if(command === "add"){
    addTask(argument)
}
else if(command === "list"){
    listTask()
}
else if(command === "remove"){
    removeTask(parseInt(argument))
}
else{
    console.log("command not found")
}*/

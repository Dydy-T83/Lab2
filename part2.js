var myTasksArray = [];
//fonction aui ajoute une
function addTask(task) {
    myTasksArray.push(task); //push est une methode aui ajoute chaine de caractere au tableau Array
    console.log("Item " + task + "has been added to the Array");
    return myTasksArray.length;
}
function listAllTasks() {
    //for(let i=0; i<myTasksArray.length;i++){
    //}
    console.log("Array contains the following items : ");
    myTasksArray.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = myTasksArray.indexOf(task); //chercher ce aue c'est indexOf
    if (index > -1) {
        myTasksArray.splice(index, 1);
        console.log("Item " + task + " deleted from array.");
    }
    else {
        console.log("Item " + task + " not in array.");
    }
    return myTasksArray.length;
}
addTask("Complete Lab");
var numberOfTask = addTask("Eat Breakfeast"); //nombre de mot
console.log("The number of task to do today is" + numberOfTask);
listAllTasks();
deleteTask("Complete Lab");

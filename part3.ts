import {tasksInterface} from './interface';

class Todos implements tasksInterface{
    myTasksArray: Array<string> = [];
    
    addTask(task:string):number{ //retourne un nombre
       this.myTasksArray.push(task)//push est une methode aui ajoute chaine de caractere au tableau Array
        console.log("Item "+task+"has been added to the Array");
        return this.myTasksArray.length;
    }

    listAllTasks(){
        //for(let i=0; i<myTasksArray.length;i++){
        //}
        console.log("Array contains the following items : ")
        this.myTasksArray.forEach(function(task){
            console.log(task);
        })
    }
    
    deleteTask(task:string):number{
        let index:number = this.myTasksArray.indexOf(task); //chercher ce aue c'est indexOf
        if (index>-1){
            this.myTasksArray.splice(index,1);
            console.log("Item "+task+" deleted from array.");
        }else{
            console.log("Item "+task+" not in array.");
        }
        return this.myTasksArray.length;
    }
}

let todo= new Todos();
todo.addTask("Complet Lab");
todo.addTask("jhfhgfgh");
todo.listAllTasks();
todo.deleteTask("Complete Lab");
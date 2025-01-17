import TODO from "./TODO.js";

export default class PROJECT{
    constructor(projName,creator,dateAdded,dateDue,todos,description){
        this.projName = projName; 
        this.creator = creator;
        this.created = dateAdded;
        this.due = dateDue;
        if(todos){this.todos = todos}else{this.todos = []};
        if(description){this.desc = description}else{this.desc = 'Enter Project Description Here!'};
        this.size = 0;
    };
    // Methods that can be called on this class
    addToDo(title,content,dueBy,prio){
        const todo = new TODO(title,content,dueBy,prio,this.size); // Creates a new todo
        this.todos.push(todo); // Adds the todo to the array of todos
        this.size++;
        this.update()// Need to update the project somehow
    }

    update(){
        console.log(this.todos,this.size);
    }

    deleteToDo(){

    }

    render(){
        
    }
}
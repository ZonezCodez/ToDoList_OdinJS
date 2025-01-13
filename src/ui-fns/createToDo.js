export default function createToDo(todoObj){
    const todoBox = document.createElement('div');//Create the outer box to hold the todo
    
    const exit = document.createElement('p');
    const title = document.createElement('p');
    const due = document.createElement('p');
    const created = document.createElement('p');
    const description = document.createElement('p');
    const prioLabel = document.createElement('label');
    const prioInput = document.createElement('input');
    const finished = document.createElement('button');

    if(todoObj.prio === 'max'){todoBox.style.backgroundColor = 'red'}
    else if(todoObj.prio === 'min'){todoBox.style.backgroundColor = 'green'};

    todoBox.setAttribute('id','')
}
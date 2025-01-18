export default function createProjectUI(project){
    const cardBox = document.createElement('div');
    const cardDelete = document.createElement('div');
    const cardProject = document.createElement('div');
    const cardCreator = document.createElement('div');
    const cardCreated = document.createElement('div');
    const cardDue = document.createElement('div');
    const cardToDos = document.createElement('div');
    const cardDesc = document.createElement('div');
    // add text to everything
    cardDelete.textContent = 'X';
    cardProject.textContent = `${project.projName}`;
    cardCreator.textContent = `${project.creator}`;
    cardCreated.textContent = `${project.created}`;
    cardDue.textContent = `${project.due}`;
    cardDesc.textContent = `${project.desc}`;
    // Loop through each todo and create the todo
    project.todos.forEach(todo => {
        //Need to add todo creation functionality by calling a method on the todo class.
        cardToDos.appendChild(todo.createToDoUI());
    });
    //Append stuff
    cardBox.appendChild(cardDelete);
    cardBox.appendChild(cardProject);
    cardBox.appendChild(cardCreator);
    cardBox.appendChild(cardCreated);
    cardBox.appendChild(cardDue);
    cardBox.appendChild(cardToDos);
    cardBox.appendChild(cardDesc);
    
    return cardBox;
}
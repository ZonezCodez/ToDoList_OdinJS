export default function createProjectModal(){
    // Create all the elements for the modal box
    const modalBox = document.createElement('div');
    const formBox = document.createElement('form');
    const exitModal = document.createElement('p');
    const title = document.createElement('p');
    const labelProjName = document.createElement('label');
    const inputProjName = document.createElement('input');
    const labelCreatorName = document.createElement('label');
    const inputCreatorName = document.createElement('input');
    const labelDue = document.createElement('label');
    const inputDue = document.createElement('input');
    const labelDescription = document.createElement('label');
    const inputDescription = document.createElement('textarea');
    const submitBtn = document.createElement('input');
    // Add text to the form
    exitModal.textContent = 'X';
    title.textContent = 'Add Project';
    labelProjName.textContent = 'Project Name: ';
    labelCreatorName.textContent = 'Your Name: ';
    labelDue.textContent = 'Due Date: ';
    labelDescription.textContent = 'Project Description: ';
    submitBtn.value = 'Add Project';
    // Add ids and other attributes of the form
    modalBox.style.width = '100vw';
    modalBox.style.height = '100vh';
    modalBox.style.display = 'grid';
    modalBox.style.justifyContent = 'center';
    modalBox.style.alignContent = 'center';
    formBox.style.color = 'white';
    formBox.style.display = 'grid';
    formBox.style.height = '50vh';
    formBox.style.border = '1px solid white';
    formBox.style.padding = '10px';
    exitModal.style.paddingRight = '5px';
    exitModal.style.display = 'grid';
    exitModal.style.justifyContent = 'end';
    title.style.fontSize = '34px';
    title.style.padding = '0';
    title.style.margin = '0';
    title.style.textAlign = 'center'
    submitBtn.type = 'submit';
    // Add event listeners to the form

    // Append everything together
    labelProjName.appendChild(inputProjName);
    labelCreatorName.appendChild(inputCreatorName);
    labelDue.appendChild(inputDue);
    labelDescription.appendChild(inputDescription);
    formBox.appendChild(exitModal);
    formBox.appendChild(title);
    formBox.appendChild(labelProjName);
    formBox.appendChild(labelCreatorName);
    formBox.appendChild(labelDue);
    formBox.appendChild(labelDescription);
    formBox.appendChild(submitBtn);
    modalBox.appendChild(formBox);
    // Returns the modal after its created and appended
    return modalBox;
};
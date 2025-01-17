import closeModal from "../modal-fns/closeModal.js";
import submitModal from "../modal-fns/submitModal.js";

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
    formBox.style.borderRadius = '10px';
    formBox.style.padding = '0px 10px 10px 10px';
    formBox.style.backgroundColor = 'brown';
    formBox.style.boxShadow = '2px 2px yellow'
    formBox.setAttribute('id','submitProject');
    exitModal.style.paddingRight = '5px';
    exitModal.style.display = 'grid';
    exitModal.style.justifyContent = 'end';
    exitModal.style.fontSize = '18px';
    exitModal.style.cursor = 'pointer';
    exitModal.setAttribute('id','exitProjectModal');
    title.style.fontSize = '30px';
    title.style.padding = '0';
    title.style.margin = '0';
    title.style.textAlign = 'center'
    submitBtn.type = 'submit';
    submitBtn.style.width = '50%';
    submitBtn.style.display = 'grid';
    submitBtn.style.justifySelf = 'center';
    submitBtn.style.cursor = 'pointer';
    labelDescription.style.display = 'grid';
    inputDescription.style.marginBottom = '10px'
    // Adds tags to everything needed to get form answers
    labelProjName.setAttribute('for','projName');
    inputProjName.setAttribute('name','projName');
    labelCreatorName.setAttribute('for','creatorName');
    inputCreatorName.setAttribute('name','creatorName');
    labelDue.setAttribute('for','due');
    inputDue.setAttribute('name','due');
    labelDescription.setAttribute('for','desc');
    inputDescription.setAttribute('name','desc');
    inputProjName.required = 'true';
    inputCreatorName.required = 'true';
    inputDue.required = 'true';
    inputDescription.required = 'true';
    // Add event listeners to the form
    exitModal.addEventListener('click',()=>{closeModal('project')});
    formBox.addEventListener('submit',(e)=>{e.preventDefault();submitModal('project',new FormData(formBox));});
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
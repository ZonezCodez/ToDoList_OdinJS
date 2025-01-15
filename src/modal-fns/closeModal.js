export default function closeModal(string){
    const modalArea = document.getElementById('modal');
    if(string === 'project'){
        const exitElement = document.getElementById('exitProjectModal');
        const submitElement = document.getElementById('submitProject');
        exitElement.removeEventListener('click',()=>{closeModal('project')});// Removes event listener so we dont stack a bunch on top of eachother.
        submitElement.removeEventListener('submit',(e)=>{e.preventDefault();submitModal('project',new FormData(formBox));});
        modalArea.textContent = '';
        modalArea.style.display = 'none';
    }else if(string === 'todo'){

    }
};
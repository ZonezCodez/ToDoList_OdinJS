import renderModals from "../render-fns/renderModals.js";
import createProjectModal from "../ui-fns/createProjectModal.js";
import createToDoModal from "../ui-fns/createToDoModal.js";

export default function openModal(string){
    if(string === 'project'){
        renderModals(createProjectModal());
    }else if(string === 'todo'){
        renderModals(createToDoModal());
    }
};
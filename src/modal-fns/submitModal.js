import PROJECT from '../CLASSES/PROJECT.js';
import dateGet from '../dateHandler-fns/dateGet.js';
import { projects } from '../index.js';
import render from '../render-fns/render.js';
import closeModal from './closeModal.js';

export default function submitModal(string,data){
    if(string === 'project'){
        const newProj = new PROJECT(data.get('projName'),data.get('creatorName'),dateGet(),data.get('due'),[],data.get('desc'));
        projects.push(newProj);
        render('projects',projects);
        closeModal('project');
    }else if(string === 'todo'){

    }
}
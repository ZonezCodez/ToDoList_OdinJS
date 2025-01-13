import './styles.css';
import openModal from './modal-fns/openModal.js';
import goHome from './pageHandler-fns/goHome.js';

const addProject = document.getElementById('addBtn');
const homePage = document.getElementById('HomePage');

addProject.addEventListener('click',(e)=>{openModal('project')});
homePage.addEventListener('click',(e)=>{goHome()});
export default function renderModals(html){
    const area = document.getElementById('modal');
    if(html){
        area.textContent = '';
        area.style.position = 'absolute';
        area.style.overflow = 'hidden';
        area.style.display = 'block';
        area.appendChild(html);
    }else{
        console.error('Cant render modal incorrect passed info.');
    }
};
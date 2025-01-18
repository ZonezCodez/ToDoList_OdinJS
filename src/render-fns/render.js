export default function render(string,data){
    const contentArea = document.getElementById('content');

    if(string === 'projects'){
        data.forEach(project => {
          contentArea.appendChild(project.render());  
        });
    }else if(string === 'todos'){

    }
};
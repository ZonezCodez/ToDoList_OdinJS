export default function render(string,data){
    if(string === 'projects'){
        data.forEach(project => {
            project.render();
        });
    }else if(string === 'todos'){

    }
};
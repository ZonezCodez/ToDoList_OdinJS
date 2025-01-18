export default class TODO{
    constructor(title,content,dueBy,prio){
        this.title = title;
        this.content = content;
        this.dueBy = dueBy;
        this.prio = prio;
    }
    // All methods below
    createToDoUI(){
        const todoBox = document.createElement('div');
        const del = document.createElement('div');
        const t = document.createElement('div');
        const c = document.createElement('div');
        const d = document.createElement('div');

        del.textContent = 'X';
        t.textContent = `${this.title}`;
        c.textContent = `${this.content}`;
        d.textContent =  `${this.dueBy}`;

        if(this.prio === 'max'){
            todoBox.style.backgroundColor = 'green';
        }else if(this.prio === 'min'){
            todoBox.style.backgroundColor = 'red';
        }
        
        todoBox.appendChild(del);
        todoBox.appendChild(t);
        todoBox.appendChild(d);
        todoBox.appendChild(c);

        return todoBox;
    }
};
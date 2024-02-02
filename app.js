let lists = document.querySelector('.list-container');
let addBtn = document.querySelector('.btn');
let taskInp = document.querySelector('.inp');

lists.innerHTML = localStorage.getItem('Tasks');

let addTask = () =>{

    if(taskInp.value != ''){

        let task = document.createElement('li');
        let cross = document.createElement('span');
        cross.classList.add('cross');
        cross.innerHTML = `&#10060`;
        task.innerHTML =  taskInp.value;
        taskInp.value = '';
        task.appendChild(cross);
        lists.prepend(task);
        
        saveTask();
    }
}

addBtn.addEventListener('click',addTask);
taskInp.addEventListener('keydown',(event)=>{
    if(event.code == "Enter") addTask();
});

lists.addEventListener('click', event => {
    console.dir(event);
    console.dir(event.target);

    if(event.target.nodeName == "LI"){
        event.target.classList.toggle("checked");
    }else if(event.target.nodeName == "SPAN"){
        event.target.parentElement.remove();
    }
    saveTask();
});

function saveTask(){
    localStorage.setItem('Tasks',lists.innerHTML);
}


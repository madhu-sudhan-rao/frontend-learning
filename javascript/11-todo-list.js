let todoList = [];
function updateTodoList(){
    let todoListHtml='';

    for(let i = 0; i<todoList.length; i++){
        let todoListItem = todoList[i];
        let element = `<p>${todoListItem}</p>`;
        todoListHtml+= element;
        
    }
    document.querySelector('.todo-list').innerHTML = todoListHtml;
}


function addTodo(){
    const inputElement=  document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList)

    inputElement.value = ""
    updateTodoList();
}
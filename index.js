let list = document.querySelector(".list");

let add_button = document.querySelector(".add-task-button");

add_button.addEventListener("click",()=>{
    let new_task_name = prompt("Enter Task Name");
    const new_task = document.createElement("li");
    new_task.innerHTML = `
    ${new_task_name} 
    <button class="delete-task-button" onclick="deleteTask(this)">
        Delete
    </button>
    `;
    list.appendChild(new_task);

    console.log(new_task)
})

function deleteTask(curr){
    curr.parentNode.remove();
}
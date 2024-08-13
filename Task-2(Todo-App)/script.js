let input = document.querySelector(".task-input");
let add_btn = document.querySelector(".add-btn");
let show_task = document.querySelector(".show-task");
let edit_input = document.querySelector(".edit-input");
let save_btn = document.querySelector(".save-btn");
let cancel_btn = document.querySelector(".Cancel-btn");
let edit_module = document.querySelector(".edit-card");
let mode_btn = document.querySelector(".mode-toggle");

mode_btn.onclick = () =>{
    let body = document.body;
    body.classList.toggle("mode");
    // mode_fun();
    }



let currentEditSpan = null;
// adding the todo list 
add_btn.onclick = () => {
    const todotext = input.value.trim();
    if(todotext !== ''){
    let li = document.createElement("li");
    li.classList.add("li-item");
    let span = document.createElement("span");
    span.classList.add("li-span");
    span.textContent = todotext;

    // adding the edit button to task 
    let edit_btn = document.createElement("button");
    edit_btn.classList.add("btns");
    edit_btn.style.backgroundColor="#5dbea3"
    edit_btn.textContent = "edit";
    edit_btn.onclick = () => {
        openeditmodule(span);
    }


    // adding the delete button to the task 
    let delete_btn = document.createElement("button");
    delete_btn.classList.add("btns");
    delete_btn.style.backgroundColor = "red";
    delete_btn.textContent = "Delete";
    delete_btn.onclick = () => {
        deletetodospan(li);
    }


    // console.log(todotext);
    li.appendChild(span);
    li.appendChild(edit_btn);
    li.appendChild(delete_btn);
    show_task.appendChild(li);
    input.value = "";



}
}


// deletetodospan function
function deletetodospan(li) {
    show_task.removeChild(li);
}


// openeditmodule function

function openeditmodule(span){
    // edit_module.classList.add("open-card");
    edit_module.style.display = 'block';
    currentEditSpan = span;
    edit_input.value = span.textContent;

}


// cancel_btn function
function closeeditmodule() {
    edit_module.style.display = 'none';
}


save_btn.addEventListener("click", () => {
    if(currentEditSpan && edit_input.value.trim() !== ''){
        currentEditSpan.textContent = edit_input.value.trim();
        closeeditmodule();
    }
})

cancel_btn.addEventListener("click", () => {
    closeeditmodule();
})


// function to add todo by pressing the enter button of keyboard 
input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        // call the task adding function ,which is not defined in this program 
    }
})

// function mode_fun() {
//     // var sampleElem = document.getElementBycl("sampleDiv");
//     if (span.className === "li-span") {
//     span.className = "li-span-2";
//     } else {
//     sampleElem.className = "li-span";
//     }
//    }


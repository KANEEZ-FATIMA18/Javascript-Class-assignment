var TaskInput = document.querySelector("#task-input");
var addButton = document.querySelector("#add-btn");
var Ul = document.querySelector("#ul")

function AddTask() {
    // if taskinput is empty 
    if (TaskInput.value == "") {
        TaskInput.style.border = '2px solid red';


    } else {
        //create li for task list
        var li = document.createElement("li")
        li.className = 'task-item'
        //create delete icon
        var deleteIcon = document.createElement('i')
        deleteIcon.className = 'fa-solid fa-trash icon'

        //create checkbox with classname & type
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.className = 'checkbox'

        // Capitalize first letter
        li.textContent = TaskInput.value.charAt(0).toUpperCase() + TaskInput.value.slice(1);
        //add icon in list
        li.prepend(checkbox)


        Ul.appendChild(li)         //add li in ul

        li.append(deleteIcon)    //add icon in list
        //input reset 
        TaskInput.value = ""
        TaskInput.style.border = '';

        // checkbox logic
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                li.style.textDecoration = 'line-through'
                li.style.color ='green'
            } else { li.style.textDecoration = "none";
                li.style.color =''
             }
        })
        //delete icon logic
        deleteIcon.addEventListener("click", function () {
            li.remove()
        })


    }

}




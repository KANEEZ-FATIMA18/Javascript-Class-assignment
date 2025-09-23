var TaskInput = document.querySelector("#task-input");
var addButton = document.querySelector("#add-btn");
var Ul = document.querySelector("#ul")

function AddTask() {
    if (TaskInput.value == "") {
        TaskInput.style.border = '2px solid red';
    } else {
        // create li
        var li = document.createElement("li");
        li.className = 'task-item';

        // create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';

        // create span for text
        var span = document.createElement("span");
        span.textContent = TaskInput.value.charAt(0).toUpperCase() + TaskInput.value.slice(1);

        // create delete icon
        var deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash icon';

        // create edit icon
        var editIcon = document.createElement('i');
        editIcon.className = 'fa-solid fa-pen-to-square icon';

        // append all
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editIcon);
        li.appendChild(deleteIcon);
        Ul.appendChild(li);

        // reset input
        TaskInput.value = "";
        TaskInput.style.border = '';

        // checkbox logic
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                span.style.textDecoration = 'line-through';
                span.style.color = 'green';
            } else {
                span.style.textDecoration = "none";
                span.style.color = '';
            }
        });

        // delete logic
        deleteIcon.addEventListener("click", function () {
            li.remove();
        });
        // edit logic
        editIcon.addEventListener("click", function () {
            var editInput = document.createElement("input");
            editInput.type = "text";
            editInput.className = "edit-input";
            editInput.style.fontSize = "14px";
            editInput.value = span.textContent;
          
            li.replaceChild(editInput, span);

            
            editInput.addEventListener("keypress", function (e) {
                if (e.key === "Enter") {
                    span.textContent = editInput.value;
                    li.replaceChild(span, editInput);
                }
            });

            editInput.focus();
        });
    }
}


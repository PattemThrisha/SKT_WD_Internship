function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value.trim() === "") {
        return;
    }

    let li = document.createElement("li");
    li.textContent = input.value;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

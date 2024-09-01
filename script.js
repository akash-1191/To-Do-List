const inputbox = document.getElementById("textbox");
const listcontainer = document.getElementById("list");
const pendingCounter = document.getElementById("pendingCounter");
function addtask() {
    if (inputbox.value === '') {
        alert("you Must write somthing!");
    }
    else {
        // Create the list tag
        let li = document.createElement("li")
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);//append the list in the div 
        li.classList.add("pending"); //add value in the list
        // create span tag to add close button with the list
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //add the close button
        li.appendChild(span); //append the span in the li tag
        updateCounter();
        saveData();
    }
   
    inputbox.value = "";
   
}

listcontainer.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        e.target.classList.toggle("pending");
        updateCounter();
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        updateCounter();
        saveData();
    }
}, false);

function updateCounter() {
    const pendingTasks = document.querySelectorAll("#list li.pending").length;
    pendingCounter.textContent = pendingTasks;
}
// add the data to the local stroage
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask() {// display the data 
    listcontainer.innerHTML = localStorage.getItem("data");
    updateCounter();
}
showTask();

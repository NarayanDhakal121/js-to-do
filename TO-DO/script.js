const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");
  li.innerText = inputBox.value;

  let span = document.createElement("span");
  span.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  li.appendChild(span);

  listContainer.appendChild(li);

  // Clear input field
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN" || e.target.tagName === "I") {
    e.target.closest("li").remove();
    saveData();
  }
});

// Function to save tasks to localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load tasks from localStorage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

// Load tasks when page loads
showTask();

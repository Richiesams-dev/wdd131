// DOM Elements
const input = document.getElementById("favchap");
const button = document.getElementById("submit");
const list = document.getElementById("list");

// Error handling for missing elements
if (!input || !button || !list) {
    console.error("One or more required elements are missing from the DOM");
} else {
    button.addEventListener('click', function() {
        // Check if input is not empty
        const chapterText = input.value.trim();
        if (chapterText !== "") {
            // Create new list item
            const li = document.createElement("li");
            
            // Create text span and delete button
            const textSpan = document.createElement("span");
            textSpan.textContent = chapterText;
            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            deleteButton.className = "delete-btn";
            deleteButton.ariaLabel = "Remove " + chapterText;
            
            // Add delete functionality
            deleteButton.addEventListener('click', function() {
                li.remove();
            });
            
            // Append elements
            li.appendChild(textSpan);
            li.appendChild(deleteButton);
            list.appendChild(li);
            
            // Clear input
            input.value = "";
            input.focus();
        } else {
            // Show error or alert if input is empty
            alert("Please enter a chapter");
            input.focus();
        }
    });
}
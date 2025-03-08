document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;
  
    // Create a new row in the table
    const tableBody = document.querySelector("#studentTable tbody");
    const newRow = document.createElement("tr");
  
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${gender}</td>
      <td>${course}</td>
      <td>${email}</td>
      <td class="actions">
        <button class="edit" onclick="editRow(this)">Edit</button>
        <button class="delete" onclick="deleteRow(this)">Delete</button>
      </td>
    `;
  
    tableBody.appendChild(newRow);
  
    // Clear the form
    document.getElementById("registrationForm").reset();
  });
  
  function editRow(button) {
    const row = button.closest("tr");
    const cells = row.querySelectorAll("td");
  
    // Populate the form with the row's data
    document.getElementById("name").value = cells[0].textContent;
    document.getElementById("age").value = cells[1].textContent;
    document.getElementById("gender").value = cells[2].textContent;
    document.getElementById("course").value = cells[3].textContent;
    document.getElementById("email").value = cells[4].textContent;
  
    // Remove the row from the table
    row.remove();
  }
  
  function deleteRow(button) {
    const row = button.closest("tr");
    row.remove();
  }
// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
    let addForm = document.getElementById("addForm");
    let empTable = document.getElementById("employees");
    let empCount = document.getElementById("empCount");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
    var count = 0;
    
// ADD EMPLOYEE
addForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let extension = document.getElementById("extension").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    
    let cellID = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellExt = row.insertCell(2)
    let cellEmail = row.insertCell(3)
    let cellDept = row.insertCell(4)

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(department));
    
    // CREATE THE DELETE BUTTON
    let deletBtn = document.createElement('button');
    deletBtn.appendChild(document.createTextNode("X"));
    let celldeletBtn = row.insertCell(5);
    celldeletBtn.appendChild(deletBtn);

    // RESET THE FORM
    addForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus;

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count += 1;
    console.log (count);
    empCount.innerHTML = Number(count);

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) =>{
        if (confirm(`Are you sure you want to delete the row?`)) {
            // REMOVE THE SELECTED row 
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
        
        }
        count--;
        console.log("count: "+ count);
        empCount.innerHTML = count

});

console.log (count)
console.log("empcount ; " + empCount)
//empCount.innerHTML += count;
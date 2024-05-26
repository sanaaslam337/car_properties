var selectedRow = null;

function onFormSubmit() {
    if (Validate()) {
  var formData = readFromData();
  if (selectedRow == null)
  insertNewRecord(formData);
  else
  updateRecord(formData);
  resetForm();
  }
}
function readFromData() {
    var formData = {};
    formData["carName"] = document.getElementById("carName").value;
    formData["carModel"] = document.getElementById("carModel").value;
    formData["carPrice"] = document.getElementById("carPrice").value;
    formData["carColor"] = document.getElementById("carColor").value;
    return formData;
}

function insertNewRecord(data) {
var table = document.getElementById("carPropertiesList").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = data.carName;
cell2 = newRow.insertCell(1);
cell2.innerHTML = data.carModel;
cell3 = newRow.insertCell(2);
cell3.innerHTML = data.carPrice;
cell4 = newRow.insertCell(3);
cell4.innerHTML = data.carColor;
cell4 = newRow.insertCell(4);
cell4.innerHTML = `<a onClick = "onEdit(this)">Edit</a>
                   <a onClick = "onDelete(this)">Delete</a>`;

}

function resetForm() {
    document.getElementById("carName").value = "";
    document.getElementById("carModel").value = "";
    document.getElementById("carPrice").value = "";
    document.getElementById("carColor").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("carName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("carModel").value = selectedRow.cells[1].innerHTML;
    document.getElementById("carPrice").value = selectedRow.cells[2].innerHTML;
    document.getElementById("carColor").value = selectedRow.cells[3].innerHTML;
} 

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.carName;
    selectedRow.cells[1].innerHTML = formData.carModel;
    selectedRow.cells[2].innerHTML = formData.carPrice;
    selectedRow.cells[3].innerHTML = formData.carColor
}

function onDelete(td) {
    if (confirm('Are you sure you want ot delete this row?')) {
   row = td.parentElement.parentElement;
   document.getElementById("carPropertiesList").deleteRow(row.rowIndex);
   resetForm();
}

}
function Validate() {
    isValid = true;
    if (document.getElementById("carName").value == "") {
      isValid = false;
      document.getElementById("carNameValidationError").classList.remove("hide");
}
else {
    isValid = true;
    if (!document.getElementById("carNameValidationError").classList.contains("hide"))
        document.getElementById("carNameValidationError").classList.add("hide");
}
return isValid;
}

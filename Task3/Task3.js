function InsertRow(){
    var table = document.getElementById("Table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "New Row 1"
    cell2.innerHTML = "New Row 2"
    cell3.innerHTML = "New Row 3"
}

// function DeleteRow(){
//     document.getElementById("Table").deleteRow(0);
// }



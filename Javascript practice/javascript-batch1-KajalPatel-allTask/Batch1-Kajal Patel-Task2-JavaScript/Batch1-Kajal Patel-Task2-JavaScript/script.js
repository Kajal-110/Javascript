
var table = document.getElementById("myTable");
var sNo = 6;
function addNewRow() {
  var row = table.insertRow();
  var call1 = row.insertCell(0);

  var call2 = row.insertCell(1);
  var call3 = row.insertCell(2);
  var call4 = row.insertCell(3);
  var call5 = row.insertCell(4);
  var call6 = row.insertCell(5);

  call1.innerHTML = `${sNo++} `
  call2.innerHTML = '<input type="text" placeholder="Name"  class=" name"    title=" you can enter only alphabates here" required / > '
  call3.innerHTML = '<input type="text" placeholder="Subject" class="subject"   title=" you can enter only alphabates here" required />'
  call4.innerHTML = '<input type="Number" placeholder="Mark" class="marks"  name="quantity" min="1" max="100"  required/>'
  call5.innerHTML = '<button type="button" class="btn btn-dark">Accept</button><button type="button" class="btn btn-primary mx-1">Reject</button>'
  call6.innerHTML = '<button type="button" class="btn btn-dark " onclick="deleteRow(this)">Delete</button>'
}

function deleteRow(a) {
  a.parentNode.parentNode.remove();
  sNo--;
  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[0].innerHTML = i;
  }
}

var sNo2 = 1;
function saveDataToSecondTable(event) {
  event.preventDefault()
  demoList.innerHTML = 
  `  <thead >
    <tr id="header">
      <th>S.No</th>
      <th onclick="sortDataInSecondTable(1)">Name</th>
      <th onclick="sortDataInSecondTable(2)">Subject</th>
      <th>Mark</th> 
    </tr>
  </thead>
  <tbody>
   
  </tbody>`

  var name = document.getElementsByClassName('name');
  var subject = document.getElementsByClassName('subject');
  var mark = document.getElementsByClassName('marks');
  for (let i = 0; i < table.rows.length -1; i++) {
    var row = demoList.insertRow(-1);
    var call1 = row.insertCell(0);
    var call2 = row.insertCell(1);
    var call3 = row.insertCell(2);
    var call4 = row.insertCell(3);
    call1.classList.add("sno2")
    // call1.innerHTML = `${sNo2++} `
    call2.innerHTML = name[i].value;
    call3.innerHTML = subject[i].value;
    call4.innerHTML = mark[i].value;
    if (mark[i].value < 33) {
      row.style.backgroundColor = "pink";
    }
  }
}

function searchDataInSecondTable() {
  let input, filter, table, tr, td, i, txtValue1, textvalue2;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("demoList");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    tdname = tr[i].getElementsByTagName("td")[1];
    tdsubject = tr[i].getElementsByTagName('td')[2]
    if (tdname || tdsubject) {
      txtValue1 = tdname.textContent || tdname.innerText;
      txtValue2 = tdsubject.textContent || tdsubject.innerText;
      if ((txtValue1.toUpperCase().indexOf(filter) > -1) || (txtValue2.toUpperCase().indexOf(filter) > -1)) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
   }
}
function sortDataInSecondTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("demoList");
  switching = true;
  while (switching) {
   
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
     
      shouldSwitch = false;
     
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
    
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
       
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
     
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  
}
  

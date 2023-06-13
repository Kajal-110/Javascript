$(document).ready(function () {
    var table =$('#tableid').DataTable();

    $('.btn').on('click', function () {
        Swal.fire({
            title: '😊Enter your Details...',
            width: 800,
            padding: '15em',
            html:
                `<input type="text" class="form-control" placeholder=Enter Your Name" id="name">` + `<br>` +
                `<input type="text" class="form-control mt-5" placeholder="Enter  Your Age"  id="age">` + `<br>` +
                `<input type="text" class="form-control mt-5" placeholder="Enter Your Designation"  id="designation">` + `<br>` ,
                // ` <button type="button" class="btn btn-info" >Add Data</button>`,
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: true,
            confirmButtonText: 'Submit',
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'Cancel',
            cancelButtonColor: '#d33',

           preConfirm :() => {
                   let name = $('#name').val();
                    let age = $('#age').val();
                    let designation = $('#designation').val();
                    if (!/^[a-zA-Z ]+$/.test(name)) {
                                    
                                    alert('Please enter your name....');
                                  
                    }
                    else if (age < 20 || age > 100) {
                                    
                                    alert('your age must be greater then 20 & less then 100....');
                                  
                    }
                    else if (designation == "") {
                                    
                                    alert(' Please Enter your Designation ...');
                                   
                    }
                    else {
                        table.row.add([name, age, designation]).draw();
                    }
                }
    })
})
})

            
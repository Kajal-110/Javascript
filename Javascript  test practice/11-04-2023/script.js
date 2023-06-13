$('document').ready(function () {
    let table = $('#tableData').DataTable();


    $('#submitButton').on('click', function () {
        let abc = validate();
        if (abc) {


            let name = $('#Name').val();
            let address = $('#Address').val();
            let contact = $('#Contact').val();
            let company = $('#Company').val()
            let country = $('#country').val();
            // console.log(country);
            let obj = {
                SNo: `<p class="sno"></p>`,
                Name: name,
                Address: address,
                Contact: contact,
                Company: company,
                Country: country,

                Action: '<button class="btn btn-primary btn-sm edit" data-bs-toggle="modal" data-bs-target="#myModal" >Edit</button> &nbsp <button class="btn btn-info btn-sm delete" id="deleteButton">Delete</button>'

            };
            table.row.add([obj.SNo, obj.Name, obj.Address, obj.Contact, obj.Company, obj.Country, obj.Action]).draw(false);
            $('#myForm')[0].reset()


        }
    })

    $('#tableData').on('click', '.delete', function () {
        let abc = $(this).closest('tr');
        table.row(abc).remove();
        table.draw();
    })

    let row;
    $('#tableData').on('click', '.edit', function () {
        $('#submitButton').hide();
        $('#EditButton').show();
        row = $(this).closest('tr');
        let name = $('#Name');
        name.val(row.find('td').eq(1).html());
        let address = $('#Address');
        address.val(row.find('td').eq(2).html());
        let contact = $('#Contact');
        contact.val(row.find('td').eq(3).html());
        let company = $('#Company');
        company.val(row.find('td').eq(4).html());
        let country = $('#Country');
        country.val(row.find('td').eq(5).html());


    })

    $('#EditButton').on('click', function () {
        let name = $('#Name').val();
        let address = $('#Address').val();
        let contact = $('#Contact').val();
        let company = $('#Company').val();
        let country = $('#Country').val();


        row.find('td').eq(1).html(name);
        row.find('td').eq(2).html(address);
        row.find('td').eq(3).html(contact);
        row.find('td').eq(4).html(company);
        row.find('td').eq(5).html(country);


        // $('#closeButton').click();

        $('#myForm').trigger('reset');

    });

    $('#addDetail').click(function () {
        $('#submitButton').show();
        $('#EditButton').hide();
    });


    function validate() {
        let name = $('#Name').val();
        let address = $('#Address').val();
        let contact = $('#Contact').val();
        let company = $('#Company').val();
        let country = $('#Country').val();

        let status = true;

        if (name == "") {
            document.getElementById("name_Loc").innerHTML =
                "Please enter name";

            status = false;
        } else {
            document.getElementById("name_Loc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color' style='color:'red''></i></a>";
            // status = true;
        }

        if (address == "") {
            document.getElementById("address_Loc").innerHTML =
                "Please enter Address";

            status = false;
        } else {
            document.getElementById("address_Loc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
            // status = true;
        }

        if (contact == "") {
            document.getElementById("contact_Loc").innerHTML =
                "Please enter Contact";

            status = false;
        } else {
            document.getElementById("contact_Loc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
            // status = true;
        }

        if (company == "") {
            document.getElementById("company_Loc").innerHTML =
                "Please enter Company name";

            status = false;
        } else {
            document.getElementById("company_Loc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
            // status = true;
        }

        if (country == "") {
            document.getElementById("country_Loc").innerHTML =
                "Please enter country name";

            status = false;
        } else {
            document.getElementById("country_Loc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
            // status = true;
        }
        return status;
    }




})

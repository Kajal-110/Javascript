$('document').ready(function () {
    $('#AddButton').click(function () {
        // console.log("hello");
        $('#tablebody').append(`<tr>` +
            `<td class="sno"></td>` +
            `<td><input class="name  form-control" id="name" name="name"></td>` +
            `<td><input class="address  form-control" id="address" name="address"></td>` +
            `<td><input  class="country  form-control" id="country" name="country"></td>` +
            `<td><button id="deleterow" class="btn btn-danger btn-md">Delete</button>&nbsp<button id="editrow" class="btn btn-info btn-md">Edit</button></td>` +
            `</tr>`
        )
    });

    $("#mytable").on("click", "#deleterow", function () {
        $(this).closest("tr").remove();
    });

    $('#SubmitButton').on("click", function () {
        let table1 = $('#mytable tbody tr').length;
        let name = $('.name');
        let address = $('.address');
        let country = $('.country');

       let  table = `
            <thead >
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Country</th>
            </tr></thead>`;

        for (let i = 0; i < table1; i++) {
            table += `<tr><td  class="sno"></td><td>` + name.eq(i).val() + `</td><td>` + address.eq(i).val() +`</td><td>` + country.eq(i).val() + `</td></tr>`
        }

        $('#mytable2').html(table);


    });
    // $('#SubmitButton').on("click", function () {
    //     let table1 = $('#mytable tbody tr').length;
    //     let name = $('.name');
    //     let address = $('.address');
    //     let country = $('.country');
    //     let table = document.createElement('table');
    //     table.innerHTML = `<thead >
    //                 <tr>
    //                     <th>S.No</th>
    //                     <th>Name</th>
    //                     <th>Address</th>
    //                     <th>Country</th>
    //                 </tr>
    //                 </thead>`;

    //     for (let i = 0; i < table1; i++) {
    //         table += `<tr><td  class="sno"></td><td>` + name.eq(i).val() + `</td><td>` + address.eq(i).val() + `</td><td>` + country.eq(i).val() + `</td></tr>`
    //     }

    //     $('#mytable2').html(table);
    // });
});


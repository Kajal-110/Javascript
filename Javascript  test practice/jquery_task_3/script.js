

$('document').ready(function () {
    $('#AddButton').on('click', function (e) {
        $('#tableBody').append(`<tr>` +
            `<td class="sno"></td>` +
            `<td><input  class="name form-control" name="name" ></td>` +
            `<td><input class="subject form-control"  name="subject"></td>` +
            `<td><input type="number"  class="marks form-control" name="marks"></td>` +
            `<td><button class="btn btn-success accept_button" type="button" onclick="Accept(this)">Accept</button>&nbsp<button type="button" class="btn btn-primary reject_button"  onclick="reject(this)">Reject</button></td>` +
            `<td><button type="button" class="btn btn-danger btn-outline-dark  " id="DeleteButton">Delete</button></td>` +
            `</tr`)
    });

    $('#myTable').on('click', '#DeleteButton', function () {
        $(this).closest('tr').remove();
    });

    function savadata() {
        let table1 = $('#myTable tbody tr').length;
        // console.log(table1);
        let Name = $('.name');
        let Subject = $('.subject');
        let Marks = $('.marks');
        let allBtn = $('.btn-success');
        var table = `
            <thead >
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Mark</th>
            </tr></thead>`;
        for (let i = 0; i < table1; i++) {
            let color = Marks.eq(i).val() < 33 ? 'pink' : '';
            table += `<tr style="background-color:` + color + `"><td  class="sno"></td><td>` + Name.eq(i).val() +
                `</td><td>` + Subject.eq(i).val() + `</td><td>` + Marks.eq(i).val() + `</td></tr>`

            // if (allBtn.hasClass("pass")) {
            //     table5 = `<thead><tr><th>S.No</th> <th>Name</th><th>Percentages</th></tr></thead>`
            //     $('#mytable4 tbody').append(table);
            // }
            //$('#mytable4 tbody').append(table5);
        }
        $('#mytable2').html(table);
    }
    $('#SubmitButton').on("click", function () {
        savadata();
        findPercentages();
        // AcceptRow();
    });

    function findPercentages() {

        let table1 = $('#myTable tbody tr').length;
        let obj = {};
        for (let i = 0; i < table1; i++) {
            let Name = $('.name').eq(i).val();

            let Marks = parseFloat($('.marks').eq(i).val());
        
            if (!obj[Name]) {
                obj[Name] = {
                    totalMark: Marks,
                    sno: 1
                };

            } else {
                obj[Name].totalMark += Marks;
                obj[Name].sno++;

            }
        }
        table2 = `<thead><tr><th>S.No</th> <th>Name</th><th>Percentages</th></tr></thead>`
        let counter = 1
        for (let Name in obj) {
            let totalMark = obj[Name].totalMark;
            let sno = obj[Name].sno;
            let cc = (totalMark / (sno * 100)) * 100;
            table2 += `<tr><td>` + counter++ + `</td><td>` + Name + `</td><td>` + cc.toFixed(2) + `</td></tr>`
        }

        $('#mytable3').html(table2);


    }

    // function AcceptRow() {
    //     // console.log("Hallo");
    //     if ($('.btn').hasClass('accept_button')) {
    //         let table1 = $('#myTable tbody tr').length;
    //         table3 = `<thead><tr><th>S.No</th> <th>Name</th><th>Percentages</th></tr></thead>`
    //         let obj1 = {};
    //         for (let i = 0; i < table1; i++) {
    //             let Name = $('.name').eq(i).val();
    //             let Subject = $('.subject').eq(i).val();
    //             let Marks = $('.marks').eq(i).val();
    //             console.log(Name);
    //             table3 += `<tr><td class="sno"></td><td>` + Name + `</td><td>` + Subject + `</td></tr>`
    //         }
    //         let aa = $('#mytable4').html(table3);

    //     }
    // }

    // function AcceptRow() {
    //     let table1 = $('#myTable tbody tr').length;

    //     for (let i = 0; i < table1; i++) {
    //         let Name = $('.name').eq(i).val();
    //         let Subject = $('.subject').eq(i).val();
    //         let Marks = $('.marks').eq(i).val();
    //         let allBtn = $('.btn-success')[i];

    //         table3 = `<thead><tr><th>S.No</th> <th>Name</th><th>Percentages</th></tr></thead>`

    //         if ((allBtn).hasClass('pass')) {
    //             table3 += `<tr><td class="sno"></td><td>` + Name + `</td><td>` + Subject + `</td><td>` + Marks + `</td></tr>`
    //             console.log("hello");

    //         }
    //         $('#mytable4 tbody').append(table3);

    //     }


    // }

});
function reject(e) {
    if ($(e).hasClass('reject_button')) {
        $(e).addClass('fail')
        $(e).prev().removeClass('pass');
    }
}

function Accept(e) {
    if ($(e).hasClass('accept_button')) {
        $(e).addClass('pass')
        $(e).next().removeClass('fail');
    }
}
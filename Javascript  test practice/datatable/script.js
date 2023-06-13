$(document).ready(function () {
    var table = $('#tabledata').DataTable()

    $('#btn').on('click', function () {
        // debugger

        let abc = validate();
        if (abc) {

            let num1 = document.getElementById('value1').value;
            let num2 = document.getElementById('value2').value;
            let add = document.getElementById('+');
            let sub = document.getElementById('-');
            let multi = document.getElementById('*');
            let div = document.getElementById('/');

            function ADD() {
                if (add.checked) {
                    return (parseInt(num1) + parseInt(num2));
                    // console.log(c);
                }
            }
            function SUB() {
                if (sub.checked) {
                    return (parseInt(num1) - parseInt(num2));
                }
            }
            function MUL() {
                if (multi.checked) {
                    return (parseInt(num1) * parseInt(num2));
                }
            }
            function DIV() {
                if (div.checked) {
                    return (parseInt(num1) / parseInt(num2));
                }
            }

            let obj = {
                num1: parseInt(num1),
                num2: parseInt(num2),
                add: ADD(),
                sub: SUB(),
                multi: MUL(),
                div: DIV(),
                Action: '<button class="btn btn-primary btn-sm edit" data-bs-toggle="modal" data-bs-target="#myModal" id="edit">Edit</button> &nbsp <button class="btn btn-info btn-sm  delete" id="delete">Delete</button>'
            };
            table.row.add([obj.num1, obj.num2, obj.add, obj.sub, obj.multi, obj.div, obj.Action]).draw();
            $('form').trigger('reset');
        }


        $('#tabledata').on('click', '.delete', function () {
            let abc = $(this).closest('tr');
            table.row(abc).remove();
            table.draw();
        })


        // $('#addDetail').click(function () {
        //     $('#btn').show();
        //     $('#EditButton').hide();
        // });



        function validate() {
            let num1 = document.getElementById('value1').value;
            let num2 = document.getElementById('value2').value;

            let status = true;

            if (num1 == "") {
                document.getElementById("num1_loc").innerHTML =
                    "Please enter number ";

                status = false;
            } else {
                document.getElementById("num1_loc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
                // status = true;

            }

            if (num2 == "") {
                document.getElementById("num2_loc").innerHTML =
                    "Please enter number ";

                status = false;
            } else {
                document.getElementById("num2_loc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
                // status = true;

            }
            return status;

        }

        // let row;
        // $('#tabledata').on('click', '.edit', function () {
        //     $('#btn').hide();
        //     $('#EditButton').show();

        //     row = $(this).closest('tr');
        //     let num1 = document.getElementById('value1');
        //     let num2 = document.getElementById('value2');
        //     console.log(num1, num2);
        //     let add = document.getElementById('+');
        //     let sub = document.getElementById('-');
        //     let multi = document.getElementById('*');
        //     let div = document.getElementById('/');
        //     num1.val(row.find('td').eq(1).html());
        //     num2.val(row.find('td').eq(2).html());
        //     add.val(row.find('td').eq(3).html());
        //     sub.val(row.find('td').eq(4).html());
        //     multi.val(row.find('td').eq(5).html());
        //     div.val(row.find('td').eq(6).html());
        // })

        // $('#EditButton').on('click', function () {
        //     let num1 = document.getElementById('value1').value;
        //     let num2 = document.getElementById('value2').value;
        //     console.log(num1, num2);
        //     let add = document.getElementById('+');
        //     let sub = document.getElementById('-');
        //     let multi = document.getElementById('*');
        //     let div = document.getElementById('/');

        //     row.find('td').eq(1).html(num1);
        //     row.find('td').eq(2).html(num2);
        //     row.find('td').eq(3).html(add);
        //     row.find('td').eq(4).html(sub);
        //     row.find('td').eq(5).html(multi);
        //     row.find('td').eq(6).html(div);

        //     // $('#myForm').trigger('reset');

        // });

       
    })
});


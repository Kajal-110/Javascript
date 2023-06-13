$(document).ready(function () {
    $('#submit').on('click', function () {
        let abc = validate();
        if (abc) {


            let hindi = $('#hindi').val();
            let english = $('#english').val();
            let physics = $('#physics').val();
            let chemistry = $('#chemistry').val();
            let maths = $('#maths').val();
            //console.log(hindi,english,physics,chemistry,maths);
            let total_subjects = 500;
            let total_marks = parseInt(hindi) + parseInt(english) + parseInt(physics) + parseInt(chemistry) + parseInt(maths);
            document.getElementById('Total').innerHTML = parseInt(total_marks);

            let percantages = (total_marks * 100) / total_subjects
            document.getElementById('percantages').innerHTML = parseInt(percantages) + ' %';

            if (percantages > 70) {
                document.getElementById('grade').innerHTML = "A"
                document.getElementById('remark').innerHTML = "Pass";
            }
            else if (percantages < 70 && percantages > 60) {
                document.getElementById('grade').innerHTML = "B"
                document.getElementById('remark').innerHTML = "Pass";
            }
            else if (percantages < 60 && percantages > 45) {
                document.getElementById('grade').innerHTML = "C"
                document.getElementById('remark').innerHTML = "Pass";
            }
            else if (percantages < 45 && percantages > 33) {
                document.getElementById('grade').innerHTML = "D"
                document.getElementById('remark').innerHTML = "Pass";
            }
            else if (percantages < 33) {
                document.getElementById('grade').innerHTML = "E"
                document.getElementById('remark').innerHTML = "fail";
            }

        }

    })


})

function validate() {
    let hindi = document.getElementById('hindi').value;
    let english = document.getElementById('english').value;
    let physics = document.getElementById('physics').value;
    let chemistry = document.getElementById('chemistry').value;
    let maths = document.getElementById('maths').value;
    var status = true;

    if (hindi > 100 || hindi < 1 || hindi == "") {
        document.getElementById("hindiLoc").innerHTML =
            "Please enter number between 1 to 100";

        status = false;
    } else {
        document.getElementById("hindiLoc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
        // status = true;
    }

    if (english > 100 || english < 1 || english == "") {
        document.getElementById("englishLoc").innerHTML =
            "Please enter number between 1 to 100";

        status = false;
    } else {
        document.getElementById("englishLoc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
        // status = true;
    }

    if (physics > 100 || physics < 1 || physics == "") {
        document.getElementById("physicsLoc").innerHTML =
            "Please enter number between 1 to 100";

        status = false;
    } else {
        document.getElementById("physicsLoc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
        // status = true;
    }

    if (chemistry > 100 || chemistry < 1 || chemistry == "") {
        document.getElementById("chemistryLoc").innerHTML =
            "Please enter number between 1 to 100";

        status = false;
    } else {
        document.getElementById("chemistryLoc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
        // status = true;
    }

    if (maths > 100 || maths < 1 || maths == "") {
        document.getElementById("mathsLoc").innerHTML =
            "Please enter number between 1 to 100";

        status = false;
    } else {
        document.getElementById("mathsLoc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
        // status = true;
    }
    return status;
}
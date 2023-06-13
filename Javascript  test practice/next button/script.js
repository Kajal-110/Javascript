$(document).ready(function () {
    $('#submit').on('click', function () {
        let abc = validate();
        if (abc) {
            window.location.href = "nextbutton.html";
        }
    })

    $('#submit1').on('click', function () {
        // let xyz = validate();
        // if (xyz) {
        //     
        // }
        window.location.href = "index.html";

    });

    $('#submit2').on('click', function () {
        let xyz = validate();
        if (xyz) {
            window.location.href = "nextbutton1.html";
        }

    });
})


function validate() {
    let hindi = document.getElementById('hindi').value;
    let english = document.getElementById('english').value;
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
    return status;
}
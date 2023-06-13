//$('.loader').fadeOut('slow');
$(document).ready(function (e) {
 
  $('button').on('click', function () {
    fetch('https://api.publicapis.org/entries')
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        data.entries.forEach((user) => {
          $('#output').append(`
                <tr>
                    <td>${user.API}</td>
                    <td>${user.Description}</td>
                    <td>${user.Auth}</td>
                    <td>${user.Cors}</td>
                    <td><a href="${user.Link}">${user.Link}</a></td>
                    <td>${user.Category}</td>
                </tr>    
            `
          )
        });
      });
  });
 

})


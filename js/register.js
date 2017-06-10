// code for handling registration for the user 
console.log('register.js loaded..');

// hide spinner
$('.spin').hide();

// get the form data using jquery when register is clicked 

$('#register-btn').click(() => {

    $('#register-btn').attr('disabled', true);

    $('.container').hide();
    $('.spin').show();

    let name = $('#user-name').val();
    let email = $('#user-email').val();
    let password = $('#user-password').val();

    // validate the data 

    // if the data is good, enable the register button
    
    if(password.length >= 5 && name.length >= 5 && isValidEmail(email)) {
        $('#register-btn').attr('disabled', false);

           // create the user object 

            let userData = {
                name,
                email,
                password
            };

            console.log(userData);

            // send ajax request to the API with user data

            $.ajax({
                url : 'https://ad-todo-api.herokuapp.com/users',
                method : 'POST',
                data : userData
            }).then(function(response, status, xhr) {
                    window.location = './../login.html';
                    let headers = xhr.getResponseHeader('X-Auth');
                    console.log(headers);
            });
    }

    else {
        $('#register-btn').attr('disabled', false);   
        $('.container').show();
        $('.spin').hide(); 
    }

 
});


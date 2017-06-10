'use strict';

/**
 * Code for handling login requests
 */

console.log('Login.js loded..');

// hide spinner
$('.spin').hide();
$('#invalid-credentials').hide();


// get the form data using jquery when login is clicked 

$('#login-btn').click(() => {

    $('#login-btn').attr('disabled', true);

    $('#container').hide();
    $('.spin').show();

    


    // validate the data 

    // if the data is good, enable the login button
    
    if(password.length >= 5 && isValidEmail(email)) {
        $('#login-btn').attr('disabled', false);

           // create the user object 
            let email = $('#user-email').val();
            let password = $('#user-password').val();

            let userData = {
                email,
                password
            };

            console.log(userData);

            // send ajax request to the API with user data

            $.ajax({
                url : baseURL + 'users/login',
                method : 'POST',
                data : userData,
                success : function(response, status, xhr) {
                    let token = xhr.getResponseHeader('X-Auth');
                    console.log(token);
                    if(status === 'success') { 
                        Materialize.toast('Login Success', 3000);   
                        window.localStorage['mykey'] = token;
                        setTimeout(() => window.location = 'welcome.html', 4000);
                    }
                },
                error : function(response, status) {
                    if(status === 'error') {
                        Materialize.toast('Login Failed', 3000);   
                        setTimeout(() => window.location = 'login.html', 4000);
                    }
                }
            })
    }

    else {
        $('#login-btn').attr('disabled', false);   
        $('.container').show();
        $('.spin').hide(); 
    }

 
});


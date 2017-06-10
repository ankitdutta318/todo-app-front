// contains all the helper methods 

function isValidEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function request(url, customMethod, customData, customHeaders, successFunction, errorFunction, beforeSendFunction) {
  $.ajax({
    url : url,
    method : customMethod,
    data : customData,
    success : successFunction,
    error : errorFunction,
    beforeSend : beforeSendFunction,
    headers : customHeaders 
  });
}

const baseURL = 'https://ad-todo-api.herokuapp.com/';
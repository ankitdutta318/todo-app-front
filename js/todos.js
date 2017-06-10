'use strict';

console.log('loded todos.js...');

/**
 * Code for fetching to-dos from api
 */

let successFunction = (response, status) => {
    if(status === 'success') {
        let data = response.data;
        data.forEach(function(element) {
        console.log(element._id + " " + element.text);
        $('.todo-container').append(
            `
                <div class="col s10 m4 offset-s1" id="${element._id}">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <a href="view.html?=${element._id}"><span class="card-title">${element.text}</span></a>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                        <a href="#">Edit</a>
                        <a href="" onClick="deleteTodo(${element._id});">Delete</a>
                        </div>
                    </div>
                </div>`
            );
        });
    }
}

// Sends your custom header
$.ajax({ 
    url: 'https://ad-todo-api.herokuapp.com/todos',
    method: 'GET',
    headers : {
        'x-auth' : localStorage['mykey']
    }
}).then(successFunction);

// Code for deleting a particular To-do
function deleteTodo(id) {
    console.log('delete clicked');
    $(id).hide();
}

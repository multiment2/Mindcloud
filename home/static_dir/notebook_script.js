<<<<<<< HEAD
var body_request = {
    "jsonrpc": '2.0',
    "method": method,
    "params": params,
    "id": 10
}

var params = new FormData(view-content);
=======
var body_request = (method, params, id) => JSON.stringify ({
    "jsonrpc": '2.0',
    "method": method,
    "params": params,
    "id": id
})

>>>>>>> bc70beb (Настройка скрипта javascript)


var response = fetch('/api', {
    method: "POST",
    headers:{
        'Content-Type': 'Application/json'
    },
    body: body_request
});

function get_all_stick (response = ("get_all_stick", [], "0")) {
        alert(response.json)
}
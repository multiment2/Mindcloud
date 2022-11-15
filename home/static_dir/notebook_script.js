
var body_request = {
    "jsonrpc": '2.0',
    "method": "get_all_stick",
    "params": [],
    "id": 1
}


/*
var body_request = (method, params, id) => JSON.stringify ({
    "jsonrpc": '2.0',
    "method": method,
    "params": params,
    "id": id
})
*/



var response = fetch('api', {
    method: 'POST',
    headers:{
        'Content-Type': 'Application/json'
    },
    body: JSON.stringify(body_request)
});


function get_all_stick (response) {
        console.log(response => response.json())
}
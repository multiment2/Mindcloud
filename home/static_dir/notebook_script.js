
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

//let response = get_all_stick();
//console.log(response);
  
function get_all_stick (body_request) {   
    fetch('api', {
    method: 'POST',
    headers:{
        'Content-Type': 'Application/json'
    },
    body: body_request})
    .then(response => response.json())
    .then(body => console.log(body.result));
    };


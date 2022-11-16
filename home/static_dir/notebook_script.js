
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
let response = fetch('api', {
    method: 'POST',
    headers:{
        'Content-Type': 'Application/json'
    },
    body: JSON.stringify(body_request)})
    


response.then(result => alert(JSON.stringify(result[0])));

function get_all_stick (result) {    
    console.log(result.message);
    };

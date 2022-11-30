



/*
var body_request = (method, params, id) => JSON.stringify ({
    "jsonrpc": '2.0',
    "method": method,
    "params": params,
    "id": id
})
*/
  
function get_all_stick () {   
    var body_request = JSON.stringify ({
    "jsonrpc": '2.0',
    "method": "get_all_stick",
    "params": [],
    "id": 1
});
    fetch('api', {
    method: 'POST',
    headers:{
        'Content-Type': 'Application/json'
    },
    body: body_request})
    .then(response => response.json())
    .then(body => make_links(body.result));
    };

function make_links(result){
    for (let i in result){
        alert(result[i]['name']); 
        }
    }
//            


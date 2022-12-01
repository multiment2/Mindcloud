



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

    let lns = document.createElement('ul');
    for (let i in result){
        let li = document.createElement('li');
        let a = document.createElement('а');
        let text = document.createTextNode(result[i].id + result[i].name + result[i].date);
        a.appendChild(text);
        li.appendChild(a);
        lns.appendChild(li);

        console.log(result[i].id); 
        }
    document.getElementById('view-links').appendChild(lns);
    }
//            


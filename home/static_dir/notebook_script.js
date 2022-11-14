var body_request = JSON.stringify({
    json-rpc: '2.0',
    method: method,
    params: params,
    id: 10
})

var params = new FormData(view-content)

var response = fetch('api', {
    method: "POST",
    headers:{
        'Content-Type': 'Application/json';
    },
    body: body_request
    
});

<<<<<<< HEAD
function save_stick {
    var sticker = new FormData
=======

function save-stick ("create_new_stick", params){
    var response = fetch('api', {
        method: "POST";
        headers:{
            'Content-Type': 'Application/json';
        },
        body: body-request;
        
    });
    return alert (response.json().message)
}

function get_one_stick() {
    fetch('api', {
        method: "POST";
        headers:{
            'Content-Type': 'Application/json';
        },
        body: body-request;
        
    });
>>>>>>> 5246c33 (Update js script)
}

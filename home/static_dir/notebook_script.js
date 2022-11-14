var body_request = JSON.stringify({
    json-rpc: '2.0',
    method: method,
    params: params,
    id: id
})

var response = fetch('api', {
    method: "POST",
    headers:{
        'Content-Type': 'Application/json';
    },
    body: body_request
    
});

function save_stick {
    var sticker = new FormData
}

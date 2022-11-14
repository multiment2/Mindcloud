var body_request = JSON.stringify({
    "jsonrpc": '2.0',
    "method": method,
    "params": params,
    "id": 10
})

var params = new FormData(view-content)

var response = fetch('api', {
    method: "POST",
    headers:{
        'Content-Type': 'Application/json'
    },
    body: body_request
});


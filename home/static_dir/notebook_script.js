/*
var body_request = (method, params, id) => JSON.stringify ({
    "jsonrpc": '2.0',
    "method": method,
    "params": params,
    "id": id
})
*/

function get_all_stick() {               //Функция для загрузки всех ссылок на стики
    var body_request = JSON.stringify({
        "jsonrpc": '2.0',
        "method": "get_all_stick",
        "params": [],
        "id": 1
    });
    fetch('api', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: body_request
    })
        .then(response => response.json())
        .then(body => make_links(body.result));
};

function make_links(result) {

    let lns = document.createElement('ul');
    for (let i in result) {
        let li = document.createElement('li');
        let text = document.createTextNode(result[i].name + result[i].date);

        li.setAttribute("id", result[i].id);
        li.addEventListener("click", getID);
        li.appendChild(text);
        lns.appendChild(li);
    }
    document.getElementById('view-links').appendChild(lns);
}

function getID(event) {
    //console.log(this.id);
    return event.id;
};

let id = getID();
console.log(id);

function make_stick(id){
    var body_request = JSON.stringify({
        "jsonrpc": '2.0',
        "method": "get_one_stick",
        "params": [id],
        "id": 1
    });
    fetch('api', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: body_request
    })
        .then(response => response.json())
        .then(body => console.log(body.result));
};

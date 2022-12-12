function make_message(method, id, params = []){   //Создание тела запроса
    let msg = {"jsonrpc": '2.0',
                    "method": method,
                    "params": params,
                    "id": id};
    return msg;
}


const body_message = [make_message("get_all_stick", 0)];
//body_message.push(make_message(get_all_stick, 0));
console.log(body_message);

function all_stick() {               //Функция для загрузки всех ссылок на стики
/*    var body_request = JSON.stringify({
        "jsonrpc": '2.0',
        "method": "get_all_stick",
        "params": [],
        "id": 1
    });
*/
    var body = body_message[0]; 

    console.log(JSON.stringify(body));
    fetch('api', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
//        .then(response => console.log(response.result))
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
    console.log(this.id + typeof(this.id));
    return get_stick(this.id);
};

function get_stick(id){
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
        .then(body => make_stick(body.result));
};

function make_stick(result_stick){
    let r = result_stick;
    console.log(r);
    let name = document.getElementById("name");
    name.setAttribute("value", r.name);     //Добавляем текст имени в поле input
    document.getElementById("body").value = r.body; //Добавляем текст заметки в поле для редактирования (textarea)
}
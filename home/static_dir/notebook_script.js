function make_message(method, id, params = []){   //Создание тела запроса
        let p = [];
        if (params != []){
            p.push(params);
        }
        let msg = {"jsonrpc": '2.0',
                        "method": method,
                        "params": p,
                        "id": id};
        console.log(msg);
        return msg;   
        
}


const body_message = make_message("get_all_stick", 0);
console.log(body_message);

function all_stick() {               //Функция для загрузки всех ссылок на стики

    var body = body_message; 

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
        .then(result => make_links(result.result))
}

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
//    console.log(this.id + typeof(this.id));
    return get_stick(this.id);
};

function get_stick(id){
/*    var body_request = JSON.stringify({
        "jsonrpc": '2.0',
        "method": "get_one_stick",
        "params": [id],
        "id": 1
    });
*/
    var b = make_message("get_one_stick", 1, id);  
    
    console.log(JSON.stringify(b));  

    fetch('api', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(b)
    })
        .then(response => response.json())
        .then(response => console.log(response))
//        .then(res => make_stick(res.result));
};

function make_stick(result_stick){
    let r = result_stick;
    console.log(typeof(result_stick));
    let name = document.getElementById("name");
    name.setAttribute("value", result_stick.name);     //Добавляем текст имени в поле input
    document.getElementById("body").value = r.body; //Добавляем текст заметки в поле для редактирования (textarea)
}
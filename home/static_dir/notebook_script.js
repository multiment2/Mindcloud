function make_message(method, id = 0, params = []){   //Создание тела запроса
        let p;
        /*
        Проверяем, если params - массив, тогда присваеваем его переменной.
        Если params - не массив, тогда содаем новый массив со значением params.
        Метод forEach есть только у массивов.
        */
        if (params.forEach){    
            p = params;
        } else {
            p = new Array(params);
        }

        let msg = {"jsonrpc": '2.0',
                        "method": method,
                        "params": p,
                        "id": id};
        return msg;  
}

function make_response(message){
    let response = fetch('api', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'Application/json'
                    },
                    body: JSON.stringify(message)
                })
        .then(response => response.json())
        .then(response => response.result);
    return response;
}


function all_stick() {               //Функция для загрузки всех ссылок на стики

    var body = make_message("get_all_stick");

    fetch('api', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
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
    return get_stick(this.id);
};

function get_stick(id){
    const b = make_message("get_one_stick", 1, id);
    let res = make_response(b);
    res.then(result => make_stick(result));
}


function make_stick(result_stick){
    /*
    Заполнение формы одним стиком.
    */
    let r = result_stick;
    for (let key in result_stick){                     //Проходимся циклом по ключам результата
        localStorage.setItem(key, result_stick[key]);  //Сщздаем локальное хранилище из результата
    }
//    console.log(result_stick);
    document.getElementById("name").value = result_stick.name;  //Добавляем текст имени в поле input 
    document.getElementById("body").value = r.body; //Добавляем текст заметки в поле для редактирования (textarea)
}

function create_new_stick(){
    let form = document.forms.stick;
    form.reset();
}

function new_stick(){
    /*
    Создание нового стика и сохранение в базе.
    */
    let form = document.forms.stick;
    let body_param = [];
    
    for (let i = 0; i < form.elements.length; i++) {
        if (form[i]) {
          // Update text input
        body_param.push(form.elements[i].value);
        }
    }
    console.log(body_param);
    const body = make_message("create_new_stick", 2, body_param);
    make_response(body);
    localStorage.clear();
    window.location.reload();
    }
 
function delete_stick(){
    let id = localStorage.getItem("id");
    console.log(id);
    const body = make_message("delete_one_stick", 0, id);
    make_response(body);
    localStorage.clear();
    window.location.reload();
}

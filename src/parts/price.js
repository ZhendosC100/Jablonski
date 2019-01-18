export default function price() {
    let price = document.querySelectorAll('.text_price-server'),
        model = document.querySelectorAll('.model_select-dsn'),
        body = document.querySelector('body'),
        x, y, d;

//giving data from server


    let request = new XMLHttpRequest();

    request.open('GET', 'price_item.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', function() {
        if(request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);
            
            // x=0;
            // y=data.model[x];
            // price[1].innerHTML = y[1];

    function addDataServer (b) {
        for (let i = 0; i<price.length; i++){
            x=b;
            y=data.model[x];
            
            price[i].innerHTML = y[i];
            
        }
    }
    
    function sortModel(modelName, target) {
        for (let i = 0; i < modelName.length; i++){
            if(target == modelName[i]){
                addDataServer(i);
            }
        }
    }

    body.addEventListener('click', (event) => {
        let target = event.target;
        console.log(target);
    
        if(target && target.classList.contains('model_select-dsn')) {
            sortModel(model, target);
            console.log('ok 1');
        }
    });



        } else {
            console.log('oops');
            for (let i = 0; i<price.length; i++){
                price[i].innerHTML = "oops..";
            }
        }

    });



// active/disactive priceTab

let nonActiveTab = (a) => {
    for (let i = a; i < model.length; i++){
        model[i].classList.remove('active_model');
    }
};

nonActiveTab(1);

let activeTab = (b) => {
    model[b].classList.add('active_model');
};

function sortTab(tabName, target) {
    for (let i = 0; i < tabName.length; i++){
        if(target == tabName[i]){
            nonActiveTab(0);
            activeTab(i);
        }
    }
}

body.addEventListener('click', (event) => {
    let target = event.target;
    console.log(target);

    if(target && target.classList.contains('model_select-dsn')) {
        sortTab(model, target);
        console.log('ok');
    }
});

model[0].classList.add('active_model');
console.log('module price OK');
}
export default function price() {
    let price = document.querySelectorAll('.text_price-server'),
        model = document.querySelectorAll('.model_select-dsn'),
        body = document.querySelector('body'),
        x;

//giving data from server


    let request = new XMLHttpRequest();

    request.open('GET', 'price_item.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', function() {
        if(request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);


    for (let i = 0; i<price.length; i++){
        x=i;
        price[i].innerHTML = data.model[x];
        
    }

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

console.log('module price OK');
}
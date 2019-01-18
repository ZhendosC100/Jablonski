export default function price() {
    let price = document.querySelectorAll('.text_price-server'),
        model = document.querySelectorAll('.model_select-dsn'),
        body = document.querySelector('body');

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
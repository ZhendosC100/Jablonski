export default function modal() {
    let modal = document.getElementById('popup_modal'),
        substrate = document.querySelector('.substrate'),
        body = document.querySelector('body'),
        inputNumber = document.querySelectorAll('.number'),
        inputName = document.querySelectorAll('.name');

    const onlyNumber = () => {
        for(let i = 0; i < inputNumber.length; i++){
            inputNumber[i].addEventListener('input', () => {
                inputNumber[i].value = inputNumber[i].value.replace(/[^0-9+]/ig, ''); 
            });
        }
    };

    const cleanField = () => {
        for(let i = 0; i < inputName.length; i++){
            inputName[i].value = ""; 
        }

        for(let i = 0; i < inputNumber.length; i++){
            inputNumber[i].value = ""; 
        }
    };        

    body.addEventListener('click', (e) => {
        let target = e.target;

        if(target && target.classList.contains('call') || target.classList.contains('button') || target.classList.contains('button_feedback')){
            modal.classList.add('active');
            substrate.classList.add('substrate_active');
            body.classList.add('stop-scrolling'); //Stop scrolling the page
            onlyNumber();
        }

        if(target && target.classList.contains('close')) {
            modal.classList.remove('active');
            substrate.classList.remove('substrate_active');
            body.classList.remove('stop-scrolling'); //Start to scrolling the page
            cleanField();
        }
    });
}
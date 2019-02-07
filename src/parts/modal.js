export default function modal() {
    let modal = document.getElementById('popup_modal'),
        substrate = document.querySelector('.substrate'),
        body = document.querySelector('body'),
        close = document.querySelector('.close'),
        call = document.querySelectorAll('.call'),
        button = document.querySelectorAll('.button'),
        btnFeedback = document.querySelectorAll('.button_feedback'),
        formPl = document.getElementById('modal_form'),
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

    function displayModal (item){
        item.addEventListener('click', () => {
            modal.classList.add('active');
            substrate.classList.add('substrate_active');
            body.classList.add('stop-scrolling'); //Stop scrolling the page
            onlyNumber();
        });
    }


    function hideModal(item){
        item.addEventListener('click', () =>{
            modal.classList.remove('active');
                substrate.classList.remove('substrate_active');
                body.classList.remove('stop-scrolling'); //Start to scrolling the page
                cleanField();
        });
    }

    for (let i = 0; i < call.length ; i++){
        displayModal(call[i]);
    }

    for (let i = 0; i < button.length; i++){
        displayModal(button[i]);
    }

    for (let i = 0; i < btnFeedback.length; i++){
        displayModal(btnFeedback[i]);
    }

    hideModal(close);

    //--------------#Server send data#----------//
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся',
        failure: 'Что-то пошло не так...'
    },
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);

            let formData = new FormData(elem);

            let obj = {}; //Вариант отправки через JSON
            formData.forEach(function (value, key) { //Вариант отправки через JSON
                obj[key] = value; //Вариант отправки через JSON
            });
            let json = JSON.stringify(obj);

            // $.ajax({
			// 	type: "POST",
			// 	url: "mailer/smart.php",
			// 	data: JSON.stringify(obj)
			// });
console.log(json);
            function postData() {
                
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', './mailer/smart.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //Вариант отправки через JSON        
                    // request.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded');

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.readyState == 200) {
                            resolve();
                        } else {
                            reject();

                        }
                    };

                    request.send(json);
                });

            } // end of function postData 
            

            postData(json)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(cleanField);

        });
        
    }
    
        sendForm(formPl);
    
}
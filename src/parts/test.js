 
 //Form
 let message = {
    loading: 'Loading...',
    success: 'Спасибо! Скоро мы с Вами свяжемся',
    failure: 'Oops...',
    clickBtn: 'Hello 😉! How are you?'
};

let form = document.querySelector('.log_form'),  // zmenna od formy z HTML (class .log_form przykładowy)
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div'); //robimy nowy 'div' w forme, gdzie rzucimy message

    statusMessage.classList.add('status'); // styli do tego div

   

    //send to server

    form.addEventListener('submit', function(event) {
        
        //отменим стандартное поведение браузера (тут при нажатии на кнопку обновляется страница )
        event.preventDefault(); // wyłączamy standartową reakcję browsera na 'click'
        console.log(event.target);
        //
        form.appendChild(statusMessage);

        //właśnie odesłanie danych na server
        let request = new XMLHttpRequest();
        request.open('POST', 'https://recruitment-api.pyt1.stg.jmr.pl/login');  //wysyłanie do zadanego URL

        request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');//  Content-Type: application/json  !!!!jak w zadaniu

        let formData = new FormData(form); // pobieramy dane z formy

        let obj = {};                            //robimy format danych do wysylki JSON
        formData.forEach(function(value, key) {  //robimy format danych do wysylki JSON
           obj[key] = value;                   //robimy format danych do wysylki JSON
        });
        let json = JSON.stringify(obj);         //robimy format danych do wysylki JSON  wysyłamy
        request.send(json);                     //robimy format danych do wysylki JSON  wysyłamy
        request.send(formData);

        //napisanie message  w okience formy
        request.addEventListener('readystatechange', function(){
            if(request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200){
                statusMessage.innerHTML = message.success;
                setTimeout(function(){                          //'Hello 😉! How are you?' za 5 sekund się zjawi
                    statusMessage.innerHTML = message.clickBtn;
                }, 5000);
            } else{
                statusMessage.innerHTML = message.failure;
            }
        });
    });
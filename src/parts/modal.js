export default function modal() {
    let modal = document.getElementById('popup_modal'),
        body = document.querySelector('body'),
        input_number = document.querySelector('.number');

        
        input_number.addEventListener('input', () => {
            input_number.value = input_number.value.replace(/[^0-9+]/ig, ''); 
        });
        

    body.addEventListener('click', (e) => {
        let target = e.target;

        if(target && target.classList.contains('call') || target.classList.contains('button') || target.classList.contains('button_feedback')){
            modal.classList.add('active');
        }

        if(target && target.classList.contains('close')) {
            modal.classList.remove('active');
        }
    });
}
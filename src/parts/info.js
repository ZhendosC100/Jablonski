export default function info () {
    let modalTime = document.querySelector('.popup_modal-time'),
        btnClose = document.querySelector('.close_time'),
        body = document.querySelector('body'),
        substrate = document.querySelector('.substrate');

    function showModalTime(){
        // modalTime.classList.add('active');
        // substrate.classList.add('substrate_active');
        body.classList.add('stop-scrolling');
        setTimeout(hideModalTime, 35000);
    }

    function hideModalTime(){
        modalTime.classList.remove('active');
        substrate.classList.remove('substrate_active');
        body.classList.remove('stop-scrolling');
    }

    btnClose.addEventListener('click', function(){
        hideModalTime();
    });

    setTimeout(showModalTime, 15000);
}
export default function game() {
    let body_game = document.querySelector('body'),
        lang_start = document.querySelector('.lng_opt-promo_start'),
        promo = document.getElementById('promo'),
        promo_start = document.getElementById('promo_start');

    body_game.addEventListener('click', (e)=> {
      let target = e.target;
        if(target && target.classList.contains('button_start')) {
            promo_start.style.display = 'none';
            promo.style.display = 'flex';
        }
        
        if(target && target.classList.contains('cancel_button')){
            promo_start.style.display = 'block';
            promo.style.display = 'none';
        }
    });
}
export default function game() {
    let //body_game = document.querySelector('body'),
        cover_tree = document.querySelector('.cover_tree'),
        promo = document.getElementById('promo'),
        promo_game = document.querySelector('.game'),
        promo_start = document.getElementById('promo_start'),
        startBtn = document.querySelectorAll('.button_start'),
        cancelBtn = document.querySelectorAll('.cancel_button'),
        gameBtn = document.querySelectorAll('.game_button');


    function openGame (item) {
        item.addEventListener('click', () => {
            promo_start.style.display = 'none';
            promo.style.display = 'flex';
            promo_game.classList.add('active_game');
        });
    }

    function startGame (item) {
        item.addEventListener('click', () => {
            cover_tree.style.zIndex = '-1';
        });
    }

    function cancelGame (item) {
        item.addEventListener('click', () => {
            promo_start.style.display = 'block';
            promo.style.display = 'none';
            cover_tree.style.zIndex = '3';
        });
    }

    for (let i = 0; i < startBtn.length; i++){
        openGame(startBtn[i]);
    }
    
    for (let i = 0; i < gameBtn.length; i++){
        startGame(gameBtn[i]);
    }

    for (let i = 0; i < cancelBtn.length; i++){
        cancelGame(cancelBtn[i]);
    }

  
    // body_game.addEventListener('click', (e)=> {
    //   let target = e.target;
    //     if(target && target.classList.contains('button_start')) {
    //         promo_start.style.display = 'none';
    //         promo.style.display = 'flex';
    //         promo_game.classList.add('active_game');
    //     }
        
    //     if(target && target.classList.contains('cancel_button')){
    //         promo_start.style.display = 'block';
    //         promo.style.display = 'none';
    //         cover_tree.style.zIndex = '3';
    //     }

    //     if(target && target.classList.contains('game_button')) {
    //         cover_tree.style.zIndex = '-1';
    //     }
    // });
}
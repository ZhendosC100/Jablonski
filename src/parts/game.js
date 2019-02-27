export default function gamePlay() {

    let btn_1 = document.querySelector('.random_one'),
        btn_2 = document.querySelector('.random_two'),
        btn_3 = document.querySelector('.random_three'),
        text_disc = document.querySelectorAll('.discount'),
        game_modal = document.querySelector('.game_modal'),
        game_close = document.querySelector('.close_game'),
        close_end = document.querySelector('.close_end'),
        substrate = document.querySelector('.substrate'),
        cover_tree = document.querySelector('.cover_tree'),
        promo = document.getElementById('promo'),
        promo_start = document.getElementById('promo_start'),
        body = document.querySelector('body'),
        endGame = document.querySelector('.end_game'),
        m = false,
        step = 1,
        d;

    const gameStart = () => {
        let n = Math.floor(Math.random() * 16);
            if (n == 0){
                d = 0;
            }else if(n <=5) {
                d = Math.max(n , 5);
            } else if(n <=10){
                d = Math.max(n, 10);
            } else {
                d = Math.max(n, 15);
            }

            setTimeout(function on (){
                stepNumber(-1, d, step);
            }, 2000     
            );

            m = true;
            return m;
    };

    function stepNumber(start, stop, step){
        setInterval(function(){
            if(start < stop){
                start += step;
                for (let i = 0; i < text_disc.length; i++){
                    text_disc[i].value = `${start}%`;
                } 
            }
        }, 55);
    }

    function cancelGame () {
            promo_start.style.display = 'block';
            promo.style.display = 'none';
            cover_tree.style.zIndex = '3';
    }

    const gameOpen = () => {
        game_modal.classList.add('active');
        substrate.classList.add('substrate_active');
        body.classList.add('stop-scrolling');
    };

    const endModalOpen = () => {
        endGame.style.display = 'block';
        substrate.classList.add('substrate_active');
        body.classList.add('stop-scrolling');
    };

    game_close.addEventListener('click', ()=>{
        game_modal.classList.remove('active');
        substrate.classList.remove('substrate_active');
        body.classList.remove('stop-scrolling');
        cancelGame();
    });

    close_end.addEventListener('click', () => {
        endGame.style.display = 'none';
        substrate.classList.remove('substrate_active');
        body.classList.remove('stop-scrolling');
    });

    const openModal = ()=>{
        gameStart();
        gameOpen();
    };

    btn_1.addEventListener('click', ()=>{
        if (m == true){
            endModalOpen();
        } else{
            openModal();
        }
    });

    btn_2.addEventListener('click', ()=>{
        if (m == true){
            endModalOpen();
        } else{
            openModal();
        }
    });

    btn_3.addEventListener('click', ()=>{
        console.log(m);
        if (m == true){
            endModalOpen();
        } else{
            openModal();
        }
    });
}
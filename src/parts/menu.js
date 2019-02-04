export default function menu() {
    let menuBtn = document.querySelectorAll('.lng_opt-hidemen'),
        menuBox = document.querySelector('.box_menu');

    // function showMenu() {
        for(let i = 0; i < menuBtn.length; i++){
            menuBtn[i].addEventListener('click', (e) => {
                e.preventDefault();
                if(menuBox.classList.contains('hide_box_menu')){
                    menuBox.classList.remove('hide_box_menu');
                    menuBox.classList.add('show_menu_box');
                } else {
                    menuBox.classList.remove('show_menu_box');
                    menuBox.classList.add('hide_box_menu');
                }
                
            });
        }
    // }

    //showMenu();

    // function hideMenu() {
        // for(let i = 0; i < menuBtn.length; i++){
        //     menuBtn[i].addEventListener('click', () => {
        //         menuBox.classList.remove('show_menu_box');
        //         menuBox.classList.add('hide_box_menu');
        //     });
        // }
    // }

    // hideMenu();
}
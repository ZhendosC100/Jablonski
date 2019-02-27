import language from './parts/lang';
import slider from './parts/slider';
import scroll from './parts/scroll';
import modal from './parts/modal';
import price from './parts/price';
import game from './parts/game_box';
import menu from './parts/menu';
import info from './parts/info';
import gamePlay from './parts/game';

window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    language();
    slider();
    scroll();
    modal();
    price();
    game();
    menu();
    info();
    gamePlay();
});
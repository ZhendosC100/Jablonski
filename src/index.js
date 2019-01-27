import language from './parts/lang';
import slider from './parts/slider';
import scroll from './parts/scroll';
import price from './parts/price';
import game from './parts/game';

window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    language();
    slider();
    scroll();
    price();
    game();
});
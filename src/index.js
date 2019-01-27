import price from './parts/price';
import slider from './parts/slider';
import language from './parts/lang';
import game from './parts/game';

window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    language();
    slider();
    price();
    game();
});
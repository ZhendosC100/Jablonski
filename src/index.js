import price from './parts/price';
import language from './parts/lang';
import game from './parts/game';

window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    language();
    price();
    game();
});
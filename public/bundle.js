/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/price */ "./src/parts/price.js");
/* harmony import */ var _parts_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/lang */ "./src/parts/lang.js");
/* harmony import */ var _parts_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/game */ "./src/parts/game.js");




window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    Object(_parts_lang__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_parts_price__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Object(_parts_game__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/parts/game.js":
/*!***************************!*\
  !*** ./src/parts/game.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return game; });
function game() {
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

/***/ }),

/***/ "./src/parts/lang.js":
/*!***************************!*\
  !*** ./src/parts/lang.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return language; });
function language() {

    let selectLang = document.getElementById('select'),
        lang_box = document.querySelectorAll('.lng_opt'),
        open_box = document.querySelectorAll('.lng_opt-opn'),
        down_inf_box = document.querySelectorAll('.lng_opt-inf_dwn'),
        call_box = document.querySelectorAll('.lng_opt-call'),
        repair_box = document.querySelectorAll('.lng_opt-img_text'),
        price_box = document.querySelectorAll('.lng_opt-price'),
        rules_box = document.querySelectorAll('.lng_opt-rules'),
        promo_box = document.querySelectorAll('.lng_opt-promo_start'),
        feedback_box = document.querySelectorAll('.lng_opt-comments'),
        s = 0;

    let langNonActive = (b, name_box) =>{
        //let name_box = k;
        for(let i = b; i < name_box.length; i++){
            name_box[i].classList.remove('active');
        }
    };
    
    let langActive = (a, name_box) => {
       //let name_box = z;
        name_box[a].classList.add('active');
    };
    
    selectLang.addEventListener('change', function(e) {
        s= selectLang.options[selectLang.selectedIndex].value;
        console.log(s);
        
        langNonActive(0, lang_box);
        langNonActive(0, open_box);
        langNonActive(0, down_inf_box);
        langNonActive(0, call_box);
        langNonActive(0, repair_box);
        langNonActive(0, price_box);
        langNonActive(0, rules_box);
        langNonActive(0, feedback_box);
        langNonActive(0, promo_box);



        langActive(s, lang_box);
        langActive(s, open_box);
        langActive(s, down_inf_box);
        langActive(s, call_box);
        langActive(s, repair_box);
        langActive(s, price_box);
        langActive(s, rules_box);
        langActive(s, feedback_box);
        langActive(s, promo_box);

    });
    console.log(s);   

    console.log('module lang Ok');
}

/***/ }),

/***/ "./src/parts/price.js":
/*!****************************!*\
  !*** ./src/parts/price.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return price; });
function price() {
    let price = document.querySelectorAll('.text_price-server'),
        model = document.querySelectorAll('.model_select-dsn'),
        body = document.querySelector('body'),
        x, y, d;

//giving data from server


    let request = new XMLHttpRequest();

    request.open('GET', 'price_item.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', function() {
        if(request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);
            
            // x=0;
            // y=data.model[x];
            // price[1].innerHTML = y[1];

    function addDataServer (b) {
        for (let i = 0; i<price.length; i++){
            x=b;
            y=data.model[x];    
            price[i].innerHTML = y[i];   
        }
    }
    
    function sortModel(modelName, target) {
        for (let i = 0; i < modelName.length; i++){
            if(target == modelName[i]){
                addDataServer(i);
            }
        }
    }

    body.addEventListener('click', (event) => {
        let target = event.target;
        //console.log(target);
    
        if(target && target.classList.contains('model_select-dsn')) {
            sortModel(model, target);
        }
    });

        } else {
            console.log('oops');
            for (let i = 0; i<price.length; i++){
                price[i].innerHTML = "--- zł";
            }
        }

    });

// active/disactive priceTab

let nonActiveTab = (a) => {
    for (let i = a; i < model.length; i++){
        model[i].classList.remove('active_model');
    }
};

nonActiveTab(1);

let activeTab = (b) => {
    model[b].classList.add('active_model');
};

function sortTab(tabName, target) {
    for (let i = 0; i < tabName.length; i++){
        if(target == tabName[i]){
            nonActiveTab(0);
            activeTab(i);
        }
    }
}

body.addEventListener('click', (event) => {
    let target = event.target;
    //console.log(target);

    if(target && target.classList.contains('model_select-dsn')) {
        sortTab(model, target);
        console.log('ok');
    }
});

//model[0].classList.add('active_model');
console.log('module price OK');
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
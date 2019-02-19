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
/* harmony import */ var _parts_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/lang */ "./src/parts/lang.js");
/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/slider */ "./src/parts/slider.js");
/* harmony import */ var _parts_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/scroll */ "./src/parts/scroll.js");
/* harmony import */ var _parts_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/modal */ "./src/parts/modal.js");
/* harmony import */ var _parts_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/price */ "./src/parts/price.js");
/* harmony import */ var _parts_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/game */ "./src/parts/game.js");
/* harmony import */ var _parts_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/menu */ "./src/parts/menu.js");
/* harmony import */ var _parts_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/info */ "./src/parts/info.js");








window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  Object(_parts_lang__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_parts_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_parts_scroll__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_parts_modal__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_parts_price__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_parts_game__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_parts_menu__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_parts_info__WEBPACK_IMPORTED_MODULE_7__["default"])();
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
  let cover_tree = document.querySelector('.cover_tree'),
      promo = document.getElementById('promo'),
      promo_game = document.querySelector('.game'),
      promo_start = document.getElementById('promo_start'),
      startBtn = document.querySelectorAll('.button_start'),
      cancelBtn = document.querySelectorAll('.cancel_button'),
      gameBtn = document.querySelectorAll('.game_button');

  function openGame(item) {
    item.addEventListener('click', () => {
      promo_start.style.display = 'none';
      promo.style.display = 'flex';
      promo_game.classList.add('active_game');
    });
  }

  function startGame(item) {
    item.addEventListener('click', () => {
      cover_tree.style.zIndex = '-1';
    });
  }

  function cancelGame(item) {
    item.addEventListener('click', () => {
      promo_start.style.display = 'block';
      promo.style.display = 'none';
      cover_tree.style.zIndex = '3';
    });
  }

  for (let i = 0; i < startBtn.length; i++) {
    openGame(startBtn[i]);
  }

  for (let i = 0; i < gameBtn.length; i++) {
    startGame(gameBtn[i]);
  }

  for (let i = 0; i < cancelBtn.length; i++) {
    cancelGame(cancelBtn[i]);
  }
}

/***/ }),

/***/ "./src/parts/info.js":
/*!***************************!*\
  !*** ./src/parts/info.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return info; });
function info() {
  let modalTime = document.querySelector('.popup_modal-time'),
      btnClose = document.querySelector('.close_time'),
      body = document.querySelector('body'),
      substrate = document.querySelector('.substrate');

  function showModalTime() {
    modalTime.classList.add('active');
    substrate.classList.add('substrate_active');
    body.classList.add('stop-scrolling');
    setTimeout(hideModalTime, 35000);
  }

  function hideModalTime() {
    modalTime.classList.remove('active');
    substrate.classList.remove('substrate_active');
    body.classList.remove('stop-scrolling');
  }

  btnClose.addEventListener('click', function () {
    hideModalTime();
  });
  setTimeout(showModalTime, 15000);
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
      langBox = document.querySelectorAll('.lng_opt'),
      openBox = document.querySelectorAll('.lng_opt-opn'),
      downInfBox = document.querySelectorAll('.lng_opt-inf_dwn'),
      callBox = document.querySelectorAll('.lng_opt-call'),
      repairBox = document.querySelectorAll('.lng_opt-img_text'),
      priceBox = document.querySelectorAll('.lng_opt-price'),
      rulesBox = document.querySelectorAll('.lng_opt-rules'),
      promoBox = document.querySelectorAll('.lng_opt-promo_start'),
      feedbackBox = document.querySelectorAll('.lng_opt-comments'),
      slideBox = document.querySelectorAll('.lng_opt-slide'),
      slideBoxTwo = document.querySelectorAll('.lng_opt-two_slide'),
      popupForm = document.querySelectorAll('.lng_opt-popup_form'),
      aboutBox = document.querySelectorAll('.lng_opt-about_us'),
      menuBox = document.querySelectorAll('.lng_opt-hidemen'),
      s = 0;

  let langNonActive = (b, name_box) => {
    //let name_box = k;
    for (let i = b; i < name_box.length; i++) {
      name_box[i].classList.remove('active');
    }
  };

  let langActive = (a, name_box) => {
    //let name_box = z;
    name_box[a].classList.add('active');
  };

  selectLang.addEventListener('change', function (e) {
    s = selectLang.options[selectLang.selectedIndex].value;
    console.log(s);
    langNonActive(0, langBox);
    langNonActive(0, openBox);
    langNonActive(0, downInfBox);
    langNonActive(0, callBox);
    langNonActive(0, repairBox);
    langNonActive(0, priceBox);
    langNonActive(0, rulesBox);
    langNonActive(0, feedbackBox);
    langNonActive(0, promoBox);
    langNonActive(0, slideBox);
    langNonActive(0, slideBoxTwo);
    langNonActive(0, popupForm);
    langNonActive(0, aboutBox);
    langNonActive(0, menuBox);
    langActive(s, langBox);
    langActive(s, openBox);
    langActive(s, downInfBox);
    langActive(s, callBox);
    langActive(s, repairBox);
    langActive(s, priceBox);
    langActive(s, rulesBox);
    langActive(s, feedbackBox);
    langActive(s, promoBox);
    langActive(s, slideBox);
    langActive(s, slideBoxTwo);
    langActive(s, popupForm);
    langActive(s, aboutBox);
    langActive(s, menuBox);
  });
  console.log(s);
  console.log('module lang Ok');
}

/***/ }),

/***/ "./src/parts/menu.js":
/*!***************************!*\
  !*** ./src/parts/menu.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return menu; });
function menu() {
  let menuBtn = document.querySelectorAll('.lng_opt-hidemen'),
      menuBox = document.querySelector('.box_menu'); // function showMenu() {

  for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener('click', e => {
      e.preventDefault();

      if (menuBox.classList.contains('hide_box_menu')) {
        menuBox.classList.remove('hide_box_menu');
        menuBox.classList.add('show_menu_box');
      } else {
        menuBox.classList.remove('show_menu_box');
        menuBox.classList.add('hide_box_menu');
      }
    });
  } // }
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

/***/ }),

/***/ "./src/parts/modal.js":
/*!****************************!*\
  !*** ./src/parts/modal.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
function modal() {
  let modal = document.getElementById('popup_modal'),
      substrate = document.querySelector('.substrate'),
      body = document.querySelector('body'),
      close = document.querySelector('.close'),
      call = document.querySelectorAll('.call'),
      button = document.querySelectorAll('.button'),
      btnFeedback = document.querySelectorAll('.button_feedback'),
      formPl = document.getElementById('modal_form'),
      formBtn = document.querySelectorAll('.modal_submit'),
      inputNumber = document.querySelectorAll('.number'),
      inputName = document.querySelectorAll('.name');

  const onlyNumber = () => {
    for (let i = 0; i < inputNumber.length; i++) {
      inputNumber[i].addEventListener('input', () => {
        inputNumber[i].value = inputNumber[i].value.replace(/[^0-9+]/ig, '');
      });
    }
  };

  const cleanField = () => {
    for (let i = 0; i < inputName.length; i++) {
      inputName[i].value = "";
    }

    for (let i = 0; i < inputNumber.length; i++) {
      inputNumber[i].value = "";
    }
  };

  function displayModal(item) {
    item.addEventListener('click', () => {
      modal.classList.add('active');
      substrate.classList.add('substrate_active');
      body.classList.add('stop-scrolling'); //Stop scrolling the page//

      onlyNumber();
    });
  }

  hideModal(close);

  function hideModal(item) {
    item.addEventListener('click', () => {
      modal.classList.remove('active');
      substrate.classList.remove('substrate_active');
      body.classList.remove('stop-scrolling'); //Start to scrolling the page

      cleanField();
    });
  }

  for (let i = 0; i < call.length; i++) {
    displayModal(call[i]);
  }

  for (let i = 0; i < button.length; i++) {
    displayModal(button[i]);
  }

  for (let i = 0; i < btnFeedback.length; i++) {
    displayModal(btnFeedback[i]);
  } //--------------#Server send data#----------//


  let message = {
    loading: 'Ładowanie...',
    success: 'Dziękuję. Proszę czekać na odpowiedź.',
    failure: 'Coś nie tak z serverem...'
  },
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
      // event.preventDefault();
      elem.appendChild(statusMessage);
      let formData = new FormData(elem);
      let obj = {}; //Вариант отправки через JSON

      formData.forEach(function (value, key) {
        //Вариант отправки через JSON
        obj[key] = value; //Вариант отправки через JSON
      });
      let json = JSON.stringify(obj); // $.ajax({
      // 	type: "POST",
      // 	url: "mailer/smart.php",
      // 	data: JSON.stringify(obj)
      // });

      console.log(json);

      function postData() {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();
          request.open('POST', './mailer/smart.php');
          request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //Вариант отправки через JSON        
          // request.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded');

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.readyState == 200) {
              resolve();
            } else {
              reject();
            }
          };

          request.send(json);
        });
      } // end of function postData 


      postData(json).then(() => statusMessage.innerHTML = message.loading).then(() => statusMessage.innerHTML = message.success).catch(() => statusMessage.innerHTML = message.failure).then(cleanField);
    });
  }

  sendForm(formPl);
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
      x,
      y,
      d; //giving data from server

  let request = new XMLHttpRequest();
  request.open('GET', 'price_item.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();
  request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response); // x=0;
      // y=data.model[x];
      // price[1].innerHTML = y[1];

      function addDataServer(b) {
        for (let i = 0; i < price.length; i++) {
          x = b;
          y = data.model[x];
          price[i].innerHTML = y[i];
        }
      }

      function sortModel(modelName, target) {
        for (let i = 0; i < modelName.length; i++) {
          if (target == modelName[i]) {
            addDataServer(i);
          }
        }
      }

      for (let i = 0; i < model.length; i++) {
        model[i].addEventListener('click', event => {
          let target = event.target; //console.log(target);

          sortModel(model, target);
        });
      } // body.addEventListener('click', (event) => {
      //     let target = event.target;
      //     //console.log(target);
      //     if(target && target.classList.contains('model_select-dsn')) {
      //         sortModel(model, target);
      //     }
      // });

    } else {
      console.log('oops');

      for (let i = 0; i < price.length; i++) {
        price[i].innerHTML = "--- zł";
      }
    }
  }); // active/disactive priceTab

  let nonActiveTab = a => {
    for (let i = a; i < model.length; i++) {
      model[i].classList.remove('active_model');
    }
  };

  nonActiveTab(1);

  let activeTab = b => {
    model[b].classList.add('active_model');
  };

  function sortTab(tabName, target) {
    for (let i = 0; i < tabName.length; i++) {
      if (target == tabName[i]) {
        nonActiveTab(0);
        activeTab(i);
      }
    }
  }

  for (let i = 0; i < model.length; i++) {
    model[i].addEventListener('click', event => {
      let target = event.target; //console.log(target);

      sortTab(model, target);
      console.log('ok');
    });
  } // body.addEventListener('click', (event) => {
  //     let target = event.target;
  //     //console.log(target);
  //     if(target && target.classList.contains('model_select-dsn')) {
  //         sortTab(model, target);
  //         console.log('ok');
  //     }
  // });
  //model[0].classList.add('active_model');


  console.log('module price OK');
}

/***/ }),

/***/ "./src/parts/scroll.js":
/*!*****************************!*\
  !*** ./src/parts/scroll.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scroll; });
function scroll() {
  let nav = document.querySelector('nav'),
      // ancors = nav.querySelectorAll('a[href^="#"]'),
  repair_link = document.querySelectorAll('.repair_link'),
      promo_link = document.querySelectorAll('.promo_link'),
      feedback_link = document.querySelectorAll('.feedback_link'),
      about_link = document.querySelectorAll('.about_link'),
      move_up = document.querySelectorAll('.move_up'),
      isSafari = /constructor/i.test(window.HTMLElement) || function (p) {
    return p.toString() === "[object SafariRemoteNotification]";
  }(!window['safari'] || safari.pushNotification),
      isIE =
  /*@cc_on!@*/
   false || !!document.documentMode,
      isEdge = !isIE && !!window.StyleMedia;

  function scrollBox(name, k) {
    name.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        let id = item.getAttribute('href'),
            blockTop = document.querySelector(id).offsetTop - k;
        window.scrollTo({
          top: blockTop,
          behavior: 'smooth'
        });
      });
    });
  }

  if (!isIE) {
    scrollBox(repair_link, 30);
    scrollBox(promo_link, 120);
    scrollBox(feedback_link, 80);
    scrollBox(about_link, -60);
    scrollBox(move_up, 8);
  }
}

/***/ }),

/***/ "./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slider; });
function slider() {
  let slideIndex = 2,
      slides = document.querySelectorAll('.slide_comments'),
      prev = document.querySelector('.left_arrow'),
      next = document.querySelector('.right_arrow'),
      dotBox = document.querySelector('.dot_box'),
      dots = document.querySelectorAll('.dots'),
      kx = document.querySelector('body');
  showSlides(slideIndex); //функция скрывающая слайды и показывающая нужный слайд

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(item => item.classList.remove('active'));
    dots.forEach(item => item.classList.remove('dots_active')); //делает точки не активными (обычного цвета)

    slides[slideIndex - 1].classList.add('active'); //показываем нужный слайд при загрузке (сейчас 1-1=0) т е самый первый

    dots[slideIndex - 1].classList.add('dots_active'); //показываем точки
  } //функция увеличивающая slideIndex


  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  }); //ф-ия определяющая текущий слайд и его устанавливает

  function currentSlide(n) {
    showSlides(slideIndex = n);
  } //активируем точки на нажатие


  kx.addEventListener('click', function (event) {
    for (let i = 1; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dots') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
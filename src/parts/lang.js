export default function language() {

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

    });
    console.log(s);   

    console.log('module lang Ok');
}
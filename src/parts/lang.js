export default function language() {

    let selectLang = document.getElementById('select'),
        lang_box = document.querySelectorAll('.lng_opt'),
        open_box = document.querySelectorAll('.lng_opt-opn'),
        down_inf_box = document.querySelectorAll('.lng_opt-inf_dwn'),
        call_box = document.querySelectorAll('.lng_opt-call'),
        repair_box = document.querySelectorAll('.lng_opt-img_text'),
        price_box = document.querySelectorAll('.lng_opt-price'),
        rules_box = document.querySelectorAll('.lng_opt-rules'),
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


        langActive(s, lang_box);
        langActive(s, open_box);
        langActive(s, down_inf_box);
        langActive(s, call_box);
        langActive(s, repair_box);
        langActive(s, price_box);
        langActive(s, rules_box);
        langActive(s, feedback_box);

    });
    console.log(s);   

    console.log('module lang Ok');
}
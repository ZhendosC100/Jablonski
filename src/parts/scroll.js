export default function scroll(){
    let nav = document.querySelector('nav'),
        ancors = nav.querySelectorAll('a[href^="#"]'),
        repair_link = document.querySelectorAll('.repair_link'),
        promo_link = document.querySelectorAll('.promo_link'),
        feedback_link = document.querySelectorAll('.feedback_link'),
        about_link = document.querySelectorAll('.about_link'),
        move_up = document.querySelectorAll('.move_up');

function scrollBox (name, k) {
    name.forEach(function(item){

        item.addEventListener('click', function(e){
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

scrollBox(repair_link, 30);
scrollBox(promo_link, 80);
scrollBox(feedback_link, 80);
scrollBox(about_link, -60);
scrollBox(move_up, 0);


//   ancors.forEach( function(item) {
//     item.addEventListener('click', function(e){
//       e.preventDefault();
//       let id = item.getAttribute('href'),
//           blockTop = document.querySelector(id).offsetTop - 60; 

//       window.scrollTo({
//         top: blockTop,
//         behavior: 'smooth'
//       });
//     });
//   });


  // function scrollToObject(name, k) {
//     name.addEventListener('click', function(e){
//         e.preventDefault();
//         let id = name.getAttribute('href'),
//             blockTop = document.querySelector(id).offsetTop - k; 
  
//         window.scrollTo({
//           top: blockTop,
//           behavior: 'smooth'
//         });
//       });
// }
}
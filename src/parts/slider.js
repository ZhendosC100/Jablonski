export default function slider(){
    let slideIndex = 2,
        slides = document.querySelectorAll('.slide_comments'),
        prev = document.querySelector('.left_arrow'),
        next = document.querySelector('.right_arrow'),
        dotBox = document.querySelector('.dot_box'),
        dots = document.querySelectorAll('.dots'),
        kx = document.querySelector('body');

        showSlides(slideIndex);
        //функция скрывающая слайды и показывающая нужный слайд
        function showSlides(n) {
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
        
            slides.forEach((item) => item.classList.remove('active'));
            dots.forEach((item) => item.classList.remove('dots_active')); //делает точки не активными (обычного цвета)
        
            slides[slideIndex - 1].classList.add('active'); //показываем нужный слайд при загрузке (сейчас 1-1=0) т е самый первый
            dots[slideIndex - 1].classList.add('dots_active'); //показываем точки
        }
        //функция увеличивающая slideIndex
        
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
                
        prev.addEventListener('click', function () {
            plusSlides(-1);
        });
        
        next.addEventListener('click', function () {
            plusSlides(1);
        });

         //ф-ия определяющая текущий слайд и его устанавливает
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        
        //активируем точки на нажатие
        kx.addEventListener('click', function (event) {
            for (let i = 1; i < dots.length + 1; i++) {
                if (event.target.classList.contains('dots') && event.target == dots[i - 1]) {
                    currentSlide(i);
                }
            }
        });
}
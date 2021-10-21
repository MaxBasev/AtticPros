document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    

    // Mobile menu, hamburger
    let menuBurger = document.querySelector('.menu__burger'),
        menu = document.querySelector('.menu');
    function openMobileMenu() {
        menu.classList.add('opened');
        document.body.style.overflowY = 'hidden';
    }
    function closeMobileMenu() {
        menu.classList.remove('opened');
        document.body.style.overflowY = '';
    }
    menuBurger.addEventListener('click', ()=>{
        if (menu.classList.contains('opened')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // FAQ accordion 
    let faqQuestions = document.querySelectorAll('.faq__questions_item');
    faqQuestions.forEach((item)=>{
        item.addEventListener('click', ()=>{
            if (item.classList.contains('opened')) {
                item.classList.remove('opened');
            } else {
                item.classList.add('opened');
            }
        });
    });

    // let menuItem = document.querySelectorAll('.menu__nav_link');
    // menuItem.forEach((item)=>{
    //     if (item.innerText.includes('WHY')) {
    //         console.log(item.innerText);
    //     }
    // });

    let coverCards = document.querySelector('.cover__cards_wrapper'),
        coverCardsItems = document.querySelectorAll('.cover__cards_item'),
        coverButtons = document.querySelector('.cover__main_buttons');
    // console.log(coverCards.offsetTop);
    // console.log(coverCards.scrollTop);
    // console.log(coverCards.getBoundingClientRect());
    // console.log(document.documentElement.clientHeight);
    // let scrollHeight = Math.max(
    //     document.body.scrollHeight, document.documentElement.scrollHeight,
    //     document.body.offsetHeight, document.documentElement.offsetHeight,
    //     document.body.clientHeight, document.documentElement.clientHeight
    //   );
    // console.log (window.pageYOffset);
    // console.log(scrollHeight);

    if (coverCards.getBoundingClientRect().top > document.documentElement.clientHeight) {
        coverCardsItems.forEach((item, key)=>{
            item.setAttribute('data-wow-delay', '0s');
        });
    } else {
        coverCardsItems.forEach((item, key)=>{
            item.setAttribute('data-wow-delay', 2 + key*0.1 + 's');
        });
    }
    if (coverButtons.getBoundingClientRect().top > document.documentElement.clientHeight) {
        coverButtons.setAttribute('data-wow-delay', '0s');
    } else {
        coverButtons.setAttribute('data-wow-delay', '1.6s');
    }


    // var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    // V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
    // for (var i = 0; i < linkNav.length; i++) {
    //     linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
    //         e.preventDefault(); //отменяем стандартное поведение
    //         var w = window.pageYOffset,  // производим прокрутка прокрутка
    //             hash = this.href.replace(/[^#]*(.*)/, '$1'),  // к id элемента, к которому нужно перейти
    //             t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
    //             start = null;
    //         requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
    //         function step(time) {
    //             if (start === null) { start = time; }
    //             var progress = time - start,
    //                 r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
    //             window.scrollTo(0,r);
    //             if (r != w + t) {
    //                 requestAnimationFrame(step);
    //             } else {
    //                 location.hash = hash;  // URL с хэшем
    //             }
    //         }
    //     }, false);
    // }




    // Menu active item
     
    var sections = $('section'), nav = $('nav'), navHeight = nav.outerHeight();

    $(window).on('scroll', function () {
    var curPos = $(this).scrollTop();
    
    sections.each(function() {
        var top = $(this).offset().top - navHeight,
            bottom = top + $(this).outerHeight();
        
        if (curPos >= top && curPos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');
        
        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
    });
    });

    nav.find('a').on('click', function () {
    var $el = $(this), id = $el.attr('href');
    
    $('html, body').animate({
        scrollTop: $(id).offset().top - navHeight
    }, 500);
    
    return false;
    });
      



});
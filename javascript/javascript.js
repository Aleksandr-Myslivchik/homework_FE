window.addEventListener('DOMContentLoaded', function() {  
    'use strict';
    let tab = document.querySelectorAll('.tab-item'),
        card = document.querySelector('.tab-item-card'),
        tabContent = document.querySelectorAll('.main-content-wrapper-flex');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length;i++) {    
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tab[i].classList.remove('hide-item');
            tab[i].classList.add('show-item');


        }
    } 

    hideTabContent(1);  

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {  
            tabContent[b].classList.add('show');
            tabContent[b].classList.remove('hide');
            tab[b].classList.remove('show-item');
            tab[b].classList.add('hide-item');
        }
    }

    card.addEventListener('click', function(event) {
        let target = event.target;
        if (target && event.target.matches('.tab-item')) {  
            for (let i = 0; i < tab.length;i++) {
                if (target == tab[i]) {
                    hideTabContent(0);  
                    showTabContent(i);
                    break;
                }
            }
        }
    })
}); 
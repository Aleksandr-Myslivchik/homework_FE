window.addEventListener('DOMContentLoaded', function() {  
    'use strict';
    let tabItem = document.querySelectorAll('.tab-item'),
        card = document.querySelector('.tab-item-card'),
        tabContent = document.querySelectorAll('.main-content-wrapper-flex');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length;i++) {    
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tabItem[i].classList.remove('hide-item');
            tabItem[i].classList.add('show-item');


        }
    } 

    hideTabContent(1);  

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {  
            tabContent[b].classList.add('show');
            tabContent[b].classList.remove('hide');
            tabItem[b].classList.remove('show-item');
            tabItem[b].classList.add('hide-item');
        }
    }

    card.addEventListener('click', function(event) {
        let target = event.target;
        if (target && event.target.matches('.tab-item')) {  
            for (let i = 0; i < tabItem.length;i++) {
                if (target == tabItem[i]) {
                    hideTabContent(0);  
                    showTabContent(i);
                    break;
                }
            }
        }
    })
}); 
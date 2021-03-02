const tabs = document.querySelectorAll('.nav__tab'),
    tabsText = ['', 'education', 'skills', 'portfolio', 'awards'],
    addressBar = document.querySelector('.nav__bar-text'),
    close = document.querySelector('#close'),
    maximize = document.querySelector('#maximize'),
    minimize = document.querySelector('#minimize'),
    elem = document.body,
    next = document.querySelectorAll('.btn'),
    section = document.querySelectorAll('section'),
    modalWindow = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close'),
    modalOpen = document.querySelectorAll('.contact'),
    commercial = document.querySelector('.commercial'),
    commercialClose = document.querySelector('.commercial__close'),
    tabText = document.querySelectorAll(".nav__text"),
    hide = 'hide',
    show = 'show';
windowWidth = window.innerWidth;

function hideClass() {
    tabs.forEach((item) => {

        item.classList.remove('active');
    });
}

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function addClass(elem, addClass) {
    elem.classList.add(addClass);
}

function removeClass(elem, removeClass) {
    elem.classList.remove(removeClass);
}

function swapClass(elem, add, remove) {
    addClass(elem, add);
    removeClass(elem, remove);
}

function toggleClass(elem, toggleClass) {
    elem.classList.toggle(toggleClass);
}

function changeAddressBar(index) {
    addressBar.innerText = `daniilbakach.github.io/${tabsText[index]}`;
}

function modalHide() {
    swapClass(modalWindow, hide, show);
}

function toTop() {
    window.scrollTo(0, 0);
}

function openModalWindow(){
       swapClass(modalWindow, show, hide);
     clearInterval(modalTimer);
}

tabs.forEach((item, i) => {
    item.addEventListener('click', () => {

        if (!item.classList.contains('active')) {
            hideClass();
            toggleClass(item, 'active');
            changeAddressBar(i);
            section.forEach((item) => {
                swapClass(item, hide, show);
            });
            swapClass(section[i], show, hide);
            toTop();
        }



    });
});

next.forEach((item, i) => {
    item.addEventListener('click', () => {
        hideClass();
        addClass(tabs[i + 1], 'active');
        swapClass(section[i], hide, show);
        swapClass(section[i + 1], show, hide);
        changeAddressBar(i + 1);
        toTop();

    });
});

close.addEventListener('click', () => {
    window.close();
    setTimeout(function() {
        alert("Видимо Ваш браузер слишком силен, и я не могу побороть его");
    }, 100);
});

maximize.addEventListener('click', () => {
    openFullscreen();
    if (document.fullscreen) {
        alert("Куда уж больше?");
    }
});

minimize.addEventListener('click', () => {
    if (document.fullscreen) {
        closeFullscreen();
    } else {
        alert("Это иллюзия, это не настоящий браузер");
    }
});

//modal
modalClose.addEventListener('click', () => {
    modalHide();

});
modalOpen.forEach(item => {
    item.addEventListener('click', () => {
        openModalWindow();
    });
});
if(modalWindow.classList.contains('show')){
    
window.onscroll = function(){
  return false;
}}


//commercial
const modalTimer = setTimeout(() => {
    if (windowWidth > 992) {
        swapClass(
            commercial, 'flex', hide);
    }

}, 20000);
commercialClose.addEventListener('click', () => {
    swapClass(commercial, hide, 'flex');
});

//adaptive
if (windowWidth < 992) {
    tabText[2].innerText = "Навыки";
    tabText[4].innerText = "Награды";
}
if (windowWidth < 769) {
    section.forEach((item) => {
        swapClass(item, show, hide);
    });
}

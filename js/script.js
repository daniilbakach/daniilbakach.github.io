const tabs = document.querySelectorAll('.nav__tab'),
    tabsBar = document.querySelector('.nav__tabs')
tabsText = ['', 'education', 'skills', 'portfolio', 'awards'],
    addressBar = document.querySelector('.nav__bar-text'),
    closeWindow = document.querySelector('#close'),
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

function closeByButton(item) {
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && item.classList.contains('show')) {
            swapClass(item, 'hide', 'show')
        }
    });
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
        tabsBar.classList.remove('hint');
        next.forEach((item) => {

            item.classList.remove('hint');
        });


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
        tabsBar.classList.remove('hint');
        next.forEach((item) => {

            item.classList.remove('hint');
        });
    });
});

closeWindow.addEventListener('click', () => {
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
    document.body.style.overflow = '';

});
modalOpen.forEach(item => {
    item.addEventListener('click', () => {
        swapClass(modalWindow, show, hide);
        document.body.style.overflow = 'hidden';
    });
});
closeByButton(modalWindow);


//commercial
setTimeout(() => {
    if (windowWidth > 992) {
        swapClass(
            commercial, 'flex', hide);
    }

}, 20000);
commercialClose.addEventListener('click', () => {
    swapClass(commercial, hide, 'flex');
});

//advice

windowAdvice = document.querySelector('.advice');
closeByButton(windowAdvice);

function showAdviceByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        next.forEach((item) => {

            item.classList.add('hint');
        });
        tabsBar.classList.add('hint');

        window.removeEventListener('scroll', showAdviceByScroll);

    }
}
window.addEventListener('scroll', showAdviceByScroll);
next.forEach((item) => {
    item.addEventListener('mouseover', () => {
        tabsBar.classList.remove('hint');
        next.forEach((item) => {
            item.classList.remove('hint');
        });
    });
});
tabsBar.addEventListener('mouseover', () => {
    tabsBar.classList.remove('hint');
    next.forEach((item) => {
        item.classList.remove('hint');
    });
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



//slider
const slides = document.querySelectorAll('.slides'),
    wrapper = document.querySelector('.awards__awards'),
    prevBtn = document.querySelector('.awards__prev'),
    nextBtn = document.querySelector('.awards__next'),
    dotsWrapper = document.querySelector('.awards__dots');



let slideIndex = 1,
    dots = [];


function hideSlides() {
    slides.forEach((item) => {
        item.style.opacity = '0';

    });
}
hideSlides();
slides[0].style.opacity = '1';


for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('awards__dot');
    dotsWrapper.append(dot);

    dots.push(dot);
    dots[0].classList.add('awards__dot-active');
}

function changeActiveDot() {
    dots.forEach(dot => dot.classList.remove('awards__dot-active'));
    dots[slideIndex - 1].classList.add('awards__dot-active');
}
nextBtn.addEventListener('click', () => {
    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }
    changeActiveDot();
    hideSlides();
    slides[slideIndex - 1].style.opacity = '1';

});
prevBtn.addEventListener('click', () => {
    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }
    console.log(slideIndex);
    changeActiveDot();
    hideSlides();
    slides[slideIndex - 1].style.opacity = '1';
});
dots.forEach((dot, i) => {
    dot.addEventListener('click', (e) => {
        slideIndex = i + 1;
        changeActiveDot();
        hideSlides();
        slides[slideIndex - 1].style.opacity = '1';
    });
});
wrapper.addEventListener('touchstart', handleTouchStart);
wrapper.addEventListener('touchmove', handleTouchMove);
let x1 = null,
    firstTouch;

function handleTouchStart(e) {
    firstTouch = e.touches[0];
    x1 = firstTouch.clientX;
    // console.log(firstTouch);
    // console.log(x1);
}
console.log(firstTouch);
console.log(x1);

function handleTouchMove(e) {
    if (!x1) {
        return false;
    }
    let x2 = e.touches[0].clientX;
    let xDiff = x2 - x1;
    // console.log(x2);

    console.log(xDiff);
    if (xDiff > 0) {
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        console.log(slideIndex);
        changeActiveDot();
        hideSlides();
        slides[slideIndex - 1].style.opacity = '1';
    } else {
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        changeActiveDot();
        hideSlides();
        slides[slideIndex - 1].style.opacity = '1';
    }
    x1 = null;
}
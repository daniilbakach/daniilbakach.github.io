const tabs = document.querySelectorAll('.nav__tab'),
    tabsText = ['', 'education', 'skills', 'portfolio', 'awards'],
    addressBar = document.querySelector('.nav__bar-text'),
    close = document.querySelector('#close'),
    maximize = document.querySelector('#maximize'),
    minimize = document.querySelector('#minimize'),
    elem = document.body,
    tabSection = document.querySelectorAll('section'),
    next = document.querySelectorAll('.btn'),
    section = document.querySelectorAll('section');

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

function toggleClass(elem, toggleClass) {
    elem.classList.toggle(toggleClass);
}

function changeAddressBar(index) {
    addressBar.innerText = `daniilbakach.github.io/${tabsText[index]}`;
}

tabs.forEach((item, i) => {
    item.addEventListener('click', () => {

        if (!item.classList.contains('active')) {
            hideClass();
            toggleClass(item, 'active');
            changeAddressBar(i);
            section.forEach((item) => {
                addClass(item, "hide");
                removeClass(item, "show");
            });
            addClass(section[i], "show");
            removeClass(section[i], "hide");
        }



    });
});

next.forEach((item, i) => {
    item.addEventListener('click', () => {
        hideClass();
        addClass(tabs[i + 1], 'active');
        removeClass(section[i], 'show');
        addClass(section[i], 'hide');
        addClass(section[i + 1], 'show');
        removeClass(section[i + 1], 'hide');
        changeAddressBar(i + 1);

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
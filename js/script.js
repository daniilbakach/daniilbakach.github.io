const tabs = document.querySelectorAll('.nav__tab'),
    tabsText = ['', 'education', 'skills', 'languages', 'awards'],
    addressBar = document.querySelector('.nav__bar-text'),
    close = document.querySelector('#close'),
    maximize = document.querySelector('#maximize'),
    minimize = document.querySelector('#minimize'),
    elem = document.body,
    next = document.querySelectorAll('.btn');





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




tabs.forEach((item, i) => {
    item.addEventListener('click', () => {

        if (!item.classList.contains('active')) {
            hideClass();
            item.classList.toggle('active');
            addressBar.innerText = `daniilbakach.github.io/${tabsText[i]}`;
        }



    });
});
next.forEach((item, i) => {
    item.addEventListener('click', () => {
        hideClass();
        tabs[i + 1].classList.add('active');
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
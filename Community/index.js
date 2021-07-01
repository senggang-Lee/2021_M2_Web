const loginForm = document.querySelector(".loginForm"),
    loginBtn = document.querySelector(".fa-user");

const LOGIN_SHOW = "loginShowing";

function loginHandle(event) {
    loginForm.classList.toggle(LOGIN_SHOW);
};

loginBtn.addEventListener("click", loginHandle);

// write form edit

const writeButton = document.querySelector('.write'),
    writeForm = document.querySelector('.actorinput');

function writeFormControl(event) {
    if (writeForm.className !== 'showing') {
        writeForm.classList.remove('actorinput');
        writeForm.classList.add('showing');
        writeButton.innerHTML = '<i class="fas fa-times"></i>&nbsp;글쓰기';
    } else {
        writeForm.classList.remove('showing');
        writeForm.classList.add('actorinput');
        writeButton.innerHTML = '+&nbsp;글쓰기';
    }
}

writeButton.addEventListener("click", writeFormControl)

// carousel edit

const carousel = document.querySelector(".carousel"),
    carouselItem = document.querySelector(".carouselItem"),
    body = document.querySelector("body");

let Width = body.offsetWidth;
let p = 0

function slide(event) {
    if (-(Width * 2) < p) {
        p = p - Width;
    } else {
        p = 0;
    }
    carousel.style.transform = `translateX(${p}px)`
    buttonColor();
}

function resize(event) {
    Width = body.offsetWidth;
    carousel.style.width = `${Width * 3}px`
    carouselItem.style.width = `${Width}px`
    carousel.style.transform = `translateX(0px)`
}

function buttonColor() {
    if (carousel.style.transform == `translateX(0px)`) {
        document.querySelector(".carouselbtn1").style.backgroundColor = `red`;
    } else if (carousel.style.transform == `translateX(0px)`) {
        document.querySelector(".carouselbtn1").style.backgroundColor = `red`;
    }
}

resize();

document.querySelector(".carouselbtn1").style.backgroundColor = `red`;
window.addEventListener("resize", resize);
carousel.addEventListener("click", slide);
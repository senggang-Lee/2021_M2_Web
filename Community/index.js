// write form edit

const writeButton = document.querySelector('.write'),
writeForm = document.querySelector('.actorinput');

function writeFormControl (event) {
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


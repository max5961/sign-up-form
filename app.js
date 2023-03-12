const firstPwd = document.getElementById('firstPwd');
const secPwd = document.getElementById('secPwd');
const submitBtn = document.getElementById('submitBtn');
const notMatch = document.querySelector('.notMatch');
const tel = document.getElementById('tel');

tel.addEventListener('input', () => {
    if(/[a-zA-Z]/.test(tel.value.charAt(tel.value.length-1))){
        tel.value = tel.value.substr(0,tel.value.length-1);
    }
//does not work with backspaces
    if(tel.value.length == 3){
        tel.value = `(${tel.value}) `
    } else if(tel.value.length == 9){
        tel.value = `${tel.value}-`
    } else if(tel.value.length > 14){
        tel.value =tel.value.substr(0,tel.value.length-1);
    }
})

function checkPwds(pwdOne, pwdTwo){
    if(pwdOne.length == 0 && pwdTwo.length == 0){
        notMatch.style.visibility = 'hidden';
    }
    else if(pwdOne.value != pwdTwo.value){
        notMatch.style.visibility = 'visible';
    } else {
        notMatch.style.visibility = 'hidden';
    }
}

secPwd.addEventListener('input', () => {
    checkPwds(firstPwd,secPwd);
})




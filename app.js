const firstPwd = document.getElementById('firstPwd');
const secPwd = document.getElementById('secPwd');
const submitBtn = document.getElementById('submitBtn');
const notMatch = document.querySelector('.notMatch');
const tel = document.getElementById('tel');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');

let names = [fname, lname]

names.forEach(name => {
    name.addEventListener('input', () => {
        if(name.value.length == 1){
            let char = name.value.charAt(0);
            char = char.toUpperCase();
            name.value = char;

        }
    })
})

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
    if((pwdOne.value.length == 0 && pwdTwo.value.length == 0) || pwdTwo.value.length == 0){
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

firstPwd.addEventListener('input', () => {
    if(secPwd.value.length > 0){
        checkPwds(firstPwd,secPwd);
    }
})




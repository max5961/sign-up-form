firstPwd = document.getElementById('firstPwd');
secondPwd = document.getElementById('secPwd');
submitBtn = document.getElementById('submitBtn');
notMatch = document.querySelector('.notMatch');

secondPwd.addEventListener('input', () => {
    if(firstPwd.value != secondPwd.value){
        notMatch.style.visibility = 'visible';
    } else {
        notMatch.style.visibility = 'hidden';
    }
})
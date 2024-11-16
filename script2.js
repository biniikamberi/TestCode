const FillEmail = document.getElementById('InputEmail');
const PressSubmit = document.getElementById('submitValidation');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

PressSubmit.addEventListener('click' , function(event){
    if(FillEmail.value == ''){
        alert('You Must Fill The Email Form!')
        event.preventDefault();
    }else if(!emailPattern.test(FillEmail.value)){
alert('Please Enter A Valide Email Addres For Example (example@domain.com)');
event.preventDefault();
    }
    else{
        alert('We Sent A 4-Digit Code In Your Inbox')
        window.location.href = 'CodeRecieve.html';
    }
})
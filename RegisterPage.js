const NameSigned = document.getElementById('Name-Sign');
const EmailSigned = document.getElementById('Email-Sign');
const PasswordSigned = document.getElementById('Password-Sign');
const SubmitButton = document.getElementById('SubmitButton-SignUp');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

SubmitButton.addEventListener('click', function(event){
    if(NameSigned.value == ''){
        alert('You Must Enter Your Name!')
        event.preventDefault();
    }else if(EmailSigned.value == '' ){
        alert('You Must Enter Your Email')
        event.preventDefault();
    }else if(!emailPattern.test(EmailSigned.value)){
        alert('Please Enter A Valid Email Addres For Example (example@domain.com)');
        event.preventDefault();
    }else if(PasswordSigned.value == ''){
        alert('You Must Enter Your Password')
        event.preventDefault();
    }else{
        alert('Succesfully Created Account Go Back To Sign In')
    window.location.href= 'index.html'
    }
})

function reoptenTab(url){
    window.open(url,  'width=800,height=600,top=100,left=100,toolbar=no,resizable=yes,scrollbars=yes')
}



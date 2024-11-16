const themechange= document.getElementById('Theme');

themechange.addEventListener('change', function() {
const selectedTheme =this.dark;
if(selectedTheme=='Dark-Mode'){
    document.body.classList.add('Dark-Mode')

} else{
document.body.classList.remove('Dark-Mode');
}
});


const EmailInput = document.getElementById('email');
const PasswordInput = document.getElementById('passwords');
const SubmitButton = document.getElementById('submits');

SubmitButton.addEventListener('click' , function(){
if(EmailInput.value == ''){
alert('You Must Enter Your Email');
}else if(PasswordInput.value == ''){
    alert('You Must Enter Your Password');
} else{
    alert("Succesfully works!")
}
}
)

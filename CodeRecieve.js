const themechange= document.getElementById('Theme');

themechange.addEventListener('change', function() {
const selectedTheme =this.dark;
if(selectedTheme=='Dark-Mode'){
    document.body.classList.add('Dark-Mode')

} else{
document.body.classList.remove('Dark-Mode');
}
});


const BoxChangeColor= document.getElementById('box')

BoxChangeColor=addEventListener('change', function(){
    const SelectedBoxColor = this.dark;
    if(selectedTheme=='Dark-Mode'){
    document.box.classList.add('Dark-Mode')
    } else{
   document.box.classList.remove('Dark-Mode')
    }
})
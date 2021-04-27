
const Hamburger = document.querySelector('.hamburger');
const hamIcon = Hamburger.querySelector('.fa');
let showMenu = false;
Hamburger.addEventListener('click' , () => {
 const nav = document.querySelector('nav');      

    if(!showMenu){
        hamIcon.classList.remove('fa-navicon');
        hamIcon.classList.add('fa-remove');
        nav.classList.add('open');
          Hamburger.classList.add('open')
        showMenu = true;
    }
    else{
        hamIcon.classList.add('fa-navicon');
        hamIcon.classList.remove('fa-remove');
        nav.classList.remove('open');
        Hamburger.classList.remove('open')
        
        showMenu = false;
    }
})



const checkbox = document.querySelector('#checkbox');


checkbox.addEventListener('change' , ()  => {
                document.body.classList.toggle('dark');
})


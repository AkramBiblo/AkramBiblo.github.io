
window.addEventListener('scroll', function() {
    let menubar = document.getElementById('nbar')
    let coordTop = menubar.getBoundingClientRect().top
    if (coordTop == 0 ) {
        menubar.style.backgroundColor = 'black'
    } else {
        menubar.style.backgroundColor = ''
    }
})

let current = 1;
let total = 5
 
setInterval(() => {
     
    if (current <= total) {

        document.body.style.backgroundImage = `url(bg${current}.jpg)`;
       
        
    }
 
    current++
    if (current == 6) {
        current = 1
    }
}, 5000)

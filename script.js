let images = document.querySelectorAll('.images-container img ');

let lightbox = document.createElement('div')
lightbox.id = 'lightbox';

document.body.append(lightbox)


images.forEach(image =>{
    image.addEventListener('click', e =>{

        lightbox.classList.add('active');
        let img = document.createElement('img')

        img.src = image.src;
        lightbox.appendChild(img)


    })
})

lightbox.addEventListener('click', e=>{
   if ( e.target != e.currentTarget ) return ;
   while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
   }
   lightbox.classList.remove('active')
})
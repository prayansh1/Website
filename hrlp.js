
window.addEventListener('load', function () {
    var imageUrls = [
        'HS ELE2.jpg',
        'JSA1.jpg',
        'FE1.jpg'
    ];
    var delay = 5000; // Delay in milliseconds
    var currentIndex = 0;

    setTimeout(changeBackgroundImages, delay);

    function changeBackgroundImages() {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        let c = document.querySelector('.big');
        c.style.backgroundImage = 'linear-gradient(rgba(0,0,0, 0.5),rgba(0, 0, 0, 0.5)),url("' + imageUrls[currentIndex] + '")';
        setTimeout(changeBackgroundImages, delay);
    }
});
window.addEventListener("scroll", function () {
    var h = document.querySelector(".navbar");
    h.classList.toggle("sticky", window.scrollY > 0)
})

const slides=document.querySelectorAll(".slide");
var counter= 0;
console.log(slides)
slides.forEach(
(slide,index)=>{
slide.style.left = `${index * 100}%`
}
)

const goNext=()=>{
counter++
if(counter > 3)
counter=0
slidecard()
}

const goPrev=()=>{
counter--
if(counter < 0)
counter=3
slidecard()
}

const slidecard =()=>{
slides.forEach(
(slide)=>{
  slide.style.transform = `translateX(-${counter * 100}%)`
  
}
)
}

let menui=document.querySelector('#menu-icon');
let menu=document.querySelector('.menu');
menui.onclick = ()=>{
    console.log('prayansh')
    menu.classList.toggle('open');
    menui.classList.toggle('bx-x');
   
}
window.onscroll =()=>{
    
    menui.classList.remove('fa-x');
    menu.classList.remove('open');

}



const pics=document.querySelectorAll(".grid-item1");
var counter1= 0;
console.log(pics)
pics.forEach(
    (pic,index)=>{
      pic.style.left = `${index * 100}%`
    }
    )

    
    const goNextpics=()=>{
      counter1++
      if(counter1 > 9)
      counter1=0
    slidepic()
}

const goPrevpics=()=>{
  console.log('prayansh')
    counter1--
    if(counter1 < 0)
    counter1=9
    slidepic()
}

const slidepic =()=>{
    pics.forEach(
        (pic)=>{
          pic.style.transform = `translateX(-${counter1 * 100}%)`
          
        }
    )
}

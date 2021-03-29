const prevBtn=document.querySelector('prev');
const prevBtn=document.querySelector('next');
const galleryImgs=document.querySelectorAll('.gallery-img');
let currentlySelected=0;
prevBtn.addEventListener('click',function(){

});
nextBtn.addEventListener('click',function(){
    galleryImgs[currentlySelected].classList.remove('active');
    currentlySelected++;
    galleryImgs[currentlySelected].classList.add("active");
    prevBtn.disabled=false;
});
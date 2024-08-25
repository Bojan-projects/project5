document.querySelector('.menu').addEventListener('click',()=>{
 document.querySelector('.menu').classList.toggle('fa-x');
 document.querySelector('.header ul').classList.toggle('active');
 document.querySelector('.header').classList.toggle('active');
 document.querySelector('.buttons').classList.toggle('active');
 document.querySelector('.header ul li').classList.toggle('mobile');
})
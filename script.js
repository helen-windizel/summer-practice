const rectangle2 = document.querySelector('.rectangle2');

rectangle2.addEventListener('mouseenter', () => {
  rectangle2.classList.add('grow');
});

rectangle2.addEventListener('mouseleave', () => {
 rectangle2.classList.remove('grow');
});

const span= document.querySelector('.animationtext');

span.addEventListener('mouseenter', () => {
  span.classList.add('large');
});

span.addEventListener('mouseleave', () => {
 span.classList.remove('large');
});

document.querySelector('image-container img').forEach (img=>{

img.addEventListener('mouseenter',function () {
  this.style.transform = 'scale(1.2)';
});

img.addEventListener('mouseleave', function() {
 this.style.transform = '';//
});
});


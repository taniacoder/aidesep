//fotogaleria

window.addEventListener('load', function(){
  var imgElement = document.querySelectorAll('.img-element');
  var overlay = document.querySelector('#modal-img');
  var close = document.querySelector('#modal-img__close');
  var modalImg = document.querySelector('#modal-img__content img');
  var caption = document.querySelector('#modal-img__caption');
  
  function openModal() {
    modalImg.src = this.src;    
    caption.innerHTML = this.alt;
    overlay.classList.add('open');
  }
  
  for(var i = 0; i < imgElement.length; i++) {
    imgElement[i].addEventListener('click', openModal);
  }

  close.addEventListener('click', function() {
    overlay.classList.remove('open');
  });
  
});

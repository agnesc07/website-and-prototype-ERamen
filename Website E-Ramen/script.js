// Agnes Calista - 2501980690


// Image SLider Home page
const changes = document.querySelectorAll('[data-carousel-button]');

changes.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const showimage = button.closest('[data-carousel]').querySelector('[data-slides]');
        const currimage = showimage.querySelector('[data-active]');

        let newIndex = [...showimage.children].indexOf(currimage) + offset;

        if(newIndex < 0){
          newIndex = showimage.children.length - 1;
        }

        if(newIndex >= showimage.children.length){
          newIndex = 0;
        }

        showimage.children[newIndex].dataset.active = true;
        delete currimage.dataset.active;
    })
})

// Scroll Bar
const content = document.body;
let temp = 0;

window.addEventListener('scroll', () => {
  const curr = window.pageYOffset;
  if(curr <= 0){
    content.classList.remove('scroll-up');
  }
  if(curr > temp && !content.classList.contains('scroll-down')){
    content.classList.remove('scroll-up');
    content.classList.add('scroll-down');
  }
  if(curr < temp && content.classList.contains('scroll-down')){
    content.classList.remove('scroll-down');
    content.classList.add('scroll-up');
  }
  temp = curr;
})






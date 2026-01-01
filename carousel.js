const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let current = 0;

function showSlide(index) {
  if(index < 0) current = slides.length - 1;
  else if(index >= slides.length) current = 0;
  else current = index;

  const inner = document.querySelector('.carousel-inner');
  inner.style.transform = `translateX(-${current * 100}%)`;
}

// Next/Prev buttons
nextBtn.addEventListener('click', () => showSlide(current + 1));
prevBtn.addEventListener('click', () => showSlide(current - 1));

// Auto slide every 5 seconds
setInterval(() => showSlide(current + 1), 5000);

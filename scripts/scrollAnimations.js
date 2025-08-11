export function rotateAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      } else {
        entry.target.classList.remove('animate')
      }
    })
  }, {});

  const images = document.querySelectorAll('.js-image')
  images.forEach(el => observer.observe(el))

}
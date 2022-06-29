const items = document.querySelectorAll('.list__item'),
  titles = document.querySelectorAll('.list__title'),
  crosses = document.querySelectorAll('.list__title img'),
  contents = document.querySelectorAll('.list__content');

titles.forEach((title, i) => {
  title.addEventListener('click', () => {
    title.classList.toggle('title-active');
    crosses[i].classList.toggle('rotated-cross');
    contents[i].classList.toggle('hidden');
  })
})
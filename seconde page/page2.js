const items = document.querySelectorAll('.item');
const thing = document.querySelector('.thing');


items.forEach(item => item.addEventListener('mouseover', (e) => {
  const {offsetLeft: left, offsetTop: top} = item;
  thing.style.left = `${left}px`;
}));
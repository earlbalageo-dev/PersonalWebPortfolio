const darkButton = document.querySelector('.dark');
const lightButton = document.querySelector('.light');
const odd = document.querySelector('body');
const even = document.querySelectorAll('.even');
const card = document.querySelectorAll('.card');
const darkButtonOutline = document.querySelector('.darkRadio');
const socials = document.querySelectorAll('.socials');
darkButton.onclick = () => {
  odd.classList.add('darkOdd');
  darkButtonOutline.classList.remove('btn-outline-dark');
  darkButtonOutline.classList.add('btn-outline-light');
  for (let item of even) {
    item.classList.remove('lightEven');
    item.classList.add('darkEven');
  }

  for (let item of card) {
    item.classList.remove('lightCard');
    item.classList.add('darkCard');
  }
  for (let item of socials) {
    item.classList.add('socialsDark');
  }
};

lightButton.onclick = () => {
  odd.classList.remove('darkOdd');
  darkButtonOutline.classList.remove('btn-outline-ligth');
  darkButtonOutline.classList.add('btn-outline-dark');
  for (let item of even) {
    item.classList.remove('darkEven');
    item.classList.add('lightEven');
  }

  for (let item of card) {
    item.classList.remove('darkCard');
    item.classList.add('lightCard');
  }

  for (let item of socials) {
    item.classList.remove('socialsDark');
  }
};

"use strict";

// menu

let menuIcon = document.getElementById('menuIcon');
let menuBox = document.getElementById('menuBox');
const navLinks = document.querySelectorAll('.menu__link');
const links = [...navLinks];

const burgerToggle = () => {
    menuBox.classList.toggle('open-menu');
    if (menuBox.classList.contains('open-menu')) {
        menuIcon.src = './assets/close.svg';
        menuIcon.classList.add('open-menu');
    } else {
        menuIcon.src = './assets/menu_round.svg';
        menuIcon.classList.remove('open-menu');
    }
}

menuIcon.addEventListener('click', burgerToggle);
menuBox.addEventListener('click', burgerToggle);
links.forEach((link) => {
    link.addEventListener('click', menuBox.classList.remove('open-menu'));
});

// about section
function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector);
  }
  
  const sections = qs('.about__item', true);
  const timeline = qs('.about__timeline');
  const line = qs('.about__line');
  line.style.bottom = `calc(100% - 20px)`;
  let prevScrollY = window.scrollY;
  let up, down;
  let full = false;
  let set = 0;
  const targetY = window.innerHeight * .8;
  
  function scrollHandler(e) {
    const {
      scrollY
    } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect(); 
  
    const dist = targetY - timelineRect.top;
  
    if (down && !full) {
      set = Math.max(set, dist);
      line.style.bottom = `calc(100% - ${set}px)`;
    }
  
    if (dist > timeline.offsetHeight + 50 && !full) {
      full = true;
      line.style.bottom = `-50px`;
    }
  
    sections.forEach(item => {
      const rect = item.getBoundingClientRect(); 
  
      if (rect.top + item.offsetHeight / 5 < targetY) {
        item.classList.add('show-me');
      }
    }); 
  
    prevScrollY = window.scrollY;
  }
  
  scrollHandler();
  line.style.display = 'block';
  window.addEventListener('scroll', scrollHandler);
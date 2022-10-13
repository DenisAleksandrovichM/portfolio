"use strict";

const Chart = require('chart.js');

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


// charts

// setup block  
const progress = 90;
const dataPoints = [progress, 100 - progress];
const data = {
  labels: ['My progress'],
  datasets: [{
    label: 'My progress',
    data: dataPoints,
    backgroundColor: [
      'rgba(173, 153, 102, 0.5)',
      'transparent'
    ],
    borderColor: [
      'rgb(173, 153, 102)',
      'transparent'
    ],
    borderWidth: 1,
    borderRadius: 5,
    cutout: '80%'
  }]
};

// counter plugin block
const counter = {
  id: 'counter',
  beforeDraw(chart, args, options) {
    const {
      ctx,
      chartArea: {
        top,
        right,
        bottom,
        left,
        width,
        height
      }
    } = chart
    ;
    ctx.save();
    // 1 how to get the position

    // 2 how to write text + automate text
    ctx.font = options.fontSize + 'px ' + options.fontFamily;
    ctx.textAlign = 'center';
    ctx.fillStyle = options.fontColor;
    ctx.fillText(dataPoints[0] + '%', width / 2, (height / 2) + (options.fontSize * 0.34));

    //x0 - starting point on the horizontal level l/r
    //y0 - starting point on the vertical level t/b
    //x1 - length of the shape in pixels horizontaal level
    //y1 - length of the shape in pixels vertical level
  }
}

// config block
const config = {
  type: 'doughnut',
  data,
  options: {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },
      counter: {
        fontColor: 'rgb(173, 153, 102)',
        fontSize: '40',
        fontFamily: 'sans-serif'
      }
    }
  },
  plugins: [counter]
};

//render init block
const Golang = new Chart(
  document.getElementById('Golang'),
  config);

const Python = new Chart(
  document.getElementById('Python'),
  config);

const SQL = new Chart(
  document.getElementById('SQL'),
  config);

const JavaScript = new Chart(
  document.getElementById('JavaScript'),
  config);

const oneS = new Chart(
  document.getElementById('oneS'),
  config);
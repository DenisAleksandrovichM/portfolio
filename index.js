"use strict";

const Chart = require('chart.js');
Chart.register(ChartDeferred);

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

// config block
const config = {
  type: 'doughnut',
  data: {
    datasets: [{
        data: [70, 30],
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
    } 
  ]},
  options: {
    plugins: {
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
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
};

const config2 = {
  type: 'doughnut',
  data: {
    datasets: [{
        data: [60, 40],
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
    } 
  ]},
  options: {
    plugins: {
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
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
  }
};

const config3 = {
  type: 'doughnut',
  data: {
    datasets: [{
        data: [80, 20],
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
    } 
  ]},
  options: {
    plugins: {
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 700      // delay of 500 ms after the canvas is considered inside the viewport
      },
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
  }
};

const config4 = {
  type: 'doughnut',
  data: {
    datasets: [{
        data: [40, 60],
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
    } 
  ]},
  options: {
    plugins: {
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 800      // delay of 500 ms after the canvas is considered inside the viewport
      },
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
  }
};

const config5 = {
  type: 'doughnut',
  data: {
    datasets: [{
        data: [90, 10],
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
    } 
  ]},
  options: {
    plugins: {
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 900      // delay of 500 ms after the canvas is considered inside the viewport
      },
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
  }
};

//render init block

const Golang = new Chart(
  document.getElementById('Golang'),
  config);

const Python = new Chart(
  document.getElementById('Python'),
  config2);

const SQL = new Chart(
  document.getElementById('SQL'),
  config3);

const JavaScript = new Chart(
  document.getElementById('JavaScript'),
  config4);

const oneS = new Chart(
  document.getElementById('oneS'),
  config5);

  
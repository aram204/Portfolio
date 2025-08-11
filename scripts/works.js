import { works } from "./data.js";
import { rotateAnimation } from "./scrollAnimations.js";

function renderWorksCard() {
  const worksPage = document.querySelector('.js-works-page')

  let worksCardHtml = '';

  works.forEach((work) => {
    worksCardHtml += `
      <div class="all-works js-work-card" data-position="${work.id}">
        <div class="work-image-container">
          <img class="work-image-back" src="./images/image4.png">
          <img class="work_image js-image" src="${work.image}">
          ${work.id !== 1 ? '<img class="change-work-left js-left" src="./images/change_work.png">' : ''}
          ${work.id !== works.length ? '<img class="change-work-right js-right" src="./images/change_work.png">' : ''}
        </div>
        <div class="work-content">
          <div class="work-header">
            Works
          </div>
          <div class="my-work-header">
            ${work.name}
          </div>
          <div class="about-work">
            ${work.about}
          </div>
          <div class="skills-for-work js-skills">
            ${skillsForWork(work.skills)}
          </div>
          <div class="github-link">
            <a href="${work.githubLink}" target="_blank"><svg class="icon" xmlns="http://www.w3.org/2000/svg"
                width="64" height="64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640">
                <path fill="CurrentColor"
                  d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
              </svg></a>
          </div>
          <div class="slides">
            <div class="slide-number">${work.id}</div>
            ${slidesForWork(work.id)}
          </div>
        </div>
      </div>
    `
  });

  function skillsForWork(skills) {
    let skillsHtml = ''
    skills.forEach((skill) => {
      skillsHtml += `
        <div class="skill">${skill}</div>
      `

    });
    return skillsHtml
  };

  function slidesForWork(id) {
    let slidesHtml = ''
    works.forEach((work, i) => {
      slidesHtml += `<div data-position='${work.id}' class="slide js-slide ${id === i + 1 ? 'checked-work' : ''}"></div>`
    });
    return slidesHtml
  }

  function setOpacity(currentPosition) {
    const workCards = document.querySelectorAll('.js-work-card')
    workCards.forEach((work) => {
      if (Number(work.dataset.position) === currentPosition) {
        work.style.opacity = '1';
      } else {
        work.style.opacity = '0';
      }
    });
  }

  function changeCardRightOpacity(currentPosition) {
    const workCards = document.querySelectorAll('.js-work-card')
    workCards.forEach((work) => {
      if (Number(work.dataset.position) === currentPosition + 1) {
        work.style.opacity = '1';
      }
    });
  }

  function changeCardLeftOpacity(currentPosition) {
    const workCards = document.querySelectorAll('.js-work-card')
    workCards.forEach((work) => {
      if (Number(work.dataset.position) === currentPosition - 1) {
        work.style.opacity = '1';
      }
    });
  }

  function changeCardRight() {
    workCards.forEach((card) => {
      card.classList.add('active-transition');
    });

    setTimeout(() => {
      changeCardRightOpacity((currentPosition / (-100)) + 1)
      const worksPage = document.querySelector('.js-works-page');
      currentPosition -= 100;
      if (currentPosition >= -100 * (works.length - 1)) {

        worksPage.style.transform = `translateX(${currentPosition}%)`;
      } else {
        currentPosition = -100 * (works.length - 1)
      };

    }, 300);

    setTimeout(() => {
      workCards.forEach((card) => {
        card.classList.remove('active-transition');
        setOpacity((currentPosition / (-100)) + 1)
      });
    }, 900);
  };

  function changeCardLeft() {
    workCards.forEach((card) => {
      card.classList.add('active-transition');
    });

    setTimeout(() => {
      changeCardLeftOpacity((currentPosition / (-100)) + 1)
      const worksPage = document.querySelector('.js-works-page');
      currentPosition += 100;
      if (currentPosition <= 0) {

        worksPage.style.transform = `translateX(${currentPosition}%)`;
      } else {
        currentPosition = 0
      };

    }, 300);

    setTimeout(() => {
      workCards.forEach((card) => {
        card.classList.remove('active-transition');
        setOpacity((currentPosition / (-100)) + 1)
      });
    }, 900);
  };

  worksPage.innerHTML = worksCardHtml

  let currentPosition = 0;

  setOpacity((currentPosition / (-100)) + 1)

  const rightButtons = document.querySelectorAll('.js-right');
  const leftButtons = document.querySelectorAll('.js-left');
  const workCards = document.querySelectorAll('.js-work-card');

  rightButtons.forEach((rightButton) => {
    rightButton.addEventListener('click', () => {
      changeCardRight()
    });
  });

  leftButtons.forEach((leftButton) => {
    leftButton.addEventListener('click', () => {
      changeCardLeft()
    });
  });

  const slidesWorks = document.querySelectorAll('.js-slide')
  slidesWorks.forEach((slide) => {
    slide.addEventListener('click', () => {
      const position = slide.dataset.position
      currentPosition = -100 * (position - 1)
      workCards.forEach((card) => {
        card.classList.add('active-transition');
      });
      workCards.forEach((work) => {
        work.style.opacity = '1';
      });

      setTimeout(() => {
        const worksPage = document.querySelector('.js-works-page');

        worksPage.style.transform = `translateX(${currentPosition}%)`;

      }, 300);

      setTimeout(() => {
        workCards.forEach((card) => {
          card.classList.remove('active-transition');
          setOpacity((currentPosition / (-100)) + 1)
        });
      }, 900);
    });
  });

  rotateAnimation()
}

renderWorksCard();
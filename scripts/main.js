const infoBtns = document.querySelectorAll('.project__info__btn');
const infoPanes = document.querySelectorAll('.project__details');
const darkLightModeToggle = document.querySelector(
  '#light__dark__mode__toggle'
);
const darkLabel = document.querySelector('#dark__mode__label__dark');
const lightLabel = document.querySelector(
  '#dark__mode__label__light'
);

infoBtns.forEach((infoBtn) =>
  infoBtn.addEventListener('click', (e) => {
    let index = e.target.getAttribute('data-index');
    let [pane] = Array.from(infoPanes).filter(
      (infoPane, paneIdx) => paneIdx == index
    );

    e.target.textContent = '';
    e.target.classList.toggle('info__opened');

    e.target.animate(
      { transform: 'rotateY(360deg)' },
      { duration: 500, easing: 'cubic-bezier(0.42, 0, 0.58, 1)' }
    );

    setTimeout(() => {
      e.target.textContent = e.target.classList.contains(
        'info__opened'
      )
        ? 'X'
        : '?';
    }, 400);

    pane.classList.toggle('visible');
  })
);

darkLightModeToggle.addEventListener('click', (e) => {
  toggleDarkLightMode();
});

function toggleDarkLightMode() {
  updateDarkLightModeValues();
}

function updateDarkLightModeValues() {
  const root = document.querySelector(':root');
  const computed = getComputedStyle(root);

  let newBGColor = computed.getPropertyValue('--default-font-color');
  let newTextColor = computed.getPropertyValue(
    '--default-page-background-color'
  );

  setDarkLightModeValues(newBGColor, newTextColor);
  storeUserDarkModePref(newBGColor, newTextColor);
}

function setDarkLightModeValues(newBGColor, newTextColor) {
  const root = document.querySelector(':root');
  const computed = getComputedStyle(root);

  root.style.setProperty('--default-font-color', newTextColor);
  root.style.setProperty(
    '--default-page-background-color',
    newBGColor
  );

  darkLabel.classList.toggle('on', newBGColor == `rgb(34, 34, 34)`);
  lightLabel.classList.toggle('on', newBGColor != `rgb(34, 34, 34)`);
}

function storeUserDarkModePref(bgColor, textColor) {
  if (window.localStorage) {
    window.localStorage.setItem(
      'darkModePreference',
      JSON.stringify({
        bgColor: bgColor,
        textColor: textColor,
      })
    );
  }
}

window.addEventListener('DOMContentLoaded', (e) => {
  if (window.localStorage) {
    if (window.localStorage.getItem('darkModePreference')) {
      let { bgColor, textColor } = JSON.parse(
        window.localStorage.getItem('darkModePreference')
      );
      setDarkLightModeValues(bgColor, textColor);
    }
  }
});

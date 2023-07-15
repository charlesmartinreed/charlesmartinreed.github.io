const infoBtns = document.querySelectorAll('.project__info__btn');
const infoPanes = document.querySelectorAll('.project__details');

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
        ? '-'
        : '?';
    }, 400);

    pane.classList.toggle('visible');
  })
);

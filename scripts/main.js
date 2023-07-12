const infoBtns = document.querySelectorAll('.project__info__btn');
const infoPanes = document.querySelectorAll('.project__details');

infoBtns.forEach((infoBtn) => infoBtn.addEventListener('click', (e) => {
    let index = e.target.getAttribute('data-index');
    let [pane] = Array.from(infoPanes).filter((infoPane, paneIdx) => paneIdx == index);

    pane.classList.toggle('visible')
    // console.log('index clicked', index);
    // console.log('coresponding pane', pane);
}))
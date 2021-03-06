//
const headerIcon = document.querySelector('.header__icon');
const headerMenu = document.querySelector('.header__menu');
const headerMenuOverlay = document.querySelector('.header__menu--overlay');
//

//
const bannerSearchInput = document.querySelector('.banner__search--input input');
const bannerSearchPopup = document.querySelector('.banner__search--popup');
//

//
const postEndHandle = document.querySelectorAll('.post__end--handle');
const postEndDoc = document.querySelector('.post__end--doc');
const postEndFeedback = document.querySelector('.post__end--feedback');
//

//
const viewMore = document.querySelector('.view__more');
const orderContainer = document.querySelector('.order__container');
//

if (bannerSearchInput && bannerSearchPopup) {
    bannerSearchInput.addEventListener('click', function () {
        if (bannerSearchPopup.classList.contains('active')) {
            bannerSearchPopup.classList.remove('active');
        }
        else {
            bannerSearchPopup.classList.add('active');
        }
    });
}

if (headerIcon) {
    headerIcon.addEventListener('click', () => {
        const clickOutSide = () => {
            headerMenu.classList.remove('active');
            headerMenuOverlay.classList.remove('active');
            headerMenuOverlay.removeEventListener('click', clickOutSide)
        }
        headerMenu.classList.add('active');
        headerMenuOverlay.classList.add('active');
        headerMenuOverlay.addEventListener('click', clickOutSide);
    });
}

if (postEndHandle && postEndDoc && postEndFeedback) {
    const postEndList = [postEndDoc, postEndFeedback];
    [...postEndHandle].forEach((el, index) => {
        el.addEventListener('click', () => {
            if (postEndList[index].classList.contains('active')) {
                postEndList[index].classList.remove('active')
            }
            else {
                postEndList[index].classList.add('active')
            }
        })
    })
}
//

if (viewMore && orderContainer) {
    viewMore.addEventListener('click', function () {
        if (!orderContainer.classList.contains('show')) {
            viewMore.innerHTML = '???n b???t';
            orderContainer.classList.add('show');
        }
        else {
            viewMore.innerHTML = 'Xem th??m';
            orderContainer.classList.remove('show');
        }
    });
}

//

const sideBarButton = document.querySelector('.admin__header--logo > span');
const sideBarMain = document.querySelector('.admin__sidebar');

if (sideBarButton && sideBarMain) {
    sideBarButton.addEventListener('click', function () {
        if (sideBarMain.classList.contains("active")) {
            sideBarMain.classList.remove('active');
        }
        else {
            sideBarMain.classList.add('active');
        }
    });
}

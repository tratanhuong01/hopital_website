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
//

bannerSearchInput.addEventListener('click', function () {
    if (bannerSearchPopup.classList.contains('active')) {
        bannerSearchPopup.classList.remove('active');
    }
    else {
        bannerSearchPopup.classList.add('active');
    }
});

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

const roleSlider = {
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }
    ]
}

$('.service__slider').slick(roleSlider)
$('.item__post').slick(roleSlider)
$('.item__guide').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }
    ]
})

//
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const socialBtnFb = document.querySelector('.social-btn__fb');
const socialBtnTw = document.querySelector('.social-btn__tw');
const socialBtnDs = document.querySelector('.social-btn__ds');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');


const guildInformationBtn = document.querySelector('.game__card-img--first');
const guildInformationBox = document.querySelector('.guild-information-box');

// console.log(guildInformationBtn);


const handleNav = () => {
    nav.classList.toggle('nav--active')

    navBtnBars.classList.remove('black-bars-color');

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

// const handleObserver = () => {
//     const currentSection = window.scrollY;

//     allSections.forEach(section => {

//         if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
//             socialBtn.classList.add('black-bars-color')
//         } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
//             socialBtn.classList.remove('black-bars-color')
//         }
//     })
// }


const handleObserver = () => {
    const currentSection = window.scrollY;
    const currentSectionfb = window.scrollY;
    const currentSectiontw = window.scrollY;
    const currentSectionds = window.scrollY;

    allSections.forEach(section => {

        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-color')
        }
        
        if (section.classList.contains('white-section') && section.offsetTop <= currentSectionfb + 60) {
            socialBtnFb.classList.add('black-social-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSectionfb + 60) {
            socialBtnFb.classList.remove('black-social-color')
        }
        if (section.classList.contains('white-section') && section.offsetTop <= currentSectiontw + 120) {
            socialBtnTw.classList.add('black-social-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSectiontw + 120) {
            socialBtnTw.classList.remove('black-social-color')
        }
        if (section.classList.contains('white-section') && section.offsetTop <= currentSectionds + 200) {
            socialBtnDs.classList.add('black-social-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSectionds + 200) {
            socialBtnDs.classList.remove('black-social-color')
        }
    })
}


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver)

// const handleGuild = () => {
//     guildInformationBox.classList.toggle('guild-information-box--clicked')
//     console.log(guildInformationBox);
// }

// guildInformationBtn.addEventListener('click', handleGuild);

//Function Show guild text
    
var piratesCard = document.querySelector('.game__card-img--first');
var dragonsCard = document.querySelector('.game__card-img--second');
var guildBox = document.querySelector('.guild-information-box');

piratesCard.addEventListener('click', function() {
  if (guildBox.classList.contains('activetext')) {
    guildBox.querySelector('.guild-information-box__dragons').style.opacity = 0;
    setTimeout(function() {
      guildBox.querySelector('.guild-information-box__pirates').style.opacity = 1;
    }, 1000);
  } else {
    piratesCard.classList.toggle('activetext');
    guildBox.classList.toggle('activetext');
    guildBox.querySelector('.guild-information-box__pirates').style.opacity = piratesCard.classList.contains('activetext') ? 1 : 0;
    guildBox.querySelector('.guild-information-box__dragons').style.opacity = 0;
  }
});

dragonsCard.addEventListener('click', function() {
  if (guildBox.classList.contains('activetext')) {
    guildBox.querySelector('.guild-information-box__pirates').style.opacity = 0;
    setTimeout(function() {
      guildBox.querySelector('.guild-information-box__dragons').style.opacity = 1;
    }, 1000);
  } else {
    dragonsCard.classList.toggle('activetext');
    guildBox.classList.toggle('activetext');
    guildBox.querySelector('.guild-information-box__dragons').style.opacity = dragonsCard.classList.contains('activetext') ? 1 : 0;
    guildBox.querySelector('.guild-information-box__pirates').style.opacity = 0;
  }
});
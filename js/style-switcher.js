/* ================= toggle style switcher ================== */
//
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
})

/* ====== hide style switcher toggler when one scrolls down =, the toggler is hidden ======== */
//
window.addEventListener('scroll', () => {
    if(document.querySelector('.style-switcher').classList.contains('open'))
    {
        document.querySelector('.style-switcher').classList.remove('open');
    }
})

/* ================= theme colors change ================== */
//
const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title'))
        {
            style.removeAttribute('disabled');
        }
        else
        {
            style.setAttribute('disabled', 'true');
        }
    })
}

/* ================= light and dark settings ================== */
// when the button is clicked, it toggles between dark and light themes
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');

})

window.addEventListener('load', () => {
    if(document.body.contains('dark'))
    {
        dayNight.querySelector('i').classList.add('fa-sun');
    }
    else{
        dayNight.querySelector('i').classList.add('fa-moon');
    }
})

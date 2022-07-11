const video = document.querySelector('video')
const next = document.querySelector('.continue')

document.querySelectorAll('.intro').forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('main').style.display = 'none';
        x = 0
        clearInterval(timer);
        timer = setTimeout(door, 1000);
    })
});

let x = 0;
let timer = setTimeout(door, 1000);
next.hidden = true

function door() {
    if (x == 5) {
        video.classList.add('standby');
        next.hidden = true
        clearInterval(timer);
    }
    if (x == 60) {
        document.querySelector('main').style.display = 'flex';
        clearInterval(timer);
    } else {
        x++;
        timer = setTimeout(door, 1000);
    }
}

window.addEventListener('mousemove', function() {
    video.classList.remove('standby');
    video.style.filter = "brightness(20%)";
    next.hidden = false
    clearInterval(timer);
    timer = setTimeout(door, 1000);
    x = 0;
})
timer
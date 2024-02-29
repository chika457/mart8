TweenLite.set("#petals", { perspective:600 })
TweenLite.set("img", { xPercent:"-50%", yPercent:"-50%" })

var total = 50;
var warp = document.getElementById("petals"),
w = window.innerWidth,
h = window.innerHeight;

for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    TweenLite.set(Div, { attr: { class:'dot' }, x:R(0,w), y:R(-200,-150), z:R(-200,200)});
    warp.appendChild(Div);
    animm(Div);
}

function animm(elm) {
    TweenMax.to(elm,R(6,15), { y:h+100, ease:Linear.easeNone, repeat:-1, delay:-15 });
    TweenMax.to(elm,R(4,8), { x:'+=100', rotationZ:R(0,180), repeat:-1, yoyo:true, ease:Sine.easeInOut });
    TweenMax.to(elm,R(2,8), { rotationX:R(0,360), rotationY:R(0,360), repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:-5 });
};

function R(min,max) { return min+Math.random() * (max-min) };


/* https://mattboldt.com/typed.js/ */
var typed = new Typed('#text', {
    strings: ['Дорогие учительницы! Приглашаем вас на наш открытый урок, посвященный Международному женскому дню 8 марта. Этот вечер будет наполнен вдохновением, теплом и праздничным настроением. Дата: 6 марта; Время: 10:00; Место проведения: 309-кабинет; Мы с группой подготовили особенные сюрпризы и творческие номера, чтобы подарить вам радость и внимание. Будем рады разделить этот вечер с вами, нашими любимыми учительницами, и подарить вам моменты радости и восхищения. Давайте вместе создадим неповторимую атмосферу и отметим этот прекрасный праздник вместе! С любовью и благодарностью, Группа ПИ-3-22!'],
    startDelay: 3000,
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function() {
        var author = document.getElementById("author");
        author.style.opacity = 1;
    }
});

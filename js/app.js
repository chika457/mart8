TweenLite.set("#petals", { perspective: 600 })
TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" })

var total = 50;
var warp = document.getElementById("petals"),
    w = window.innerWidth,
    h = window.innerHeight;

for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    TweenLite.set(Div, { attr: { class: 'dot' }, x: R(0, w), y: R(-200, -150), z: R(-200, 200) });
    warp.appendChild(Div);
    animm(Div);
}

function animm(elm) {
    TweenMax.to(elm, R(6, 15), { y: h + 100, ease: Linear.easeNone, repeat: -1, delay: -15 });
    TweenMax.to(elm, R(4, 8), { x: '+=100', rotationZ: R(0, 180), repeat: -1, yoyo: true, ease: Sine.easeInOut });
    TweenMax.to(elm, R(2, 8), { rotationX: R(0, 360), rotationY: R(0, 360), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5 });
};

function R(min, max) { return min + Math.random() * (max - min) };


/* https://mattboldt.com/typed.js/ */
var typed = new Typed('#text', {
    strings: ['Урматтуу мугалимдер! Сиздерди 8-март Аялдардын эл аралык күнүнө арналган ачык сабагыбызга чакырабыз. Бул кече шыктануу, жылуулук жана майрамдык маанай менен коштолот. Дата: 6-март; Убакыт: 12:00; Өтчү жери: бөлмө 309; Группабыз сиздерге кубаныч жана көңүл буруу үчүн атайын сюрприздерди жана чыгармачылык спектаклдерди даярдадык. Бул кечени сиздер менен, биздин сүйүктүү мугалимдерибиз менен бөлүшүүгө жана кубаныч жана суктануу учурларын тартуулоого кубанычтабыз. Келгиле, өзгөчө атмосфераны чогуу түзүп, бул сонун майрамды бирге белгилейли! Сүйүү жана ыраазычылык менен, ПИ-3-22 группасы!'],
    startDelay: 3000,
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function () {
        var author = document.getElementById("author");
        author.style.opacity = 1;
    }
});

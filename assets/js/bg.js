var body = document.querySelector('body');
var backgrounds = ['assets/img/bgs/bg1.webp','assets/img/bgs/bg2.webp','assets/img/bgs/bg3.webp','assets/img/bgs/bg4.webp','assets/img/bgs/bg5.webp','assets/img/bgs/bg6.webp','assets/img/bgs/bg7.webp','assets/img/bgs/bg8.webp','assets/img/bgs/bg10.webp','assets/img/bgs/bg11.webp','assets/img/bgs/bg12.webp','assets/img/bgs/bg13.webp','assets/img/bgs/bg14.webp','assets/img/bgs/bg15.webp',];
var getBG = function(max) {
    var result = Math.round(Math.random() * max);
    return backgrounds[result]
}
body.style.backgroundImage = `url('${getBG(backgrounds.length - 1)}')`;
taskBanner.style.backgroundImage = `url('${getBG(backgrounds.length - 1)}')`;
























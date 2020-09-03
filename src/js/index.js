import './jquery.js';
import './carousel.js';
import './dexe.js';
import './product.js';
// $(function() {
//     $('#mz-carousel').slider({
//         speed: 600, // 动画时间
//         delay: 1500 // 展示时间
//     });
// })

$(function () {
    $("#mz-carousel").carousel({
        carousel: ".c-swiper", //轮播图容器
        indexContainer: ".img-index", //下标容器

        timing: 8000, //自动播放间隔
        animateTime: 500, //动画时间
        autoPlay: true, //是否自动播放 true/false
        direction: "left", //滚动方向 right/left
    });
});
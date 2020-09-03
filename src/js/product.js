import './jquery.js';
import {
    cookie
} from './library/cookie.js';

(function () {
    let id = location.search.split('=')[1]; // 获取id

    $.ajax({
        type: "get",
        url: "../../interface/getitem.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function (res) {
            let picture = JSON.parse(res.picture);
            
            let template = `

            <section class="container">
            <div class="preview">
                <div class="pw-booth">
                    <a >
                        <img src="..${picture[1].src}" alt="">
                    </a>
                  
                </div>
                <ul class="pw-thumb clearfix">
                    <li>
                        <a >
                            <img src="..${picture[2].src}" alt="">
                        </a>
                    </li>
                    <li>
                       
                        <a >
                            <img src="..${picture[3].src}" alt="">
                        </a>
                    </li>
                    <li>
                       
                   
                    </li>
                </ul>
                <div class="pw-action">
                    <a href="">
                        <i class="iconfont icon-star"></i>
                        收藏
                    </a>
                </div>
            </div>
            <div class="property">
                <div class="py-hd">
                    <h1>${res.title}</h1>
                    <p>${res.tili}</p>
                </div>

                <div class="py-sell">
                    <div class="sell-price clearfix">
                        <div class="md-price">
                            <small>￥</small>
                            <span>${res.price}</span>
                        </div>
                    </div>
                    <dl class="sell-coupon clearfix">
                        <dt>
                            <span>优惠券</span>
                        </dt>
                        <dd>
                            <p>
                                <span>满99减40</span>
                            </p>
                            <a href="">更多 ></a>
                        </dd>
                    </dl>
                </div>

                <div class="py-service">
                    <dl class="se-item clearfix">
                        <dt>
                            支
                            <span></span>
                            <span></span>
                            持
                        </dt>
                        <dd>
                            <span>
                                <i class="iconfont icon-check"></i>
                                花呗分期
                            </span>
                            <span>
                                <i class="iconfont icon-check"></i>
                                顺丰发货
                            </span>
                            <span>
                                <i class="iconfont icon-check"></i>
                                7天无理由退货
                            </span>
                        </dd>
                    </dl>
                    <dl class="se-suda clearfix">
                        <dt>配送服务</dt>

                        
                        <dd class="site clearfix">
                            <div class="text">
                                浙江省 杭州市 
                                <i class="iconfont icon-xiala"></i>
                            </div>
                        </dd>
                    </dl>
                    <div class="se-provider clearfix">
                        <span></span>
                    本商品由 魅族 负责发货并提供售后服务
                        <a href="">
                            <i class="iconfont icon-kefu"></i>
                            <span>商城客服</span>
                        </a>
                    </div>

                </div>

                <div class="py-sibling">
                    <div class="sg-item">
                        <dt>
                            相关产品
                        </dt>
                        <dd class="clearfix">
                            <a >Pandaer 系列 果冻包</a>
                            <a >Pandaer 系列 果冻包</a>

                        </dd>
                    </div>
                </div>
                <div class="py-sibling">
                    <div class="sg-item">
                        <dt>
                            颜色分类
                        </dt>
                        <dd class="clearfix">
                            <a >
                                <img src="..${picture[2].src}" alt="">
                                <span>${res.title}</span>
                            </a>
                            

                        </dd>
                    </div>
                </div>

                <div class="py-hb clearfix">
                    <div class="atit">
                        
                花呗分期
                <a href="">
                    <i class="iconfont icon-wenhao"></i>
                </a>
                    </div>
                    <div class="bd">
                        <a href="">
                            <span>¥${(res.price/3).toFixed(2)}×3期</span>
                            <span>含手续费 ￥0.76/期</span>
                        </a>
                        <a href="">
                            <span>¥${(res.price/6).toFixed(2)}×6期</span>
                            <span>含手续费 ￥0.74/期</span>
                        </a>
                        <a href="">
                            <span>¥${(res.price/12).toFixed(2)}×12期</span>
                            <span>含手续费 ￥0.61/期</span>
                        </a>
                    </div>
                  
                </div>

                <div class="py-buy">
                    <dl class="buy-qy">
                        <dt>
                            数
                            <span></span>
                            <span></span>
                            量
                        </dt>
                        <dd class="">
                            <div class="trol">
                                <a class="throw">-</a>
                                <input value="1" type="text" max="${res.num}" id="num" disabled>
                                <a  class="plus">+</a>
                            </div>
                        </dd>
                    </dl>
                    <div class="buy-action">
                        <a href="./gwc.html">立即购买</a>
                        <a class="gwc">加入购物车</a>
                    </div>
                </div>
            </div>
          
        </section>
        <section class="row-dl">
            <div>
                <div class="detail-tab">
                    <div class="fed">
                        <ul class="clearfix">
                            <li>
                                <a href="" class="spxq">商品详情</a>
                            </li>
                            <li>
                                <a href="" class="ggcs">规格参数</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="inera">
                <div class="duce">
                    <img src="..${picture[4].src}" alt="">
                </div>
            </div>
        </section>
            `;
            // let template = `
            // <h1>${res.title}</h1>
            // <div class="p-picture">
            //     <img src="..${picture[1].src}">
            // </div>
            // <div class="p-price">
            //     <span class="yuan">￥</span>${res.price}
            // </div>
            // <div class="p-num">
            //     ${res.num}
            // </div>
            // <input type="number" value="1" min="1" max="${res.num}" id="num">
            // <input type="button" value="加入购物车" id="additem">
            // <div>
            // ${res.details}
            // </div>
            // `;
           



            $('.page-tetali').append(template).find('.gwc').on('click', function () {
                addItem(res.id, res.price, $('#num').val());
            });

            $('.plus').on('click', function () {
                $('#num').val(function () {
                    let value = parseInt($(this).val()) + 1;
                    if (value < 1) {
                        value = 1;
                    }
                    return value;
                })
            });
            $('.throw').on('click', function () {
                $('#num').val(function () {

                    let value = parseInt($(this).val()) - 1;
                    if (value < 1) {
                        value = 1;
                    }
                    return value;
                });
            });
        }
    });



    function addItem(id, price, num) {
        let shop = cookie.get('shop'); // 从cookie中获取shop数据

        let product = {
            id: id,
            price: price,
            num: num
        };

        if (shop) { // 判断是否存有购物车数据
            shop = JSON.parse(shop);
            // 购物车中是否已经存在当前这件商品
            if (shop.some(elm => elm.id == id)) {
                // 修改数量
                shop.forEach(elm => {
                    elm.id === id ? elm.num = num : null;
                });
            } else {
                // 添加商品
                shop.push(product);
            }

        } else {
            shop = [];
            shop.push(product);
        }

        cookie.set('shop', JSON.stringify(shop), 1);
    }
})();


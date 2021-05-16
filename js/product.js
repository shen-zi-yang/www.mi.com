import $ from './library/jquery.js';
import cookie from './library/cookie.js';

let id = location.search.split('=')[1];

$.ajax({
    type: "get",
    url: "../../interface/getItem.php",
    data: {
        id:id
    },
    dataType: "json",
    success: function (res) {
        console.log(res);

        let picture = JSON.parse(res.picture);

        let temp = `
        <div class="left">
        <div class="left-img">
            <img src="../${picture[0].src}" alt="">
        </div>
        </div>
        <div class="right">
        <h2>${res.title}</h2>
        <p class="p1">${res.details}</p>
        <p class="p2">小米自营</p>
        <div class="price">
            <p class="p3">${res.price}元<del></del></p>
        </div>
        <div class="xian"></div>
        <div class="address-box">
            <div class="produce-address">
                <div class="span">
                    <span class="iconfont icon-iconfront-"></span>
                </div>
                <div class="box">
                    <div class="address">
                        <span>北京</span>
                        <span>北京市</span>
                        <span>海淀区</span>
                        <span>清河街道</span>
                        <a href="#">修改</a>
                    </div>
                    <div class="produce">
                        <span>有现货</span>
                    </div>
                </div>

            </div>
        </div>
        <div class="color">
            <div class="text">
                <a href="#"><span>选择版本</span></a>
            </div>
            <div class="choise">
                <a href="#">
                    <div>8+128GB</div>
                </a>
                <a href="#">
                    <div>8+256GB</div>
                </a>
                <a href="#">
                    <div>12+256GB</div>
                </a>
            </div>
        </div>
        <div class="color">
            <div class="text">
                <span>选择颜色</span>
            </div>
            <div class="choise">
                <a href="#">
                    <div>白色</div>
                </a>
                <a href="#">
                    <div>黑色</div>
                </a>
                <a href="#">
                    <div>陶瓷定制版</div>
                </a>
            </div>
        </div>
        <div class="color">
            <div class="text">
                <span>选择套餐</span>
            </div>
            <div class="choise">
                <a href="#">
                    <div>标准版</div>
                </a>
                <a href="#">
                    <div>套餐版(含充电器)</div>
                </a>
                <a href="#">
                    <div>Air2 SE耳机套装(全款支付专享)</div>
                </a>
            </div>
        </div>
        <div class="list">
            <div class="top">
                <p>
                    小米11pro 8GB+512GB 黑色
                    <del class="sp2"></del>
                    <span class="sp1">${res.price}元</span>
                </p>
            </div>
            <div class="bottom">
                总计：${res.price}元
            </div>
        </div>
        <div class="btn">
                    <input type="button" value="加入购物车" id="additem">
                    <a href="#" class="a2" ><span class="iconfont icon-aixin"></span>喜欢</a>
                </div>
                <div class="after">
                    <ul>
                        <li>
                            <span class="iconfont icon-duihao"></span>
                            <span>小米自营</span>
                        </li>
                        <li>
                            <span class="iconfont icon-duihao"></span>
                            <span>小米发货</span>
                        </li>
                        <li>
                            <span class="iconfont icon-duihao"></span>
                            <span>7天无理由退货</span>
                        </li>
                        <li>
                            <span class="iconfont icon-duihao"></span>
                            <span>运费说明</span>
                        </li>
                        <li>
                            <span class="iconfont icon-duihao"></span>
                            <span>企业信息</span>
                        </li> 
                        <li>
                            <span class="iconfont icon-duihao"></span>
                            <span>售后服务政策</span>
                        </li>
                        <li>
                            <span class="iconfont icon-duihao"></span>
                            <span>7天价格保护</span>
                        </li>
                    </ul>
                </div>
            </div>`;
        $('.mi-detail').append(temp).find('#additem').on('click',function(){
            window.open('./mi-gouwuche.html')
            
            addItem(res.id,res.price);
        });
    }
});

function addItem(id,price){
    // console.log(id,price);
    let shop = cookie.get('mi-gouwuche');

    let product = {
        id,
        price
    }
    // console.log(product);
    if(shop){
        shop = JSON.parse(shop);
    
        if(shop.some(el => el.id === id)){
            let _index = shop.findIndex(elm => elm.id == id);
            let count = parseInt(shop[_index].num);
            count += parseInt(num);
            shop[_index].num = count;

        }else{
            shop.push(product);
        }

    }else{
        shop = [];
        shop.push(product);

    }
    cookie.set('mi-gouwuche',JSON.stringify(shop),1);
}
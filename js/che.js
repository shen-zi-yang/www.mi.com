import $ from './library/jquery.js';
import cookie from './library/cookie.js';

let shop = cookie.get('mi-gouwuche');
console.log(shop);
if(shop){
    shop = JSON.parse(shop);
    let idList = shop.map(el => el.id).join();
    $.ajax({
        type: "get",
        url: "../../interface/getItems.php",
        data: {idList:idList},
        dataType: "json",
        success: function (res) {
            console.log(res);
            let temp = '';

            res.forEach(elm =>{
                let picture = JSON.parse(elm.picture);

                let current = shop.filter(val =>val.id == elm.id);

                temp +=`<div class="item-box">
                            <div class="page-product">
                                <div class="list-1">
                                    <a href="#"><span class=" iconfont icon-duihao"></span></a>
                                </div>
                                <div class="list-2">
                                    <img src="../${picture[0].src}" alt="">
                                </div>
                                <div class="list-3">
                                    ${elm.title}
                                </div>
                                <div class="list-4">
                                    ${elm.price}元
                                </div>
                                <div class="list-5">
                                    <div class="btn">
                                        <a href="#">-</a>
                                        <input type="text" value="1">
                                        <a href="#">+</a>
                                    </div>
                                </div>
                                <div class="list-6">
                                    <p>${elm.price}元</p>
                                </div>
                                <div class="list-7">
                                    <a href="#">
                                        <i class="iconfont icon-cuo cuo"></i>
                                    </a>
                                </div>
                            </div>
                        </div>`;
            });
            $('.page-goods').append(temp).find('.del').on('click', function() {
                let res = shop.filter(el => el.id != $(this).attr('data-id'));
                cookie.set('shop', JSON.stringify(res), 1);
                location.reload();
            });
        }
    });
}
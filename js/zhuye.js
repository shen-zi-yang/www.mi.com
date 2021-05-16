import $ from './library/jquery.js';

$.ajax({
    type: "get",
    url: "../../interface/getData.php",
    dataType: "json",
    success: function(res) {
        // console.log(res) ;

        let temp='';

        res.forEach((elm,i)=>{
            let picture = JSON.parse(elm.picture);
            // console.log(picture);
            temp += `<li class="list-li">
            <a href="./mi-product.html?id=${elm.id}">
                <div class="nav-img"><img src="../${picture[0].src}" alt="">
                </div>
                <h3>${elm.title}</h3>
                <p class="p1">${elm.detail}</p>
                <p class="p2">${elm.price}元起</p>
            </a>
        </li>`;
        });
        // console.log(temp);
        $('.list').html(temp);
    }
});




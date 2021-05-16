window.onload = function() {
    let aLi = document.querySelectorAll('.ur1 li');
    let ur = document.querySelectorAll('.div4>div');
    for (let j = 0; j < aLi.length; j++) {
        aLi[j].onmouseover = function() {
            for (let i = 0; i < aLi.length; i++) {
                aLi[i].className = "";
                ur[i].className = "span3-2-2";
            }
            aLi[j].className = 'tab';
            ur[j].className += ' ur2';
        }
    }
}
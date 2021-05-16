window.onload = function() {
    function checkoutBtnClass() {
        let oneChoose = $.makeArray($('.nr1-3 .check1')).some(item => item.classList.contains('checkbox-on'));
        if (oneChoose) {
            $('.a9').removeClass('disabled-btn');
        } else {
            $('.a9').addClass('disabled-btn');
        }
    }

    let a = document.querySelectorAll('.nr1-3 div em');
    let sum = document.querySelector('.em1');
    let s = 0;
    for (let i = 0; i < a.length; i++) {
        s += parseInt(a[i].innerHTML);
        sum.innerHTML = s;
    }
    console.log(sum);
}
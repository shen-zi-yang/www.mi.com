(function($) {
    $.fn.extend({
        tabs: function(options) {
            let defaults = {
                ev: 'click',
                active: 'actived',
                content: 'display'
            };
            $.extend(defaults, options);
            let btns = this.children('ul').children('li');
            let divs = this.children('div');

            btns.on(defaults.ev, function() {
                let index = btns.index(this);
                $(this).addClass(defaults.active).siblings().removeClass(defaults.active);
                divs.eq(index).addClass(defaults.content).siblings().removeClass(defaults.content);
            });
        }
    });
})(jQuery);
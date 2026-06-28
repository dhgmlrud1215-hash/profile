$(function(){
        const $window = $(window);
        const $header = $(".page-header");
        const headerOffsetTop = $header.offset().top;

        $window.on('scroll',function(){
            if($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
            }else {
                $header.removeClass('sticky');
            }
        });

});

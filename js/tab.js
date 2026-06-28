$(function(){
    $(".tab").click(function(){

        const target = $(this).data("target");

        $(".tab").removeClass("active");
        $(this).addClass("active");

        $(".content").removeClass("active");
        $("#" + target).addClass("active");
    });
});
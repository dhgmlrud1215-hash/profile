$(function(){

    const $skill = $("#skill");

    function animateCircle($el){
        const percent = $el.data("percent");
        const $text = $el.find("strong");

        let current = 0;

        const interval = setInterval(function(){

            current++;

            $el.css({
                background: `conic-gradient(#8b7cf6 ${current}%, #e5e3ec ${current}%)`
            });

            $text.text(current + "%");

            if(current >= percent){
                clearInterval(interval);
            }

        }, 15);
    }

    function checkView(){

        const skillTop = $skill.offset().top;
        const skillBottom = skillTop + $skill.outerHeight();

        const scrollTop = $(window).scrollTop();
        const winHeight = $(window).height();

        const inView = scrollTop + winHeight > skillTop + 100 && scrollTop < skillBottom;

        if(inView){

            $(".skill-group").addClass("active");

            $(".circle").each(function(){
                const $this = $(this);

                // 중복 실행 방지
                if(!$this.data("played")){
                    animateCircle($this);
                    $this.data("played", true);
                }
            });

        } else {

            //화면 벗어나면 초기화 (다시 실행 가능)
            $(".circle").each(function(){
                const $this = $(this);

                $this.css({
                    background: `conic-gradient(#e5e3ec 0%, #e5e3ec 100%)`
                });

                $this.find("strong").text("0%");
                $this.data("played", false);
            });

        }
    }

    //스크롤 시 실행
    $(window).on("scroll", checkView);

    //첫 로딩 시도 실행
    checkView();

});
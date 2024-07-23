$(function(){

    $(".util_myca").hover(function(){
        $(".my").stop().slideDown();
    },function(){
        $(".my").stop().slideUp();
    })

    $(".gnb_p").hover(function(){
        $(".d_wrap").stop().animate({height : "400px", padding:"20px"}, "fast");
    }, function(){
        $(".d_wrap").stop().animate({height : "0px",  padding:"0px"}, "fast");
    })// ".gnb li:nth-child(1)").hover




    //메인비쥬얼 ul move에 슬릭 붙이기

    $(".move").slick({
        autoplay : true,
        autoplaySpeed : 2000,
        dots : true,
        arrows : false
    }) //slick

    $(".main_visual .stop").click(function(){
        if( $(this).hasClass("on")==true ){
            $(this).removeClass("on"); // on 클래스 지우면 stop 슬라이드가 멈춤
            $(".move").slick("slickPlay")

        }else{
            $(this).addClass("on"); //on일때 이미지가 play
            $(".move").slick("slickPause")
        }
    })

    //main1 photo slick
$(".photo").slick({
    autoplay : true,
    autoplaySpeed : 4000,
    dots : true,
    arrows : false
})

//main banner slick

$(".banner").slick({
    // autoplay : true,
    // autoplaySpeed : 4000,
    dots : true,
    arrows : false
})


$(".banner_wrap .b_play").click(function(){

    if($(this).hasClass("on") == true){
        $(this).removeClass("on");
        $(".banner").slick("slickPause")
    }else{
        $(this).addClass("on");
        $(".banner").slick("slickPlay")
    }

})//click


$(".viewer").slick({
    // autoplay : true,
    // autoplaySpeed : 4000,
    dots : true,
    arrows : false
})


$(".viewer_wrap .b_play").click(function(){

    if($(this).hasClass("on") == true){
        $(this).removeClass("on");
        $(".viewer").slick("slickPause")
    }else{
        $(this).addClass("on");
        $(".viewer").slick("slickPlay")
    }

})//click




}) //j
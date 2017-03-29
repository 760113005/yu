
$(function () {
//左边菜单
    $('.aside').hover(function () {
        $('#pup').removeClass('hiden')
    },
        function () {
            $('#pup').addClass('hiden');
            $('#aside').children().removeClass('white')
        });

//菜单对应显示
        $('#aside').children().on('mouseenter', function () {
                $(this).addClass('white')
                .siblings().removeClass('white');
                $('.section').eq($(this).index()).removeClass('hiden')
                .siblings().addClass('hiden')
            }
        );
//轮播图
    var banner=$('#banner').children();
    var banner_i=$('#banner_i');
    //按钮区
    banner.each(function () {
        $('<i>').appendTo('#banner_i')
    });
    var i_i=banner_i.find('i');//下按钮
    i_i.eq(0).addClass('red');
        i_i.on('mouseenter',function () {
            $(this).addClass('red')
                .siblings().removeClass('red');
            banner.eq($(this).index()).removeClass('hiden')
                .siblings().addClass('hiden');
        });
    //自动播放
    var timer_1;
    var num_1=0;
    function run_1(){
        timer_1=setInterval(function () {
            num_1++;
            if(num_1>banner.length-1){num_1=0;}
            banner_run();
        },2000)
    }
    run_1();
    //切图函数
    function banner_run(){
        banner.eq(num_1).removeClass('hiden').
        siblings().addClass('hiden');
        i_i.eq(num_1).addClass('red')
            .siblings().removeClass('red');
    }
    //左右翻
    var pre=$('#pre');
    var next=$('#next');
    pre.click(function () {
        num_1--;
        if(num_1<0){num_1=banner.length-1;}
        banner_run()
        }
    );
    next.click(function () {
        num_1++;
        if(num_1>banner.length-1){num_1=0;}
        banner_run();
        }
    );
    $('.banner').hover(
        function () {
            clearInterval(timer_1);
            pre.removeClass('hiden');
            next.removeClass('hiden');
        },
        function () {
            run_1();
            pre.addClass('hiden');
            next.addClass('hiden');
        }
    );
//右边新闻
    $('#l_news_t').children().mouseover(function () {
        $('#l_news_b').children().addClass('hiden')
            .eq($(this).index()).removeClass('hiden');
        $('#line').css({left:$(this).index()*40+'px'})
    });
//京东秒杀
    (function () {
        var num_2=5;
        var num_3=0;
        setInterval(function () {
            num_2--;
            if(num_2<0){
                if(num_3%2==0){
                    $('#jd_miao_i').children().eq(1).removeClass('hiden')
                        .siblings('ul').addClass('hiden');
                }else {
                    $('#jd_miao_i').children().eq(1).addClass('hiden')
                        .siblings('ul').removeClass('hiden');
                }
                num_2=5;
                num_3++;
            }
            $('.time_i').eq(2).text('0'+num_2)
        },1000)
    })();
//选项卡
$('.tit').find('li').on('mouseenter', function () {
    $(this).addClass('first').siblings().removeClass('first');
    var $right=$(this).parents('.title').next().find('.right');
        $right.eq($(this).index()).removeClass('hiden')
            .siblings('.right').addClass('hiden')
});
//楼层滚动
    var $_aside=$('#_aside');
        $(document).scroll(function () {
            if($(document).scrollTop()>$('.oneF').offset().top-10){
                $_aside.show();
            }else {
                $_aside.hide();
            }
            //侧边栏选项卡随滚动值变化
            $('.oneF').each(function (e) {
                if($(document).scrollTop()>$('.oneF').eq(e).offset().top-50){
                    $_aside.find('li').eq(e).addClass('red').siblings().removeClass('red')
                }
            })
    });
    //侧边栏点击事件
    $_aside.find('li').click(function () {
        $(this).finish()
        $('html body').animate( {
           scrollTop:$('.oneF').eq($(this).index()).offset().top
        },1000)
    })
});
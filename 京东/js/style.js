$(function () {
//切换城市
    $('#city').hover(function () {
        $('#citys').show();
        $('#citys').find('a').click(function () {
            $(this).addClass('red').parent().siblings().find('a').removeClass('red');
            $('#city_i_b').html($(this).html());
            $('#citys').hide();
        })
    }, function () {
        $('#citys').hide();
    });
    //搜索框
    $('.sear').on('focus', function () {
        $(this).attr('placeholder','');
    });
    $('.sear').on('blur', function () {
        $(this).attr('placeholder','烟灶套装');
    });
//顶部菜单
    var timer;
$('#cont').children().hover(function () {
    var $this=$(this);
    if($this.find('ul')){
        clearTimeout(timer);
        $this.find('ul').show()
    }
}, function () {
    var $this=$(this);
    timer=setTimeout(function () {
        $this.find('ul').hide()
    },10)
});
//二维码
    $('#td_ma').on('mouseover', function () {
        $('#td_i').show()
    })
    $('#td_i').on('mouseout', function () {
        $(this).hide()
    })
})

/**
 * Created by liujiabin on 2017/10/17.
 */
$(window).on('load', function () {
    var timer = null;
    var iii = 0;
    var $oli = $('#changeul>li');
    $oli.each(function (index,value) {
        $(value).on('mouseover', function () {
            clearInterval(timer);
            $oli.each(function (a, b) {
                $oli.eq(a).removeClass();
            })
                $(value).addClass('selection');
        })
        $(value).on('mouseout',function () {
            jj(index);
        })
    })
    function jj(iii) {
        timer = setInterval(function () {
            iii++;
            var $oli = $('#changeul>li');
            if (iii > $oli.length-1) {
                $oli.each(function (index, value) {
                    $oli.eq(index).removeClass();
                })
                iii = 0;
                $oli.eq(iii).addClass('selection');
            }
            else {
                $oli.each(function (index, value) {
                    $oli.eq(index).removeClass();
                })
                $oli.eq(iii).addClass('selection');
            }
            console.log(iii);
        }, 1000);
    }
    jj();
})
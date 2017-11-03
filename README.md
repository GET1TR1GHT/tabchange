 tabchange
==========
* tab切换
* 页面切换js，jq方法

### js,以json方式导入进去

```

$(window).on("load", function () {
    var dataInt = {
        'data': [{'contain': '个人重要信息要管牢'},
            {'contain': '个人重要信息要管牢'},
            {'contain': '个人重要信息要管牢'},
            {'contain': '个人重要信息要管牢'},],
        'data1': [{'contain': '卖家防范红包欺诈提醒'},
            {'contain': '卖家防范红包欺诈提醒'},
            {'contain': '卖家防范红包欺诈提醒'},
            {'contain': '卖家防范红包欺诈提醒'},],
        'data2': [{'contain': '注意骗子的技术生意了'},
            {'contain': '注意骗子的技术生意了'},
            {'contain': '注意骗子的技术生意了'},
            {'contain': '注意骗子的技术生意了'},],
        'data3': [{'contain': '更换收获地址的陷阱'},
            {'contain': '更换收获地址的陷阱'},
            {'contain': '更换收获地址的陷阱'},
            {'contain': '更换收获地址的陷阱'}]
    };
    var $oLi = $('#changeul>li');
    var timer=null;
    var flag=false;
    $.each(dataInt.data, function (gg, ii) {
            $('<li>').html($(ii).attr('contain')).appendTo('.tab-contain-ul');
    })
    $oLi.each(function (inde, valu) {
        $oLi.eq(inde).on('mouseover', function () {
            if(timer&&flag==true){
                clearTimeout(timer);
                timer=null;
                flag=false;
            }
            else{
                flag=true;
                timer=setTimeout(function change() {
                    $oLi.each(function (index, value) {
                        //遍历删除每个元素的class
                        $oLi.eq(index).removeClass();
                    });
                    //加入selection的class
                    $(valu).addClass('selection');

                    var $indexi=$(valu).index();
                    $('.tab-contain-ul').empty();
                    $.each(dataInt.data, function (ine, vae) {
                        if ($indexi==0) {
                            $('<li>').html($(vae).attr('contain')).appendTo('.tab-contain-ul');
                        }
                    })
                    $.each(dataInt.data1, function (ine, vae) {
                        if ($indexi==1) {
                            $('<li>').html($(vae).attr('contain')).appendTo('.tab-contain-ul');
                        }
                    })
                    $.each(dataInt.data2, function (ine, vae) {
                        if ($indexi==2) {
                            $('<li>').html($(vae).attr('contain')).appendTo('.tab-contain-ul');
                        }
                    })
                    $.each(dataInt.data3, function (ine, vae) {
                        if ($indexi==3) {
                            $('<li>').html($(vae).attr('contain')).appendTo('.tab-contain-ul');
                        }
                    })
                },500);

            }
        })
    })
})
```
### jq
```
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
```

![07F5487E-101A-456D-A769-94005A86CA51](07F5487E-101A-456D-A769-94005A86CA51.png)


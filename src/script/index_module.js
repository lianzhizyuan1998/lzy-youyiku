define([], function() {
    return {
        // 第一部分渲染为热销排行
        init: function() {
            let $tab1 = $('.tab1 .active-sceond')
            $.ajax({
                    url: "http://192.168.13.54/lzy-youyiku/php/index2.php",
                    dataType: 'json'
                })
                .done(function(data) {
                    let $renderdata = data;
                    let $strhtml = '';
                    $.each($renderdata, function(index, value) {
                        $strhtml += `           
                                    <li>
                                    <a href="./blank-jump-page.html" target="_blank">   
                                    <div class="aspan">
                                    <span><img src='${value.span}'></span>
                                    <span><img src='${value.span1}'></span>
                                    </div> 
                                    <img src="${value.url}">
                                    <div class="tab-color"></div>
                                    <p>${value.title1}<span>${value.type}</span>
                                    <p>${value.title}</p>
                                    <span>￥${value.price}</span>
                                    <div class="star"><i></i><i></i><i></i><i></i><i></i></div>
                                    </a>
                                    </li>
                                    `;
                    });
                    $tab1.html($strhtml);
                });
            let $tab2 = $('.tab1 .active-third')
            $.ajax({
                    url: "http://192.168.13.54/lzy-youyiku/php/index3.php",
                    dataType: 'json'
                })
                .done(function(data) {
                    let $renderdataa = data;
                    let $strhtmla = '';
                    $.each($renderdataa, function(index, value) {
                        $strhtmla += `           
                                    <li>
                                    <a href="./blank-jump-page.html" target="_blank">   
                                    <div class="aspan">
                                    <span><img src='${value.span}'></span>
                                    <span><img src='${value.span1}'></span>
                                    </div> 
                                    <img src="${value.url}">
                                    <div class="tab-color"></div>
                                    <p>${value.title1}<span>${value.type}</span>
                                    <p>${value.title}</p>
                                    <span>￥${value.price}</span>
                                    <div class="star"><i></i><i></i><i></i><i></i><i></i></div>
                                    </a>
                                    </li>
                                    `;
                    });
                    $tab2.html($strhtmla);
                });
            //第二部分渲染
            let $a1 = $('.xuanran')
            $.ajax({
                url: "http://192.168.13.54/lzy-youyiku/php/index1.php",
                dataType: 'json'
            }).done(function(data) {
                let $renderdata1 = data;
                let $strhtml1 = '';
                $.each($renderdata1, function(index, value) {
                    $strhtml1 += `
                    <div class="xuanran1">
                    <div class="xuanran1-title"><img src='${value.title}'></div>
                    <div><a href="./blank-jump-page.html" target="_blank"><img src='${value.content}'></a></div>
                    <div><a href="./blank-jump-page.html" target="_blank"><img src='${value.finally}'></a></div>
                    </div>
                    `
                });
                $a1.html($strhtml1);

            });
            //tab切换
            const $btns = $('.content-top ul li');
            const $divs = $('.content-list ul li');
            //按钮添加添加事件。
            $btns.on('click', function() {
                $(this).addClass('active-tab').siblings('li').removeClass('active-tab');
                $divs.eq($(this).index()).show().siblings('li').hide();
            });
            //top
            const $top = $('.topblock');
            $(window).on('scroll', function() {
                let $srcolla = $(window).scrollTop();
                if ($srcolla >= 400) {
                    $top.css('display', 'block');

                } else {
                    $top.css('display', 'none');
                }
            });
            $top.on('click', function() {
                var speed = 600;
                $('body,html').animate({ scrollTop: 0 }, speed);
            });
            //头部悬浮
            const $nav = $('.header ul')
            const $nav1 = $('.header ul .logof a')
            $(window).on('scroll', function() {
                let $topc = $(window).scrollTop(); //获取滚动条的top值。
                if ($topc >= 350) {
                    $nav.css('position', 'fixed');
                    $nav.css('background-color', 'white');
                    $nav.css('opacity', '0.9');
                    $nav.css('left', '312px')
                    $nav1.css('display', 'block')


                } else {
                    $nav.css('position', 'relative');
                    $nav.css('opacity', '1');
                    $nav.css('left', '0')
                    $nav1.css('display', 'none')
                }
            });
            // tab切换2
            const $btns2 = $('.tab .tabtop ul li');
            const $divs2 = $('.tab1 ul ');
            //按钮添加添加事件。
            $btns2.on('click', function() {
                $(this).addClass('active-first').siblings('li').removeClass('active-first');
                $divs2.eq($(this).index()).show().siblings('ul').hide();
            });
            //轮播图1
            var minNum = 0;
            var maxNum = 5;
            // 刚开始索引为0
            var index = 0;
            // 设置一个计时器为空
            var counter = null;
            var limWidth = 1170;
            // 设置自动轮播函数
            function autoMove() {
                if (counter != null) {
                    return;
                }
                counter = setInterval(autoPlay, 1000);
            }

            function autoPlay() {
                cliMove('right');
            }

            function cliMove(direction) {
                $('.img-list').stop(false, true);
                if (direction == "right") {
                    index++;
                    if (index > 5) {
                        $('.img-list').css({ left: '0' })
                        index = 1;
                    }
                } else if (direction == "left") {
                    index--;
                    if (index < 0) {
                        $('.img-list').css({
                            left: maxNum * -limWidth
                        })
                        index = 4;
                    }
                }
                $('.img-list').animate({
                    left: index * -limWidth
                });
            }
            $('.title').mouseenter(function() {
                clearInterval(counter);
                counter = null;
            }).mouseleave(function() {
                autoMove();
            })
            $('.right').click(function() {
                cliMove('right');
            })
            $('.left').click(function() {
                cliMove('left');
            })
            $('.item').click(function() {
                index = $(this).index();
                cliMove('');
            })

            function dotMove(dom) {
                $('.active').removeClass('active');
                dom.addClass('active');
            }

            autoMove();
        }
    }
});
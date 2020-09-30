define([], function() {
    return {

        init: function() {

            // 懒加载
            $(function() { //和拼接的元素放在一起。
                $("img.lazy").lazyload({
                    effect: "fadeIn" //图片显示方式
                });
            });

            // 第一部分渲染为热销排行women
            $(function() {
                let $tab1 = $('.tab1 .active-sceond')
                $.ajax({
                        url: "http://192.168.0.15/lzy-youyiku/php/index2.php",
                        dataType: 'json'
                    })
                    .done(function(data) {
                        let $renderdata = data;
                        let $strhtml = '';
                        $.each($renderdata, function(index, value) {
                            $strhtml += `           
                                    <li class='${value.classname}'>
                                    <a href="./blank-jump-page.html" target="_blank">
                                    <div class="aspan">
                                    <span><img src='${value.span}'></span>
                                    <span><img src='${value.span1}'></span>
                                    </div> 
                                    </a>
                                    <a href="./blank-jump-page.html" target="_blank">
                                    <section><img src="${value.url}"></section>
                                    </a>
                                    <div class="tab-color">
                                    <ul class='smallpica'>
                                    <li class="k1"><img src='${value.smallpic}'></li>
                                    <li class="k2"><img src='${value.smallpic1}'></li>
                                    <li class="k3"><img src='${value.smallpic2}'></li>
                                    <li class="k4"><img src='${value.smallpic3}'></li>
                                    <li class="k5"><img src='${value.smallpic4}'></li>
                                    </ul></div>
                                    <a href="./blank-jump-page.html" target="_blank">
                                    <p>${value.title1}
                                    <span>${value.type}</span>
                                    <p>${value.title}</p>
                                    <p class="startvalue">${value.startvalue}</p>
                                    <span style="color:red;">￥${value.price}</span>
                                    <div class="star">
                                    <i></i><i></i><i></i><i></i><i></i>
                                    <span>${value.hot}<span>
                                    </div>
                                    </a>
                                    </li>                                    
                                    `;
                        });
                        $tab1.html($strhtml);

                        //封装 tab切换里面的tab切换 第一个参数chang类名 后面参数为图片地址
                        function tabtab(z1, x1, c1, v1, b1, n1) {
                            const $btnswomen = $(z1).find('.smallpica li');
                            const $ka1 = $(z1).find('.k1')
                            const $ka2 = $(z1).find('.k2')
                            const $ka3 = $(z1).find('.k3')
                            const $ka4 = $(z1).find('.k4')
                            const $ka5 = $(z1).find('.k5')
                            const $imgbig = $(z1).find('section img');
                            $btnswomen.on('click', function() {
                                $(this).addClass('smallpicaq').siblings('li').removeClass('smallpicaq');
                            });
                            $ka1.on('click', function() {
                                $imgbig.attr('src', x1)
                            });
                            $ka2.on('click', function() {
                                $imgbig.attr('src', c1)
                            });
                            $ka3.on('click', function() {
                                $imgbig.attr('src', v1)
                            });
                            $ka4.on('click', function() {
                                $imgbig.attr('src', b1)
                            });
                            $ka5.on('click', function() {
                                $imgbig.attr('src', n1)
                            });
                            // 判断是否有值没有的话消失
                            if ($(z1).find('.smallpica .k5  img ').attr('src') == '') {
                                $(z1).find('.smallpica .k5  img ').closest('li').css('display', 'none');
                            }
                            if ($(z1).find('.smallpica .k4  img ').attr('src') == '') {
                                $(z1).find('.smallpica .k4  img ').closest('li').css('display', 'none');
                            }
                            if ($(z1).find('.smallpica .k3  img ').attr('src') == '') {
                                $(z1).find('.smallpica .k3  img ').closest('li').css('display', 'none');
                            }
                            if ($(z1).find('.smallpica .k2  img ').attr('src') == '') {
                                $(z1).find('.smallpica .k2  img ').closest('li').css('display', 'none');
                            }
                            if ($(z1).find('.smallpica .k2  img ').attr('src') == '') {
                                $(z1).find('.smallpica .k2  img ').closest('li').css('display', 'none');
                            }
                            if ($(z1).find('.smallpica .k1  img ').attr('src') == '') {
                                $(z1).find('.smallpica .k1  img ').closest('li').css('display', 'none');
                            }

                        };
                        tabtab('.changa', 'https://www.uniqlo.cn/hmall/test/u0000000017551/sku/561/COL01.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000017551/sku/561/COL03.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000017551/sku/561/COL09.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000017551/sku/561/COL16.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000017551/sku/561/COL31.jpg');
                        tabtab('.changb', 'https://www.uniqlo.cn/hmall/test/u0000000018002/sku/561/COL01.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018002/sku/561/COL03.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018002/sku/561/COL13.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018002/sku/561/COL45.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018002/sku/561/COL63.jpg');
                        tabtab('.changc', 'https://www.uniqlo.cn/hmall/test/u0000000019162/sku/561/COL07.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000019162/sku/561/COL30.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000019162/sku/561/COL31.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000019162/sku/561/COL69.jpg', )
                        tabtab('.changd', 'https://www.uniqlo.cn/hmall/test/u0000000018226/sku/561/COL10.jpg')
                        tabtab('.change', 'https://www.uniqlo.cn/hmall/test/u0000000009993/sku/561/COL01.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000009993/sku/561/COL08.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000009993/sku/561/COL09.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000009993/sku/561/COL69.jpg')
                    });
            })

            //第二部分渲染为热销排行men
            $(function() {
                let $tab2 = $('.tab1 .active-third')
                $.ajax({
                        url: "http://192.168.0.15/lzy-youyiku/php/index3.php",
                        dataType: 'json'
                    })
                    .done(function(data) {
                        let $renderdataa = data;
                        let $strhtmla = '';
                        $.each($renderdataa, function(index, value) {
                            $strhtmla += `           
                        <li class='${value.classname}'>
                        <a href="./blank-jump-page.html" target="_blank">
                        <div class="aspan">
                        <span><img src='${value.span}'></span>
                        <span><img src='${value.span1}'></span>
                        </div> 
                        </a>
                        <a href="./blank-jump-page.html" target="_blank">
                        <section><img src="${value.url}"></section>
                        </a>
                        <div class="tab-color">
                        <ul class='smallpica'>
                        <li class="k11"><img src='${value.smallpic}'></li>
                        <li class="k21"><img src='${value.smallpic1}'></li>
                        <li class="k31"><img src='${value.smallpic2}'></li>
                        <li class="k41"><img src='${value.smallpic3}'></li>
                        <li class="k51"><img src='${value.smallpic4}'></li>
                        </ul></div>
                        <a href="./blank-jump-page.html" target="_blank">
                        <p>${value.title1}
                        <span>${value.type}</span>
                        <p>${value.title}</p>
                        <p class="startvalue">${value.startvalue}</p>
                        <span style="color:red;">￥${value.price}</span>
                        <div class="star">
                        <i></i><i></i><i></i><i></i><i></i>
                        <span>${value.hot}<span>
                        </div>
                        </a>
                        </li>                     
                        `;
                        });
                        $tab2.html($strhtmla);
                        //封装 tab切换里面的tab切换 第一个参数chang类名 后面参数为图片地址
                        function tabtab1(z1, x1, c1, v1, b1, n1) {
                            const $btnswomen = $(z1).find('.smallpica li');
                            const $ka1 = $(z1).find('.k11')
                            const $ka2 = $(z1).find('.k21')
                            const $ka3 = $(z1).find('.k31')
                            const $ka4 = $(z1).find('.k41')
                            const $ka5 = $(z1).find('.k51')
                            const $imgbig = $(z1).find('section img');
                            $btnswomen.on('click', function() {
                                $(this).addClass('smallpicaq').siblings('li').removeClass('smallpicaq');
                            });
                            $ka1.on('click', function() {
                                $imgbig.attr('src', x1)
                            });
                            $ka2.on('click', function() {
                                $imgbig.attr('src', c1)
                            });
                            $ka3.on('click', function() {
                                $imgbig.attr('src', v1)
                            });
                            $ka4.on('click', function() {
                                $imgbig.attr('src', b1)
                            });
                            $ka5.on('click', function() {
                                $imgbig.attr('src', n1)
                            });
                            // 判断是否有值没有的话消失
                            if ($(z1).find('.smallpica .k51  img ').attr('src') == '') {
                                $(z1).find('.smallpica .k51  img ').closest('li').css('display', 'none');
                            }
                            if ($(z1).find('.smallpica .k41  img ').attr('src') == '') {
                                $(z1).find('.smallpica .k41  img ').closest('li').css('display', 'none');
                            }
                            if ($(z1).find('.smallpica .k31  img ').attr('src') == '') {
                                $(z1).find('.smallpica .k31  img ').closest('li').css('display', 'none');
                            }
                            if ($(z1).find('.smallpica .k21  img ').attr('src') == '') {
                                $(z1).find('.smallpica .k21  img ').closest('li').css('display', 'none');
                            }
                            if ($(z1).find('.smallpica .k11  img ').attr('src') == '') {
                                $(z1).find('.smallpica .k11  img ').closest('li').css('display', 'none');
                            }

                        };
                        tabtab1('.changf', 'https://www.uniqlo.cn/hmall/test/u0000000018081/sku/561/COL35.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018081/sku/561/COL47.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018081/sku/561/COL56.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018081/sku/561/COL69.jpg', '');
                        tabtab1('.changg', 'https://www.uniqlo.cn/hmall/test/u0000000017841/sku/561/COL01.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000017841/sku/561/COL03.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000017841/sku/561/COL08.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000017841/sku/561/COL09.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000017841/sku/561/COL19.jpg');
                        tabtab1('.changh', 'https://www.uniqlo.cn/hmall/test/u0000000018943/sku/561/COL03.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018943/sku/561/COL09.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018943/sku/561/COL67.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018943/sku/561/COL69.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018943/sku/561/COL02.jpg')
                        tabtab1('.changi', 'https://www.uniqlo.cn/hmall/test/u0000000018943/sku/561/COL03.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018943/sku/561/COL09.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018943/sku/561/COL67.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018943/sku/561/COL69.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018943/sku/561/COL02.jpg')
                        tabtab1('.changj', 'https://www.uniqlo.cn/hmall/test/u0000000018127/sku/561/COL00.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018127/sku/561/COL08.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018127/sku/561/COL09.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018127/sku/561/COL13.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018127/sku/561/COL32.jpg')

                    });
            });

            //第三部分渲染穿搭推荐-合作系列-ut部分-特辑部分
            let $a1 = $('.xuanran')
            $.ajax({
                url: "http://192.168.0.15/lzy-youyiku/php/index1.php",
                dataType: 'json'
            }).done(function(data) {
                let $renderdata1 = data;
                let $strhtml1 = '';
                $.each($renderdata1, function(index, value) {
                    $strhtml1 += `
                    <div class="xuanran1">
                    <div class="xuanran1-title"><img class='lazy' data-original='${value.title}'></div>
                    <div><a href="./blank-jump-page.html" target="_blank"><img class='lazy' data-original='${value.content}'></a></div>
                    <div><a href="./blank-jump-page.html" target="_blank"><img class='lazy' data-original='${value.finally}'></a></div>
                    </div>
                    `
                });
                $a1.html($strhtml1);
                //懒加载
                $(function() { //和拼接的元素放在一起。
                    $("img.lazy").lazyload({
                        effect: "fadeIn" //图片显示方式
                    });
                });
            });

            //tab切换 热门商品分类
            const $btns = $('.content-top ul li');
            const $divs = $('.content-list ul li');
            //按钮添加添加事件。
            $btns.on('click', function() {
                $(this).addClass('active-tab').siblings('li').removeClass('active-tab');
                $divs.eq($(this).index()).show().siblings('li').hide();
            });

            //top滑块效果 
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
                    $nav1.css('display', 'block')
                } else {
                    $nav.css('position', 'relative');
                    $nav.css('opacity', '1');
                    $nav1.css('display', 'none')
                }
            });

            // tab切换热销排行
            const $btns2 = $('.tab .tabtop ul li');
            const $divs2 = $('.tab1 ul ');
            //按钮添加添加事件。
            $btns2.on('click', function() {
                $(this).addClass('active-first').siblings('li').removeClass('active-first');
                $divs2.eq($(this).index()).show().siblings('ul').hide();
            });

            // 标题轮播图 不带圆点
            $(function() {
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
                    counter = setInterval(autoPlay, 2000);
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
                autoMove();

            })

            // 标题轮播图 带圆点
            $(function() {
                //轮播图2
                var minNum = 0;
                var maxNum = 5;
                // 刚开始索引为0
                var index = 0;
                // 设置一个计时器为空
                var counter = null;
                var limWidth = 1280;
                // 设置自动轮播函数
                function autoMove() {
                    if (counter != null) {
                        return;
                    }
                    counter = setInterval(autoPlay, 3000);
                }

                function autoPlay() {
                    cliMove('right');
                }

                function cliMove(direction) {
                    $('.img-list1').stop(false, true);
                    if (direction == "right") {
                        index++;
                        if (index > 5) {
                            $('.img-list1').css({ left: '0' })
                            index = 1;
                        }
                    } else if (direction == "left") {
                        index--;
                        if (index < 0) {
                            $('.img-list1').css({
                                left: maxNum * -limWidth
                            })
                            index = 4;
                        }
                    }
                    dotMove($('.item').eq(index > 4 ? 0 : index));
                    $('.img-list1').animate({
                        left: index * -limWidth
                    });
                }
                $('.bannar1').mouseenter(function() {
                    clearInterval(counter);
                    counter = null;
                }).mouseleave(function() {
                    autoMove();
                })
                $('.right1').click(function() {
                    cliMove('right');
                })
                $('.left1').click(function() {
                    cliMove('left');
                })
                $('.item').click(function() {
                    index = $(this).index();
                    cliMove('');
                })
                $('.right1').mouseenter(function() {
                    clearInterval(counter);
                    counter = null;
                }).mouseleave(function() {
                    autoMove();
                })
                $('.left1').mouseenter(function() {
                    clearInterval(counter);
                    counter = null;
                }).mouseleave(function() {
                    autoMove();
                })
                $('.dot-list').mouseenter(function() {
                    clearInterval(counter);
                    counter = null;
                }).mouseleave(function() {
                    autoMove();
                })

                function dotMove(dom) {
                    $('.active').removeClass('active');
                    dom.addClass('active');
                }
                autoMove();

            })




        }
    }
});
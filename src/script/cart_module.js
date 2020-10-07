define([], function() {
    return {

        init: function() {

            $(function() {
                $('.close-btn').on('click', function() {
                    $('.header-detail').css('display', 'none');
                    $('header').css('z-index', '1');
                    $('.zhezhao').css('display', 'none');
                    $('.aboutus').css('color', '#fff')
                })
                $(window).on('scroll', function() {
                    let $topca = $(window).scrollTop();
                    if ($topca > 0) {
                        $('.header-detail').css('display', 'none');
                        $('header').css('z-index', '1');
                        $('.zhezhao').css('display', 'none');
                        $('.aboutus').css('color', '#fff')
                    }
                })
                $('.aboutus').click(function() {
                    if ($('.header-detail').is(':hidden')) { //如果当前隐藏
                        $('.header-detail').show(); //那么就显示div
                        $('header').css('z-index', '2000');
                        $('header').css('background', 'white');
                        $('.aboutus').css('color', 'red');
                        $('#women').css('display', 'none');
                        $('.womena').css('color', 'black')
                        $('.zhezhao').show();
                    } else { //否则
                        $('.header-detail').hide(); //就隐藏div
                        $('header').css('z-index', '1');
                        $('.zhezhao').css('display', 'none');
                        $('.aboutus').css('color', '#fff');
                        $('.zhezhao').hide();
                    }
                });

            })

            //women
            $(function() {
                $('#women .close-btn').on('click', function() {
                    $('#women').css('display', 'none');
                    $('header').css('z-index', '1');
                    $('.zhezhao').css('display', 'none');
                    $('#women').css('color', '#fff')
                    $('.womena').css('color', 'black');
                })
                $(window).on('scroll', function() {
                    let $topca = $(window).scrollTop();
                    if ($topca > 0) {
                        $('#women').css('display', 'none');
                        $('header').css('z-index', '1');
                        $('.zhezhao').css('display', 'none');
                        $('#women').css('color', '#fff')
                    }
                })
                $('.womena').click(function() {
                    if ($('#women').is(':hidden')) { //如果当前隐藏
                        $('.header-detail').css('display', 'none');
                        $('#women').show(); //那么就显示div
                        $('header').css('z-index', '2000');
                        $('header').css('background', 'white');
                        $('.womena').css('color', 'red');
                        $('.aboutus').css('color', '#fff')
                        $('.zhezhao').show();
                    } else { //否则
                        $('#women').hide(); //就隐藏div
                        $('header').css('z-index', '1');
                        $('.zhezhao').css('display', 'none');
                        $('.womena').css('color', 'black');
                        $('.zhezhao').hide();
                    }
                });

            })


            var btnw = document.querySelector('.search');
            var boxw = document.querySelector('.search-bottom');
            btnw.onclick = function(ev) {
                var ev = ev || event;
                boxw.style.display = 'block';
                ev.stopPropagation();
            };

            document.onclick = function() {
                boxw.style.display = 'none';
            };



            //1.获取cookie渲染对应的商品列表
            //2.获取所有的接口数据，判断取值。
            function showlist(sid, num) { //sid：编号  num：数量
                $.ajax({
                    url: 'http://192.168.0.7/lzy-youyiku/php/alldata.php',
                    dataType: 'json'
                }).done(function(data) {
                    $.each(data, function(index, value) {
                        if (sid == value.sid) {
                            let $clonebox = $('.goods-item:hidden').clone(true, true); //克隆隐藏元素
                            $clonebox.find('.goods-pic').find('img').attr('src', value.url);
                            $clonebox.find('.goods-pic').find('img').attr('sid', value.sid);
                            $clonebox.find('.goods-d-info').find('a').html(value.title);
                            $clonebox.find('.b-price').find('strong').html(value.price);
                            $clonebox.find('.quantity-form').find('input').val(num);
                            //计算单个商品的价格
                            $clonebox.find('.b-sum').find('strong').html(((value.price * num).toFixed(2)));
                            $clonebox.css('display', 'block');
                            $('.item-list').append($clonebox);
                            calcprice(); //计算总价
                        }
                    });

                });
            }

            //2.获取cookie渲染数据
            if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                let s = $.cookie('cookiesid').split(','); //获取cookie 同时转换成数组[1,2]
                let n = $.cookie('cookienum').split(','); //获取cookie 同时转换成数组[10,20]
                $.each(s, function(index, value) {
                    showlist(s[index], n[index]);
                });
            }

            //3.计算总价--使用次数很多--函数封装
            function calcprice() {
                let $sum = 0; //商品的件数
                let $count = 0; //商品的总价
                $('.goods-item:visible').each(function(index, ele) {
                    if ($(ele).find('.cart-checkbox input').prop('checked')) { //复选框勾选
                        $sum += parseInt($(ele).find('.quantity-form input').val());
                        $count += parseFloat($(ele).find('.b-sum strong').html());
                    }
                });
                $('.amount-sum').find('em').html($sum);
                $('.totalprice').html('¥' + $count.toFixed(2));
            }

            //4.全选
            $('.allsel').on('change', function() {
                $('.goods-item:visible').find(':checkbox').prop('checked', $(this).prop('checked'));
                $('.allsel').prop('checked', $(this).prop('checked'));
                calcprice(); //计算总价
            });
            let $inputs = $('.goods-item:visible').find(':checkbox');
            $('.item-list').on('change', $inputs, function() {
                //$(this):被委托的元素，checkbox
                if ($('.goods-item:visible').find(':checkbox').length === $('.goods-item:visible').find('input:checked').size()) {
                    $('.allsel').prop('checked', true);
                } else {
                    $('.allsel').prop('checked', false);
                }
                calcprice(); //计算总价
            });

            //5.数量的改变
            $('.quantity-add').on('click', function() {
                let $num = $(this).parents('.goods-item').find('.quantity-form input').val();
                $num++;
                $(this).parents('.goods-item').find('.quantity-form input').val($num);

                $(this).parents('.goods-item').find('.b-sum strong').html(calcsingleprice($(this)));
                calcprice(); //计算总价
                setcookie($(this));
            });


            $('.quantity-down').on('click', function() {
                let $num = $(this).parents('.goods-item').find('.quantity-form input').val();
                $num--;
                if ($num < 1) {
                    $num = 1;
                }
                $(this).parents('.goods-item').find('.quantity-form input').val($num);
                $(this).parents('.goods-item').find('.b-sum strong').html(calcsingleprice($(this)));
                calcprice(); //计算总价
                setcookie($(this));
            });


            $('.quantity-form input').on('input', function() {
                let $reg = /^\d+$/g; //只能输入数字
                let $value = $(this).val();
                if (!$reg.test($value)) { //不是数字
                    $(this).val(1);
                }
                //计算单个商品的总价
                $(this).parents('.goods-item').find('.b-sum strong').html(calcsingleprice($(this)));
                calcprice(); //计算总价
                setcookie($(this));
            });

            //计算单价
            function calcsingleprice(obj) { //obj元素对象
                let $dj = parseFloat(obj.parents('.goods-item').find('.b-price strong').html());
                let $num = parseInt(obj.parents('.goods-item').find('.quantity-form input').val());
                return ($dj * $num).toFixed(2)
            }


            //将改变后的数量存放到cookie中
            let arrsid = []; //存储商品的编号。
            let arrnum = []; //存储商品的数量。
            function cookietoarray() {
                if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                    arrsid = $.cookie('cookiesid').split(','); //获取cookie 同时转换成数组。[1,2,3,4]
                    arrnum = $.cookie('cookienum').split(','); //获取cookie 同时转换成数组。[12,13,14,15]
                } else {
                    arrsid = [];
                    arrnum = [];
                }
            }

            function setcookie(obj) {
                cookietoarray();
                let $sid = obj.parents('.goods-item').find('img').attr('sid');
                arrnum[$.inArray($sid, arrsid)] = obj.parents('.goods-item').find('.quantity-form input').val();
                $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
            }


            //6.删除
            function delcookie(sid, arrsid) { //sid:当前删除的sid  arrsid:存放sid的数组[3,5,6,7]
                let $index = -1; //删除的索引位置
                $.each(arrsid, function(index, value) {
                    if (sid === value) {
                        $index = index;
                    }
                });
                arrsid.splice($index, 1);
                arrnum.splice($index, 1);

                $.cookie('cookiesid', arrsid, { expires: 10, path: '/' });
                $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
            }
            $('.b-action a').on('click', function() {
                cookietoarray();
                if (window.confirm('你确定要删除吗?')) {
                    $(this).parents('.goods-item').remove();
                    delcookie($(this).parents('.goods-item').find('img').attr('sid'), arrsid);
                    calcprice(); //计算总价
                }
            });

            $('.operation a').on('click', function() {
                cookietoarray();
                if (window.confirm('你确定要全部删除吗?')) {
                    $('.goods-item:visible').each(function() {
                        if ($(this).find(':checkbox').is(':checked')) { //判断复选框是否选中
                            $(this).remove();
                            delcookie($(this).find('img').attr('sid'), arrsid);
                        }
                    });
                    calcprice(); //计算总价
                }
            });




            //tab切换里面的函数
            //封装 tab切换里面的tab切换 第一个参数chang类名 后面参数为图片地址 q1-t1为类名
            function tabtab(z1, x1, c1, v1, b1, n1, q1, w1, e1, r1, t1) {
                const $btnswomen = $(z1).find('.smallpica li');
                const $ka1 = $(z1).find(q1)
                const $ka2 = $(z1).find(w1)
                const $ka3 = $(z1).find(e1)
                const $ka4 = $(z1).find(r1)
                const $ka5 = $(z1).find(t1)
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
                if ($(z1).find(q1).find('img').attr('src') == '') {
                    $(z1).find(q1).find('img').closest('li').css('display', 'none');
                }
                if ($(z1).find(w1).find('img').attr('src') == '') {
                    $(z1).find(w1).find('img').closest('li').css('display', 'none');
                }
                if ($(z1).find(e1).find('img').attr('src') == '') {
                    $(z1).find(e1).find('img').closest('li').css('display', 'none');
                }
                if ($(z1).find(r1).find('img').attr('src') == '') {
                    $(z1).find(r1).find('img').closest('li').css('display', 'none');
                }
                if ($(z1).find(t1).find('img').attr('src') == '') {
                    $(z1).find(t1).find('img').closest('li').css('display', 'none');
                }
            };
            // 第一部分渲染为热销排行women
            $(function() {
                    let $tab1 = $('.tab1 .active-sceond')
                    $.ajax({
                            url: "http://192.168.0.7/lzy-youyiku/php/index2.php",
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

                            tabtab('.changa', 'https://www.uniqlo.cn/hmall/test/u0000000017551/sku/561/COL01.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000017551/sku/561/COL03.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000017551/sku/561/COL09.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000017551/sku/561/COL16.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000017551/sku/561/COL31.jpg', '.k1', '.k2', '.k3', '.k4', '.k5');
                            tabtab('.changb', 'https://www.uniqlo.cn/hmall/test/u0000000018002/sku/561/COL01.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018002/sku/561/COL03.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018002/sku/561/COL13.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018002/sku/561/COL45.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000018002/sku/561/COL63.jpg', '.k1', '.k2', '.k3', '.k4', '.k5');
                            tabtab('.changc',
                                'https://www.uniqlo.cn/hmall/test/u0000000019162/sku/561/COL07.jpg',
                                'https://www.uniqlo.cn/hmall/test/u0000000019162/sku/561/COL30.jpg',
                                'https://www.uniqlo.cn/hmall/test/u0000000019162/sku/561/COL31.jpg',
                                'https://www.uniqlo.cn/hmall/test/u0000000019162/sku/561/COL69.jpg',
                                '', '.k1', '.k2', '.k3', '.k4', '.k5')
                            tabtab('.changd', 'https://www.uniqlo.cn/hmall/test/u0000000018226/sku/561/COL10.jpg',
                                '', '', '', '', '.k1', '.k2', '.k3', '.k4', '.k5')
                            tabtab('.change', 'https://www.uniqlo.cn/hmall/test/u0000000009993/sku/561/COL01.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000009993/sku/561/COL08.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000009993/sku/561/COL09.jpg', 'https://www.uniqlo.cn/hmall/test/u0000000009993/sku/561/COL69.jpg', '', '.k1', '.k2', '.k3', '.k4', '.k5')
                        });
                })
                //头部悬浮
            const $nav = $('.header ul')
            const $nav1 = $('.header ul .logof a')
            $(window).on('scroll', function() {
                let $topc = $(window).scrollTop(); //获取滚动条的top值。
                if ($topc > 0) {
                    $nav.css('position', 'fixed');
                    $nav.css('background-color', 'white');
                    $nav.css('opacity', '0.9');
                    $nav1.css('display', 'block')
                    $nav.css('z-index', '99')
                } else {
                    $nav.css('position', 'relative');
                    $nav.css('opacity', '1');
                    $nav1.css('display', 'none')
                }
            });





























        }
    }

});
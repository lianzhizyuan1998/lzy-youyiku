define(['pagination', 'jlazyload'], function() {
    return {
        // 第一部分渲染为热销排行
        init: function() {
            //关注我们
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


            //点击多选手风琴
            $('.choose-list button').on('click', function() {
                $(this).parent('.choose-list').css('height', '86px');
                $(this).parent('.choose-list').css('border', 'rgb(40, 120, 140) solid 2px');
                $(this).siblings('ul').children('li').children('.labela').css('display', 'inline-block')
                $(this).hide()
            })
            $('.button-defalt').on('click', function() {
                $(this).parent('div').parent('.choose-list').css('height', '37px');
                $(this).parent('div').parent('.choose-list').css('border', 'none')
                $(this).parent('div').parent('.choose-list').css('border-bottom', '1px solid #d8d8d8');
                $(this).parent('div').siblings('ul').children('li').children('.labela').css('display', 'none');
                $('.choose-list button').show()
            })
            $('.main-content-title-content2').click(function() {
                if ($('.choose-list').is(':hidden')) {
                    $('.choose-list').css('display', 'block');
                    $('.main-content-title-content2 img').attr('src', './img/图标.png');
                } else {
                    $('.choose-list').css('display', 'none');
                    $('.main-content-title-content2 img').attr('src', './img/+.png');
                }

            });


            $('.titlek i img').on('click', function() {
                if ($(this).parent('i').parent('li').siblings('li').is(':hidden')) {
                    $(this).parent('i').parent('li').siblings('li').show();
                    $(this).parent('i').parent('li').parent('ul').css('border-bottom', '1px solid #d9d9d9');
                    $(this).attr('src', './img/down-sporrow.png')
                } else {
                    $(this).parent('i').parent('li').siblings('li').hide();
                    $(this).parent('i').parent('li').parent('ul').css('border-bottom', 'none')
                    $(this).attr('src', './img/right-sarrow.png')
                }
            })



            //1.渲染列表页的数据-默认渲染第一页
            //排序的变量
            let array_default = []; //排序前的li数组，默认数组
            let array = []; //排序中的数组
            let prev = null; //前一个价格
            let next = null; //后一个价格
            const $list = $('.list');
            $.ajax({
                url: 'http://192.168.0.7/lzy-youyiku/php/listdata.php',
                dataType: 'json'
            }).done(function(data) {
                let $strhtml = '<ul>';
                $.each(data, function(index, value) {
                    $strhtml += `
                        <li>
                            <a href="detail.html?sid=${value.sid}" target="_blank">
                                <img class="lazy" data-original="${value.url}" />
                                <p>${value.sid}${value.title}</p>
                                <span class="price">￥${value.price}</span>
                                <span>${value.sailnumber}</span>
                            </a>
                        </li>
                    `;
                });
                $strhtml += '</ul>';
                $list.html($strhtml);

                //重置数组
                array_default = []; //排序前的li数组
                array = []; //排序中的数组
                prev = null;
                next = null;
                //将页面的li元素追加到两个数组中。
                $('.list li').each(function(index, element) {
                    array[index] = $(this);
                    array_default[index] = $(this);
                });

                //懒加载
                $(function() {
                    $("img.lazy").lazyload({ effect: "fadeIn" });
                });
            });

            //2.分页思路
            //告知后端当前请求的是第几页数据。将当前的页面页码传递给后端(get)
            $('.page').pagination({
                pageCount: 3, //总的页数 - 后端传入的。
                jump: true, //是否开启跳转到指定的页数，布尔值。
                coping: true, //是否开启首页和尾页，布尔值。
                prevContent: '上一页',
                nextContent: '下一页',
                homePage: '首页',
                endPage: '尾页',
                callback: function(api) {
                    console.log(api.getCurrent()); //获取的页码给后端
                    $.ajax({
                        url: 'http://192.168.0.7/lzy-youyiku/php/listdata.php',
                        data: {
                            page: api.getCurrent() //传输页面
                        },
                        dataType: 'json'
                    }).done(function(data) {
                        let $strhtml = '<ul>';
                        $.each(data, function(index, value) {
                            $strhtml += `
                                <li>
                                    <a href="detail.html?sid=${value.sid}" target="_blank">
                                        <img src="${value.url}"/>
                                        <p>${value.sid}${value.title}</p>
                                        <span class="price">￥${value.price}</span>
                                        <span>${value.sailnumber}</span>
                                    </a>
                                </li>
                            `;
                        });
                        $strhtml += '</ul>';
                        $list.html($strhtml);

                        //重置数组
                        array_default = []; //排序前的li数组
                        array = []; //排序中的数组
                        prev = null;
                        next = null;
                        //将页面的li元素追加到两个数组中。
                        $('.list li').each(function(index, element) {
                            array[index] = $(this);
                            array_default[index] = $(this);
                        });
                    });
                }
            });


            //3.排序
            //默认排序：如果已经排序了，恢复最初的排序。
            $('.main-right button').eq(0).on('click', function() {
                //array_default = [li,li,li,li......]
                $.each(array_default, function(index, value) {
                    $('.list ul').append(value);
                });
                return;
            });

            //升序
            $(' .main-right button').eq(1).on('click', function() {
                for (let i = 0; i < array.length - 1; i++) {
                    for (let j = 0; j < array.length - i - 1; j++) {
                        prev = parseFloat(array[j].find('.price').html().substring(1)); //获取上一个价格
                        next = parseFloat(array[j + 1].find('.price').html().substring(1)); //获取下一个价格
                        //通过价格的判断，改变的是li的位置。
                        if (prev > next) {
                            let temp = array[j];
                            array[j] = array[j + 1];
                            array[j + 1] = temp;
                        }
                    }
                }
                $.each(array, function(index, value) {
                    $('.list ul').append(value);
                });
            });

        }
    }
})
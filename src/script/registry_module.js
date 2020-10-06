define([], function() {
    return {
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
                    $('#women').css('color', '#fff');
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

            //搜索框
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

            //表达验证
            $('.yanzheng-content button').click(function(e) {
                e.preventDefault();
            });
            $('form button').click(function(e) {
                e.preventDefault();
            });
            $('#phone').on('blur', function() {
                if (this.value !== '') {
                    var reg = /^1[345789]\d{9}$/;
                    // 第一位1 第二位345789
                    if (reg.test(this.value)) {
                        $('.phone-error0').show()
                        $('.phone-error1').hide()
                        $('.phone-error').hide()
                        telflag = true;
                    } else {
                        $('.phone-error1').show()
                        $('.phone-error0').hide()
                        $('.phone-error').hide()
                        telflag = false;
                    }
                } else {
                    $('.phone-error').show()
                    $('.phone-error1').hide()
                    $('.phone-error0').hide()
                    telflag = false;

                }
                if (telflag == true) {
                    $('.yanzheng-content button').css('background-color', '#1b1b1b')
                    $('.yanzheng-content button').on('click', function() {
                        var Num = "";
                        for (var i = 0; i < 6; i++) {
                            Num += Math.floor(Math.random() * 10);
                        }
                        alert(Num)
                        $('.yanzheng-content input').focus();
                    })
                    $('.yanzheng-content input').on('blur', function() {
                        if (this.value !== '') {
                            var reg = /^\d{6}$/;
                            if (reg.test(this.value)) {
                                $('.yanzheng-error0').show()
                                $('.yanzheng-error1').hide()
                                $('.yanzheng-error').hide()
                                aflag = true;
                            } else {
                                $('.yanzheng-error1').show()
                                $('.yanzheng-error0').hide()
                                $('.yanzheng-error').hide()
                                aflag = false;
                            }
                        } else {
                            $('.yanzheng-error').show()
                            $('.yanzheng-error1').hide()
                            $('.yanzheng-error0').hide()
                            aflag = false;

                        }
                        if (aflag == true) {
                            $('form button').css('background-color', '#1b1b1b')
                            $('form button').unbind()
                        }
                    })

                }
            });
        }
    }

});
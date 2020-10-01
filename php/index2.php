<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');
$arr = array(
    array(
    'sid'=>'1',
    'url'=>'https://www.uniqlo.cn/hmall/test/u0000000017551/main/first/561/1.jpg',
    'price'=>'149.00',
    'title'=>'运动拉链连帽开衫(长袖 卫衣) 428322',
    'title1'=>'女装','type'=>'150/56A-175/90B',
    'span'=>'',
    'span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg','startvalue'=>'初上市价格：¥199.00',
    'hot'=>'(28)',
    'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000017551/chip/22/COL01.jpg',
    'smallpic1'=>'https://www.uniqlo.cn/hmall/test/u0000000017551/chip/22/COL03.jpg',
    'smallpic2'=>'https://www.uniqlo.cn/hmall/test/u0000000017551/chip/22/COL09.jpg',
    'smallpic3'=>'https://www.uniqlo.cn/hmall/test/u0000000017551/chip/22/COL16.jpg',
    'smallpic4'=>'https://www.uniqlo.cn/hmall/test/u0000000017551/chip/22/COL31.jpg',
    'classname'=>'changa',
    ),

    array(
    'sid'=>'2 ',
    'url'=>'https://www.uniqlo.cn/hmall/test/u0000000018002/main/first/561/1.jpg',
    'price'=>'99.00',
    'title'=>'法兰绒衬衫(长袖) 430591',
    'title1'=>'女装',
    'type'=>'XS-XXL',
    'span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg','span'=>'',
    'startvalue'=>'初上市价格：¥149.00',
    'hot'=>'(13)',
    'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000018002/chip/22/COL01.jpg',
    'smallpic1'=>'https://www.uniqlo.cn/hmall/test/u0000000018002/chip/22/COL03.jpg',
    'smallpic2'=>'https://www.uniqlo.cn/hmall/test/u0000000018002/chip/22/COL13.jpg',
    'smallpic3'=>'https://www.uniqlo.cn/hmall/test/u0000000018002/chip/22/COL45.jpg',
    'smallpic4'=>'https://www.uniqlo.cn/hmall/test/u0000000018002/chip/22/COL63.jpg',
    'classname'=>'changb',
    ),

    array(
    'sid'=>'3',
    'url'=>'https://www.uniqlo.cn/hmall/test/u0000000019162/main/first/561/1.jpg',
    'price'=>'499.00',
    'title'=>'双面呢茧形大衣 429473',
    'title1'=>'女装',
    'type'=>'XS-XXL',
    'span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg',
    'span'=>'',
    'startvalue'=>'初上市价格：¥599.00',
    'hot'=>'(3)',
    'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000019162/chip/22/COL07.jpg',
    'smallpic1'=>'https://www.uniqlo.cn/hmall/test/u0000000019162/chip/22/COL30.jpg',
    'smallpic2'=>'https://www.uniqlo.cn/hmall/test/u0000000019162/chip/22/COL31.jpg',
    'smallpic3'=>'https://www.uniqlo.cn/hmall/test/u0000000019162/chip/22/COL69.jpg',
    'smallpic4'=>'',
    'classname'=>'changc',
),

    array(
    'sid'=>'4',
    'url'=>'https://www.uniqlo.cn/hmall/test/u0000000018226/main/first/561/1.jpg',
    'price'=>'129.00',
    'title'=>'(UT) Furry Friends卫衣(长袖) 432392',
    'title1'=>'女装',
    'type'=>'XS-XXL',
    'span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg',
    'span'=>'',
    'startvalue'=>'初上市价格：¥129.00',
    'hot'=>'(3)',
    'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000018226/chip/22/COL10.jpg',
    'smallpic1'=>'',
    'smallpic2'=>'',
    'smallpic3'=>'',
    'smallpic4'=>'',
    'classname'=>'changd'
    ),

    array(
    'sid'=>'5',
    'url'=>'https://www.uniqlo.cn/hmall/test/u0000000009993/main/first/561/1.jpg',
    'price'=>'299.00',
    'title'=>'HEATTECH圆领T恤(长袖)(温暖内衣) 418325',
    'title1'=>'女装',
    'type'=>'XS-3XL',
    'span'=>'',
    'span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg',
    'startvalue'=>'初上市价格：¥79.00',
    'hot'=>'(22)',
    'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000009993/chip/22/COL01.jpg',
    'smallpic1'=>'https://www.uniqlo.cn/hmall/test/u0000000009993/chip/22/COL08.jpg',
    'smallpic2'=>'https://www.uniqlo.cn/hmall/test/u0000000009993/chip/22/COL09.jpg',
    'smallpic3'=>'https://www.uniqlo.cn/hmall/test/u0000000009993/chip/22/COL69.jpg',
    'smallpic4'=>'',
    'classname'=>'change'
    ),

);

echo json_encode($arr); //将数据转换成json格式输出。

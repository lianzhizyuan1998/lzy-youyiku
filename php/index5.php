<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');
$arr = array(
    array(
    'sid'=>'1',
    'url'=>'https://www.uniqlo.cn/hmall/test/u0000000020001/main/first/561/1.jpg',
    'price'=>'99.00',
    'title'=>'压线连体装(长袖)(爬服 哈衣) 428795',
    'title1'=>'婴儿/新生儿',
    'type'=>'50-80',
    'span'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg',
    'span1'=>'https://www.uniqlo.cn/cms/864fd0c6259233501dcab6d698637212.jpg',
    'hot'=>'(2)',
    'startvalue'=>'初上市价格：¥199.00',
    'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000020001/chip/22/COL43.jpg',
    'smallpic1'=>'https://www.uniqlo.cn/hmall/test/u0000000020001/chip/22/COL69.jpg',
    'smallpic2'=>'',
    'smallpic3'=>'',
    'smallpic4'=>'',
    'classname'=>'changp'
),
    array(
        'sid'=>'2 ',
        'url'=>'https://www.uniqlo.cn/hmall/test/u0000000019645/main/first/561/1.jpg',
        'price'=>'99.00',
        'title'=>'长绒摇粒绒拉链茄克(长袖) 428823',
        'title1'=>'婴儿/新生儿',
        'type'=>'80-100',
        'span1'=>'https://www.uniqlo.cn/cms/864fd0c6259233501dcab6d698637212.jpg',
        'span'=>'',
        'hot'=>'(13)',
        'startvalue'=>'初上市价格：¥199.00',
        'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000019645/chip/22/COL01.jpg',
        'smallpic1'=>'https://www.uniqlo.cn/hmall/test/u0000000019645/chip/22/COL11.jpg',
        'smallpic2'=>'https://www.uniqlo.cn/hmall/test/u0000000019645/chip/22/COL32.jpg',
        'smallpic3'=>'https://www.uniqlo.cn/hmall/test/u0000000019645/chip/22/COL69.jpg',
        'smallpic4'=>'https://www.uniqlo.cn/hmall/test/u0000000019645/chip/22/COL12.jpg',
        'classname'=>'changq'
    ),
    array(
    'sid'=>'3',
    'url'=>'https://www.uniqlo.cn/hmall/test/u0000000020161/main/first/561/1.jpg',
    'price'=>'249.00',
    'title'=>'羽绒拉链连帽外套 431908',
    'title1'=>'婴儿/新生儿',
    'type'=>'80-100',
    'span1'=>'https://www.uniqlo.cn/cms/864fd0c6259233501dcab6d698637212.jpg',
    'span'=>'',
    'hot'=>'(16)',
    'startvalue'=>'初上市价格：¥299.00',
    'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000020161/chip/22/COL16.jpg',
    'smallpic1'=>'https://www.uniqlo.cn/hmall/test/u0000000020161/chip/22/COL67.jpg',
    'smallpic2'=>'https://www.uniqlo.cn/hmall/test/u0000000020161/chip/22/COL69.jpg',
    'smallpic3'=>'https://www.uniqlo.cn/hmall/test/u0000000020161/chip/22/COL11.jpg',
    'smallpic4'=>'https://www.uniqlo.cn/hmall/test/u0000000020161/chip/22/COL45.jpg',
    'classname'=>'changr',
),
    array('sid'=>'4',
    'url'=>'https://www.uniqlo.cn/hmall/test/u0000000019017/main/first/561/1.jpg',
    'price'=>'149.00',
    'title'=>'弹力保暖裤 428822',
    'title1'=>'婴儿/新生儿',
    'type'=>'80-100',
    'span1'=>'',
    'span'=>'',
    'hot'=>'(10)',
    'startvalue'=>'初上市价格：¥199.00',
    'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000019017/chip/22/COL10.jpg',
    'smallpic1'=>'https://www.uniqlo.cn/hmall/test/u0000000019017/chip/22/COL47.jpg',
    'smallpic2'=>'https://www.uniqlo.cn/hmall/test/u0000000019017/chip/22/COL57.jpg',
    'smallpic3'=>'',
    'smallpic4'=>'',
    'classname'=>'changs',
),
    array(
    'sid'=>'5',
    'url'=>'https://www.uniqlo.cn/hmall/test/u0000000019797/main/first/561/1.jpg',
    'price'=>'79.00',
    'title'=>'(UT) Joy of Print 压线睡衣(长袖) 429874',
    'title1'=>'婴儿/新生儿',
    'type'=>'80-100',
    'span'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg',
    'span1'=>'https://www.uniqlo.cn/cms/864fd0c6259233501dcab6d698637212.jpg',
    'hot'=>'(5)',
    'startvalue'=>'初上市价格：¥99.00',
    'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000019797/chip/22/COL56.jpg',
    'smallpic1'=>'',
    'smallpic2'=>'',
    'smallpic3'=>'',
    'smallpic4'=>'',
    'classname'=>'changt',
)

);

echo json_encode($arr); //将数据转换成json格式输出。
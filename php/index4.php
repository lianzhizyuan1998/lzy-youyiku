<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');
$arr = array(
    array(
    'sid'=>'1',
    'url'=>'https://www.uniqlo.cn/hmall/test/u0000000020382/main/first/561/1.jpg',
    'price'=>'199.00',
    'title'=>'高级轻型羽绒背心 435703',
    'title1'=>'童装/男童/女童',
    'type'=>'110/56-160/76',
    'span'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg',
    'span1'=>'https://www.uniqlo.cn/cms/864fd0c6259233501dcab6d698637212.jpg',
    'hot'=>'(2)',
    'startvalue'=>'初上市价格：¥299.00',
    'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000020382/chip/22/COL17.jpg',
    'smallpic1'=>'https://www.uniqlo.cn/hmall/test/u0000000020382/chip/22/COL58.jpg',
    'smallpic2'=>'',
    'smallpic3'=>'',
    'smallpic4'=>'',
    'classname'=>'changk'
),
    array(
        'sid'=>'2 ',
        'url'=>'https://www.uniqlo.cn/hmall/test/u0000000020187/main/first/561/1.jpg',
        'price'=>'399.00',
        'title'=>'高级轻型羽绒连帽外套 431909',
        'title1'=>'童装/男童/女童',
        'type'=>'110/56-160/76',
        'span1'=>'https://www.uniqlo.cn/cms/864fd0c6259233501dcab6d698637212.jpg',
        'span'=>'',
        'hot'=>'(13)',
        'startvalue'=>'初上市价格：¥599.00',
        'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000020187/chip/22/COL31.jpg',
        'smallpic1'=>'https://www.uniqlo.cn/hmall/test/u0000000020187/chip/22/COL37.jpg',
        'smallpic2'=>'https://www.uniqlo.cn/hmall/test/u0000000020187/chip/22/COL47.jpg',
        'smallpic3'=>'',
        'smallpic4'=>'',
        'classname'=>'changl'
    ),
    array(
    'sid'=>'3',
    'url'=>'https://www.uniqlo.cn/hmall/test/u0000000019176/main/first/561/1.jpg',
    'price'=>'149.00',
    'title'=>'长绒摇粒绒拉链茄克(长袖) 428225',
    'title1'=>'童装',
    'type'=>'110/56-160/76',
    'span1'=>'',
    'span'=>'',
    'hot'=>'(16)',
    'startvalue'=>'初上市价格：¥199.00',
    'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000019176/chip/22/COL01.jpg',
    'smallpic1'=>'https://www.uniqlo.cn/hmall/test/u0000000019176/chip/22/COL09.jpg',
    'smallpic2'=>'https://www.uniqlo.cn/hmall/test/u0000000019176/chip/22/COL11.jpg',
    'smallpic3'=>'https://www.uniqlo.cn/hmall/test/u0000000019176/chip/22/COL31.jpg',
    'smallpic4'=>'https://www.uniqlo.cn/hmall/test/u0000000019176/chip/22/COL38.jpg',
    'classname'=>'changm',
),
    array('sid'=>'4',
    'url'=>'https://www.uniqlo.cn/hmall/test/u0000000019589/main/first/561/1.jpg',
    'price'=>'99.00',
    'title'=>'长绒摇粒绒套头衫(长袖) 428987',
    'title1'=>'童装',
    'type'=>'110/56-160/76',
    'span1'=>'https://www.uniqlo.cn/cms/864fd0c6259233501dcab6d698637212.jpg',
    'span'=>'',
    'hot'=>'(10)',
    'startvalue'=>'初上市价格：¥129.00',
    'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000019589/chip/22/COL27.jpg',
    'smallpic1'=>'https://www.uniqlo.cn/hmall/test/u0000000019589/chip/22/COL30.jpg',
    'smallpic2'=>'https://www.uniqlo.cn/hmall/test/u0000000019589/chip/22/COL58.jpg',
    'smallpic3'=>'https://www.uniqlo.cn/hmall/test/u0000000019589/chip/22/COL69.jpg',
    'smallpic4'=>'',
    'classname'=>'changn',
),
    array(
    'sid'=>'5',
    'url'=>'https://www.uniqlo.cn/hmall/test/u0000000019659/main/first/561/1.jpg',
    'price'=>'149.00',
    'title'=>'Warm Cotton Stretch 保暖棉质套装 家居服 睡衣 内衣 432311',
    'title1'=>'童装',
    'type'=>'110/60-160/80',
    'span'=>'https://www.uniqlo.cn/cms/ee953823d4c1d280caa600e63a00fdf0.jpg',
    'span1'=>'https://www.uniqlo.cn/cms/864fd0c6259233501dcab6d698637212.jpg',
    'hot'=>'(5)',
    'startvalue'=>'初上市价格：¥149.00',
    'smallpic'=>'https://www.uniqlo.cn/hmall/test/u0000000019659/chip/22/COL10.jpg',
    'smallpic1'=>'https://www.uniqlo.cn/hmall/test/u0000000019659/chip/22/COL61.jpg',
    'smallpic2'=>'https://www.uniqlo.cn/hmall/test/u0000000019659/chip/22/COL02.jpg',
    'smallpic3'=>'https://www.uniqlo.cn/hmall/test/u0000000019659/chip/22/COL30.jpg',
    'smallpic4'=>'',
    'classname'=>'chango',
)

);

echo json_encode($arr); //将数据转换成json格式输出。

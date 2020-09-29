<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');
$arr = array(
    array('sid'=>'1','url'=>'https://www.uniqlo.cn/hmall/test/u0000000017551/main/first/561/1.jpg','price'=>'149.00','title'=>'运动拉链连帽开衫(长袖 卫衣) 428322','title1'=>'女装','type'=>'150/56A-175/90B',
    'span'=>'',
    'span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg','startvalue'=>'初上市价格：¥199.00','hot'=>'(28)'),
    array('sid'=>'2 ','url'=>'https://www.uniqlo.cn/hmall/test/u0000000018002/main/first/561/1.jpg','price'=>'99.00','title'=>'法兰绒衬衫(长袖) 430591','title1'=>'女装','type'=>'XS-XXL','span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg','span'=>'',
    'startvalue'=>'初上市价格：¥149.00','hot'=>'(13)'),
    array('sid'=>'3','url'=>'https://www.uniqlo.cn/hmall/test/u0000000019162/main/first/561/1.jpg','price'=>'499.00','title'=>'双面呢茧形大衣 429473','title1'=>'女装','type'=>'XS-XXL','span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg','span'=>'',
    'startvalue'=>'初上市价格：¥599.00','hot'=>'(3)'),
    array('sid'=>'4','url'=>'https://www.uniqlo.cn/hmall/test/u0000000018226/main/first/561/1.jpg','price'=>'129.00','title'=>'(UT) Furry Friends卫衣(长袖) 432392','title1'=>'女装','type'=>'XS-XXL','span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg','span'=>'',
    'startvalue'=>'初上市价格：¥129.00','hot'=>'(3)'),
    array('sid'=>'5','url'=>'https://www.uniqlo.cn/hmall/test/u0000000009993/main/first/561/1.jpg','price'=>'299.00','title'=>'HEATTECH圆领T恤(长袖)(温暖内衣) 418325','title1'=>'女装','type'=>'XS-3XL','span'=>'',
    'span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg'
,'startvalue'=>'初上市价格：¥79.00','hot'=>'(22)'),

);

echo json_encode($arr); //将数据转换成json格式输出。

//http://localhost/lzy/9.8%20_php+mysql/4.api.php   接口地址
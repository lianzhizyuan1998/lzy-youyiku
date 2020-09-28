<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');
$arr = array(
    array('sid'=>'1','url'=>'https://www.uniqlo.cn/hmall/test/u0000000018081/main/first/561/1.jpg','price'=>'399.00','title'=>'登山外套 426503','title1'=>'男装','type'=>'XS-4XL',
    'span'=>'',
    'span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg'),
    array('sid'=>'2 ','url'=>'https://www.uniqlo.cn/hmall/test/u0000000017841/main/first/561/1.jpg','price'=>'99.00','title'=>'法兰绒衬衫(长袖) 428968','title1'=>'男装','type'=>'XS-4XL','span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg','span'=>'',),
    array('sid'=>'3','url'=>'https://www.uniqlo.cn/hmall/test/u0000000017694/main/first/561/1.jpg','price'=>'129.00','title'=>'连帽运动衫(长袖)(卫衣) 429160','title1'=>'男装','type'=>'XS-4XL','span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg','span'=>'',),
    array('sid'=>'4','url'=>'https://www.uniqlo.cn/hmall/test/u0000000018943/main/first/561/1.jpg','price'=>'129.00','title'=>'运动长裤 429162','title1'=>'男装','type'=>'XS-4XL','span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg','span'=>'',),
    array('sid'=>'5','url'=>'https://www.uniqlo.cn/hmall/test/u0000000018127/main/first/561/1.jpg','price'=>'99.00','title'=>'AIRism圆领T恤(长袖) 433839','title1'=>'男装','type'=>'XS-4XL','span'=>'',
    'span1'=>'https://www.uniqlo.cn/cms/c483b385090992775021ea8ec5de9d6a.jpg'
),

);

echo json_encode($arr); //将数据转换成json格式输出。

//http://localhost/lzy/9.8%20_php+mysql/4.api.php   接口地址
<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');
$arr = array(
    array(
    'sid'=>'1',
    'title'=>'https://www.uniqlo.cn/public/image/L1/2020/title/cdtj.jpg',
    'content'=>'https://www.uniqlo.cn/public/image/L1/2020/September/0928/stylingbook_1280.jpg',
    'finally'=>''
),
    array(
    'sid'=>'2',
    'title'=>'https://www.uniqlo.cn/public/image/L1/2020/title/hzxl.jpg',
    'content'=>'https://www.uniqlo.cn/public/image/L1/2020/September/0928/cooperation_A_1280.jpg',
    'finally'=>'https://www.uniqlo.cn/public/image/L1/2020/September/0928/cooperation_B_1280.jpg'
),
    array(
    'sid'=>'3',
    'title'=>'https://www.uniqlo.cn/public/image/L1/2020/title/utxl.jpg',
    'content'=>'https://www.uniqlo.cn/public/image/L1/2020/September/0928/ut_A_1280.jpg',
    'finally'=>'https://www.uniqlo.cn/public/image/L1/2020/September/0928/ut_B_1280.jpg'
    ),
    array(
    'sid'=>'4',
    'title'=>'https://www.uniqlo.cn/public/image/L1/2020/title/tjyl.jpg',
    'content'=>'https://www.uniqlo.cn/public/image/L1/2020/September/0928/features_A_1280.jpg',
    'finally'=>'https://www.uniqlo.cn/public/image/L1/2020/September/0928/features_B_1280.jpg'
),


);

echo json_encode($arr); //将数据转换成json格式输出。
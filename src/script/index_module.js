define([], function() {
    return {
        init: function() {
            let $tab1 = $('.tab1 ul')
            $.ajax({
                    url: "http://192.168.13.54/lzy-youyiku/php/index2.php",
                    dataType: 'json'
                })
                .done(function(data) {
                    let $renderdata = data;
                    let $strhtml = '';
                    $.each($renderdata, function(index, value) {
                        $strhtml += `           
                                    <li>
                                    <a href="./blank-jump-page.html" target="_blank">   
                                    <div class="aspan">
                                    <span><img src='${value.span}'></span>
                                    <span><img src='${value.span1}'></span>
                                    </div> 
                                    <img src="${value.url}">
                                    <div class="tab-color"></div>
                                    <p>${value.title1}<span>${value.type}</span>
                                    <p>${value.title}</p>
                                    <span>￥${value.price}</span>
                                    <div class="star"><i></i><i></i><i></i><i></i><i></i></div>
                                    </a>
                                    </li>
                                    `;
                    });
                    $tab1.html($strhtml);
                });
            let $a1 = $('.xuanran')
            $.ajax({
                url: "http://192.168.13.54/lzy-youyiku/php/index1.php",
                dataType: 'json'
            }).done(function(data) {
                let $renderdata1 = data;
                let $strhtml1 = '';
                $.each($renderdata1, function(index, value) {
                    $strhtml1 += `
                    <div class="xuanran1>
                    <div class="xuanran1-title>
                    <img src='${value.title}'>
                    </div>
                    <div><img src='${value.content}'></div>
                    <div><img src='${value.finally}'></div>
                    </div>
                    `
                });
                $a1.html($strhtml1);

            })
        }
    }
});
$(document).ready(function(){
    var url =window.location.href;
    var collection_name=url.substring(url.indexOf('=')+1, url.length);
    
        
    //将查询到的数据插入到页面中去
    function InsertData(data){
            var result={data};
            //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
            var myTemplate = Handlebars.compile($("#book-handlebars").html());
            
            //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
            $('#book-list').html(myTemplate(result));
    };
    
    
    $('#pagination-files').twbsPagination({
        totalPages: 100,	// 总页数
        startPage: 1,				// 起始页
        visiblePages: 5,		// 显示页数
        prev: '&lt',
        next: '&gt',
        first: '首页',
        last: '末页',
        onPageClick: function (event, page) {
            queryData(page);
        }
    })
    
    
    function queryData(page){
        var data={"collection_name":collection_name,page:page};
        $.ajax({
            url:'/detail',
            type:'post',
            data:data,
            success:function(data,status){
                if(status=='success'){
                    InsertData(data)
                }
            },
            error:function(data,err){
                alert('failed')
            }
        })
    }
    
    
});



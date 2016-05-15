


// $('td').click(function(){
//     var collection_name=$(this).attr('class');
//     var data={"collection_name":collection_name};
//     $.ajax({
//             url:'/home',
//             type:'post',
//             data:data,
//             success:function(data,status){
//                 if(status=='success'){
//                     db_data=data;
//                     window.location.assign("/detail")
//                     InsertData()
                    
//                 }
//             },
//             error:function(data,err){
//                 alert('failed')
//             }
//         })
// });






// $(document).ready(function() {
//         //模拟的json对象
//         var data = {
//                     "student": [
//                         {
//                             "name": "张三",
//                             "sex": "0",
//                             "age": 18
//                         },
//                         {
//                             "name": "李四",
//                             "sex": "0",
//                             "age": 22
//                         },
//                         {
//                             "name": "妞妞",
//                             "sex": "1",
//                             "age": 18
//                         }
//                     ]
//                 };
        
//         //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
//         //$("#table-template").html()是jquery的语法，不懂的童鞋请恶补。。。
//         var myTemplate = Handlebars.compile($("#table-template").html());
//         alert(1)
//         //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
//         $('#tableList').html(myTemplate(data));
//  });
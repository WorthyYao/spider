// $(document).ready(function(){
  
// });
$('td').click(function(){
    //alert($(this).attr('class'));
    var collection_name=$(this).attr('class');
    alert(collection_name)
    var data={"collection_name":collection_name,"pageNum":1};
    $.ajax({
            url:'/home',
            type:'post',
            data:data,
            success:function(data,status){
                if(status=='success'){
                    alert(data[1].name)
                }
            },
            error:function(data,err){
                alert('failed')
            }
        })
});
$(document).ready(function(){
$.ajax({
        url: "http://localhost:3000/field",
        type: "get",
        success:function(result){
            // console.log(result[0].title)
            $.each(result,function(i,data){
                $(".lapangan-list").append(`
                <div class="col-md-4 cust_blogteaser" style="padding-bottom:20px;margin-bottom:32px;"><a href="#"><img
                class="img-fluid" src=`+data.facilities+` style="height:auto;"></a>
                    <h3 style="text-align:left;margin-top:20px;font-family:'Open Sans', sans-serif;font-size:18px;margin-right:0;margin-left:24px;line-height:34px;letter-spacing:0px;font-style:normal;font-weight:bold;">
                    
                    `+data.title+`<br></h3>
                    <p class="text-secondary" style="text-align:left;font-size:14px;font-family:'Open Sans', sans-serif;line-height:22px;color:rgb(9,9,10);margin-left:24px;">Aenean
                        tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu
                        gravida. Aliquam varius finibus est, interdum justo suscipit id. </p><a href="#" class="h4"><i
                        class="fa fa-arrow-circle-right" style="margin-left:23px;"></i></a>
                </div>
                `)
            })
        }
})
})
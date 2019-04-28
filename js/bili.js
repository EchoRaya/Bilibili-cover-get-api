window.onload = function(){  
            var btn = document.getElementById("submit");  
            btn.onclick =function(){  
                var avno=document.getElementById("input-av").value;
				var reg=/^(av)?(AV)?\d{1,9}$/;
				if(reg.test(avno)){
					var iframe= document.getElementById("showPic");
					//iframe.src="http://i2.hdslb.com/bfs/archive/191ee87533014f16aa3f32964858c6fb89e9d5de.png";
					var url="https://search.bilibili.com/all?keyword="+avno+"&from_source=banner_search&spm_id_from=333.334.b_62616e6e65725f6c696e6b.1";
					 $.ajax({
							url:url,
							type:"GET",
							dataType:"html",
							async:false,
							success:function(result){
								console.log(result);
								//正则表达式获取body块
								var reg = /[\s\S]*<\/body>/g;
								var html = reg.exec(result)[0];
								//然后用filter来筛选对应块对象，如：class='aa'
								var aa = $(html).filter(".lazy-img");
								var aahtml = aa.html();
								console.log(aahtml);
								//获取内容后可以插入当前html中。。。
							}
						});
					iframe.style.display="block";
				}else{
					alert("please input the right key");
					window.location.reload();
				}
            }  
        }


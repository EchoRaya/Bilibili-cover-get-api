window.onload = function(){  
            var btn = document.getElementById("submit");  
            btn.onclick =function(){  
                var avno=document.getElementById("input-av").value;
				var reg=/^(av)?(AV)?\d{1,9}$/;
				if(reg.test(avno)){
					var iframe= document.getElementById("showPic");
					var url="https://bird.ioliu.cn/v1?url=https://search.bilibili.com/all?keyword="+avno+"&from_source=banner_search&spm_id_from=333.334.b_62616e6e65725f6c696e6b.1";
					 $.ajax({
						  url:url,
						  type:'GET',                                
						  dataType:'jsonp',                            
						  success:function(result){
								var reg = /[\s\S]*<\/body>/g;
								var html = reg.exec(result)[0];
								var reg2=/\"pic\"\:\"[a-zA-Z0-9\\\.]+\"\,/;
								var key=reg2.exec(html)[0];
								var key1=key.substring(7,key.length-2);
								keystr = eval("'" + key1 + "'");
								keystr = unescape(keystr.replace(/\u/g, "%u"));
								iframe.src="http://"+keystr+"";
							    iframe.style.display="block";
						  },
						  error:function(msg){
							  alert(msg);                 
						  }
					 });	
				}else{
					alert("please input the right key");
					window.location.reload();
				}
            }  
        }



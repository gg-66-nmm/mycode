$(function(){
	$(window).scroll(function(){
			var sc=$(window).scrollTop();
			//console.log(sc);
			if(sc>800){
				$(".gohome").css("display","block");	
			}else if(sc<=800){
				$(".gohome").css("display","none");
			}
		})
		$(".home").click(function(){
			$(window).scrollTop(0);
		})
		var date=new Date();
		var hour=date.getHours();
		var da='';
		if(hour<11){
			da="早上";
		}else if(hour>=11&&hour<13){
			da="中午";
		}else if(hour>=13&&hour<19){
			da="下午";
		}else{
			da="晚上";
		}
		$(".period .data").text(da+"好，请");
		
	$(".car").click(function(){
		window.location.href="car.html";
	})
		
	$(".logo").click(function(){
		document.location.href="index1.html";
	})
})

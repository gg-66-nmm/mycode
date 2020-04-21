window.onload=function(){
					var list=document.getElementById("list");
					function animate(offset){
						var newList=parseInt(list.style.left)+offset;
						if(newList<-800){
							list.style.left='0'+'px';
						}else{
							list.style.left=newList+'px';
						}
					}
					var timer;
					function play(){
						timer=setInterval(function(){
							/*next.onclick()*/
							animate(-400);
						},3000)
						
					}
					play();
				}
$(function(){
		$.ajax({
					type: "get",
					url: "http://127.0.0.1/w/website/findGoodsList",
					async: true,
					data:{
						"platId":"d0a500ecf8ab41aa9ffe8e18ac6419e1",
						"info":"男装"
					},
					success: function(res) {
						var obj =res.data.tbk_dg_material_optional_response.result_list.map_data;
						//console.log(obj.length);
						for(var j = 0; j < 8; j++) {
							$(".produce_list1").append(
								`
								<div class="produce_list_item">
									<img src="${obj[j].pict_url}" />
									<a href="xiangqing.html?name=男装"><div class="produce_list_item_title">${obj[j].category_name}</div></a>
								</div>
								`
							)
							//console.log(str1)
						}	
					}
		})
		$.ajax({
					type: "get",
					url: "http://127.0.0.1/w/website/findGoodsList",
					async: true,
					data:{
						"platId":"d0a500ecf8ab41aa9ffe8e18ac6419e1",
						"info":"女装",
						"pageNo":1
					},
					success: function(res) {
						var obj =res.data.tbk_dg_material_optional_response.result_list.map_data;
						//console.log(obj.length);
						for(var j = 0; j < 8; j++) {
							$(".produce_list2").append(
								`
								<div class="produce_list_item">
									<img src="${obj[j].pict_url}" />
									<a href="xiangqing.html?name=女装"><div class="produce_list_item_title">${obj[j].category_name}</div></a>
								</div>
								`
							)
							//console.log(str2)
						}	
					}
			})
		$.ajax({
					type: "get",
					url: "http://127.0.0.1/w/website/findGoodsList",
					async: true,
					data:{
						"platId":"d0a500ecf8ab41aa9ffe8e18ac6419e1",
						"info":"电器",
						"pageNo":1
					},
					success: function(res) {
						var obj =res.data.tbk_dg_material_optional_response.result_list.map_data;
						//console.log(obj.length);
						for(var j = 0; j < 8; j++) {
							$(".produce_list3").append(
								`
								<div class="produce_list_item">
									<img src="${obj[j].pict_url}" />
									<a href="xiangqing.html?name=电器"><div class="produce_list_item_title">${obj[j].category_name}</div></a>
								</div>
								`
							)
							//console.log(str3)
						}	
					}
			})
		$.ajax({
					type: "get",
					url: "http://127.0.0.1/w/website/findGoodsList",
					async: true,
					data:{
						"platId":"d0a500ecf8ab41aa9ffe8e18ac6419e1",
						"info":"家纺",
						"pageNo":1
					},
					success: function(res) {
						var obj =res.data.tbk_dg_material_optional_response.result_list.map_data;
						//console.log(obj.length);
						for(var j = 0; j < 8; j++) {
							$(".produce_list4").append(
								`
								<div class="produce_list_item">
									<img src="${obj[j].pict_url}" />
									<a href="xiangqing.html?name=家纺"><div class="produce_list_item_title">${obj[j].nick}</div></a>
								</div>
								`
							)
							//console.log(str4)
						}	
					}
			})
		
	/*$(".nav_left ul li").mouseenter(function(){
		$(".nav_content").css("display","block");
		
		var list=$(".nav_left ul li").eq($(this).index()).text();*/
		//console.log(list)
		$(".nav_left ul li").mouseenter(function(){
			$(".nav_content").css("display","block");
			var list=$(".nav_left ul li").eq($(this).index()).text();
			//console.log(list);
			$.ajax({
					type: "get",
					url: "http://127.0.0.1/w/website/findGoodsList",
					async: true,
					data:{
						"platId":"d0a500ecf8ab41aa9ffe8e18ac6419e1",
						"info":list,
						"pageNo":1
					},
					success: function(res) {
						
						var obj =res.data.tbk_dg_material_optional_response.result_list.map_data;
						//console.log(obj)
						for(var j = 0; j < obj.length; j++) {
								if(obj[j].category_name!=''||obj[j].category_name!=null||obj[j].category_name!=undefined){
									$(".nav_content").append(
										`<a href="index.html?item_id=${obj[j].item_id}" class="nav_content_title">${obj[j].category_name}</div>`
									);
								}
							}	
						}
				})
		})
	$(".nav_content").mouseenter(function(){
		$(this).css("display","block")
	})
	
		$(".nav_left ul li").mouseleave(function(){
			$(".nav_content").css("display","none")
			//$(".nav_content_title").remove()
			$(".nav_content").mouseleave(function(){
				$(this).css("display","none")
				$(".nav_content_title").remove()
			})
	})
		
		
		$.ajax({
		type: "get",
		url: "http://127.0.0.1/w/website/findGoodsList",
		async: true,
		data:{
			"platId":"d0a500ecf8ab41aa9ffe8e18ac6419e1",
			"info":9.9
		},
		success: function(res) {
			var sj = res.data;
			console.log(sj);
		}
	})
})
/*$(function() {
		$.ajax({
		type: "get",
		url: "http://127.0.0.1/w/website/findGoodsTypeList",
		async: true,
		success: function(res) {
			var sj = res.data;
			console.log(sj);
			for(var i = 0; i < sj.length; i++) {
					$(".content .content_right_produce .produce_pic").append(
						`<div class="content_right_produce_title">${sj[i].name}</div>
						<li class="produce">
							<div class="produce_lis">
								<img src="${sj[i].icon}">
								<a href="xiangqing.html?name=${sj[i].name}">
									点击详情<span class="glyphicon glyphicon-forward"></span>
								</a>
							</div>
							<div class="produce_list row"></div>
						</li>`
					)	
				//produce(sj[i].name);
			}
		}
	});*/
	/*function produce(goodsname){
		$.ajax({
					type: "get",
					url: "http://127.0.0.1/w/website/findGoodsList",
					async: true,
					data:{
						"platId":"d0a500ecf8ab41aa9ffe8e18ac6419e1",
						"info":goodsname,
						"pageNo":1
					},
					success: function(res) {
						var obj = res.data.tbk_dg_material_optional_response.result_list.map_data;
						console.log(obj.length);
						for(var j = 0; j < 2; j++) {
							$(".produce .produce_list").append(
								`
								<div class="produce_list_item col-lg-3">
									<img src="${obj[j].pict_url}" />
								</div>
								`
							)
						}	
					}
				})
	}
})*/
<!DOCTYPE >
<html>
	<head>
		<title>Hello vue</title>
	</head>
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	<body>
		<div id="app">
			{{message}}
		</div>
		<script type="text/javascript">
			var app=new vue({
				el:"#app",
				data:{
					message:"生活不易，且行且珍惜！",
				}
			})
		</script>
	</body>
</html>
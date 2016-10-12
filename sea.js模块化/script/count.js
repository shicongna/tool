define(function(require,exports,module){

	var sort = require("sort");

	var arr = ["zhangsan","lilei","hanmeimei"];

	function mycount(){
		var result = sort.mysort(arr);
		for(var i in result){
			console.log(result[i]);
		}
	}
	module.exports = {
		mycount:mycount
	}
});
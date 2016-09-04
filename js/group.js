$(function(){
	$(".item-select").on("click touchstart",".line-item",function(){
		$(this).addClass("active").siblings().removeClass("active");
		return false;
		})

	$(".multi-select .line-item").on("click touchstart", function(){
		$(this).toggleClass("active");
		return false;
		})
})
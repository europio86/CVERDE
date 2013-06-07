var i = 1;
var init = function (){
	if(i==$("#selec_pen li a").size()){
		i=0;
	}
	$("#selec_pen li a").eq(i).click();
	}
	new init();
	var int=self.setInterval(function(){new init()},3000);
	$("#selec_pen li a").on({
	click:function(event){
		$("#selec_pen li a").removeClass("seleccion");
		$(this).addClass("seleccion");
		$("#pen li").hide();
		var activeKey = $(this).attr("href");
		$(activeKey).fadeIn();
		if(typeof event.originalEvent !== 'undefined'){
			i = $(this).parent().index()+1;
			window.clearInterval(int);
		}else{
			i++;
		}
		return false;
	},
	mouseenter:function(){
		window.clearInterval(int);
	},mouseleave:function(){
		int = self.setInterval(function(){new init()},3000);
	}
});

jQuery('.ganadores').fancybox({
	'padding'		:	0,
	'type'			:	'iframe',
	'width'			: 	487,
	'height'		: 	542,
	'scrolling'		:	'no',
	'overlayColor'	:	'#FFF',
	'titleShow'		:	false,
	'autoScale'		:	false,
	'autoDimension'	:	false
});

jQuery('.infografia').fancybox({
	'padding'		:	0,
	'type'			:	'iframe',
	'width'			: 	551,
	'height'		: 	542,
	'scrolling'		:	'no',
	'overlayColor'	:	'#FFF',
	'autoScale'		:	false,
	'autoDimension'	:	false
});
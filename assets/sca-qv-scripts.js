!function()
	{
	function isMoblieBrowser()
		{
		var a=!1;
		try
			{
			!function(b)
				{
				(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(a=!0)
			}
			(navigator.userAgent||navigator.vendor||window.opera)
		}
		catch(a)
			{
			console.log(a)
		}
		return a
	}
	function floatToString(a,b)
		{
		var c=a.toFixed(b).toString();
		return c.match(/^\.\d+/)?"0"+c:c
	}
	function attributeToString(a)
		{
		return"string"!=typeof a&&(a+="","undefined"===a&&(a="")),jQuery.trim(a)
	}
	function loadProductFromCart(a)
		{
		a.ajax(
			{
			dataType:"json",url:"/cart.js",success:function(b)
				{
				var c=[];
				a.each(b.items,function(a,b)
					{
					c.push(b.id)
				}
				),list_cart_variants=c
			}
		}
		)
	}
	function scaqvImageZoom(a,b,c,d)
		{
		"function"!=typeof Object.create&&(Object.create=function(a)
			{
			function b()
				{
			}
			return b.prototype=a,new b
		}
		),function(a,b,c,d)
			{
			var e=
				{
				init:function(b,c)
					{
					var d=this;
					d.elem=c,d.$elem=a(c),d.imageSrc=d.$elem.data("zoom-image")?d.$elem.data("zoom-image"):d.$elem.attr("src"),d.options=a.extend(
						{
					}
					,a.fn.elevateZoom.options,b),d.options.tint&&(d.options.lensColour="none",d.options.lensOpacity="1"),"inner"==d.options.zoomType&&(d.options.showLens=!1),d.$elem.parent().removeAttr("title").removeAttr("alt"),d.zoomImage=d.imageSrc,d.refresh(1),a("#"+d.options.gallery+" a").click(function(b)
						{
						return d.options.galleryActiveClass&&(a("#"+d.options.gallery+" a").removeClass(d.options.galleryActiveClass),a(this).addClass(d.options.galleryActiveClass)),b.preventDefault(),a(this).data("zoom-image")?d.zoomImagePre=a(this).data("zoom-image"):d.zoomImagePre=a(this).data("image"),d.swaptheimage(a(this).data("image"),d.zoomImagePre),!1
					}
					)
				}
				,refresh:function(a)
					{
					var b=this;
					setTimeout(function()
						{
						b.fetch(b.imageSrc)
					}
					,a||b.options.refresh)
				}
				,fetch:function(a)
					{
					var b=this,c=new Image;
					c.onload=function()
						{
						b.largeWidth=c.width,b.largeHeight=c.height,b.startZoom(),b.currentImage=b.imageSrc,b.options.onZoomedImageLoaded(b.$elem)
					}
					,c.src=a
				}
				,startZoom:function()
					{
					var b=this;
					if(b.nzWidth=b.$elem.width(),b.nzHeight=b.$elem.height(),b.isWindowActive=!1,b.isLensActive=!1,b.isTintActive=!1,b.overWindow=!1,b.options.imageCrossfade&&(b.zoomWrap=b.$elem.wrap('<div style="height:'+b.nzHeight+"px;width:"+b.nzWidth+'px;" class="zoomWrapper" />')),b.zoomLock=1,b.scrollingLock=!1,b.changeBgSize=!1,b.currentZoomLevel=b.options.zoomLevel,b.nzOffset=b.$elem.offset(),b.widthRatio=b.largeWidth/b.currentZoomLevel/b.nzWidth,b.heightRatio=b.largeHeight/b.currentZoomLevel/b.nzHeight,"window"==b.options.zoomType&&(b.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;text-align:center;background-color: "+String(b.options.zoomWindowBgColour)+";width: "+String(b.options.zoomWindowWidth)+"px;height: "+String(b.options.zoomWindowHeight)+"px;float: left;background-size: "+b.largeWidth/b.currentZoomLevel+"px "+b.largeHeight/b.currentZoomLevel+"px;display: none;z-index:100;border: "+String(b.options.borderSize)+"px solid "+b.options.borderColour+";background-repeat: no-repeat;position: absolute;"),"inner"==b.options.zoomType){
						var c=b.$elem.css("border-left-width");
						b.zoomWindowStyle="overflow: hidden;margin-left: "+String(c)+";margin-top: "+String(c)+";background-position: 0px 0px;width: "+String(b.nzWidth)+"px;height: "+String(b.nzHeight)+"px;float: left;display: none;cursor:"+b.options.cursor+";px solid "+b.options.borderColour+";background-repeat: no-repeat;position: absolute;"
					}
					"window"==b.options.zoomType&&(b.nzHeight<b.options.zoomWindowWidth/b.widthRatio?lensHeight=b.nzHeight:lensHeight=String(b.options.zoomWindowHeight/b.heightRatio),b.largeWidth<b.options.zoomWindowWidth?lensWidth=b.nzWidth:lensWidth=b.options.zoomWindowWidth/b.widthRatio,b.lensStyle="background-position: 0px 0px;width: "+String(b.options.zoomWindowWidth/b.widthRatio)+"px;height: "+String(b.options.zoomWindowHeight/b.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:"+b.options.lensOpacity+";filter: alpha(opacity = "+100*b.options.lensOpacity+");zoom:1;width:"+lensWidth+"px;height:"+lensHeight+"px;background-color:"+b.options.lensColour+";cursor:"+b.options.cursor+";border: "+b.options.lensBorderSize+"px solid "+b.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;"),b.tintStyle="display: block;position: absolute;background-color: "+b.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+b.nzWidth+"px;height: "+b.nzHeight+"px;",b.lensRound="","lens"==b.options.zoomType&&(b.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(b.options.borderSize)+"px solid "+b.options.borderColour+";width:"+String(b.options.lensSize)+"px;height:"+String(b.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;"),"round"==b.options.lensShape&&(b.lensRound="border-top-left-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-top-right-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-bottom-left-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-bottom-right-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;"),b.zoomContainer=a('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+b.nzOffset.left+"px;top:"+b.nzOffset.top+"px;height:"+b.nzHeight+"px;width:"+b.nzWidth+'px;"></div>'),a("body").append(b.zoomContainer),b.options.containLensZoom&&"lens"==b.options.zoomType&&b.zoomContainer.css("overflow","hidden"),"inner"!=b.options.zoomType&&(b.zoomLens=a("<div class='zoomLens' style='"+b.lensStyle+b.lensRound+"'>&nbsp;</div>").appendTo(b.zoomContainer).click(function(){
						b.$elem.trigger("click")
					}),b.options.tint&&(b.tintContainer=a("<div/>").addClass("tintContainer"),b.zoomTint=a("<div class='zoomTint' style='"+b.tintStyle+"'></div>"),b.zoomLens.wrap(b.tintContainer),b.zoomTintcss=b.zoomLens.after(b.zoomTint),b.zoomTintImage=a('<img style="position: absolute;left: 0px;top: 0px;max-width: none;width: '+b.nzWidth+"px;height: "+b.nzHeight+'px;" src="'+b.imageSrc+'">').appendTo(b.zoomLens).click(function(){
						b.$elem.trigger("click")
					}))),isNaN(b.options.zoomWindowPosition)?b.zoomWindow=a("<div style='z-index:999;left:"+b.windowOffsetLeft+"px;top:"+b.windowOffsetTop+"px;"+b.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function(){
						b.$elem.trigger("click")
					}):b.zoomWindow=a("<div style='z-index:999;left:"+b.windowOffsetLeft+"px;top:"+b.windowOffsetTop+"px;"+b.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo(b.zoomContainer).click(function(){
						b.$elem.trigger("click")
					}),b.zoomWindowContainer=a("<div/>").addClass("zoomWindowContainer").css("width",b.options.zoomWindowWidth),b.zoomWindow.wrap(b.zoomWindowContainer),"lens"==b.options.zoomType&&b.zoomLens.css({
						backgroundImage:"url('"+b.imageSrc+"')"
					}),"window"==b.options.zoomType&&b.zoomWindow.css({
						backgroundImage:"url('"+b.imageSrc+"')"
					}),"inner"==b.options.zoomType&&b.zoomWindow.css({
						backgroundImage:"url('"+b.imageSrc+"')"
					}),b.$elem.bind("touchmove",function(a){
						a.preventDefault();
						var c=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];
						b.setPosition(c)
					}),b.zoomContainer.bind("touchmove",function(a){
						"inner"==b.options.zoomType&&b.showHideWindow("show"),a.preventDefault();
						var c=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];
						b.setPosition(c)
					}),b.zoomContainer.bind("touchend",function(a){
						b.showHideWindow("hide"),b.options.showLens&&b.showHideLens("hide"),b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")
					}),b.$elem.bind("touchend",function(a){
						b.showHideWindow("hide"),b.options.showLens&&b.showHideLens("hide"),b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")
					}),b.options.showLens&&(b.zoomLens.bind("touchmove",function(a){
						a.preventDefault();
						var c=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];
						b.setPosition(c)
					}),b.zoomLens.bind("touchend",function(a){
						b.showHideWindow("hide"),b.options.showLens&&b.showHideLens("hide"),b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")
					})),b.$elem.bind("mousemove",function(a){
						0==b.overWindow&&b.setElements("show"),b.lastX===a.clientX&&b.lastY===a.clientY||(b.setPosition(a),b.currentLoc=a),b.lastX=a.clientX,b.lastY=a.clientY
					}),b.zoomContainer.bind("mousemove",function(a){
						0==b.overWindow&&b.setElements("show"),b.lastX===a.clientX&&b.lastY===a.clientY||(b.setPosition(a),b.currentLoc=a),b.lastX=a.clientX,b.lastY=a.clientY
					}),"inner"!=b.options.zoomType&&b.zoomLens.bind("mousemove",function(a){
						b.lastX===a.clientX&&b.lastY===a.clientY||(b.setPosition(a),b.currentLoc=a),b.lastX=a.clientX,b.lastY=a.clientY
					}),b.options.tint&&"inner"!=b.options.zoomType&&b.zoomTint.bind("mousemove",function(a){b.lastX===a.clientX&&b.lastY===a.clientY||(b.setPosition(a),b.currentLoc=a),b.lastX=a.clientX,b.lastY=a.clientY
					}
					),"inner"==b.options.zoomType&&b.zoomWindow.bind("mousemove",function(a)
						{
						b.lastX===a.clientX&&b.lastY===a.clientY||(b.setPosition(a),b.currentLoc=a),b.lastX=a.clientX,b.lastY=a.clientY
					}
					),b.zoomContainer.add(b.$elem).mouseenter(function()
						{
						0==b.overWindow&&b.setElements("show")
					}
					).mouseleave(function()
						{
						b.scrollLock||b.setElements("hide")
					}
					),"inner"!=b.options.zoomType&&b.zoomWindow.mouseenter(function()
						{
						b.overWindow=!0,b.setElements("hide")
					}
					).mouseleave(function()
						{
						b.overWindow=!1
					}
					),1!=b.options.zoomLevel,b.options.minZoomLevel?b.minZoomLevel=b.options.minZoomLevel:b.minZoomLevel=2*b.options.scrollZoomIncrement,b.options.scrollZoom&&b.zoomContainer.add(b.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(c)
						{
						b.scrollLock=!0,clearTimeout(a.data(this,"timer")),a.data(this,"timer",setTimeout(function()
							{
							b.scrollLock=!1
						}
						,250));
						var d=c.originalEvent.wheelDelta||c.originalEvent.detail*-1;
						return c.stopImmediatePropagation(),c.stopPropagation(),c.preventDefault(),d/120>0?b.currentZoomLevel>=b.minZoomLevel&&b.changeZoomLevel(b.currentZoomLevel-b.options.scrollZoomIncrement):b.options.maxZoomLevel?b.currentZoomLevel<=b.options.maxZoomLevel&&b.changeZoomLevel(parseFloat(b.currentZoomLevel)+b.options.scrollZoomIncrement):b.changeZoomLevel(parseFloat(b.currentZoomLevel)+b.options.scrollZoomIncrement),!1
					}
					)
				}
				,setElements:function(a)
					{
					var b=this;
					return!!b.options.zoomEnabled&&("show"==a&&b.isWindowSet&&("inner"==b.options.zoomType&&b.showHideWindow("show"),"window"==b.options.zoomType&&b.showHideWindow("show"),b.options.showLens&&b.showHideLens("show"),b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("show")),void("hide"==a&&("window"==b.options.zoomType&&b.showHideWindow("hide"),b.options.tint||b.showHideWindow("hide"),b.options.showLens&&b.showHideLens("hide"),b.options.tint&&b.showHideTint("hide"))))
				}
				,setPosition:function(a)
					{
					var b=this;
					return!!b.options.zoomEnabled&&(b.nzHeight=b.$elem.height(),b.nzWidth=b.$elem.width(),b.nzOffset=b.$elem.offset(),b.options.tint&&"inner"!=b.options.zoomType&&(b.zoomTint.css(
						{
						top:0
					}
					),b.zoomTint.css(
						{
						left:0
					}
					)),b.options.responsive&&!b.options.scrollZoom&&b.options.showLens&&(b.nzHeight<b.options.zoomWindowWidth/b.widthRatio?lensHeight=b.nzHeight:lensHeight=String(b.options.zoomWindowHeight/b.heightRatio),b.largeWidth<b.options.zoomWindowWidth?lensWidth=b.nzWidth:lensWidth=b.options.zoomWindowWidth/b.widthRatio,b.widthRatio=b.largeWidth/b.nzWidth,b.heightRatio=b.largeHeight/b.nzHeight,"lens"!=b.options.zoomType&&(b.nzHeight<b.options.zoomWindowWidth/b.widthRatio?lensHeight=b.nzHeight:lensHeight=String(b.options.zoomWindowHeight/b.heightRatio),b.options.zoomWindowWidth<b.options.zoomWindowWidth?lensWidth=b.nzWidth:lensWidth=b.options.zoomWindowWidth/b.widthRatio,b.zoomLens.css("width",lensWidth),b.zoomLens.css("height",lensHeight),b.options.tint&&(b.zoomTintImage.css("width",b.nzWidth),b.zoomTintImage.css("height",b.nzHeight))),"lens"==b.options.zoomType&&b.zoomLens.css(
						{
						width:String(b.options.lensSize)+"px",height:String(b.options.lensSize)+"px"
					}
					)),b.zoomContainer.css(
						{
						top:b.nzOffset.top
					}
					),b.zoomContainer.css(
						{
						left:b.nzOffset.left
					}
					),b.mouseLeft=parseInt(a.pageX-b.nzOffset.left),b.mouseTop=parseInt(a.pageY-b.nzOffset.top),"window"==b.options.zoomType&&(b.Etoppos=b.mouseTop<b.zoomLens.height()/2,b.Eboppos=b.mouseTop>b.nzHeight-b.zoomLens.height()/2-2*b.options.lensBorderSize,b.Eloppos=b.mouseLeft<0+b.zoomLens.width()/2,b.Eroppos=b.mouseLeft>b.nzWidth-b.zoomLens.width()/2-2*b.options.lensBorderSize),"inner"==b.options.zoomType&&(b.Etoppos=b.mouseTop<b.nzHeight/2/b.heightRatio,b.Eboppos=b.mouseTop>b.nzHeight-b.nzHeight/2/b.heightRatio,b.Eloppos=b.mouseLeft<0+b.nzWidth/2/b.widthRatio,b.Eroppos=b.mouseLeft>b.nzWidth-b.nzWidth/2/b.widthRatio-2*b.options.lensBorderSize),b.mouseLeft<=0||b.mouseTop<0||b.mouseLeft>b.nzWidth||b.mouseTop>b.nzHeight?void b.setElements("hide"):(b.options.showLens&&(b.lensLeftPos=String(b.mouseLeft-b.zoomLens.width()/2),b.lensTopPos=String(b.mouseTop-b.zoomLens.height()/2)),b.Etoppos&&(b.lensTopPos=0),b.Eloppos&&(b.windowLeftPos=0,b.lensLeftPos=0,b.tintpos=0),"window"==b.options.zoomType&&(b.Eboppos&&(b.lensTopPos=Math.max(b.nzHeight-b.zoomLens.height()-2*b.options.lensBorderSize,0)),b.Eroppos&&(b.lensLeftPos=b.nzWidth-b.zoomLens.width()-2*b.options.lensBorderSize)),"inner"==b.options.zoomType&&(b.Eboppos&&(b.lensTopPos=Math.max(b.nzHeight-2*b.options.lensBorderSize,0)),b.Eroppos&&(b.lensLeftPos=b.nzWidth-b.nzWidth-2*b.options.lensBorderSize)),"lens"==b.options.zoomType&&(b.windowLeftPos=String(((a.pageX-b.nzOffset.left)*b.widthRatio-b.zoomLens.width()/2)*-1),b.windowTopPos=String(((a.pageY-b.nzOffset.top)*b.heightRatio-b.zoomLens.height()/2)*-1),b.zoomLens.css(
						{
						backgroundPosition:b.windowLeftPos+"px "+b.windowTopPos+"px"
					}
					),b.changeBgSize&&(b.nzHeight>b.nzWidth?("lens"==b.options.zoomType&&b.zoomLens.css(
						{
						"background-size":b.largeWidth/b.newvalueheight+"px "+b.largeHeight/b.newvalueheight+"px"
					}
					),b.zoomWindow.css(
						{
						"background-size":b.largeWidth/b.newvalueheight+"px "+b.largeHeight/b.newvalueheight+"px"
					}
					)):("lens"==b.options.zoomType&&b.zoomLens.css(
						{
						"background-size":b.largeWidth/b.newvaluewidth+"px "+b.largeHeight/b.newvaluewidth+"px"
					}
					),b.zoomWindow.css(
						{
						"background-size":b.largeWidth/b.newvaluewidth+"px "+b.largeHeight/b.newvaluewidth+"px"
					}
					)),b.changeBgSize=!1),b.setWindowPostition(a)),b.options.tint&&"inner"!=b.options.zoomType&&b.setTintPosition(a),"window"==b.options.zoomType&&b.setWindowPostition(a),"inner"==b.options.zoomType&&b.setWindowPostition(a),b.options.showLens&&(b.fullwidth&&"lens"!=b.options.zoomType&&(b.lensLeftPos=0),b.zoomLens.css(
						{
						left:b.lensLeftPos+"px",top:b.lensTopPos+"px"
					}
					)),void 0))
				}
				,showHideWindow:function(a)
					{
					var b=this;
					"show"==a&&(b.isWindowActive||(b.options.zoomWindowFadeIn?b.zoomWindow.stop(!0,!0,!1).fadeIn(b.options.zoomWindowFadeIn):b.zoomWindow.show(),b.isWindowActive=!0)),"hide"==a&&b.isWindowActive&&(b.options.zoomWindowFadeOut?b.zoomWindow.stop(!0,!0).fadeOut(b.options.zoomWindowFadeOut):b.zoomWindow.hide(),b.isWindowActive=!1)
				}
				,showHideLens:function(a)
					{
					var b=this;
					"show"==a&&(b.isLensActive||(b.options.lensFadeIn?b.zoomLens.stop(!0,!0,!1).fadeIn(b.options.lensFadeIn):b.zoomLens.show(),b.isLensActive=!0)),"hide"==a&&b.isLensActive&&(b.options.lensFadeOut?b.zoomLens.stop(!0,!0).fadeOut(b.options.lensFadeOut):b.zoomLens.hide(),b.isLensActive=!1)
				}
				,showHideTint:function(a)
					{
					var b=this;
					"show"==a&&(b.isTintActive||(b.options.zoomTintFadeIn?b.zoomTint.css(
						{
						opacity:b.options.tintOpacity
					}
					).animate().stop(!0,!0).fadeIn("slow"):(b.zoomTint.css(
						{
						opacity:b.options.tintOpacity
					}
					).animate(),b.zoomTint.show()),b.isTintActive=!0)),"hide"==a&&b.isTintActive&&(b.options.zoomTintFadeOut?b.zoomTint.stop(!0,!0).fadeOut(b.options.zoomTintFadeOut):b.zoomTint.hide(),b.isTintActive=!1)
				}
				,setLensPostition:function(a)
					{
				}
				,setWindowPostition:function(b)
					{
					var c=this;
					if(isNaN(c.options.zoomWindowPosition))c.externalContainer=a("#"+c.options.zoomWindowPosition),c.externalContainerWidth=c.externalContainer.width(),c.externalContainerHeight=c.externalContainer.height(),c.externalContainerOffset=c.externalContainer.offset(),c.windowOffsetTop=c.externalContainerOffset.top,c.windowOffsetLeft=c.externalContainerOffset.left;
					else switch(c.options.zoomWindowPosition)
						{
						case 1:c.windowOffsetTop=c.options.zoomWindowOffety,c.windowOffsetLeft=+c.nzWidth;
						break;
						case 2:c.options.zoomWindowHeight>c.nzHeight&&(c.windowOffsetTop=(c.options.zoomWindowHeight/2-c.nzHeight/2)*-1,c.windowOffsetLeft=c.nzWidth);
						break;
						case 3:c.windowOffsetTop=c.nzHeight-c.zoomWindow.height()-2*c.options.borderSize,c.windowOffsetLeft=c.nzWidth;
						break;
						case 4:c.windowOffsetTop=c.nzHeight,c.windowOffsetLeft=c.nzWidth;
						break;
						case 5:c.windowOffsetTop=c.nzHeight,c.windowOffsetLeft=c.nzWidth-c.zoomWindow.width()-2*c.options.borderSize;
						break;
						case 6:c.options.zoomWindowHeight>c.nzHeight&&(c.windowOffsetTop=c.nzHeight,c.windowOffsetLeft=(c.options.zoomWindowWidth/2-c.nzWidth/2+2*c.options.borderSize)*-1);
						break;
						case 7:c.windowOffsetTop=c.nzHeight,c.windowOffsetLeft=0;
						break;
						case 8:c.windowOffsetTop=c.nzHeight,c.windowOffsetLeft=(c.zoomWindow.width()+2*c.options.borderSize)*-1;
						break;
						case 9:c.windowOffsetTop=c.nzHeight-c.zoomWindow.height()-2*c.options.borderSize,c.windowOffsetLeft=(c.zoomWindow.width()+2*c.options.borderSize)*-1;
						break;
						case 10:c.options.zoomWindowHeight>c.nzHeight&&(c.windowOffsetTop=(c.options.zoomWindowHeight/2-c.nzHeight/2)*-1,c.windowOffsetLeft=(c.zoomWindow.width()+2*c.options.borderSize)*-1);
						break;
						case 11:c.windowOffsetTop=c.options.zoomWindowOffety,c.windowOffsetLeft=(c.zoomWindow.width()+2*c.options.borderSize)*-1;
						break;
						case 12:c.windowOffsetTop=(c.zoomWindow.height()+2*c.options.borderSize)*-1,c.windowOffsetLeft=(c.zoomWindow.width()+2*c.options.borderSize)*-1;
						break;
						case 13:c.windowOffsetTop=(c.zoomWindow.height()+2*c.options.borderSize)*-1,c.windowOffsetLeft=0;
						break;
						case 14:c.options.zoomWindowHeight>c.nzHeight&&(c.windowOffsetTop=(c.zoomWindow.height()+2*c.options.borderSize)*-1,c.windowOffsetLeft=(c.options.zoomWindowWidth/2-c.nzWidth/2+2*c.options.borderSize)*-1);
						break;
						case 15:c.windowOffsetTop=(c.zoomWindow.height()+2*c.options.borderSize)*-1,c.windowOffsetLeft=c.nzWidth-c.zoomWindow.width()-2*c.options.borderSize;
						break;
						case 16:c.windowOffsetTop=(c.zoomWindow.height()+2*c.options.borderSize)*-1,c.windowOffsetLeft=c.nzWidth;
						break;
						default:c.windowOffsetTop=c.options.zoomWindowOffety,c.windowOffsetLeft=c.nzWidth
					}
					c.isWindowSet=!0,c.windowOffsetTop=c.windowOffsetTop+c.options.zoomWindowOffety,c.windowOffsetLeft=c.windowOffsetLeft+c.options.zoomWindowOffetx,c.zoomWindow.css(
						{
						top:c.windowOffsetTop
					}
					),c.zoomWindow.css(
						{
						left:c.windowOffsetLeft
					}
					),"inner"==c.options.zoomType&&(c.zoomWindow.css(
						{
						top:0
					}
					),c.zoomWindow.css(
						{
						left:0
					}
					)),c.windowLeftPos=String(((b.pageX-c.nzOffset.left)*c.widthRatio-c.zoomWindow.width()/2)*-1),c.windowTopPos=String(((b.pageY-c.nzOffset.top)*c.heightRatio-c.zoomWindow.height()/2)*-1),c.Etoppos&&(c.windowTopPos=0),c.Eloppos&&(c.windowLeftPos=0),c.Eboppos&&(c.windowTopPos=(c.largeHeight/c.currentZoomLevel-c.zoomWindow.height())*-1),c.Eroppos&&(c.windowLeftPos=(c.largeWidth/c.currentZoomLevel-c.zoomWindow.width())*-1),c.fullheight&&(c.windowTopPos=0),c.fullwidth&&(c.windowLeftPos=0),"window"!=c.options.zoomType&&"inner"!=c.options.zoomType||(1==c.zoomLock&&(c.widthRatio<=1&&(c.windowLeftPos=0),c.heightRatio<=1&&(c.windowTopPos=0)),c.largeHeight<c.options.zoomWindowHeight&&(c.windowTopPos=0),c.largeWidth<c.options.zoomWindowWidth&&(c.windowLeftPos=0),c.options.easing?(c.xp||(c.xp=0),c.yp||(c.yp=0),c.loop||(c.loop=setInterval(function()
						{
						c.xp+=(c.windowLeftPos-c.xp)/c.options.easingAmount,c.yp+=(c.windowTopPos-c.yp)/c.options.easingAmount,c.scrollingLock?(clearInterval(c.loop),c.xp=c.windowLeftPos,c.yp=c.windowTopPos,c.xp=((b.pageX-c.nzOffset.left)*c.widthRatio-c.zoomWindow.width()/2)*-1,c.yp=((b.pageY-c.nzOffset.top)*c.heightRatio-c.zoomWindow.height()/2)*-1,c.changeBgSize&&(c.nzHeight>c.nzWidth?("lens"==c.options.zoomType&&c.zoomLens.css(
							{
							"background-size":c.largeWidth/c.newvalueheight+"px "+c.largeHeight/c.newvalueheight+"px"
						}
						),c.zoomWindow.css(
							{
							"background-size":c.largeWidth/c.newvalueheight+"px "+c.largeHeight/c.newvalueheight+"px"
						}
						)):("lens"!=c.options.zoomType&&c.zoomLens.css(
							{
							"background-size":c.largeWidth/c.newvaluewidth+"px "+c.largeHeight/c.newvalueheight+"px"
						}
						),c.zoomWindow.css(
							{
							"background-size":c.largeWidth/c.newvaluewidth+"px "+c.largeHeight/c.newvaluewidth+"px"
						}
						)),c.changeBgSize=!1),c.zoomWindow.css(
							{
							backgroundPosition:c.windowLeftPos+"px "+c.windowTopPos+"px"
						}
						),c.scrollingLock=!1,c.loop=!1):(c.changeBgSize&&(c.nzHeight>c.nzWidth?("lens"==c.options.zoomType&&c.zoomLens.css(
							{
							"background-size":c.largeWidth/c.newvalueheight+"px "+c.largeHeight/c.newvalueheight+"px"
						}
						),c.zoomWindow.css(
							{
							"background-size":c.largeWidth/c.newvalueheight+"px "+c.largeHeight/c.newvalueheight+"px"
						}
						)):("lens"!=c.options.zoomType&&c.zoomLens.css(
							{
							"background-size":c.largeWidth/c.newvaluewidth+"px "+c.largeHeight/c.newvaluewidth+"px"
						}
						),c.zoomWindow.css(
							{
							"background-size":c.largeWidth/c.newvaluewidth+"px "+c.largeHeight/c.newvaluewidth+"px"
						}
						)),c.changeBgSize=!1),c.zoomWindow.css(
							{
							backgroundPosition:c.xp+"px "+c.yp+"px"
						}
						))
					}
					,16))):(c.changeBgSize&&(c.nzHeight>c.nzWidth?("lens"==c.options.zoomType&&c.zoomLens.css(
						{
						"background-size":c.largeWidth/c.newvalueheight+"px "+c.largeHeight/c.newvalueheight+"px"
					}
					),c.zoomWindow.css(
						{
						"background-size":c.largeWidth/c.newvalueheight+"px "+c.largeHeight/c.newvalueheight+"px"
					}
					)):("lens"==c.options.zoomType&&c.zoomLens.css(
						{
						"background-size":c.largeWidth/c.newvaluewidth+"px "+c.largeHeight/c.newvaluewidth+"px"
					}
					),c.largeHeight/c.newvaluewidth<c.options.zoomWindowHeight?c.zoomWindow.css(
						{
						"background-size":c.largeWidth/c.newvaluewidth+"px "+c.largeHeight/c.newvaluewidth+"px"
					}
					):c.zoomWindow.css(
						{
						"background-size":c.largeWidth/c.newvalueheight+"px "+c.largeHeight/c.newvalueheight+"px"
					}
					)),c.changeBgSize=!1),c.zoomWindow.css(
						{
						backgroundPosition:c.windowLeftPos+"px "+c.windowTopPos+"px"
					}
					)))
				}
				,setTintPosition:function(a)
					{
					var b=this;
					b.nzOffset=b.$elem.offset(),b.tintpos=String((a.pageX-b.nzOffset.left-b.zoomLens.width()/2)*-1),b.tintposy=String((a.pageY-b.nzOffset.top-b.zoomLens.height()/2)*-1),b.Etoppos&&(b.tintposy=0),b.Eloppos&&(b.tintpos=0),b.Eboppos&&(b.tintposy=(b.nzHeight-b.zoomLens.height()-2*b.options.lensBorderSize)*-1),b.Eroppos&&(b.tintpos=(b.nzWidth-b.zoomLens.width()-2*b.options.lensBorderSize)*-1),b.options.tint&&(b.fullheight&&(b.tintposy=0),b.fullwidth&&(b.tintpos=0),b.zoomTintImage.css(
						{
						left:b.tintpos+"px"
					}
					),b.zoomTintImage.css(
						{
						top:b.tintposy+"px"
					}
					))
				}
				,swaptheimage:function(b,c)
					{
					var d=this,e=new Image;
					d.options.loadingIcon&&a.scafancybox.showLoading(),d.options.onImageSwap(d.$elem),e.onload=function()
						{
						d.largeWidth=e.width,d.largeHeight=e.height,d.zoomImage=c,d.zoomWindow.css(
							{
							"background-size":d.largeWidth+"px "+d.largeHeight+"px"
						}
						),d.zoomWindow.css(
							{
							"background-size":d.largeWidth+"px "+d.largeHeight+"px"
						}
						),d.swapAction(b,c)
					}
					,e.src=c
				}
				,swapAction:function(b,c)
					{
					var d=this,e=new Image;
					if(e.onload=function()
						{
						d.nzHeight=e.height,d.nzWidth=e.width,d.options.onImageSwapComplete(d.$elem),d.doneCallback()
					}
					,e.src=b,d.currentZoomLevel=d.options.zoomLevel,d.options.maxZoomLevel=!1,"lens"==d.options.zoomType&&d.zoomLens.css(
						{
						backgroundImage:"url('"+c+"')"
					}
					),"window"==d.options.zoomType&&d.zoomWindow.css(
						{
						backgroundImage:"url('"+c+"')"
					}
					),"inner"==d.options.zoomType&&d.zoomWindow.css(
						{
						backgroundImage:"url('"+c+"')"
					}
					),d.currentImage=c,d.options.imageCrossfade)
						{
						var f=d.$elem,g=f.clone();
						if(d.$elem.attr("src",b),d.$elem.after(g),g.stop(!0).fadeOut(d.options.imageCrossfade,function()
							{
							a(this).remove()
						}
						),d.$elem.width("auto").removeAttr("width"),d.$elem.height("auto").removeAttr("height"),f.fadeIn(d.options.imageCrossfade),d.options.tint&&"inner"!=d.options.zoomType)
							{
							var h=d.zoomTintImage,i=h.clone();
							d.zoomTintImage.attr("src",c),d.zoomTintImage.after(i),i.stop(!0).fadeOut(d.options.imageCrossfade,function()
								{
								a(this).remove()
							}
							),h.fadeIn(d.options.imageCrossfade),d.zoomTint.css(
								{
								height:d.$elem.height()
							}
							),d.zoomTint.css(
								{
								width:d.$elem.width()
							}
							)
						}
						d.zoomContainer.css("height",d.$elem.height()),d.zoomContainer.css("width",d.$elem.width()),"inner"==d.options.zoomType&&(d.options.constrainType||(d.zoomWrap.parent().css("height",d.$elem.height()),d.zoomWrap.parent().css("width",d.$elem.width()),d.zoomWindow.css("height",d.$elem.height()),d.zoomWindow.css("width",d.$elem.width()))),d.options.imageCrossfade&&(d.zoomWrap.css("height",d.$elem.height()),d.zoomWrap.css("width",d.$elem.width()))
					}
					else d.$elem.attr("src",b),d.options.tint&&(d.zoomTintImage.attr("src",c),d.zoomTintImage.attr("height",d.$elem.height()),d.zoomTintImage.css(
						{
						height:d.$elem.height()
					}
					),d.zoomTint.css(
						{
						height:d.$elem.height()
					}
					)),d.zoomContainer.css("height",d.$elem.height()),d.zoomContainer.css("width",d.$elem.width()),d.options.imageCrossfade&&(d.zoomWrap.css("height",d.$elem.height()),d.zoomWrap.css("width",d.$elem.width()));
					d.options.constrainType&&("height"==d.options.constrainType&&(d.zoomContainer.css("height",d.options.constrainSize),d.zoomContainer.css("width","auto"),d.options.imageCrossfade?(d.zoomWrap.css("height",d.options.constrainSize),d.zoomWrap.css("width","auto"),d.constwidth=d.zoomWrap.width()):(d.$elem.css("height",d.options.constrainSize),d.$elem.css("width","auto"),d.constwidth=d.$elem.width()),"inner"==d.options.zoomType&&(d.zoomWrap.parent().css("height",d.options.constrainSize),d.zoomWrap.parent().css("width",d.constwidth),d.zoomWindow.css("height",d.options.constrainSize),d.zoomWindow.css("width",d.constwidth)),d.options.tint&&(d.tintContainer.css("height",d.options.constrainSize),d.tintContainer.css("width",d.constwidth),d.zoomTint.css("height",d.options.constrainSize),d.zoomTint.css("width",d.constwidth),d.zoomTintImage.css("height",d.options.constrainSize),d.zoomTintImage.css("width",d.constwidth))),"width"==d.options.constrainType&&(d.zoomContainer.css("height","auto"),d.zoomContainer.css("width",d.options.constrainSize),d.options.imageCrossfade?(d.zoomWrap.css("height","auto"),d.zoomWrap.css("width",d.options.constrainSize),d.constheight=d.zoomWrap.height()):(d.$elem.css("height","auto"),d.$elem.css("width",d.options.constrainSize),d.constheight=d.$elem.height()),"inner"==d.options.zoomType&&(d.zoomWrap.parent().css("height",d.constheight),d.zoomWrap.parent().css("width",d.options.constrainSize),d.zoomWindow.css("height",d.constheight),d.zoomWindow.css("width",d.options.constrainSize)),d.options.tint&&(d.tintContainer.css("height",d.constheight),d.tintContainer.css("width",d.options.constrainSize),d.zoomTint.css("height",d.constheight),d.zoomTint.css("width",d.options.constrainSize),d.zoomTintImage.css("height",d.constheight),d.zoomTintImage.css("width",d.options.constrainSize))))
				}
				,doneCallback:function()
					{
					var b=this;
					a.scafancybox.hideLoading(),b.nzOffset=b.$elem.offset(),b.nzWidth=b.$elem.width(),b.nzHeight=b.$elem.height(),a.scafancybox.scaupdate(),b.currentZoomLevel=b.options.zoomLevel,b.widthRatio=b.largeWidth/b.nzWidth,b.heightRatio=b.largeHeight/b.nzHeight,"window"==b.options.zoomType&&(b.nzHeight<b.options.zoomWindowWidth/b.widthRatio?lensHeight=b.nzHeight:lensHeight=String(b.options.zoomWindowHeight/b.heightRatio),b.options.zoomWindowWidth<b.options.zoomWindowWidth?lensWidth=b.nzWidth:lensWidth=b.options.zoomWindowWidth/b.widthRatio,b.zoomLens&&(b.zoomLens.css("width",lensWidth),b.zoomLens.css("height",lensHeight)))
				}
				,getCurrentImage:function()
					{
					var a=this;
					return a.zoomImage
				}
				,getGalleryList:function()
					{
					var b=this;
					return b.gallerylist=[],b.options.gallery?a("#"+b.options.gallery+" a").each(function()
						{
						var c="";
						a(this).data("zoom-image")?c=a(this).data("zoom-image"):a(this).data("image")&&(c=a(this).data("image")),c==b.zoomImage?b.gallerylist.unshift(
							{
							href:""+c,title:a(this).find("img").attr("title")
						}
						):b.gallerylist.push(
							{
							href:""+c,title:a(this).find("img").attr("title")
						}
						)
					}
					):b.gallerylist.push(
						{
						href:""+b.zoomImage,title:a(this).find("img").attr("title")
					}
					),b.gallerylist
				}
				,changeZoomLevel:function(a)
					{
					var b=this;
					b.scrollingLock=!0,b.newvalue=parseFloat(a).toFixed(2),newvalue=parseFloat(a).toFixed(2),maxheightnewvalue=b.largeHeight/(b.options.zoomWindowHeight/b.nzHeight*b.nzHeight),maxwidthtnewvalue=b.largeWidth/(b.options.zoomWindowWidth/b.nzWidth*b.nzWidth),"inner"!=b.options.zoomType&&(maxheightnewvalue<=newvalue?(b.heightRatio=b.largeHeight/maxheightnewvalue/b.nzHeight,b.newvalueheight=maxheightnewvalue,b.fullheight=!0):(b.heightRatio=b.largeHeight/newvalue/b.nzHeight,b.newvalueheight=newvalue,b.fullheight=!1),maxwidthtnewvalue<=newvalue?(b.widthRatio=b.largeWidth/maxwidthtnewvalue/b.nzWidth,b.newvaluewidth=maxwidthtnewvalue,b.fullwidth=!0):(b.widthRatio=b.largeWidth/newvalue/b.nzWidth,b.newvaluewidth=newvalue,b.fullwidth=!1),"lens"==b.options.zoomType&&(maxheightnewvalue<=newvalue?(b.fullwidth=!0,b.newvaluewidth=maxheightnewvalue):(b.widthRatio=b.largeWidth/newvalue/b.nzWidth,b.newvaluewidth=newvalue,b.fullwidth=!1))),"inner"==b.options.zoomType&&(maxheightnewvalue=parseFloat(b.largeHeight/b.nzHeight).toFixed(2),maxwidthtnewvalue=parseFloat(b.largeWidth/b.nzWidth).toFixed(2),newvalue>maxheightnewvalue&&(newvalue=maxheightnewvalue),newvalue>maxwidthtnewvalue&&(newvalue=maxwidthtnewvalue),maxheightnewvalue<=newvalue?(b.heightRatio=b.largeHeight/newvalue/b.nzHeight,newvalue>maxheightnewvalue?b.newvalueheight=maxheightnewvalue:b.newvalueheight=newvalue,b.fullheight=!0):(b.heightRatio=b.largeHeight/newvalue/b.nzHeight,newvalue>maxheightnewvalue?b.newvalueheight=maxheightnewvalue:b.newvalueheight=newvalue,b.fullheight=!1),maxwidthtnewvalue<=newvalue?(b.widthRatio=b.largeWidth/newvalue/b.nzWidth,newvalue>maxwidthtnewvalue?b.newvaluewidth=maxwidthtnewvalue:b.newvaluewidth=newvalue,b.fullwidth=!0):(b.widthRatio=b.largeWidth/newvalue/b.nzWidth,b.newvaluewidth=newvalue,b.fullwidth=!1)),scrcontinue=!1,"inner"==b.options.zoomType&&(b.nzWidth>b.nzHeight&&(b.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,b.fullheight=!0,b.fullwidth=!0)),b.nzHeight>b.nzWidth&&(b.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,b.fullheight=!0,b.fullwidth=!0))),"inner"!=b.options.zoomType&&(scrcontinue=!0),scrcontinue&&(b.zoomLock=0,b.changeZoom=!0,b.options.zoomWindowHeight/b.heightRatio<=b.nzHeight&&(b.currentZoomLevel=b.newvalueheight,"lens"!=b.options.zoomType&&"inner"!=b.options.zoomType&&(b.changeBgSize=!0,b.zoomLens.css(
						{
						height:String(b.options.zoomWindowHeight/b.heightRatio)+"px"
					}
					)),"lens"!=b.options.zoomType&&"inner"!=b.options.zoomType||(b.changeBgSize=!0)),b.options.zoomWindowWidth/b.widthRatio<=b.nzWidth&&("inner"!=b.options.zoomType&&b.newvaluewidth>b.newvalueheight&&(b.currentZoomLevel=b.newvaluewidth),"lens"!=b.options.zoomType&&"inner"!=b.options.zoomType&&(b.changeBgSize=!0,b.zoomLens.css(
						{
						width:String(b.options.zoomWindowWidth/b.widthRatio)+"px"
					}
					)),"lens"!=b.options.zoomType&&"inner"!=b.options.zoomType||(b.changeBgSize=!0)),"inner"==b.options.zoomType&&(b.changeBgSize=!0,b.nzWidth>b.nzHeight&&(b.currentZoomLevel=b.newvaluewidth),b.nzHeight>b.nzWidth&&(b.currentZoomLevel=b.newvaluewidth))),b.setPosition(b.currentLoc)
				}
				,closeAll:function()
					{
					self.zoomWindow&&self.zoomWindow.hide(),self.zoomLens&&self.zoomLens.hide(),self.zoomTint&&self.zoomTint.hide()
				}
				,changeState:function(a)
					{
					var b=this;
					"enable"==a&&(b.options.zoomEnabled=!0),"disable"==a&&(b.options.zoomEnabled=!1)
				}
			};
			a.fn.elevateZoom=function(b)
				{
				return this.each(function()
					{
					var c=Object.create(e);
					c.init(b,this),a.data(this,"elevateZoom",c)
				}
				)
			}
			,a.fn.elevateZoom.options=
				{
				zoomActivation:"hover",zoomEnabled:!0,preloading:1,zoomLevel:1,scrollZoom:!1,scrollZoomIncrement:.1,minZoomLevel:!1,maxZoomLevel:!1,easing:!1,easingAmount:12,lensSize:200,zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,zoomWindowBgColour:"#fff",lensFadeIn:!1,lensFadeOut:!1,debug:!1,zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowAlwaysShow:!1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,borderSize:4,showLens:!0,borderColour:"#888",lensBorderSize:1,lensBorderColour:"#000",lensShape:"square",zoomType:"window",containLensZoom:!1,lensColour:"white",lensOpacity:.4,lenszoom:!1,tint:!1,tintColour:"#333",tintOpacity:.4,gallery:!1,galleryActiveClass:"zoomGalleryActive",imageCrossfade:!1,constrainType:!1,constrainSize:!1,loadingIcon:"data:image/gif;			base64,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",cursor:"default",responsive:!0,onComplete:a.noop,onZoomedImageLoaded:function()
					{
				}
				,onImageSwap:a.noop,onImageSwapComplete:a.noop
			}
		}
		(a,b,c)
	}
	function scaqvFancybox(a,b,c,d)
		{
		"use strict";
		var e=c("html"),f=c(a),g=c(b),h=c.scafancybox=function()
			{
			h.open.apply(this,arguments)
		}
		,i=navigator.userAgent.match(/msie/i),j=null,k=b.createTouch!==d,l=function(a)
			{
			return a&&a.hasOwnProperty&&a instanceof c
		}
		,m=function(a)
			{
			return a&&"string"===c.type(a)
		}
		,n=function(a)
			{
			return m(a)&&a.indexOf("%")>0
		}
		,o=function(a)
			{
			return a&&!(a.style.overflow&&"hidden"===a.style.overflow)&&(a.clientWidth&&a.scrollWidth>a.clientWidth||a.clientHeight&&a.scrollHeight>a.clientHeight)
		}
		,p=function(a,b)
			{
			var c=parseInt(a,10)||0;
			return b&&n(a)&&(c=h.getViewport()[b]/100*c),Math.ceil(c)
		}
		,q=function(a,b)
			{
			return p(a,b)+"px"
		};
		c.extend(h,
			{
			version:"2.1.5",defaults:
				{
				padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:2,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!k,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:
					{
					dataType:"html",headers:
						{
						"X-sca-fancybox":!0
					}
				}
				,iframe:
					{
					scrolling:"auto",preload:!0
				}
				,swf:
					{
					wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"
				}
				,keys:
					{
					next:
						{
						13:"left",34:"up",39:"left",40:"up"
					}
					,prev:
						{
						8:"right",33:"down",37:"right",38:"down"
					}
					,close:[27],play:[32],toggle:[70]
				}
				,direction:
					{
					next:"left",prev:"right"
				}
				,scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:
					{
					wrap:'<div class="sca-fancybox-wrap" tabIndex="-1"><div class="sca-fancybox-skin"><div class="sca-fancybox-outer"><div class="sca-fancybox-inner"></div></div></div></div>',image:'<img class="sca-fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="sca-fancybox-frame{rnd}"name="sca-fancybox-frame{rnd}"class="sca-fancybox-iframe"frameborder="0"vspace="0"hspace="0"webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(i?'allowtransparency="true"':"")+"></iframe>",error:'<p class="sca-fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="sca-fancybox-item sca-fancybox-close" href="javascript:;"></a>',next:'<a title="Next"class="sca-fancybox-nav sca-fancybox-next"href="javascript:;"><span></span></a>',prev:'<a title="Previous"class="sca-fancybox-nav sca-fancybox-prev"href="javascript:;"><span></span></a>'}			,openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:
					{
					overlay:!0,title:!0
				}
				,onCancel:c.noop,beforeLoad:c.noop,afterLoad:c.noop,beforeShow:c.noop,afterShow:c.noop,beforeChange:c.noop,beforeClose:c.noop,afterClose:c.noop
			}
			,group:
				{
			}
			,opts:
				{
			}
			,previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:
				{
				timer:null,isActive:!1
			}
			,ajaxLoad:null,imgPreload:null,transitions:
				{
			}
			,helpers:
				{
			}
			,open:function(a,b)
				{
				if(a&&(c.isPlainObject(b)||(b=
					{
				}
				),!1!==h.close(!0)))return c.isArray(a)||(a=l(a)?c(a).get():[a]),c.each(a,function(e,f)
					{
					var i,j,k,n,o,p,q,g=
						{
					};
					"object"===c.type(f)&&(f.nodeType&&(f=c(f)),l(f)?(g=
						{
						href:f.data("sca-fancybox-href")||f.attr("href"),title:f.data("sca-fancybox-title")||f.attr("title"),isDom:!0,element:f
					}
					,c.metadata&&c.extend(!0,g,f.metadata())):g=f),i=b.href||g.href||(m(f)?f:null),j=b.title!==d?b.title:g.title||"",k=b.content||g.content,n=k?"html":b.type||g.type,!n&&g.isDom&&(n=f.data("sca-fancybox-type"),n||(o=f.prop("class").match(/sca-fancybox\.(\w+)/),n=o?o[1]:null)),m(i)&&(n||(h.isImage(i)?n="image":h.isSWF(i)?n="swf":"#"===i.charAt(0)?n="inline":m(f)&&(n="html",k=f)),"ajax"===n&&(p=i.split(/\s+/,2),i=p.shift(),q=p.shift())),k||("inline"===n?i?k=c(m(i)?i.replace(/.*(?=#[^\s]+$)/,""):i):g.isDom&&(k=f):"html"===n?k=i:n||i||!g.isDom||(n="inline",k=f)),c.extend(g,
						{
						href:i,type:n,content:k,title:j,selector:q
					}
					),a[e]=g
				}
				),h.opts=c.extend(!0,
					{
				}
				,h.defaults,b),b.keys!==d&&(h.opts.keys=!!b.keys&&c.extend(
					{
				}
				,h.defaults.keys,b.keys)),h.group=a,h._start(h.opts.index)
			}
			,cancel:function()
				{
				var a=h.coming;
				a&&!1!==h.trigger("onCancel")&&(h.hideLoading(),h.ajaxLoad&&h.ajaxLoad.abort(),h.ajaxLoad=null,h.imgPreload&&(h.imgPreload.onload=h.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),h.coming=null,h.current||h._afterZoomOut(a))
			}
			,close:function(a)
				{
				h.cancel(),!1!==h.trigger("beforeClose")&&(h.unbindEvents(),h.isActive&&(h.isOpen&&a!==!0?(h.isOpen=h.isOpened=!1,h.isClosing=!0,c(".sca-fancybox-item, .sca-fancybox-nav").remove(),h.wrap.stop(!0,!0).removeClass("sca-fancybox-opened"),h.transitions[h.current.closeMethod]()):(c(".sca-fancybox-wrap").stop(!0).trigger("onReset").remove(),h._afterZoomOut())))
			}
			,play:function(a)
				{
				var b=function()
					{
					clearTimeout(h.player.timer)
				}
				,c=function()
					{
					b(),h.current&&h.player.isActive&&(h.player.timer=setTimeout(h.next,h.current.playSpeed))
				}
				,d=function()
					{
					b(),g.unbind(".player"),h.player.isActive=!1,h.trigger("onPlayEnd")
				}
				,e=function()
					{
					h.current&&(h.current.loop||h.current.index<h.group.length-1)&&(h.player.isActive=!0,g.bind(
						{
						"onCancel.player beforeClose.player":d,"onUpdate.player":c,"beforeLoad.player":b
					}
					),c(),h.trigger("onPlayStart"))
				};
				a===!0||!h.player.isActive&&a!==!1?e():d()
			}
			,next:function(a)
				{
				var b=h.current;
				b&&(m(a)||(a=b.direction.next),h.jumpto(b.index+1,a,"next"))
			}
			,prev:function(a)
				{
				var b=h.current;
				b&&(m(a)||(a=b.direction.prev),h.jumpto(b.index-1,a,"prev"))
			}
			,jumpto:function(a,b,c)
				{
				var e=h.current;
				e&&(a=p(a),h.direction=b||e.direction[a>=e.index?"next":"prev"],h.router=c||"jumpto",e.loop&&(a<0&&(a=e.group.length+a%e.group.length),a%=e.group.length),e.group[a]!==d&&(h.cancel(),h._start(a)))
			}
			,reposition:function(a,b)
				{
				var f,d=h.current,e=d?d.wrap:null;
				e&&(f=h._getPosition(b),a&&"scroll"===a.type?(delete f.position,e.stop(!0,!0).animate(f,200)):(e.css(f),d.pos=c.extend(
					{
				}
				,d.dim,f)))
			}
			,update:function(a)
				{
				var b=a&&a.type,c=!b||"orientationchange"===b;
				c&&(clearTimeout(j),j=null),h.isOpen&&!j&&(j=setTimeout(function()
					{
					var d=h.current;
					d&&!h.isClosing&&(h.wrap.removeClass("sca-fancybox-tmp"),(c||"load"===b||"resize"===b&&d.autoResize)&&h._setDimension(),"scroll"===b&&d.canShrink||h.reposition(a),h.trigger("onUpdate"),j=null)
				}
				,c&&!k?0:300))
			}
			,scaupdate:function(a)
				{
				var b=a&&a.type,d=!0;
				if(d&&(clearTimeout(j),j=null),h.isOpen&&!j)
					{
					var e,e=0;
					e=c("#sca-qv-left").outerHeight()>c(".sca-fancybox-inner").outerHeight()?345:0,0==c("#sca-qv-zoomcontainer").outerHeight()&&c("#sca-qv-left").outerHeight()!==c(".sca-fancybox-inner").outerHeight()&&(0==e&&(e=345),c("#sca-qv-zoomcontainer").height(c("#sca-qv-zoomImg").outerHeight())),j=setTimeout(function()
						{
						var c=h.current;
						c&&!h.isClosing&&(h.wrap.removeClass("sca-fancybox-tmp"),(d||"load"===b||"resize"===b&&c.autoResize)&&h._setDimension(),"scroll"===b&&c.canShrink||h.reposition(a),h.trigger("onUpdate"),j=null,h.hideLoading())
					}
					,e)
				}
			}
			,toggle:function(a)
				{
				h.isOpen&&(h.current.fitToView="boolean"===c.type(a)?a:!h.current.fitToView,k&&(h.wrap.removeAttr("style").addClass("sca-fancybox-tmp"),h.trigger("onUpdate")),h.update())
			}
			,hideLoading:function()
				{
				g.unbind(".loading"),c("#sca-fancybox-loading").remove()
			}
			,showLoading:function()
				{
				var a,b;
				h.hideLoading(),a=c('<div id="sca-fancybox-loading"><div></div></div>').click(h.cancel).appendTo("body"),g.bind("keydown.loading",function(a)
					{
					27===(a.which||a.keyCode)&&(a.preventDefault(),h.cancel())
				}
				),h.defaults.fixed||(b=h.getViewport(),a.css(
					{
					position:"absolute",top:.5*b.h+b.y,left:.5*b.w+b.x
				}
				))
			}
			,getViewport:function()
				{
				var b=h.current&&h.current.locked||!1,c=
					{
					x:f.scrollLeft(),y:f.scrollTop()
				};
				return b?(c.w=b[0].clientWidth,c.h=b[0].clientHeight):(c.w=k&&a.innerWidth?a.innerWidth:f.width(),c.h=k||a.innerHeight?a.innerHeight:f.height()),c
			}
			,unbindEvents:function()
				{
				h.wrap&&l(h.wrap)&&h.wrap.unbind(".fb"),g.unbind(".fb"),f.unbind(".fb")
			}
			,bindEvents:function()
				{
				var b,a=h.current;
				a&&(f.bind("orientationchange.fb"+(k?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),h.update),b=a.keys,b&&g.bind("keydown.fb",function(e)
					{
					var f=e.which||e.keyCode,g=e.target||e.srcElement;
					return(27!==f||!h.coming)&&void(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||g&&(g.type||c(g).is("[contenteditable]"))||c.each(b,function(b,g)
						{
						return a.group.length>1&&g[f]!==d?(h[b](g[f]),e.preventDefault(),!1):c.inArray(f,g)>-1?(h[b](),e.preventDefault(),!1):void 0
					}
					))
				}
				),c.fn.mousewheel&&a.mouseWheel&&h.wrap.bind("mousewheel.fb",function(b,d,e,f)
					{
					for(var g=b.target||null,i=c(g),j=!1;
					i.length&&!(j||i.is(".sca-fancybox-skin")||i.is(".sca-fancybox-wrap"));
					)j=o(i[0]),i=c(i).parent();
					0===d||j||h.group.length>1&&!a.canShrink&&(f>0||e>0?h.prev(f>0?"down":"left"):(f<0||e<0)&&h.next(f<0?"up":"right"),b.preventDefault())
				}
				))
			}
			,trigger:function(a,b)
				{
				var d,e=b||h.coming||h.current;
				if(e)
					{
					if(c.isFunction(e[a])&&(d=e[a].apply(e,Array.prototype.slice.call(arguments,1))),d===!1)return!1;
					e.helpers&&c.each(e.helpers,function(b,d)
						{
						d&&h.helpers[b]&&c.isFunction(h.helpers[b][a])&&h.helpers[b][a](c.extend(!0,
							{
						}
						,h.helpers[b].defaults,d),e)
					}
					),g.trigger(a)
				}
			}
			,isImage:function(a)
				{
				return m(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
			}
			,isSWF:function(a)
				{
				return m(a)&&a.match(/\.(swf)((\?|#).*)?$/i)
			}
			,_start:function(a)
				{
				var d,e,f,g,i,b=
					{
				};
				if(a=p(a),d=h.group[a]||null,!d)return!1;
				if(b=c.extend(!0,
					{
				}
				,h.opts,d),g=b.margin,i=b.padding,"number"===c.type(g)&&(b.margin=[g,g,g,g]),"number"===c.type(i)&&(b.padding=[i,i,i,i]),b.modal&&c.extend(!0,b,
					{
					closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:
						{
						overlay:
							{
							closeClick:!1
						}
					}
				}
				),b.autoSize&&(b.autoWidth=b.autoHeight=!0),"auto"===b.width&&(b.autoWidth=!0),"auto"===b.height&&(b.autoHeight=!0),b.group=h.group,b.index=a,h.coming=b,!1===h.trigger("beforeLoad"))return void(h.coming=null);
				if(f=b.type,e=b.href,!f)return h.coming=null,!(!h.current||!h.router||"jumpto"===h.router)&&(h.current.index=a,h[h.router](h.direction));
				if(h.isActive=!0,"image"!==f&&"swf"!==f||(b.autoHeight=b.autoWidth=!1,b.scrolling="visible"),"image"===f&&(b.aspectRatio=!0),"iframe"===f&&k&&(b.scrolling="scroll"),b.wrap=c(b.tpl.wrap).addClass("sca-fancybox-"+(k?"mobile":"desktop")+" sca-fancybox-type-"+f+" sca-fancybox-tmp "+b.wrapCSS).appendTo(b.parent||"body"),c.extend(b,
					{
					skin:c(".sca-fancybox-skin",b.wrap),outer:c(".sca-fancybox-outer",b.wrap),inner:c(".sca-fancybox-inner",b.wrap)
				}
				),c.each(["Top","Right","Bottom","Left"],function(a,c)
					{
					b.skin.css("padding"+c,q(b.padding[a]))
				}
				),h.trigger("onReady"),"inline"===f||"html"===f)
					{
					if(!b.content||!b.content.length)return h._error("content")
				}
				else if(!e)return h._error("href");
				"image"===f?h._loadImage():"ajax"===f?h._loadAjax():"iframe"===f?h._loadIframe():h._afterLoad()
			}
			,_error:function(a)
				{
				c.extend(h.coming,
					{
					type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:h.coming.tpl.error
				}
				),h._afterLoad()
			}
			,_loadImage:function()
				{
				var a=h.imgPreload=new Image;
				a.onload=function()
					{
					this.onload=this.onerror=null,h.coming.width=this.width/h.opts.pixelRatio,h.coming.height=this.height/h.opts.pixelRatio,h._afterLoad()
				}
				,a.onerror=function()
					{
					this.onload=this.onerror=null,h._error("image")
				}
				,a.src=h.coming.href,a.complete!==!0&&h.showLoading()
			}
			,_loadAjax:function()
				{
				var a=h.coming;
				h.showLoading(),h.ajaxLoad=c.ajax(c.extend(
					{
				}
				,a.ajax,
					{
					url:a.href,error:function(a,b)
						{
						h.coming&&"abort"!==b?h._error("ajax",a):h.hideLoading()
					}
					,success:function(b,c)
						{
						"success"===c&&(a.content=b,h._afterLoad())
					}
				}
				))
			}
			,_loadIframe:function()
				{
				var a=h.coming,b=c(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",k?"auto":a.iframe.scrolling).attr("src",a.href);
				c(a.wrap).bind("onReset",function()
					{
					try
						{
						c(this).find("iframe").hide().attr("src","//about:blank").end().empty()
					}
					catch(a)
						{
					}
				}
				),a.iframe.preload&&(h.showLoading(),b.one("load",function()
					{
					c(this).data("ready",1),k||c(this).bind("load.fb",h.update),c(this).parents(".sca-fancybox-wrap").width("100%").removeClass("sca-fancybox-tmp").show(),h._afterLoad()
				}
				)),a.content=b.appendTo(a.inner),a.iframe.preload||h._afterLoad()
			}
			,_preloadImages:function()
				{
				var e,f,a=h.group,b=h.current,c=a.length,d=b.preload?Math.min(b.preload,c-1):0;
				for(f=1;
				f<=d;
				f+=1)e=a[(b.index+f)%c],"image"===e.type&&e.href&&((new Image).src=e.href)
			}
			,_afterLoad:function()
				{
				var e,f,g,i,j,k,a=h.coming,b=h.current,d="sca-fancybox-placeholder";
				if(h.hideLoading(),a&&h.isActive!==!1)
					{
					if(!1===h.trigger("afterLoad",a,b))return a.wrap.stop(!0).trigger("onReset").remove(),void(h.coming=null);
					switch(b&&(h.trigger("beforeChange",b),b.wrap.stop(!0).removeClass("sca-fancybox-opened").find(".sca-fancybox-item, .sca-fancybox-nav").remove()),h.unbindEvents(),e=a,f=a.content,g=a.type,i=a.scrolling,c.extend(h,
						{
						wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:b
					}
					),j=e.href,g)
						{
						case"inline":case"ajax":case"html":e.selector?f=c("<div>").html(f).find(e.selector):l(f)&&(f.data(d)||f.data(d,c('<div class="'+d+'"></div>').insertAfter(f).hide()),f=f.show().detach(),e.wrap.bind("onReset",function()
							{
							c(this).find(f).length&&f.hide().replaceAll(f.data(d)).data(d,!1)
						}
						));
						break;
						case"image":f=e.tpl.image.replace("{href}",j);
						break;
						case"swf":f='<object id="sca-fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+j+'"></param>',k="",c.each(e.swf,function(a,b)
							{
							f+='<param name="'+a+'"value="'+b+'"></param>',k+=" "+a+'="'+b+'"'
						}
						),f+='<embed src="'+j+'" type="application/x-shockwave-flash" width="100%" height="100%"'+k+"></embed></object>"
					}
					l(f)&&f.parent().is(e.inner)||e.inner.append(f),h.trigger("beforeShow"),e.inner.css("overflow","yes"===i?"scroll":"no"===i?"hidden":i),h._setDimension(),h.reposition(),h.isOpen=!1,h.coming=null,h.bindEvents(),h.isOpened?b.prevMethod&&h.transitions[b.prevMethod]():c(".sca-fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),h.transitions[h.isOpened?e.nextMethod:e.openMethod](),h._preloadImages()
				}
			}
			,_setDimension:function()
				{
				var y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,a=h.getViewport(),b=0,d=!1,e=!1,f=h.wrap,g=h.skin,i=h.inner,j=h.current,k=j.width,l=j.height,m=j.minWidth,o=j.minHeight,r=j.maxWidth,s=j.maxHeight,t=j.scrolling,u=j.scrollOutside?j.scrollbarWidth:0,v=j.margin,w=p(v[1]+v[3]),x=p(v[0]+v[2]);
				if(f.add(g).add(i).width("auto").height("auto").removeClass("sca-fancybox-tmp"),y=p(g.outerWidth(!0)-g.width()),z=p(g.outerHeight(!0)-g.height()),A=w+y,B=x+z,C=n(k)?(a.w-A)*p(k)/100:k,D=n(l)?(a.h-B)*p(l)/100:l,"iframe"===j.type)
					{
					if(L=j.content,j.autoHeight&&1===L.data("ready"))try
						{
						L[0].contentWindow.document.location&&(i.width(C).height(9999),M=L.contents().find("body"),u&&M.css("overflow-x","hidden"),D=M.outerHeight(!0))
					}
					catch(a)
						{
					}
				}
				else(j.autoWidth||j.autoHeight)&&(i.addClass("sca-fancybox-tmp"),j.autoWidth||i.width(C),j.autoHeight||i.height(D),j.autoWidth&&(C=i.width()),j.autoHeight&&(D=i.height()),i.removeClass("sca-fancybox-tmp"));
				if(k=p(C),l=p(D),G=C/D,m=p(n(m)?p(m,"w")-A:m),r=p(n(r)?p(r,"w")-A:r),o=p(n(o)?p(o,"h")-B:o),s=p(n(s)?p(s,"h")-B:s),E=r,F=s,j.fitToView&&(r=Math.min(a.w-A,r),s=Math.min(a.h-B,s)),J=a.w-w,K=a.h-x,j.aspectRatio?(k>r&&(k=r,l=p(k/G)),l>s&&(l=s,k=p(l*G)),k<m&&(k=m,l=p(k/G)),l<o&&(l=o,k=p(l*G))):(k=Math.max(m,Math.min(k,r)),j.autoHeight&&"iframe"!==j.type&&(i.width(k),l=i.height()),l=Math.max(o,Math.min(l,s))),j.fitToView)if(i.width(k).height(l),f.width(k+y),H=f.width(),I=f.height(),j.aspectRatio)for(;
				(H>J||I>K)&&k>m&&l>o&&!(b++>19);
				)l=Math.max(o,Math.min(s,l-10)),k=p(l*G),k<m&&(k=m,l=p(k/G)),k>r&&(k=r,l=p(k/G)),i.width(k).height(l),f.width(k+y),H=f.width(),I=f.height();
				else k=Math.max(m,Math.min(k,k-(H-J))),l=Math.max(o,Math.min(l,l-(I-K)));
				u&&"auto"===t&&l<D&&k+y+u<J&&(k+=u),i.width(k).height(l),f.width(k+y),H=f.width(),I=f.height(),d=(H>J||I>K)&&k>m&&l>o,e=j.aspectRatio?k<E&&l<F&&k<C&&l<D:(k<E||l<F)&&(k<C||l<D),c.extend(j,
					{
					dim:
						{
						width:q(H),height:q(I)
					}
					,origWidth:C,origHeight:D,canShrink:d,canExpand:e,wPadding:y,hPadding:z,wrapSpace:I-g.outerHeight(!0),skinSpace:g.height()-l
				}
				),!L&&j.autoHeight&&l>o&&l<s&&!e&&i.height("auto")
			}
			,_getPosition:function(a)
				{
				var b=h.current,c=h.getViewport(),d=b.margin,e=h.wrap.width()+d[1]+d[3],f=h.wrap.height()+d[0]+d[2],g=
					{
					position:"absolute",top:d[0],left:d[3]
				};
				return b.autoCenter&&b.fixed&&!a&&f<=c.h&&e<=c.w?g.position="fixed":b.locked||(g.top+=c.y,g.left+=c.x),g.top=q(Math.max(g.top,g.top+(c.h-f)*b.topRatio)),g.left=q(Math.max(g.left,g.left+(c.w-e)*b.leftRatio)),g
			}
			,_afterZoomIn:function()
				{
				var a=h.current;
				a&&(h.isOpen=h.isOpened=!0,h.wrap.css("overflow","visible").addClass("sca-fancybox-opened"),h.update(),(a.closeClick||a.nextClick&&h.group.length>1)&&h.inner.css("cursor","pointer").bind("click.fb",function(b)
					{
					c(b.target).is("a")||c(b.target).parent().is("a")||(b.preventDefault(),h[a.closeClick?"close":"next"]())
				}
				),a.closeBtn&&c(a.tpl.closeBtn).appendTo(h.skin).bind("click.fb",function(a)
					{
					a.preventDefault(),h.close()
				}
				),a.arrows&&h.group.length>1&&((a.loop||a.index>0)&&c(a.tpl.prev).appendTo(h.outer).bind("click.fb",h.prev),(a.loop||a.index<h.group.length-1)&&c(a.tpl.next).appendTo(h.outer).bind("click.fb",h.next)),h.trigger("afterShow"),a.loop||a.index!==a.group.length-1?h.opts.autoPlay&&!h.player.isActive&&(h.opts.autoPlay=!1,h.play()):h.play(!1))
			}
			,_afterZoomOut:function(a)
				{
				a=a||h.current,c(".sca-fancybox-wrap").trigger("onReset").remove(),c.extend(h,
					{
					group:
						{
					}
					,opts:
						{
					}
					,router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null
				}
				),h.trigger("afterClose",a)
			}
		}
		),h.transitions=
			{
			getOrigPosition:function()
				{
				var a=h.current,b=a.element,c=a.orig,d=
					{
				}
				,e=50,f=50,g=a.hPadding,i=a.wPadding,j=h.getViewport();
				return!c&&a.isDom&&b.is(":visible")&&(c=b.find("img:first"),c.length||(c=b)),l(c)?(d=c.offset(),c.is("img")&&(e=c.outerWidth(),f=c.outerHeight())):(d.top=j.y+(j.h-f)*a.topRatio,d.left=j.x+(j.w-e)*a.leftRatio),("fixed"===h.wrap.css("position")||a.locked)&&(d.top-=j.y,d.left-=j.x),d=
					{
					top:q(d.top-g*a.topRatio),left:q(d.left-i*a.leftRatio),width:q(e+i),height:q(f+g)
				}
			}
			,step:function(a,b)
				{
				var c,d,e,f=b.prop,g=h.current,i=g.wrapSpace,j=g.skinSpace;
				"width"!==f&&"height"!==f||(c=b.end===b.start?1:(a-b.start)/(b.end-b.start),h.isClosing&&(c=1-c),d="width"===f?g.wPadding:g.hPadding,e=a-d,h.skin[f](p("width"===f?e:e-i*c)),h.inner[f](p("width"===f?e:e-i*c-j*c)))
			}
			,zoomIn:function()
				{
				var a=h.current,b=a.pos,d=a.openEffect,e="elastic"===d,f=c.extend(
					{
					opacity:1
				}
				,b);
				delete f.position,e?(b=this.getOrigPosition(),a.openOpacity&&(b.opacity=.1)):"fade"===d&&(b.opacity=.1),h.wrap.css(b).animate(f,
					{
					duration:"none"===d?0:a.openSpeed,easing:a.openEasing,step:e?this.step:null,complete:h._afterZoomIn
				}
				)
			}
			,zoomOut:function()
				{
				var a=h.current,b=a.closeEffect,c="elastic"===b,d=
					{
					opacity:.1
				};
				c&&(d=this.getOrigPosition(),a.closeOpacity&&(d.opacity=.1)),h.wrap.animate(d,
					{
					duration:"none"===b?0:a.closeSpeed,easing:a.closeEasing,step:c?this.step:null,complete:h._afterZoomOut
				}
				)
			}
			,changeIn:function()
				{
				var g,a=h.current,b=a.nextEffect,c=a.pos,d=
					{
					opacity:1
				}
				,e=h.direction,f=200;
				c.opacity=.1,"elastic"===b&&(g="down"===e||"up"===e?"top":"left","down"===e||"right"===e?(c[g]=q(p(c[g])-f),d[g]="+="+f+"px"):(c[g]=q(p(c[g])+f),d[g]="-="+f+"px")),"none"===b?h._afterZoomIn():h.wrap.css(c).animate(d,
					{
					duration:a.nextSpeed,easing:a.nextEasing,complete:h._afterZoomIn
				}
				)
			}
			,changeOut:function()
				{
				var a=h.previous,b=a.prevEffect,d=
					{
					opacity:.1
				}
				,e=h.direction,f=200;
				"elastic"===b&&(d["down"===e||"up"===e?"top":"left"]=("up"===e||"left"===e?"-":"+")+"="+f+"px"),a.wrap.animate(d,
					{
					duration:"none"===b?0:a.prevSpeed,easing:a.prevEasing,complete:function()
						{
						c(this).trigger("onReset").remove()
					}
				}
				)
			}
		}
		,h.helpers.overlay=
			{
			defaults:
				{
				closeClick:!0,speedOut:200,showEarly:!0,css:
					{
				}
				,locked:!k,fixed:!0
			}
			,overlay:null,fixed:!1,el:c("html"),create:function(a)
				{
				a=c.extend(
					{
				}
				,this.defaults,a),this.overlay&&this.close(),this.overlay=c('<div class="sca-fancybox-overlay"></div>').appendTo(h.coming?h.coming.parent:a.parent),this.fixed=!1,a.fixed&&h.defaults.fixed&&(this.overlay.addClass("sca-fancybox-overlay-fixed"),this.fixed=!0)
			}
			,open:function(a)
				{
				var b=this;
				a=c.extend(
					{
				}
				,this.defaults,a),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a),this.fixed||(f.bind("resize.overlay",c.proxy(this.update,this)),this.update()),a.closeClick&&this.overlay.bind("click.overlay",function(a)
					{
					if(c(a.target).hasClass("sca-fancybox-overlay"))return h.isActive?h.close():b.close(),!1
				}
				),this.overlay.css(a.css).show()
			}
			,close:function()
				{
				var a,b;
				f.unbind("resize.overlay"),this.el.hasClass("sca-fancybox-lock")&&(c(".sca-fancybox-margin").removeClass("sca-fancybox-margin"),a=f.scrollTop(),b=f.scrollLeft(),this.el.removeClass("sca-fancybox-lock"),f.scrollTop(a).scrollLeft(b)),c(".sca-fancybox-overlay").remove().hide(),c.extend(this,
					{
					overlay:null,fixed:!1
				}
				)
			}
			,update:function()
				{
				var c,a="100%";
				this.overlay.width(a).height("100%"),i?(c=Math.max(b.documentElement.offsetWidth,b.body.offsetWidth),g.width()>c&&(a=g.width())):g.width()>f.width()&&(a=g.width()),this.overlay.width(a).height(g.height())
			}
			,onReady:function(a,b)
				{
				var d=this.overlay;
				c(".sca-fancybox-overlay").stop(!0,!0),d||this.create(a),a.locked&&this.fixed&&b.fixed&&(d||(this.margin=g.height()>f.height()&&c("html").css("margin-right").replace("px","")),b.locked=this.overlay.append(b.wrap),b.fixed=!1),a.showEarly===!0&&this.beforeShow.apply(this,arguments)
			}
			,beforeShow:function(a,b)
				{
				var d,e;
				b.locked&&(this.margin!==!1&&(c("*").filter(function()
					{
					return"fixed"===c(this).css("position")&&!c(this).hasClass("sca-fancybox-overlay")&&!c(this).hasClass("sca-fancybox-wrap")
				}
				).addClass("sca-fancybox-margin"),this.el.addClass("sca-fancybox-margin")),d=f.scrollTop(),e=f.scrollLeft(),this.el.addClass("sca-fancybox-lock"),f.scrollTop(d).scrollLeft(e)),this.open(a)
			}
			,onUpdate:function()
				{
				this.fixed||this.update()
			}
			,afterClose:function(a)
				{
				this.overlay&&!h.coming&&this.overlay.fadeOut(a.speedOut,c.proxy(this.close,this))
			}
		}
		,h.helpers.title=
			{
			defaults:
				{
				type:"float",position:"bottom"
			}
			,beforeShow:function(a)
				{
				var f,g,b=h.current,d=b.title,e=a.type;
				if(c.isFunction(d)&&(d=d.call(b.element,b)),m(d)&&""!==c.trim(d))
					{
					switch(f=c('<div class="sca-fancybox-title sca-fancybox-title-'+e+'-wrap">'+d+"</div>"),e)
						{
						case"inside":g=h.skin;
						break;
						case"outside":g=h.wrap;
						break;
						case"over":g=h.inner;
						break;
						default:g=h.skin,f.appendTo("body"),i&&f.width(f.width()),f.wrapInner('<span class="child"></span>'),h.current.margin[2]+=Math.abs(p(f.css("margin-bottom")))
					}
					f["top"===a.position?"prependTo":"appendTo"](g)
				}
			}
		}
		,c.fn.scafancybox=function(a)
			{
			var b,d=c(this),e=this.selector||"",f=function(f)
				{
				var j,k,g=c(this).blur(),i=b;
				f.ctrlKey||f.altKey||f.shiftKey||f.metaKey||g.is(".sca-fancybox-wrap")||(j=a.groupAttr||"data-sca-fancybox-group",k=g.attr(j),k||(j="rel",k=g.get(0)[j]),k&&""!==k&&"nofollow"!==k&&(g=e.length?c(e):d,g=g.filter("["+j+'="'+k+'"]'),i=g.index(this)),a.index=i,h.open(g,a)!==!1&&f.preventDefault())
			};
			return a=a||
				{
			}
			,b=a.index||0,e&&a.live!==!1?g.undelegate(e,"click.fb-start").delegate(e+":not('.sca-fancybox-item, .sca-fancybox-nav')","click.fb-start",f):d.unbind("click.fb-start").bind("click.fb-start",f),this.filter("[data-sca-fancybox-start=1]").trigger("click"),this
		}
		,c.fn.scashowLoading=function()
			{
			h.showLoading()
		}
		,c.fn.scahideLoading=function()
			{
			h.hideLoading()
		}
		,g.ready(function()
			{
			var b,f;
			c.scrollbarWidth===d&&(c.scrollbarWidth=function()
				{
				var a=c('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),d=b.innerWidth()-b.height(99).innerWidth();
				return a.remove(),d
			}
			),c.support.fixedPosition===d&&(c.support.fixedPosition=function()
				{
				var a=c('<div style="position:fixed;top:20px;"></div>').appendTo("body"),b=20===a[0].offsetTop||15===a[0].offsetTop;
				return a.remove(),b
			}
			()),c.extend(h.defaults,
				{
				scrollbarWidth:c.scrollbarWidth(),fixed:c.support.fixedPosition,parent:c("body")
			}
			),b=c(a).width(),e.addClass("sca-fancybox-lock-test"),f=c(a).width(),e.removeClass("sca-fancybox-lock-test"),c("<style type='text/css'>.sca-fancybox-margin{margin-right:"+(f-b)+"px;}</style>").appendTo("head")}
		)
	}
	function preloadQV(a,b)
		{
		var c=b.attr("handle");
		return a.ajax(
			{
			dataType:"json",url:"/products/"+c+".js"
		}
		).done(function(a)
			{
			SCAShopify.preload(a.images,"large"),SCAShopify.preload(a.images)
		}
		)
	}
	function findQVContainer(a,b)
		{
		return a('a[href*="/products/"]',b.parent()).has('img[src*="/products/"] , img[src*="/no-image"]').length>1||b.parent().width()-b.width()>50?b:findQVContainer(a,b.parent())
	}
	function loadData(a,b)
		{
		collection_handle=b.collection_handle,
        "yes"==b.autoconfig&&initQuickViewContent(a),
        scaqvFancybox(window,document,a,void 0),
        scaqvImageZoom(a,window,document,void 0);
		var c=b.jsondata;
		return moneyFormat=b.moneyFormat,
        console.log("collection_handle : "+collection_handle),
        noimage=b.noimage,console.log("no image : "+noimage),
        add_to_cart_text=a(".sca-qv-cartbtn").val(),
        a("#sca-qv-unavailable").length&&(unavailable_text=a("#sca-qv-unavailable").text()),b.overlay_lock&&(overlay_lock=b.overlay_lock),
        settings={
          "bnt_color": "",
          "bnt_color_hover": "",
          "bnt_possition": "",
          "bnt_text": "",
          "bnt_text_color": "",
          "bnt_text_font": "",
          "bnt_text_fontsize": "",
          "bnt_text_hover": "",
          "cart_color": "",
          "cart_go": "no",
          "cart_notify_add_format": "",
          "cart_notify_in_format": "",
          "cart_total": "#cartid-need-to-reload",
          "cartcount": "#cart-count|#minicart #cart-target-desktop|#drawer .container|.wrapper .header-cart-btn|#cart-total #cart-price|#cart-count .no-underline|.fr .cart .total_price|.unstyled .fr .cart|.wrapper #cartToggle|#umbrella .cart-link .icon|#mini-cart #cart-target|.toolbar-wrapper .unstyled",
          "img_main_width": "2048px",
          "is_rated": false,
          "link_color": "",
          "price_color": "",
          "qv_disable": "off",
          "rate_comment": "",
          "rate_score": 0,
          "sale_icon_color": "",
          "title_color": "",
          "wd_height": "800",
          "wd_width": "1000"
        },
        (SCASettings.loadSettings(a,settings),!0)
	}
	function createCartForm(a,b,c)
		{
		var d=a("#sca-qv-add-item-form",c);
		if(0!=d.length)
			{
			var e=a(".sca-qv-product-options",d),f=a("#sca-qv-variant-options",e);
			f.empty(),f.append('<div > <select id="sca-qv-product-selected" name="id" class="sca-qv-hidden"> </select> </div>');
			var g=a("#sca-qv-product-selected",f);
			g.empty();
			var h=b.variants,i=!1;
			a.each(h,function(a,b)
				{
				var c="";
				b.available&&0==i&&(i=!0,c='selected="selected"'),g.append('<option value="'+b.id+'" '+c+">"+b.title+" - "+SCAShopify.formatMoney(b.price,moneyFormat)+"</option>")
			}
			),a("#sca-qv-quantity",c).val("1"),a("#sca-qv-sold-out").addClass("sca-qv-hidden"),b.available?(a(".sca-qv-cartbtn").removeClass("sca-qv-hidden"),a(".sca-qv-cartbtn").removeClass("disabled").removeAttr("disabled").val(add_to_cart_text)):(a(".sca-qv-cartbtn").removeClass("sca-qv-hidden"),a(".sca-qv-cartbtn").val(a("#sca-qv-sold-out").text()).addClass("disabled").attr("disabled","disabled")),formatVariantOption(a,b)
		}
	}
	function showIfProductAdd(a,b)
		{
		a.inArray(b,list_cart_variants)!=-1&&(a("#sca-qv-addcart-msg").html(product_in_cart),a("#sca-qv-addcart-msg").fadeIn(1e3))
	}
	function convert_currency()
		{
		try
			{
			"undefined"!=typeof Currency&&"undefined"!=typeof Currency.convertAll&&Currency.convertAll(Currency.shopCurrency,Currency.currentCurrency)
		}
		catch(a)
			{
			console.log(a)
		}
	}
	function formatVariantOption(a,b)
		{
		var c=function(b,c)
			{
			a("#sca-qv-addcart-msg").hide();
			var d="";void 0!=settings.price_color&&null!=settings.price_color&&(d=settings.price_color);
			var e=a("#sca-qv-showqv");
			b?(b.available?(showIfProductAdd(a,b.id),a(".sca-qv-cartbtn").removeClass("disabled").removeAttr("disabled").val(add_to_cart_text)):a(".sca-qv-cartbtn").val(a("#sca-qv-sold-out").text()).addClass("disabled").attr("disabled","disabled"),b.compare_at_price>b.price?a(".sca-qv-price-container",e).html('<span class="sca-qv-product-price" style="color:'+d+' !important;">'+SCAShopify.formatMoney(b.price,moneyFormat)+'&nbsp;<del class="sca-qv-product-compare-price">'+SCAShopify.formatMoney(b.compare_at_price,moneyFormat)+"</del></span>"):a(".sca-qv-price-container",e).html('<span class="sca-qv-product-price"  style="color:'+d+' !important;">'+SCAShopify.formatMoney(b.price,moneyFormat)+"</span>")):a(".sca-qv-cartbtn").val(unavailable_text).addClass("disabled").attr("disabled","disabled")},d=a("#sca-qv-showqv");
		try
			{
			new Shopify.OptionSelectors("sca-qv-product-selected",
				{
				product:b,onVariantSelected:c
			}
			)
		}
		catch(a)
			{
			console.log(a)
		}
		1==b.options.length&&"Title"!=b.options[0]&&a(".selector-wrapper:eq(0)",d).prepend("<label>"+b.options[0]+"</label>");
		var e=!1,f=b.variants;
		a.each(f,function(c,f)
			{
			if(f.available&&0==e)
				{
				e=!0;
				var g=b.options;
				a.each(g,function(b,c)
					{
					a(".single-option-selector:eq("+b+")",d).val(f.options[b]).trigger("change")
				}
				)
			}
		}
		),a("#sca-qv-variant-options").removeClass("sca-qv-hidden"),1==b.variants.length&&b.variants[0].title.indexOf("Default")>-1&&a("#sca-qv-variant-options").addClass("sca-qv-hidden")
	}
	function truncate(a,b)
		{
		var c=a("<div/>").html(b);
		b=c.text(),b=b.replace(/\r?\n/g,""),b=b.replace(/<!--\n?.*\n?-->/,"");
		var d=b.split(" "),e=30,f=d.length>e,b=f?d.splice(0,e).join(" ")+"...":b;
		return b
	}
	function createDesc(a,b,c)
		{
		var d=a("#sca-qv-des",c);
		d.empty(),d.html(b.description),d.text(a,d.text()),d.append('<div class="clear-both"></div')
	}
	function createDetail(a,b,c,d)
		{
		var e=a("#sca-qv-detail",c);
		null!=collection_handle?e.attr("href",d.replace(".js","")):e.attr("href","/products/"+b.handle)
	}
	function createPrice(a,b,c)
		{
		var d=a("#sca-qv-price-container",c);
		d.empty(),b.compare_at_price>b.price?(a("#sca-qv-sale").removeClass("sca-qv-hidden"),d.append('<span class="sca-qv-product-price ">'+SCAShopify.formatMoney(b.price,moneyFormat)+'&nbsp;<del class="sca-qv-product-compare-price">'+SCAShopify.formatMoney(b.compare_at_price,moneyFormat)+"</del>  </span>")):d.append('<span class="sca-qv-product-price ">'+SCAShopify.formatMoney(b.price,moneyFormat)+"</span>")
	}
	function createTitle(a,b,c)
		{
		var d=a("#sca-qv-title",c);
		d.empty(),d.append("<strong>"+b.title+"</strong>")
	}
	function createGallery(a,b,c)
		{
		var d=a("#sca-qv-galleryid",c);
		d.empty();
		var e=b.images,
            f=parseInt(settings.img_main_width,10),
            g=(f-8)/4;
		e.length>1&&(
          a.each(e,function(b,c){
              if(b > 0){
                createZoomGallery(a,d,c,g)
              }
          }
		))
	}
	function createZoomGallery(a,b,c,d)
		{
		var f='<a href="#" data-image="'+SCAShopify.resizeImage(c,"large")+'" data-zoom-image="'+SCAShopify.resizeImage(c,"original")+'"  class="sca-qv-gallery-a" > <img src="'+SCAShopify.resizeImage(c,"large")+'" class="sca-qv-gallery-img" /> </a>';
		b.append(f)
	}
	function createZoomContainer(a,b,c)
		{
		var d=a("#sca-qv-zoomcontainer",c);
		d.empty();
		var e=noimage;
		null!=b.featured_image&&(e=b.featured_image),d.append('<img id="sca-qv-zoomImg" src="'+SCAShopify.resizeImage(e,"original")+'" alt="" />')
	}
	function cleanTemplate(a,b)
		{
		var c=a("#sca-qv-zoomcontainer",b);
		c.empty();
		var d=a("#sca-qv-galleryid",b);
		d.empty();
		var e=a("#sca-qv-title",b);
		e.empty();
		var f=a("#sca-qv-price-container",b);
		f.empty();
		var g=a("#sca-qv-des",b);
		g.empty();
		var h=a("#sca-qv-add-item-form",b),i=a(".sca-qv-product-options",h),j=a("#sca-qv-variant-options",i);
		j.empty();
		var k=a("#sca-qv-product-selected",j);
		k.empty()
	}
	function preloadQV(a,b)
		{
		var c,d=a(".sca-qv-button");
		if(b>-1&&d.length>b)
			{
			c=d.eq(b),console.log(c);
			var e=c.attr("handle");
			a.ajax(
				{
				dataType:"json",url:"/products/"+e+".js"
			}
			).done(function(a)
				{
				SCAShopify.preload(a.images,"large"),SCAShopify.preload(a.images)
			}
			)
		}
	}
	function preloadNearItem(a,b)
		{
		var c=a(".sca-qv-button").index(b);
		preloadQV(a,c-1),preloadQV(a,c+1)
	}
	function buyx_product_json(a,b)
		{
		for(var c=[],d=-1,e=0,f=b.options.length;
		e<f;
		e++)if("BuyXDiscount"==b.options[e])
			{
			d=e+1;
			break
		}
		if(d==-1)return b;
		b.options.length>1?b.options.splice(d-1,1):b.options[0]="Title",d="option"+d,b.available=!1;
		for(var g=0,h=b.variants.length;
		g<h;
		g++)"Default"==b.variants[g][d]&&(b.variants[g][d]="",c.push(b.variants[g]),b.available=b.available||b.variants[g].available);
		return b.variants=c,b
	}
	function executeFunctionByName(a,b)
		{
		for(var c=Array.prototype.slice.call(arguments,2),d=a.split("."),e=d.pop(),f=0;
		f<d.length;
		f++)b=b[d[f]];
		return b[e].apply(b,c)
	}
	"undefined"==typeof SCAShopify&&(SCAShopify=
		{
	}
	),SCAShopify.preload=function(a,b)
		{
		for(var c=0;
		c<a.length;
		c++)
			{
			var d=a[c];
			SCAShopify.loadImage(SCAShopify.getSizedImageUrl(d,b))
		}
	}
	,SCAShopify.loadImage=function(a)
		{
		(new Image).src=a
	}
	,SCAShopify.getSizedImageUrl=function(a,b)
		{
		if(null==b)return a;
		if("master"==b)return SCAShopify.removeProtocol(a);
		var c=a.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
		if(null!=c)
			{
			var d=a.split(c[0]),e=c[0];
			return SCAShopify.removeProtocol(d[0]+"_"+b+e)
		}
		return null
	}
	,SCAShopify.removeProtocol=function(a)
		{
		return a.replace(/http(s)?:/,"")
	};
	for(var method,noop=function()
		{
	}
	,methods=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],length=methods.length,console=window.console=window.console||
		{
	};
	length--;
	)method=methods[length],console[method]||(console[method]=noop);
	SCAShopify.money_format="${{amount}}",SCAShopify.formatMoney=function(a,b)
		{
		function f(a,b)
			{
			return"undefined"==typeof a?b:a
		}
		function g(a,b,c,d)
			{
			if(b=f(b,2),c=f(c,","),d=f(d,"."),isNaN(a)||null==a)return 0;
			a=(a/100).toFixed(b);
			var e=a.split("."),g=e[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+c),h=e[1]?d+e[1]:"";
			return g+h
		}
		if("undefined"!=typeof Shopify&&"undefined"!=typeof Shopify.formatMoney)return Shopify.formatMoney(a,b);
		"string"==typeof a&&(a=a.replace(".",""));
		var c="",d=/\{\{\s*(\w+)\s*\}\}/,e=b||this.money_format;
		switch(e.match(d)[1])
			{
			case"amount":c=g(a,2);
			break;
			case"amount_no_decimals":c=g(a,0);
			break;
			case"amount_with_comma_separator":c=g(a,2,".",",");
			break;
			case"amount_no_decimals_with_comma_separator":c=g(a,0,".",",")
		}
		return e.replace(d,c)
	}
	,SCAShopify.resizeImage=function(a,b)
		{
		try
			{
			if("original"==b)return a;
			var c=a.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);
			return c[1]+"_"+b+"."+c[2]
		}
		catch(b)
			{
			return a
		}
	};
	var loadjscssfile=function(a,b)
		{
		if("js"==b)
			{
			var c=document.createElement("script");
			c.setAttribute("type","text/javascript"),c.setAttribute("src",a)
		}
		else if("css"==b)
			{
			var c=document.createElement("link");
			c.setAttribute("rel","stylesheet"),c.setAttribute("type","text/css"),c.setAttribute("href",a)
		}
		"undefined"!=typeof c&&document.getElementsByTagName("head")[0].appendChild(c)
	}
	,list_cart_variants=[],SCASettings=
		{
		loadSettings:function(a,b)
			{
			a("#sca-qv-cartform .sca-qv-product-options").append('<div id="sca-qv-addcart-msg" class="sca-qv-addcart-msg" style="position: absolute !important;margin-top:15px"></div>'),void 0!=b.cart_notify_add_format&&void 0!=b.cart_notify_in_format&&(product_in_cart=b.cart_notify_add_format.replace("*",'<a href="/cart"  class="sca-qv-msg-cart-link">').replace("%","</a>"),product_added=b.cart_notify_in_format.replace("*",'<a href="/cart"  class="sca-qv-msg-cart-link">').replace("%","</a>"));
			var c=".fancyox-view-detail .zoomWrapper img {max-width:"+b.img_main_width+" !important ;max-height:"+b.img_main_width+" !important ;}",d=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");
			if(void 0!=b.cart_color)
				{
				var f=" a.sca-qv-cartbtn-config, input.sca-qv-cartbtn-config {background:none repeat scroll 0 0 "+b.cart_color+" !important;}";
				c+=f,a(".sca-qv-cartbtn").addClass("sca-qv-cartbtn-config")
			}
			if(void 0!=b.sale_icon_color)
				{
				var g="  .sca-qv-sale-settings {background-color:"+b.sale_icon_color+" !important;}";
				c+=g,a("#sca-qv-sale").addClass("sca-qv-sale-settings")
			}
			if(void 0!=b.link_color)
				{
				var g="  #sca-qv-right a {color:"+b.link_color+";}";
				c+=g
			}
			if(void 0!=b.title_color)
				{
				var g="  #sca-qv-title strong {color:"+b.title_color+";}";
				c+=g
			}
			e.type="text/css",e.styleSheet?e.styleSheet.cssText=c:e.appendChild(document.createTextNode(c)),d.appendChild(e);
			var h=a(".sca-qv-button"),i=h.parent();
			i.parent().addClass("sca-qv-image"),
            h.text(b.bnt_text)
		}
	}
	,SCABase64=
		{
		_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a)
			{
			var c,d,e,f,g,h,i,b="",j=0;
			for(a=SCABase64._utf8_encode(a);
			j<a.length;
			)c=a.charCodeAt(j++),d=a.charCodeAt(j++),e=a.charCodeAt(j++),f=c>>2,g=(3&c)<<4|d>>4,h=(15&d)<<2|e>>6,i=63&e,isNaN(d)?h=i=64:isNaN(e)&&(i=64),b=b+this._keyStr.charAt(f)+this._keyStr.charAt(g)+this._keyStr.charAt(h)+this._keyStr.charAt(i);
			return b
		}
		,decode:function(a)
			{
			var c,d,e,f,g,h,i,b="",j=0;
			for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");
			j<a.length;
			)f=this._keyStr.indexOf(a.charAt(j++)),g=this._keyStr.indexOf(a.charAt(j++)),h=this._keyStr.indexOf(a.charAt(j++)),i=this._keyStr.indexOf(a.charAt(j++)),c=f<<2|g>>4,d=(15&g)<<4|h>>2,e=(3&h)<<6|i,b+=String.fromCharCode(c),64!=h&&(b+=String.fromCharCode(d)),64!=i&&(b+=String.fromCharCode(e));
			return b=SCABase64._utf8_decode(b)
		}
		,_utf8_encode:function(a)
			{
			a=a.replace(/\r\n/g,"\n");
			for(var b="",c=0;
			c<a.length;
			c++)
				{
				var d=a.charCodeAt(c);
				d<128?b+=String.fromCharCode(d):d>127&&d<2048?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))
			}
			return b
		}
		,_utf8_decode:function(a)
			{
			for(var b="",c=0,d=c1=c2=0;
			c<a.length;
			)d=a.charCodeAt(c),d<128?(b+=String.fromCharCode(d),c++):d>191&&d<224?(c2=a.charCodeAt(c+1),b+=String.fromCharCode((31&d)<<6|63&c2),c+=2):(c2=a.charCodeAt(c+1),c3=a.charCodeAt(c+2),b+=String.fromCharCode((15&d)<<12|(63&c2)<<6|63&c3),c+=3);
			return b
		}
	}
	,settings,moneyFormat,add_to_cart_text,unavailable_text="Unavailable",noimage,overlay_lock=!1,loadScript=function(a,b)
		{
		var c=document.createElement("script");
		c.type="text/javascript",c.readyState?c.onreadystatechange=function()
			{
			"loaded"!=c.readyState&&"complete"!=c.readyState||(c.onreadystatechange=null,b())
		}
		:c.onload=function()
			{
			b()
		}
		,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)
	}
	,initQuickViewContent=function(a)
		{
		for(var b='<div class="sca-qv-button-wrap"><a class="sca-qv-button"  href="#sca-qv-showqv" handle="?" ></a></div>',c=a('a[href*="/products/"]:not([href*=".jp"]):not(form a[href*="/products/"]):not(.related-products a[href*="/products/"]):not(.not-sca-qv a[href*="/products/"]):not([href*=".JP"]):not([href*=".png"]):not([href*=".PNG"])').has('img[src*="/products/"]:not([class*="not-sca-qv"]), img[src*="/no-image"]'),d=0;
		d<c.length;
		++d)
			{
			var e=c.eq(d),f=e.attr("href").split("/"),g=f[f.length-1].split("?")[0];
			null!=collection_handle&&(g=e.attr("href").split("?")[0]+".js");
			var h=e.parent();
			try
				{
				h=findQVContainer(a,e.parent())
			}
			catch(a)
				{
				console.log("error when get product container "),console.log(a)
			}
			void 0!=h&&null!=h||(h=e.parent()),0==a(".sca-qv-button",h).length&&h.append(b.replace("?",g))
		}
	}
	,product_in_cart='This product in <a href="/cart"  class="sca-qv-msg-cart-link">cart</a> already.',product_added='Item added to cart! <a href="/cart"  class="sca-qv-msg-cart-link">View Cart</a>.',collection_handle,initSettings=function(a)
		{
		a=SCAShopify.jQuery,loadProductFromCart(a);
		var b=!1;
		return a.ajax(
			{
			dataType:"json",url:"/index?view=sca.quickviewpro",contentType:"application/json;charset=utf-8",success:function(c){
				b=loadData(a,c),b&&(onAddCartClicked(a),displayQuickView(a))
			}
			,error:function()
				{
				console.log("cant  load metadata and try with html");
				var c=a("#scaqv-metadata");
				if(c.length<1)return!1;
				var d=
					{
				};
				d.jsondata=c.attr("jsondata"),d.moneyFormat=c.attr("moneyFormat"),d.noimage=c.attr("noimage"),d.autoconfig=c.attr("autoconfig"),b=loadData(a,d),b&&(onAddCartClicked(a),displayQuickView(a))
			}
		}
		),b
	}
	,getProductJson=function(a,b,c)
		{
		var d;
		return d=null!=collection_handle?b:"/products/"+b+".js",a.ajax(
			{
			type:"GET",dataType:"json",url:d,success:function(a)
				{
				c(SCAShopify.jQuery,a)
			}
		}
		).responseText
	}
	,freegifts_filter=function(a)
		{
		if(a)
			{
			String.prototype.endsWith||Object.defineProperty(String.prototype,"endsWith",
				{
				value:function(a,b)
					{
					var c=this.toString();
					(void 0===b||b>c.length)&&(b=c.length),b-=a.length;
					var d=c.indexOf(a,b);
					return-1!==d&&d===b
				}
			}
			);
			for(var b=function(a)
				{
				for(var b in a)if(a.hasOwnProperty(b))return!1;
				return!0
			}
			,c=a.price,d=a.price_max,e=a.price_min,f=a.compare_at_price,g=a.compare_at_price_max,h=a.compare_at_price_min,i=0;
			i<a.variants.length;
			i++)
				{
				var j=a.variants[i],k=null!==j.option3?j.option3:null!==j.option2?j.option2:j.option1;
				"undefined"!=typeof SECOMAPP&&"undefined"!=typeof SECOMAPP.gifts_list_avai&&!b(SECOMAPP.gifts_list_avai)&&"undefined"!=typeof SECOMAPP.gifts_list_avai[j.id]||k.endsWith("(Freegifts)")||k.endsWith("% off)")?(a.variants.splice(i,1),i-=1):(d>=j.price&&(d=j.price,c=j.price),e<=j.price&&(e=j.price),j.compare_at_price&&(g>=j.compare_at_price&&(g=j.compare_at_price,f=j.compare_at_price),h<=j.compare_at_price&&(h=j.compare_at_price)),1==j.available&&(a.available=!0))
			}
			a.price=c,a.price_max=e,a.price_min=d,a.compare_at_price=f,a.compare_at_price_max=h,a.compare_at_price_min=g,a.price_varies=e>d,a.compare_at_price_varies=h>g
		}
		return a
	}
	,callbackQV=function(a,b)
		{
		var c=[];
		a.each(b.options,function(a,b)
			{
			c[a]=b.name
		}
		),b.options=c;
		try
			{
			b=freegifts_filter(b),b=buyx_product_json(a,b)
		}
		catch(a)
			{
			console.log(a)
		}
		var d=a("#sca-qv-left");
		createZoomContainer(a,b,d),
        createGallery(a,b,d),
        SCAShopify.preload(b.images),
        SCAShopify.preload(b.images,"large");
		var e=a("#sca-qv-right");
		createTitle(a,b,e),
        createPrice(a,b,e),
        createDesc(a,b,e),
        createDetail(a,b,e,b.handle),
        createCartForm(a,b,e);
		var f=new Image;
		f.onload=function()
			{
			var b=f.height,c=10,d=setInterval(function()
				{
				f=new Image,f.src=a("#sca-qv-zoomImg").attr("src"),b=f.height,--c,(0==c||b>0)&&(window.clearInterval(d),zoomAllProduct(a),a("#sca-qv-zoomcontainer").outerHeight()<a("#sca-qv-zoomImg").outerHeight()&&a("#sca-qv-zoomcontainer").height(a("#sca-qv-zoomImg").outerHeight()),"auto"==settings.wd_width||"auto"==settings.wd_height?a.scafancybox.scaupdate():(a("#sca-qv-right").outerHeight()>a("#sca-qv-left").outerHeight()&&a("#sca-qv-left").outerHeight(a("#sca-qv-right").outerHeight()),a.scafancybox.hideLoading()))
			}
			,300)
		}
		,f.onerror=function()
			{
			console.error("Cannot load image"),a.scafancybox.hideLoading()
		}
		,f.src=a("#sca-qv-zoomImg").attr("src"),a("#sca-qv-right").outerHeight()>a(".sca-fancybox-inner").outerHeight()&&(a("#sca-qv-left").outerHeight(""),a("#sca-qv-left").height(""),a("#sca-qv-right").outerHeight(""),a("#sca-qv-right").height(""),a(".sca-fancybox-inner").css("overflow","auto"));
		try
			{
			a("#sca-qv-showqv").hasClass("sca-bm")&&(a(".sca-fancybox-outer").append(''),a("#sca-brankmark a").click(function(a)
				{
				a.preventDefault()
			}
			))
		}
		catch(a)
			{
		}
	}
	,displayQuickView=function(a)
		{
		a=SCAShopify.jQuery;
		var b=!1,c=9999,d=9999,e=parseInt(settings.wd_width,10)||720,f=parseInt(settings.wd_height,10)||200;
		"auto"!=settings.wd_width&&"auto"!=settings.wd_height||(b=!0,c=e),"auto"!=settings.wd_height&&(d=f),a(".sca-qv-button").scafancybox({
			arrows:!1,openEffect:"elastic",scrolling:"no",maxHeight:d,maxWidth:c,autoSize:b,minHeight:f,minWidth:e,title:null,helpers:
				{
				overlay:
					{
					locked:overlay_lock
				}
			}
			,beforeLoad:function()
				{
				loadProductFromCart(a),cleanTemplate(a,a("#sca-qv-showqv")),a("#sca-qv-addcart-msg").hide(),a("#sca-qv-sale").addClass("sca-qv-hidden")
			}
			,afterShow:function()
				{
				var b=a(this.element);
				b.scashowLoading();
				var c,d=b.attr("handle");
				if(void 0!=d)
					{
					getProductJson(a,a.trim(d),callbackQV)
				}
				else if(a('span[class="sca-qv-handle"]',b.parent()).length>0)
					{
					d=a('span[class="sca-qv-handle"]',b.parent());
					getProductJson(a,a.trim(d.html()),callbackQV)
				}
				else d=a("span",b.parent()),c=a.parseJSON(a.trim(d.html()))
			}
			,afterClose:function()
				{
				a.scafancybox.hideLoading()
			}
		})
	}
	,zoomAllProduct=function(a)
		{
		function b(a)
			{
			a("#sca-qv-zoomImg").elevateZoom(
				{
				gallery:"sca-qv-galleryid",zoomWindowOffetx:10,borderSize:1,scrollZoom:!0,cursor:"pointer"
			}
			)
		}
		b(a)
	}
	,onAddCartClicked=function($)
		{
		function updateCartcount(a)
			{
			var b=parseInt($('[name="quantity"]',a).val(),10)||1,c=parseInt($(settings.cartcount).text(),10)||0,d=c+b;
			return $(settings.cartcount).text(d),$(settings.cartcount).show(),b
		}
		function updateCartTotal()
			{
			$.getJSON("/cart.js",function(a)
				{
				$(settings.cart_total).html(SCAShopify.formatMoney(a.total_price,moneyFormat)),$(settings.cart_total).show()
			}
			)
		}
		function updateCart(a,b)
			{
			console.log(b),$.ajax(
				{
				type:"get",cache:!1,async:!1,url:b,success:function(b)
					{
					var c=$("<div/>").html(b);
					$.each(a.split("|"),function(a,b)
						{
						var d=$.trim(b),e=$(d,c);
						$(d).empty(),$(d).append(e.html())
					}
					)
				}
				,error:function()
					{
					console.log("add to cart error")
				}
			}
			)
		}
		function addItem(a,b)
			{
			$.ajax(
				{
				type:"POST",url:"/cart/add.js",dataType:"json",data:b.serialize(),success:scaonSuccess(b),error:scaonError
			}
			).done(function(a)
				{
				if("undefined"==typeof Shopify.getCart)
					{
					var b=window.location.protocol+"//"+window.location.host+window.location.pathname,c=settings.cartcount+"|"+settings.cart_total;
					updateCart(c,b)
				}
				else try
					{
					Shopify.getCart(function()
						{
						var a=window.location.protocol+"//"+window.location.host+window.location.pathname,b=settings.cartcount+"|"+settings.cart_total;
						updateCart(b,a)
					}
					)
				}
				catch(a)
					{
					var b=window.location.protocol+"//"+window.location.host+window.location.pathname,c=settings.cartcount+"|"+settings.cart_total;
					updateCart(c,b)
				}
			}
			)
		}
		$(".sca-qv-cartbtn").click(function(a)
			{
			if("no"==settings.cart_go)
				{
				var b=$(this),c=$("#sca-qv-add-item-form");
				$(b).prop("disabled",!0),a.preventDefault(),addItem("sca-qv-add-item-form",c)
			}
			else
				{
				var c=$("#sca-qv-add-item-form");
				c.attr("action","/cart/add"),c.submit()
			}
		}
		);
		var scaonSuccess=function(a)
			{
			$("#sca-qv-addcart-msg").hide(),$("#sca-qv-addcart-msg").html(product_added),$("#sca-qv-addcart-msg").fadeIn(700,function()
				{
				var b=$(".sca-qv-cartbtn",a);
				b.removeAttr("disabled")
			}
			)
		}
		,scaonError=function(XMLHttpRequest,textStatus)
			{
			var data=eval("("+XMLHttpRequest.responseText+")");
			data.message?alert(data.message+"("+data.status+"): "+data.description):alert("Error : "+scafullMessagesFromErrors(data).join(";")+"."),$(".sca-qv-cartbtn").removeAttr("disabled")
		}
		,scafullMessagesFromErrors=function(a)
			{
			var b=[];
			return $.each(a,function(a,c)
				{
				$.each(c,function(c,d)
					{
					b.push(a+" "+d)
				}
				)
			}
			),b
		}
	}
	,$checkVersion=function(a,b)
		{
		try
			{
			var c=a.split("."),d=b.split("."),e=1e8*parseInt(c[0])+1e6*parseInt(c[1])+1e4*parseInt(c[2]),f=1e8*parseInt(d[0])+1e6*parseInt(d[1])+1e4*parseInt(d[2]);
			return e>f?1:e<f?-1:0
		}
		catch(a)
			{
			console.log(a)
		}
		return 1
	};
	console.log("load jquery 1.11"),loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",function()
		{
		jQuery191=jQuery.noConflict(!0),SCAShopify.jQuery=jQuery191,jQuery191(document).ready(function()
			{
			loadScript("//cdnjs.cloudflare.com/ajax/libs/json2/20130526/json2.min.js",function()
				{
			}
			);
			initSettings(jQuery191)
		}
		)
	})
}
();

var CanvasParticle = (function(){
	function getElementByTag(name){
		return document.getElementsByTagName(name);
	}
	function getELementById(id){
		return document.getElementById(id);
	}
	// æ ¹æ®ä¼ å…¥çš„configåˆå§‹åŒ–ç”»å¸?
	function canvasInit(canvasConfig){
		canvasConfig = canvasConfig || {};
		var html = getElementByTag("html")[0];
		var lizi = $(".lizi")[0];
		var canvasDiv = getELementById("canvas-particle");
		var canvasObj = document.createElement("canvas");

		var canvas = {
			element: canvasObj,
			points : [],
			// é»˜è®¤é…ç½®
			config: {
				vx: canvasConfig.vx || 4,
				vy:  canvasConfig.vy || 4,
				height: canvasConfig.height || 2,
				width: canvasConfig.width || 2,
				count: canvasConfig.count || 100,
				color: canvasConfig.color || "253, 1, 31",
				stroke: canvasConfig.stroke || "130,255,255",
				dist: canvasConfig.dist || 6000,
				e_dist: canvasConfig.e_dist || 20000,
				max_conn: 10
			}
		};

		// èŽ·å–context
		if(canvas.element.getContext("2d")){
			canvas.context = canvas.element.getContext("2d");
		}else{
			return null;
		}

		lizi.style.padding = "0";
		lizi.style.margin = "0";
		// body.replaceChild(canvas.element, canvasDiv);
		
		lizi.appendChild(canvas.element);
		// var lizi1 = $(".lizi1")[0];
		// lizi1.appendChild(canvas.element);
		canvas.element.style = "position: absolute; top: 0; left: 0; z-index: -1;";
		canvasSize(canvas.element);
		window.onresize = function(){
			canvasSize(canvas.element);
		}
		$("body")[0].onmousemove = function(e){
			var event = e || window.event;
			canvas.mouse = {
				x: event.clientX,
				y: event.clientY
			}
		}
		document.onmouseleave = function(){
			canvas.mouse = undefined;
		}
		setInterval(function(){
			drawPoint(canvas);
		}, 40);
	}

	// è®¾ç½®canvaså¤§å°
	function canvasSize(canvas){
		canvas.width = window.innerWeight || document.documentElement.clientWidth || document.lizi.clientWidth;
		canvas.height = window.innerWeight || document.documentElement.clientHeight || document.lizi.clientHeight;
	}

	// ç”»ç‚¹
	function drawPoint(canvas){
		var context = canvas.context,
			point,
			dist;
		context.clearRect(0, 0, canvas.element.width, canvas.element.height);
		context.beginPath();
		
		context.fillStyle = "rgb("+ canvas.config.color +")";
		for(var i = 0, len = canvas.config.count; i < len; i++){
			if(canvas.points.length != canvas.config.count){
				// åˆå§‹åŒ–æ‰€æœ‰ç‚¹
				point = {
					x: Math.floor(Math.random() * canvas.element.width),
					y: Math.floor(Math.random() * canvas.element.height),
					vx: canvas.config.vx / 2 - Math.random() * canvas.config.vx,
					vy: canvas.config.vy / 2 - Math.random() * canvas.config.vy
				}
			}else{
				// å¤„ç†çƒçš„é€Ÿåº¦å’Œä½ç½®ï¼Œå¹¶ä¸”åšè¾¹ç•Œå¤„ç?
				point =	borderPoint(canvas.points[i], canvas);
			}
			context.fillRect(point.x - canvas.config.width / 2, point.y - canvas.config.height / 2, canvas.config.width, canvas.config.height);

			canvas.points[i] = point;
		}
		drawLine(context, canvas, canvas.mouse);
		context.closePath();
	}

	// è¾¹ç•Œå¤„ç†
	function borderPoint(point, canvas){
		var p = point;
		if(point.x <= 0 || point.x >= canvas.element.width){
			p.vx = -p.vx;
			p.x += p.vx;
		}else if(point.y <= 0 || point.y >= canvas.element.height){
			p.vy = -p.vy;
			p.y += p.vy;
		}else{
			p = {
				x: p.x + p.vx,
				y: p.y + p.vy,
				vx: p.vx,
				vy: p.vy
			}
		}
		return p;
	}

	// ç”»çº¿
	function drawLine(context, canvas, mouse){
		context = context || canvas.context;
		for(var i = 0, len = canvas.config.count; i < len; i++){
			// åˆå§‹åŒ–æœ€å¤§è¿žæŽ¥æ•°
			canvas.points[i].max_conn = 0;
			// point to point
			for(var j = 0; j < len; j++){
				if(i != j){
					dist = Math.round(canvas.points[i].x - canvas.points[j].x) * Math.round(canvas.points[i].x - canvas.points[j].x) + 
							Math.round(canvas.points[i].y - canvas.points[j].y) * Math.round(canvas.points[i].y - canvas.points[j].y);
					// ä¸¤ç‚¹è·ç¦»å°äºŽå¸é™„è·ç¦»ï¼Œè€Œä¸”å°äºŽæœ€å¤§è¿žæŽ¥æ•°ï¼Œåˆ™ç”»çº¿
					if(dist <= canvas.config.dist && canvas.points[i].max_conn <canvas.config.max_conn){
						canvas.points[i].max_conn++;
						// è·ç¦»è¶Šè¿œï¼Œçº¿æ¡è¶Šç»†ï¼Œè€Œä¸”è¶Šé€æ˜Ž
						context.lineWidth = 0.5 - dist / canvas.config.dist;
						context.strokeStyle = "rgba("+ canvas.config.stroke + ","+ (1 - dist / canvas.config.dist) +")"
						context.beginPath();
						context.moveTo(canvas.points[i].x, canvas.points[i].y);
						context.lineTo(canvas.points[j].x, canvas.points[j].y);
						context.stroke();

					}
				}
			}
			// å¦‚æžœé¼ æ ‡è¿›å…¥ç”»å¸ƒ
			// point to mouse
			if(mouse){
				dist = Math.round(canvas.points[i].x - mouse.x) * Math.round(canvas.points[i].x - mouse.x) + 
						Math.round(canvas.points[i].y - mouse.y) * Math.round(canvas.points[i].y - mouse.y);
				// é‡åˆ°é¼ æ ‡å¸é™„è·ç¦»æ—¶åŠ é€Ÿï¼Œç›´æŽ¥æ”¹å˜pointçš„xï¼Œyå€¼è¾¾åˆ°åŠ é€Ÿæ•ˆæž?
				if(dist > canvas.config.dist && dist <= canvas.config.e_dist){
					canvas.points[i].x = canvas.points[i].x + (mouse.x - canvas.points[i].x) / 20;
					canvas.points[i].y = canvas.points[i].y + (mouse.y - canvas.points[i].y) / 20;
				}
				if(dist <= canvas.config.e_dist){
					context.lineWidth = 1;
					context.strokeStyle = "rgba("+ canvas.config.stroke + ","+ (1 - dist / canvas.config.e_dist) +")";
					context.beginPath();
					context.moveTo(canvas.points[i].x, canvas.points[i].y);
					context.lineTo(mouse.x, mouse.y);
					context.stroke();
				}
			}
		}
	}
	return canvasInit;
})();
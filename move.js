// 运动框架1.3
	function move(obj, name, target,fn) {
		clearInterval(obj.timer)
		obj.timer = setInterval(function() {
			if(name=='opacity') {
				nowStyle=getComputedStyle(obj)[name]*100
			}else {
			    nowStyle=parseInt(getComputedStyle(obj)[name])
			}
			
			let speed = (target - nowStyle) / 10
				
			speed=(speed>0)?Math.ceil(speed):speed=Math.floor(speed)
				
			if (nowStyle == target) {
				clearInterval(obj.timer)
				if (fn) {fn()}
			} else {
				if (name=='opacity') {
				obj.style[name] = (nowStyle + speed)/100
				} else{
				obj.style[name] = nowStyle + speed + 'px'
				}
				
			}
		}, 30)
	}
// 运动框架1.2
// 链式运动
	function move(obj, name, target,fn) {
		clearInterval(obj.timer)
		obj.timer = setInterval(function() {
			let nowStyle=parseInt(getComputedStyle(obj)[name])
			let speed = (target - nowStyle) / 10
				
				speed=(speed>0)?Math.ceil(speed):speed=Math.floor(speed)
				
			if (nowStyle == target) {
				clearInterval(obj.timer)
				// 判断fn是否存在,存在即执行
				if (fn) {fn()}
			} else {
				obj.style[name] = nowStyle + speed + 'px'
			}
		}, 30)
	}
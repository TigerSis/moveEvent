// 运动框架1.3
function move(obj, name, target, fn) {
	clearInterval(obj.timer)
	obj.timer = setInterval(function() {
			if (name == 'opacity') {
				nowStyle = getComputedStyle(obj)[name] * 100
			} else if (name == 'width' || name == 'height' || name == 'border-radius' || name == 'border-width' || name =='font-size') {
				nowStyle = parseInt(getComputedStyle(obj)[name])
			} else {
				nowStyle = getComputedStyle(obj)[name]
			}

			let speed = (target - nowStyle) / 10
			speed = (speed > 0) ? Math.ceil(speed):Math.floor(speed)

			if (nowStyle == target) {
				clearInterval(obj.timer)
				if (fn) {fn()}
			} else {
				if (name == 'opacity') {
				obj.style[name] = (nowStyle + speed) / 100
			} else  if (name == 'width' || name == 'height' || name == 'border-radius' || name == 'border-width' || name =='font-size') {
				obj.style[name] = nowStyle + speed + 'px'
			} else {
				obj.style[name] = target
			}
		}
	}, 30)
}

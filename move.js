// move运动框架1.0
function move(obj, name, target) {
	clearInterval(obj.timer)
	obj.timer = setInterval(function() {
		let nowStyle = parseInt(getComputedStyle(obj)[name])
		let speed = (target - nowStyle) / 10
		if (nowStyle == target) {
			clearInterval(obj.timer)
		} else {
			obj.style[name] = nowStyle + speed + 'px'
		}
	}, 30)
}

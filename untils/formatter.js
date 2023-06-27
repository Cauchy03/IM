export default {
	// 首页时间转化
	dateTime(e) {
		let oldTime = new Date(e)
		let nowTime = new Date
		// 获取oldTime具体时间
		let d = oldTime.getTime()
		let h = oldTime.getHours()
		let m = oldTime.getMinutes()
		let Y = oldTime.getFullYear()
		let M = oldTime.getMonth() + 1
		let D = oldTime.getDate()
		// 获取nowTime时间
		let nd = nowTime.getTime()
		let nh = nowTime.getHours()
		let nm = nowTime.getMinutes()
		let nY = nowTime.getFullYear()
		let nM = nowTime.getMonth() + 1
		let nD = nowTime.getDate()

		// 当天的时间
		if (D === nD && M === nM && Y === nY) {
			if (h < 10) {
				h = '0' + h
			}
			if (m < 10) {
				m = '0' + m
			}
			return h + ':' + m
		}
		// 前天时间
		if (D + 1 === nD && M === nM && Y === nY) {
			if (h < 10) {
				h = '0' + h
			}
			if (m < 10) {
				m = '0' + m
			}
			return '前天' + h + ':' + m
		} else {
			// 大于两天
			return Y + '/' + M + '/' + D
		}


	}
}
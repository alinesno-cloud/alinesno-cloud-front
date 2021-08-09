export function BaiduMap() {
	const AK = "puixApyx3rv9uYvyMaquGEHSr9sMm5u7"
	return new Promise(function(resolve, reject) {
		window.init = function() {
			resolve(BaiduMap)
		}
		var script = document.createElement('script')
		script.type = 'text/javascript'
		script.src = `http://api.map.baidu.com/api?v=2.0&type=webgl&ak=${AK}&callback=init`
		script.onerror = reject
		document.head.appendChild(script)
	})
}

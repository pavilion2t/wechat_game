var canvas = wx.createCanvas()
var context = canvas.getContext('2d')
context.fillStyle = 'green'
context.fillRect(0, 0, 100, 100)
console.log(canvas.width, canvas.height) // 375 667

const  path = require('path')

module.exports ={
	entry: './src/main.js',//入口文件
	output: {
		path: path.resolve(__dirname, 'dist'),//动态获取文件路径
		filename: 'bundle.js'
	},
}
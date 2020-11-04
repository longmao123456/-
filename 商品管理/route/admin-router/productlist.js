//商品模块
const {Product} = require('../../mongodb/product.js')
module.exports = async (req, res) => {
	let total = await Product.countDocuments({})
	// console.log('userlist')
	// console.log(total)
	let size=Number(req.query.size) || 3;  //一页多少个
	let page=Number(req.query.page) || 1; //当前是第几页
	let pages=Math.ceil(total/size) // 一共有多少页
	let sizes=(page-1)*size 
	let result=await Product.find().limit(size).skip(sizes)
	if(result){
		// console.log(result)
		res.render("./admin/productlist",{
			lists:result,
			username,
			size,
			total,
			pages,
			sizes,
			page
		})
	}
}
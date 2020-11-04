let {Product}= require("../../mongodb/product.js")
//修改产品模块
module.exports =async (req, res) => {
	// console.log(req.query)
let result=await	Product.findOne({"_id":req.query.id})
if(result){
	
	res.render("./admin/productedit",{
		result
	})
}
}
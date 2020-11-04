let {Product} =require("../../mongodb/product.js")
let fs=require('fs')
let path=require('path')
module.exports=async (req,res)=>{

	// let result=await Product.findOne({'_id':req.query.id})	
	// if(result){
	// // console.log(path.join(__dirname,"../","../","public",result.pic))	
	// console.log(result.pic)

	// 	fs.unlink(path.join(__dirname,"../","../","public",result.pic),(err)=>{
	// 		if(err){
	// 			console.log(err)
	// 		}
	// 	})
	//   res.redirect('/admin/productlist')
	  
	// }
	let result=await Product.findOneAndDelete({'_id':req.query.id})
	if(result){
		// console.log(result)
			fs.unlink(path.join(__dirname,"../","../","public",result.pic),(err)=>{
				if(err){
					console.log(err)
				}
			})
		  res.redirect('/admin/productlist')
	}
	
}
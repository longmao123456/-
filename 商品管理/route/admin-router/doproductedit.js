//formidable解析表单计较的文件数据
//下载模块
//cnpm install formidable --save
//引入formidable模块
let formidable=require('formidable')
let fs=require('fs')
let path=require('path')

	// console.log('ssss')
	const {Product}=require("../../mongodb/product.js")


	module.exports=(req,res)=>{
	// console.log(2222)
	// console.log(Product)
		//1.创建一个表单解析对象
		let form =new formidable.IncomingForm();
		//2.配置上传文件存放读者，放置在public文件夹下面的uplodas里
      // form.uploadDir=__dirname+'../../public/uploads'
		form.uploadDir=path.join(__dirname,'../','../','public','uploads');
		//3.保存上传文件的后缀
		form.keepExtensions=true
		form.parse(req, async (err,fields,files)=>{
			 // console.log(files.pic)
			 if(files.pic.name){
				 console.log(req.query.id)
				 console.log('2222222222')
				 let result1=await Product.findOne({
					 "_id":req.query.id
				 })
				 if(result1){
				 		fs.unlink(path.join(__dirname,"../","../","public",result1.pic),(err)=>{
				 						if(err){
				 							console.log(err)
				 						}
				 					})
				 }
				 let result=await Product.updateOne({ "_id": req.query.id },{
				 	title:fields.title,
					pic:files.pic.path.split("public")[1],
				 	cate_id:fields.cate_id,
				 	goods_id:fields.goods_id,
				 	postage:fields.postage,
				 	price:fields.price,
				 	content:fields.content
				 })
				 
				 if(result){
				   console.log(result)
				 	res.redirect("/admin/productlist")
				 }
			 }else{
				
				 let result=await Product.updateOne({ "_id": req.query.id },{
				 	
				 	title:fields.title,
				 	cate_id:fields.cate_id,
				 	goods_id:fields.goods_id,
				 	postage:fields.postage,
				 	price:fields.price,
				 	content:fields.content
				 })
				 if(result){
				 console.log(result)
				 	res.redirect("/admin/productlist")
				 }
			 }
		
		})
	}

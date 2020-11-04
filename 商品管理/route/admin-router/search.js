//搜索模块
// console.log(555)
var {User}=require('../../mongodb/db.js')
module.exports =async (req, res) => {
   let total = await User.countDocuments({'username':new RegExp(req.body.username,'gi')})
   let size=Number(req.query.size) || 3;  //一页多少个
   let page=Number(req.query.page) || 1; //当前是第几页
   let pages=Math.ceil(total/size) // 一共有多少页
   let sizes=(page-1)*size     
   
	if(req.body.username==''){
	res.redirect("/admin/userlist")
	}else{
   let result=await User.find({'username':new RegExp(req.body.username,'gi')}).limit(size).skip(sizes)
	if(result){
		console.log(req.body.username)
		res.render("./admin/userlist",{
					 lists:result,
							 username:req.body.username,
							 size,
							 total,
							 pages,
							 sizes,
							 page
		})
		 		
	}
 		
 	 

 
 
}
}
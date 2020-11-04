//用户列表模块
const { User } = require("../../mongodb/db")
module.exports =async (req, res) => {
	if(req.query.username===undefined){ //如果req.query.username未定义则定义其为111111
		username =111111
	}else{
		if(req.query.username==111111){ //如果req.query.username已定义则判断其值是否为111111，若是则依旧定义其为111111
			username =111111
		}else{//如果req.query.username已定义则判断其值是否为111111，若不是则将其赋值给username
			username =req.query.username
		}
	}
	  if(username!=111111){ //判断username的值，如果其值不为111111则执行搜索相关的操作
		  if(username==''){
		  	res.redirect("/admin/userlist")
		  	}else{
			
				let total = await User.countDocuments({'username':new RegExp(username,'gi')})
				let size=Number(req.query.size) || 3;  //一页多少个
				let page=Number(req.query.page) || 1; //当前是第几页
				let pages=Math.ceil(total/size) // 一共有多少页
				let sizes=(page-1)*size     
				// console.log('ea')
				// console.log(total)
		     let result=await User.find({'username':new RegExp(username,'gi')}).limit(size).skip(sizes)
		  	if(result){
		  		res.render("./admin/userlist",{
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
	  }else{//判断username的值，如果其值为111111则直接执行有关展示列表的相关操作
	  // console.log(Boolean(username!=)+'xxxxxx')
		  let total = await User.countDocuments({})
		  console.log('userlist')
		  console.log(total)
		  let size=Number(req.query.size) || 3;  //一页多少个
		  let page=Number(req.query.page) || 1; //当前是第几页
		  let pages=Math.ceil(total/size) // 一共有多少页
		  let sizes=(page-1)*size 
				// console.log('wwwwwww')
		  // let username=req.query.usrename || 1
		  let result =await	User.find().limit(size).skip(sizes)
		  		if(result){
		  		res.render("./admin/userlist",{
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
  
}
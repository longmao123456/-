const md5 = require("md5")
console.log(111)
const {User} =require('../../mongodb/db.js')
module.exports = async (req, res) => {
	
    // console.log(req.body);
	 let username =req.body.username
	 let password =md5(req.body.password)
	
	let result =await User.findOne({username,password})
	if(result){
		req.app.locals.nameus=username;
	res.redirect("/admin/userlist")
	}else{
		res.send(`<script type="text/javascript">
			alert('用户名或密码错误')
			location.href='/admin/login'
		</script>`)
		
	}
	 // User.find().then((result)=>{
		// if(result.some(function(item){
		// 	return item.username==username&&item.password ==md5(password)
		// })){
		// 	res.app.locals.nameuse=
		// 	res.redirect("/admin/userlist")
		// }else{
		// 	res.send('111')
		// }
		// // for(let i=0;i<res.length;i++){
		// // 	if(res[i].username==)
		// // }
	 // })
    // if (result) {
    //     res.redirect("/admin/userlist")
    // }

}

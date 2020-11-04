//修改用户
const { User } = require("../../mongodb/db")
module.exports = (req, res) => {
	 console.log(req.query.id)
	 User.findOne({'_id':req.query.id}).then(result => {
	      console.log(result);
	    res.render("./admin/edituser",{
			 obj:result
		 })//重定向--重新跳转到home页面
	  })
    
}
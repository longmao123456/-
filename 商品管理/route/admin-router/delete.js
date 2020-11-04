//删除模块
// console.log(111)
let {User}=require('../../mongodb/db.js')
module.exports = (req, res) => {
   console.log(req.query.id)
	User.findOneAndDelete({'_id':req.query.id}).then(result => {
        console.log(result);
       res.redirect("/admin/userlist")//重定向--重新跳转到home页面
    })
	// User.findOneAndDelete
}
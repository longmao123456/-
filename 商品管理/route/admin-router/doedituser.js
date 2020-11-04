//点击添加用户提交表单
//按需引入db暴露的模块


const md5 = require("md5")


const { User } = require("../../mongodb/db")

module.exports = async (req, res) => {

	console.log( req.query.id )		

    let result = await User.updateOne({ "_id": req.query.id }, {
        username: req.body.username,
		  password:md5(req.body.password),
        age: req.body.age,
        sex: req.body.sex,
        address: req.body.address
    })

    if (result) {
        res.redirect("/admin/userlist")
    }
}
const express = require("express");
//创建一个express路由对象
const router = express.Router()

//配置路由

//登录页面
router.get("/login", require("./admin-router/login"))
//登录验证
router.post('/dologin',require('./admin-router/dologin.js'))
//用户列表
router.get("/userlist", require("./admin-router/userlist"))
//添加用户
router.get("/adduser", require("./admin-router/adduser"))

//添加用户提交数据的地址
router.post("/doadduser", require("./admin-router/doadduser"))
//删除用户
router.get("/delete", require("./admin-router/delete"))
//修改用户
router.get("/edituser", require("./admin-router/edituser"))
//更新用户
router.post("/doedituser", require("./admin-router/doedituser.js"))
//搜索用户
router.post('/search',require('./admin-router/search.js'))
//添加产品提交数据的地址

router.post("/doproductadd",require("./admin-router/doproductadd"))
//商品列表
router.get("/productlist", require("./admin-router/productlist"))
//添加产品
router.get("/productadd", require("./admin-router/productadd"))
//删除产品
router.get("/productdelete",require("./admin-router/productdelete.js"))
//修改产品
router.get("/productedit", require("./admin-router/productedit"))
//修改产品提交
router.post("/doproductedit",require("./admin-router/doproductedit.js"))
router.get("/logout", (req, res) => {   
   req.app.locals.nameus=undefined;//销毁locals
    res.redirect("/admin/login")
})
//搜索产品
router.get("/productsearch",require("./admin-router/productsearch.js"))
//暴露
module.exports = router
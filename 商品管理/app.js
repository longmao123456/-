const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = new express();

//配置ejs模板引擎
app.set("view engine", "ejs");
//配置ejs模板文件所在路径
app.set("views", __dirname + "/views");
//配置静态资源路径
app.use(express.static("public"));

//使用body-parser
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())
//判断登录状态
app.use((req, res, next) => {
    if (req.url != "/admin/login" && req.url != "/admin/dologin" && !req.app.locals.nameus) {
        res.redirect("/admin/login")
    } else {
        next()
    }
})

//引入自定义模块
const admin = require("./route/admin")
app.use("/admin", admin)
app.listen(3000, () => {
    console.log("9527来了");
})

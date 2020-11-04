const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/hg-admin", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("数据连接成功");
}).catch(err => {
    console.log(err);
    console.log("数据库连接失败");
})
const ProductSchema=new mongoose.Schema({
		
	title:{ //标题
	type:String,//类型
	required:[true,"用户名不能为空"],//开启验证
	trim:true ,//去除首尾空格
	
	},
	pic:{//保存图片地址
	type:String
		
	},
	postage:{//邮费
	type:Number
		
	},
	cate_id:{//一级分类id
	type:String
		
	},
	goods_id:{//二级分类id
	type:String
		
	},
	price:{//价格
	type:Number
		
	},
	content:{//详细内容
	type:String
		
	}
})
//使用集合规则创建集合
const Product=mongoose.model('Product',ProductSchema);
//暴露
module.exports={
	Product
}
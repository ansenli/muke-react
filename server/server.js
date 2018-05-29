const  express = require("express")
const mongoose = require('mongoose')
const app = express();
// 链接mongo 并且使用imooc 集合
//const DB_URL = "mongodb://127.0.0.1:27017";
const DB_URL ="mongodb://localhost:27017/imooc"
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log("mongo connenct success...")
})
// 类似mysql的表，mongo里有文档字段的概念

const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
// 新增数据
// User.create({
//     user: 'imooc',
//     age:19
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

// 删除数据
// User.remove({age:18},function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

// 更新数据

User.update({
            user: "imooc"
        },{
            '$set': {
                age: 26
            }
        }, function (err, doc) {
    //console.log(doc)
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})
// 查找数据
// nodemon server.js 更行数据后自动重启
app.get('/',function (req,res) {
    res.send('<h1>hello node</h1>')
})
//
app.get('/data',function(req,res){
    // 用mongo  find  findOne查找数据
    User.find({},function (err,doc) {
        res.json(doc)
    })
    //res.json({name:'asl','age':12})
})
app.listen(9093,function () {
    console.log("Node app starting at port 9093.....")
})
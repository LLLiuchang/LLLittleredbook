var express = require('express');
var fs = require('fs');
var app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(express.static('./'))
app.get('/',function(req,res){
    res.readFile(__dirname + '/index.html')
})
//日本
app.get('/dest',function(req,res){
    fs.readFile(__dirname + '/pulic/data/dest.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data);
            var json = JSON.parse(data);
            res.json(json)
        }
    })
});
//韩国
app.get('/korea',function(req,res){
    fs.readFile(__dirname + '/pulic/data/korea.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data);
            var json = JSON.parse(data);
            res.json(json)
        }
    })
});
//香港
app.get('/hk',function(req,res){
    fs.readFile(__dirname + '/pulic/data/hk.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data);
            var json = JSON.parse(data);
            res.json(json)
        }
    })
});
//美国
app.get('/us',function(req,res){
    fs.readFile(__dirname + '/pulic/data/us.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data);
            var json = JSON.parse(data);
            res.json(json)
        }
    })
});
//法国
app.get('/france',function(req,res){
    fs.readFile(__dirname + '/pulic/data/france.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data);
            var json = JSON.parse(data);
            res.json(json)
        }
    })
});
//澳洲
app.get('/australia',function(req,res){
    fs.readFile(__dirname + '/pulic/data/australia.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data);
            var json = JSON.parse(data);
            res.json(json)
        }
    })
});
//英国
app.get('/uk',function(req,res){
    fs.readFile(__dirname + '/pulic/data/uk.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data);
            var json = JSON.parse(data);
            res.json(json)
        }
    })
});
//泰国
app.get('/thailand',function(req,res){
    fs.readFile(__dirname + '/pulic/data/thailand.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data);
            var json = JSON.parse(data);
            res.json(json)
        }
    })
});
//台湾
app.get('/taiwan',function(req,res){
    fs.readFile(__dirname + '/pulic/data/taiwan.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data);
            var json = JSON.parse(data);
            res.json(json)
        }
    })
});
//意大利
app.get('/ltaly',function(req,res){
    fs.readFile(__dirname + '/pulic/data/ltaly.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data);
            var json = JSON.parse(data);
            res.json(json)
        }
    })
});
//德国
app.get('/germany',function(req,res){
    fs.readFile(__dirname + '/pulic/data/germany.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data);
            var json = JSON.parse(data);
            res.json(json)
        }
    })
});
//更多
app.get('/more',function(req,res){
    fs.readFile(__dirname + '/pulic/data/more.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data);
            var json = JSON.parse(data);
            res.json(json)
        }
    })
});
//主页
app.get('/home',function(req,res){
    fs.readFile(__dirname + '/pulic/data/home.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.listen(3000,function(){
    console.log(123123);
})
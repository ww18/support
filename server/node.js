/**
 * 使用koa2，再配置一遍，加深印象
 */
const Koa = require('koa');
const app = new Koa();

const rp = require('request-promise');

const path = require('path');
const co = require('co');

const Router = require('koa-router');
const router = new Router();

const render = require('koa-swig');
const static = require('koa-static');
app.use(static(path.join(__dirname, '/public')));
app.context.render = co.wrap(render({
    root: path.join(__dirname, '/views'),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false
}))
app.use(router.routes(),router.allowedMethods());

//路由
router.get('/index', async(ctx,next)=>{
    const data = ctx.query;
    console.log(data);
    ctx.body = await ctx.render('index.html',data);
})


//地址
router.get('/addSupport', async(ctx,next)=>{
    const data = ctx.query;
    const options = {
        uri: 'http://support.com:8061/insert.php?username='+data.username + '&num='+data.num,
        method: 'GET'
    };
    var req = await rp(options);
    console.log(req);
    //ctx.body = req;
    if(req === '成功'){
        //console.log(data);
        ctx.redirect('/index?username='+data.username + '&num='+data.num);
        //ctx.body = req;
    }
    //ctx.body = ctx.query.username + ctx.query.num;
})

app.listen(3000);


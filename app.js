const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.post('/api/login', (ctx, next) => {
    const { request } = ctx;
    const { body } = request;
    const { name, password } = body;
    
    console.log(`用户名：${name}；密码：${password}`);

    ctx.body = {
        code: 200,
        message: '登陆成功',
        result: {
            token: '123456'
        }
    }

    next();
}),

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000);
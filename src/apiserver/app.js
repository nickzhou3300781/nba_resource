import koa from 'koa'
import bodyparser from 'koa-bodyparser'
import controller from './controller'

const app =new koa();
app.use(async(ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
    await next();
})

 app.use(bodyparser());

 app.use(controller());

 app.listen(3001);
 console.log('app started at prot 3001...')



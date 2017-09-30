import fs from 'fs'

const addMapping=(router,mapping)=>{
    for(var url in mapping){
        if(url.startsWith('GET ')){
            var path=url.substring(4);
            router.get(path,mapping[url]);            
        }
        if(url.startsWith('POST ')){
            var path = url.substring(5);
            router.post(path,mapping[url])
        }
    }
}

const addControllers=(router,dir)=>{
fs.readdirSync(`${__dirname}/${dir}`).filter((f)=>{
    return f.endsWith('.js');    
}).forEach((f)=>{
    let mapping=require(`${__dirname}/${dir}/${f}`);
    addMapping(router,mapping);
})
}

module.exports=(dir)=>{
    let 
       controller_dir=dir||'controllers',
       router=require('koa-router')();
       addControllers(router,controller_dir);
       return router.routes();
}
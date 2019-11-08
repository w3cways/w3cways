const Client = require('../util/redis')

class TestController {

    /* 查询
    */
    static async get(ctx) {
        let ip = ctx.request.query.ip;
        const client = new Client(3); 
        try {
           let res = await client.get(ip);
           ctx.body = {
               data:res
           }
        } catch (err) {
            ctx.body = {
                message:err
            }
        }
    }

    /* 增
    */
    static async add(ctx) {
        let ip = ctx.request.body.ip;
        const client = new Client(3); 
        try {
            let old = await client.exists(ip);
            if (old) {
                ctx.error(false, "添加失败, ip已存在")
            } else {
                await client.set(ip, 0);
                ctx.body = {
                    message:"添加成功"
                }
            }

        } catch (err) {
            ctx.body = {
                message:err
            }
        }
    }

    /* 改
     */
    static async update(ctx) {
        let ip = ctx.request.body.ip,
            value = ctx.request.body.value;
        let isDecr;

        let client = new Client(3); //gateway在REDIS中的默认DB 为0
        try {
            let old = await client.exists(ip);//先查询
            if (old) {//存在
                await client.set(ip, value);
                ctx.body = {
                    message:"修改成功"
                }
            } else {
                ctx.body = {
                    message:"修改失败，IP不存在"
                }
            }
        } catch (err) {
            ctx.body = {
                message:err
            }
        }
    }



    /**
    * 删
    */
    static async delete(ctx) {
        let ip = ctx.request.query.ip;
        const client = new Client(3);
        
        try {
            let old = await client.exists(ip);//先查询
            if (old) {//存在
                await client.del(ip);
                ctx.body = {
                    message:"删除成功"
                }
            } else {
                ctx.body = {
                    message:"删除失败，IP不存在"
                }
            }
        } catch (err) {
            ctx.body = {
                message:err
            }
        }
    }


    
}

module.exports = TestController
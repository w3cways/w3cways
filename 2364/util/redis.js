const redis = require("redis");
const { promisify } = require('util');
//Redis 命令参考  http://doc.redisfans.com/index.html  

/**
 * 
 * @param {*} db  需要切换的DB，不传则默认DB 0
 */
function Client(db){
    let client;
    if (db) {
        client = redis.createClient({db});
    }

    //需要使用同步函数，按照如下定义即可
    this.exists =  promisify(client.exists).bind(client);
    this.keys =  promisify(client.keys).bind(client);

    this.set = promisify(client.set).bind(client);
    this.get = promisify(client.get).bind(client);
    this.del = promisify(client.del).bind(client);
    this.incr = promisify(client.incr).bind(client);
    this.decr = promisify(client.decr).bind(client);

    this.lpush = promisify(client.lpush).bind(client);

    this.hexists =  promisify(client.hexists).bind(client);
    this.hgetall = promisify(client.hgetall).bind(client);
    this.hset = promisify(client.hset).bind(client);
    this.hmset = promisify(client.hmset).bind(client);
    this.hget = promisify(client.hget).bind(client);
    this.hincrby = promisify(client.hincrby).bind(client);
    this.hdel = promisify(client.hdel).bind(client);
    this.hvals = promisify(client.hvals).bind(client);
    this.hscan = promisify(client.hscan).bind(client);

    this.sadd = promisify(client.sadd).bind(client);
    this.smembers = promisify(client.smembers).bind(client);
    this.scard = promisify(client.scard).bind(client);
    this.srem = promisify(client.srem).bind(client);
    return this;
}

module.exports = Client
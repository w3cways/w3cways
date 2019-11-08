const Router = require('koa-router');
const koaBody = require('koa-body');

const testController = require('../controllers/test')

const router = new Router()

//test
router.get('/gateway',testController.get)//分配 
router.post('/gateway',koaBody(),testController.add)//注册
router.put('/gateway',koaBody(),testController.update)//更新
router.delete('/gateway',testController.delete)//注销


module.exports = router
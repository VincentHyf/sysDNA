const Router = require('koa-router');
const ArtileController = require('../controllers/article');

const router = new Router({
  prefix: '/api/v1'
});

/**
 * 文章接口
 */
//创建文章
router.post('/article/create',ArtileController.create);

//获取文章详情
router.get('/article/:id',ArtileController.detail)



// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: '新的项目'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = router

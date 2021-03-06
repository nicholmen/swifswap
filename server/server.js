const fs = require('fs')
const { items, users, chats, sessions } = require('./controllers/controller')
const { api, router, bodyParser, multiParser } = require('./server.config')

// ------- R O U T E R R O U T E S --------

router.get('/', async ctx => {
  ctx.redirect('http://localhost:8080')
})

router.get('/logout', async ctx => {
  ctx = await sessions.destroySession(ctx)
  ctx.redirect('/')
})

router.post('/sessions', bodyParser, async ctx => {
  ctx = await sessions.validateSignIn(ctx)
  ctx.redirect('/')
})

// ------- A P I  R O U T E S --------
// api root

api.get('/', async ctx => {
  await items.getHomePageItems(ctx)
})

// ----------------------
// user routes

api.get('/usersession', async ctx => {
  ctx.user = await sessions.validate(ctx)
  if (ctx.user) {
    ctx.body = ctx.user
  }
})

api.get('/profile/:username', async ctx => {
  const id = await users.getUserIdByUsername(ctx.params.username)
  if (!id) {
    ctx.throw(400, 'user was not found')
  }
  ctx.redirect('/api/users/' + id)
})

api.get('/users/:id', async ctx => {
  if (ctx.params.id) {
    ctx.body = await users.getUserById(ctx.params.id)
  } else {
    ctx.throw(400, 'yo! I can\'t query an undefined username')
  }
})

api.post('/users', bodyParser, async ctx => {
  ctx = await users.createUser(ctx)
  ctx = await sessions.validateSignIn(ctx)
  ctx.redirect('/')
})

api.put('/users/:id', async ctx => {
  ctx.body = 'you called the put method at /users/:id'
})

api.delete('/users/:id', async ctx => {
  ctx.body = 'you called the delete method at /users/:id'
})

// ----------------------
// Sessions

api.post('/sessions', bodyParser, async ctx => {
  ctx = await sessions.validateSignIn(ctx)
  ctx.redirect('/')
})

api.get('/destroy', async ctx => {
  ctx = await sessions.destroySession(ctx)
  ctx.body = 'session destroyed'
})

// ----------------------
// Item

api.get('/items/:id', async ctx => {
  const item = (await items.getItemById(ctx.params.id))
  ctx.body = item
})

api.post('/items', bodyParser, async ctx => {
  ctx = await items.createItem(ctx)
})

api.post('/items/photo', multiParser, async ctx => {
  const { files, fields } = ctx.request.body
  fs.rename(files.photo.path, './static/images/' + fields.fileName, function (err) {
    if (err) throw err
  })
  ctx.body = 'well received?'
})

api.put('/items/:id', async ctx => {

})

api.delete('/items/:id', async ctx => {
  ctx.body = 'you called delete at /items/:id'
})

// ----------------------
// Chats

api.get('/chats', async ctx => {
  ctx.user = await sessions.validate(ctx)
  ctx = await chats.getChatsByUserId(ctx)
})

api.get('/chats/:id', async ctx => {
  ctx = await chats.getMessages(ctx)
})

api.post('/chats/:id', bodyParser, async ctx => {
  await chats.saveMessage(ctx)
})

api.post('/chats', bodyParser, async ctx => {
  ctx = await chats.createChat(ctx)
  ctx.status = 200
})

api.delete('/chats/:id', async ctx => {
  ctx.body = 'you called delete at /chats/:id'
})

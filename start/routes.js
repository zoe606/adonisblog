'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/tes', () => 'Hello World')

Route.get('/there', function() {
  return 'Hello There';
})

// ES6 Method
Route.get('/there/:id', function({ params }) {
  return `This is the id ${params.id}`;
})

Route.on('/home').render('home')

Route.get('/posts', 'PostController.index')
Route.get('/posts/add', 'PostController.add')
Route.get('/posts/:id', 'PostController.details')
Route.post('/posts', 'PostController.store')
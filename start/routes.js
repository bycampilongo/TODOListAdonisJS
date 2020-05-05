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

Route.on('/').render('home')
Route.get('/tasks', 'TaskController.index')
Route.get('/task/add', 'TaskController.add')
Route.post('/task/add', 'TaskController.store').validator('Task')
Route.get('/task/:id', 'TaskController.show')
Route.get('/task/edit/:id', 'TaskController.edit')
Route.post('/task/update', 'TaskController.update').validator('Task')
Route.get('/task/delete/:id', 'TaskController.delete')
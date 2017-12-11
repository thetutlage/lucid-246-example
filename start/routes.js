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
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')
const User = use('App/Models/User')
const Team = use('App/Models/Team')

Route.get('users/products', async () => {
  return User
    .query()
    .with('products')
    .fetch()
})

Route.get('teams/products', async () => {
  return Team
    .query()
    .with('products')
    .fetch()
})

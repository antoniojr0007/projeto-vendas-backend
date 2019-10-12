/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/sessions', 'SessionController.store').validator('Session');
Route.post('/forgot', 'ForgotPasswordController.store').validator('Forgot');
Route.post('/reset', 'ResetPasswordController.store').validator('Reset');
Route.post('/users', 'UserController.store').validator('Users');

// file
Route.get('/files/:files', 'FileController.show');

Route.group(() => {
  // Users
  Route.get('/users', 'UserController.index');
  Route.get('/users/:id', 'UserController.show');
  Route.delete('/users/:id', 'UserController.destroy');
  Route.put('/users/:id', 'UserController.update').validator('UserUpdate');

  // Profile
  Route.put('/profile', 'ProfileController.update').validator('Profile');
}).middleware('auth');

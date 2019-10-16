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

  // Contact
  Route.get('/contact', 'ContactController.index');
  Route.get('/contact/:id', 'ContactController.show');
  Route.post('/contact', 'ContactController.store');
  Route.put('/contact/:id', 'ContactController.update');
  Route.delete('/contact/:id', 'ContactController.destroy');

  // Address
  Route.get('/address', 'AddressController.index');
  Route.get('/address/:id', 'AddressController.show');
  Route.post('/address', 'AddressController.store');
  Route.put('/address/:id', 'AddressController.update');
  Route.delete('/address/:id', 'AddressController.destroy');

  // Store
  Route.get('/store', 'StoreController.index');
  Route.get('/store/:id', 'StoreController.show');
  Route.post('/store', 'StoreController.store');
  Route.put('/store/:id', 'StoreController.update');
  Route.delete('/store/:id', 'StoreController.destroy');
}).middleware('auth');

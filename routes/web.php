<?php
use App\Http\Controllers\GoogleController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', 'App\Http\Controllers\Page\MainController@index')    ->name('app.home');
Route::get('/list', 'App\Http\Controllers\Page\MainController@worksheetList')->name('app.list');

Route::get('/faq', 'App\Http\Controllers\Page\MainController@faq')    ->name('app.faq');
Route::get('/terms', 'App\Http\Controllers\Page\MainController@terms')->name('app.terms');
Route::get('/privacy', 'App\Http\Controllers\Page\MainController@privacy')    ->name('app.privacy');
Route::get('/contact', 'App\Http\Controllers\Page\MainController@contact')->name('app.contact');

Route::get('/exam/{id}', 'App\Http\Controllers\Page\MainController@exam')->where(['id' => '[a-z0-9]+'])->middleware('examCheck')->name('app.exam');
Route::get('/examClose', 'App\Http\Controllers\Page\MainController@examClose')->name('app.exam.close');
Route::get('/examSuccess', 'App\Http\Controllers\Page\MainController@examSuccess')->name('app.exam.success');
Route::post('/response/name', 'App\Http\Controllers\Page\MainController@responseName')->name('app.response.name');
Route::post('/response/upload', 'App\Http\Controllers\Page\MainController@responseUpload')->name('app.response.upload');

Route::get('/login', 'App\Http\Controllers\Page\AuthController@login')     ->name('auth.login');
Route::get('/logout', 'App\Http\Controllers\Page\AuthController@logout')     ->name('auth.logout');
Route::get('/member', 'App\Http\Controllers\Page\AuthController@member')->middleware('auth')->name('auth.member');
Route::get('/member/createWorksheet', 'App\Http\Controllers\Page\AuthController@createWorksheet')->middleware('auth')->name('auth.member.create.worksheet');
Route::get('/member/updateWorksheet/{id}', 'App\Http\Controllers\Page\AuthController@updateWorksheet')->where(['id' => '[0-9]+'])->middleware('auth')->name('auth.member.update.worksheet');
Route::post('/member/createWorksheet/upload', 'App\Http\Controllers\Page\AuthController@worksheetUpload')->name('auth.member.upload.worksheet');
Route::get('/member/createExam', 'App\Http\Controllers\Page\AuthController@createExam')->middleware('auth')->name('auth.member.create.exam');
Route::post('/member/examAdd', 'App\Http\Controllers\Page\AuthController@examAdd')->name('auth.member.add.exam');
Route::get('/member/myWorksheet', 'App\Http\Controllers\Page\AuthController@myWorksheet')->middleware('auth')->name('auth.member.myworksheet');
Route::post('/member/favorite/join', 'App\Http\Controllers\Page\AuthController@favoriteJoin')->name('auth.member.favorite.join');

Route::get('/member/examHistory', 'App\Http\Controllers\Page\AuthController@examHistory')->middleware('auth')->name('auth.member.examhistory');
Route::get('/member/examHistory/detail/{id}', 'App\Http\Controllers\Page\AuthController@examHistoryDetail')->where(['id' => '[a-z0-9]+'])->middleware('auth')->name('auth.member.examhistory.detail');

Route::get('/member/change', 'App\Http\Controllers\Page\AuthController@memberInfoChange')->middleware('auth')->name('auth.member.change');
Route::post('/member/update', 'App\Http\Controllers\Page\AuthController@memberUpdate')->name('auth.member.update');

Route::get('/auth/google', 'App\Http\Controllers\GoogleController@redirectToGoogle') ->name('google.redirect');
Route::get('/auth/google/callback', 'App\Http\Controllers\GoogleController@handleGoogleCallback') ->name('google.callback');

/*Route::get('/product/random', 'App\Http\Controllers\Page\MainController@random_product')     ->name('app.product.random');
Route::get('/product/{id}', 'App\Http\Controllers\Page\AppProductController@list')->where(['id' => '[0-9]+'])->name('app.product.list');
Route::get('/product/item/{id}', 'App\Http\Controllers\Page\AppProductController@item') ->where(['id' => '[0-9]+']) ->name('app.product.item') ;

Route::get('/message', 'App\Http\Controllers\Page\MainController@message_list')     ->name('app.message');
Route::get('/message/{id}', 'App\Http\Controllers\Page\MainController@message_item') ->where(['id' => '[0-9]+']) ->name('app.message.item') ;

Route::get('/download', 'App\Http\Controllers\Page\MainController@download_list')     ->name('app.download');

//Route::post('/product/getlist', 'App\Http\Controllers\Page\AppProductController@getlist')    ->name('app.product.getlist');*/

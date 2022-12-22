<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use NunoMaduro\Collision\Adapters\Phpunit\State;
use Laravel\Socialite\Facades\Socialite;

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
Route::get('/auth/login', [AuthController::class, 'redirectProvider'])->name('login');
Route::get('/auth/callback', [AuthController::class, 'handlerCallback']);

Route::middleware(['auth'])->group(function () {
    Route::get('/', function () { return redirect('dashboard'); });
    //Route::get('/teste', function () {
    //    Inertia
    //});
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});
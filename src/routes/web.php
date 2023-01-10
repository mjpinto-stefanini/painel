<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ImportDataController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    Route::get('/', function () { return Inertia::render('Home'); });
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/importar-dados', [ImportDataController::class, 'index'])->name('importar-dados');
    Route::post('/upload-dados', [ImportDataController::class, 'store'])->name('upload-dados');
});


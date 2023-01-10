<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function redirectProvider()
    {
        return Socialite::driver('laravelpassport')->redirect();
    }

    public function handlerCallback()
    {
        $oAuthUser      = Socialite::driver('laravelpassport')->user();
        $user           = new User($oAuthUser->user);
        $user->password = 'token';
        Auth::login($user, true );

        return redirect()->route('dashboard');
    }
}

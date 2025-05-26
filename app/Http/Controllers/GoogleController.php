<?php

namespace App\Http\Controllers;
use Cache;
use Config;
use View;
use DateTime;
use Socialite;
use DateTimeZone;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\User;
use Illuminate\Support\Facades\Auth;


class GoogleController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->stateless()->user();
            //$googleUser = Socialite::driver('google')->stateless()->setHttpClient(new \GuzzleHttp\Client(['verify' => false]))->user();
            // 檢查使用者是否存在
            $user = User::where('email', $googleUser->getEmail())->first();

            // 不存在則建立新用戶
            if (!$user) {
                $user = User::create([
                    'name'     => $googleUser->getName(),
                    'email'    => $googleUser->getEmail(),
                    'google_id' => $googleUser->getId(),
                    'password' => bcrypt(uniqid()), // 隨機密碼
                ]);
            }

            Auth::login($user);

            return redirect('/member');

        } catch (\Exception $e) {
            return redirect('/login')->withErrors(['msg' => 'Google 登入失敗，請稍後再試或連繫客服人員。']);
             //return redirect('/login')->withErrors(['msg' => $e->getMessage()]);
        }
    }

   
   
}

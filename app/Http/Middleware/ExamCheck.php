<?php

namespace App\Http\Middleware;
use Closure;
use Carbon\Carbon;
use Auth;


class ExamCheck
{
    
    public function handle($request, Closure $next)
    {       
           
            function form(){
                $html='
                <!DOCTYPE html>
                <html>
                 <meta charset="utf-8">
                <meta name="viewport"
                    content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no">
                <title>PenPen - 準備開始</title>
               
                <link rel="icon" href="'.asset("/app_assets/img/favicon.png").'?d='.date('Ymdhis').'" />
                <!-- Google Font -->
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet">

                <!-- Css Styles -->
                <link rel="stylesheet" href="'.asset("/app_assets/css/bootstrap.min.css").'" type="text/css">
                <link rel="stylesheet" href="'.asset("/app_assets/css/font-awesome.min.css").'" type="text/css">
                <link rel="stylesheet" href="'.asset("/app_assets/css/style.css").'" type="text/css">
                
                <body>
                 <div class="min-h-screen flex items-center justify-center bg-gray-50">
                    <div class="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
                        <h1 class="text-2xl font-bold mb-6 text-center">準備開始</h1>
                        <form class="space-y-6" action="'.route('app.response.name').'" METHOD="POST">
                        <input type="hidden" name="_token" value="'.csrf_token().'">
                            <div class="space-y-2"><label
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    for=":r2i:-form-item">請輸入您的名稱/代號</label>
                                    <input
                                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    placeholder="請輸入您的名稱" name="exam_participantCalled" id=":r2i:-form-item"
                                    aria-describedby=":r2i:-form-item-description" aria-invalid="false" value=""></div><button
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                                type="submit">開始測驗</button>
                        </form>
                    </div>
                </div>
                </body>
                
                </html>
                '; 
                
                echo $html;
                exit;
            }
            
            if(!$request->session()->has('exam_participantCalled') || !$request->session()->has('exam_startTime')){
                form();
            }
            $startTime = $request->session()->get('exam_startTime');
            $start = Carbon::parse($startTime);
            $now = now();
            // 若現在時間晚於 start_time + 30 秒 → 拒絕進入並清除 session
            if ($now->gt($start->addSeconds(30))) {
                $request->session()->forget(['exam_participantCalled', 'exam_startTime']);
                form();
            }
            
        
           
            return $next($request); 
    }
  
}

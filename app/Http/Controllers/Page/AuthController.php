<?php

namespace App\Http\Controllers\Page;
use Cache;
use Config;
use DB;
use View;
use DateTime;
use DateTimeZone;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

use App\Models\WorkSheet;
use App\Models\Favorites;
use App\Models\Exams;
use App\Models\ExamResponses;



class AuthController extends Controller
{
    public function login()
    {
        
        $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 登入/註冊",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 登入/註冊",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/login'),
        );
        View::share ( 'meta_tag', $meta_tag);

        if (Auth::check()) {
            return redirect('/member');
        } else {
            return response()->view('page/login')->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        }
        
    }
    public function logout()
    {
        try {
            Auth::logout();
            return redirect('/login');
        } catch (\Exception $e) {
            return redirect('/')->withErrors(['msg' => $e->getMessage()]);
             //return redirect('/login')->withErrors(['msg' => $e->getMessage()]);
        }
        
    }
    public function member()
    {
        
        $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 會員中心",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 會員中心",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/member'),
        );
        View::share ( 'meta_tag', $meta_tag);

        return response()->view('page/member')->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        
    }

    public function memberInfoChange()
    {
        
        $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 會員資料更新",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 會員資料更新",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/member/change'),
        );
        View::share ( 'meta_tag', $meta_tag);

        return response()->view('page/member_info_change')->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        
    }

    public function memberUpdate(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $user = Auth::user();
        $user->name = $request->input('name');
        $user->save();

        return redirect()->route('auth.member');
        
    }

    public function createWorksheet()
    {
       $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 建立學習單",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 建立學習單",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/member/createWorksheet'),
        );
        View::share ( 'meta_tag', $meta_tag);

        return response()->view('page/create_worksheet')->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        
    }

    public function updateWorksheet(Request $request, $id)
    {
        if(is_null($id)  || !WorkSheet::where('id', $id)->where('author_id', Auth::user()->id)->first()) abort(404);
        $item = WorkSheet::where('id', $id)->where('author_id', Auth::user()->id)->first();
        View::share ( 'item', $item);

       $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 編輯學習單",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 編輯學習單",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/member/updateWorksheet'),
        );
        View::share ( 'meta_tag', $meta_tag);

        return response()->view('page/create_worksheet')->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        
    }

     protected function worksheetUpload(Request $request)
    {
            $data = $request->all();
            $result = array("status" => null,"message" => null,"data" => null);
            if(isset($data['id'])){
                $picName = $data['id'].date('YmdHis');
                if(!Auth::check() || !isset($data['title']) || !isset($data['age']) || !isset($data['duration']) || !isset($data['question']) ||  !isset($data['enable'])){
                        $result['status'] = 'error';
                        $result['message'] = "請將資料填寫完整再上傳。";
                        return $result;
                }
                $WorkSheet = WorkSheet::where('id',$data['id'])->first();
                if($WorkSheet['author_id'] != Auth::user()->id) {
                        $result['status'] = 'error';
                        $result['message'] = "請注意您的操作避免違規。";
                        return $result;
                }
                $WorkSheet->title = $data['title'];
                $WorkSheet->duration = $data['duration'];
                $WorkSheet->intro = $data['intro'];
                $WorkSheet->age = $data['age'];
                $WorkSheet->question = $data['question'];
                $WorkSheet->is_enabled = $data['enable'];

                if(isset($data['file']) && $data['file'] != 'null') {
                    $file = $data['file'];
                    // 将上传的文件移动到目标目录
                    if($file == "" || $file == false || $file->getSize() > 300*1024 ){
                        $result['status'] = 'error';
                        $result['message'] = "主圖上傳失敗，請確認檔案為圖檔且小於300KB";
                        return $result;
                    }
                    if($file->move(public_path('/app_assets/img/worksheet_img/'), $picName.'.'.$file->getClientOriginalExtension())) {
                        if ($WorkSheet['image_name'] != null && file_exists(public_path('/app_assets/img/worksheet_img/'.$WorkSheet['image_name']))) {
                            unlink(public_path('/app_assets/img/worksheet_img/'.$WorkSheet['image_name']));
                        }
                        $WorkSheet->image_name = $picName.'.'.$file->getClientOriginalExtension();
                    } else {
                        $result['status'] = 'error';
                        $result['message'] = "上傳主圖失敗，請重新再試一次。";
                        return $result;
                    }
                }
                
                $WorkSheet->save(); 

                $result['status'] = 'success';
                $result['message'] = "修改成功";
                return $result;
            }else{
                $WorkSheet = new WorkSheet;
                $result = DB::select("SHOW TABLE STATUS LIKE 'worksheet'");
                $newest_id = $result[0]->Auto_increment;
                $picName = $newest_id.date('YmdHis');

                if(!Auth::check() || !isset($data['title']) || !isset($data['age']) || !isset($data['duration']) || !isset($data['question']) ||  !isset($data['enable'])){
                        $result['status'] = 'error';
                        $result['message'] = "請將資料填寫完整再上傳。";
                        return $result;
                }
                $WorkSheet->title = $data['title'];
                $WorkSheet->author_id = Auth::user()->id;
                $WorkSheet->duration = $data['duration'];
                $WorkSheet->intro = $data['intro'];
                if(isset($data['file']) && $data['file'] != 'null') {
                    $file = $data['file'];
                    
                    // 将上传的文件移动到目标目录
                    if($file == "" || $file == false || $file->getSize() > 300*1024 ){
                        $result['status'] = 'error';
                        $result['message'] = "主圖上傳失敗，請確認檔案為圖檔且小於300KB";
                        return $result;
                    }
                    if($file->move(public_path('/app_assets/img/worksheet_img/'), $picName.'.'.$file->getClientOriginalExtension())) {
                        $WorkSheet->image_name = $picName.'.'.$file->getClientOriginalExtension();
                    } else {
                        $result['status'] = 'error';
                        $result['message'] = "上傳主圖失敗，請重新再試一次。";
                        return $result;
                    }
                }
                $WorkSheet->age = $data['age'];
                $WorkSheet->question = $data['question'];
                $WorkSheet->is_enabled = $data['enable'];

                $WorkSheet->save();

                $result['status'] = 'success';
                $result['message'] = "新增成功";
                return $result;
            }
        
    }

    public function createExam()
    {
       $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 建立測驗",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 建立測驗",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/member/createExam'),
        );
        View::share ( 'meta_tag', $meta_tag);
        $myFavoriteWorksheet = Favorites::with(['worksheet'=> function ($query) {
                        $query->where('is_enabled',1)->with('author');
                    }])->where('user_id', Auth::user()->id)->get();
        View::share ( 'myFavoriteWorksheet', $myFavoriteWorksheet);

        return response()->view('page/create_exam')->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        
    }

     public function examAdd(Request $request){
        $data = $request->all();
        $result = array("status" => null,"message" => null,"data" => null);
        if(!Auth::check()){
            $result['status'] = 'error';
            $result['message'] = "請先登入後繼續";
            return $result;
        }else if( !isset($data['title']) || !isset($data['sheet_id']) || !isset($data['start_time']) ||  !isset($data['end_time'])){
            $result['status'] = 'error';
            $result['message'] = "請將資料填寫完整再上傳。";
            return $result;
        }else if(!WorkSheet::where('id',$data['sheet_id'])->first() || !Favorites::with(['worksheet'=> function ($query) {
                        $query->where('is_enabled',1);
                    }])->where('user_id', Auth::user()->id)->where('sheet_id',$data['sheet_id'])->first()){
            $result['status'] = 'error';
            $result['message'] = "此學單不在你的清單，或作者已停用該表單。";
            return $result;
        }else{
            $startTime = new DateTime($data['start_time']);
            $endTime = new DateTime($data['end_time']);
            $now = new DateTime(); // 取得目前時間

            if ($startTime > $endTime || $startTime < $now || $endTime < $now) {
                $result['status'] = 'error';
                $result['message'] = "開始與結束時間設定有誤，請重新設定時間。";
                return $result;
            }


            $Exams = new Exams;
            $Exams->exam_id = $this->generateUniqueId();
            $Exams->title = $data['title'];
            $Exams->description = $data['description'];
            $Exams->sheet_id = $data['sheet_id'];
            $Exams->creator_id = Auth::user()->id;
            $Exams->start_time = $data['start_time'];
            $Exams->end_time = $data['end_time'];
            $Exams->save();

            $result['status'] = 'success';
            $result['message'] = "成功新增測驗";
            return $result;

        }
    }

    public function myWorksheet()
    {
       $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 我的學單",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 我的學單",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/member/myWorksheet'),
        );
        View::share ( 'meta_tag', $meta_tag);

        $myCreateWorksheet = WorkSheet::with('author')->where('author_id', Auth::user()->id)->get();
        View::share ( 'myCreateWorksheet', $myCreateWorksheet);
        $myFavoriteWorksheet = Favorites::with(['worksheet'=> function ($query) {
                        $query->with('author');
                    }])->where('user_id', Auth::user()->id)->get();
         View::share ( 'myFavoriteWorksheet', $myFavoriteWorksheet);

        return response()->view('page/myworksheet')->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        
    }

    public function favoriteJoin(Request $request){
        $data = $request->all();
        $result = array("status" => null,"message" => null,"data" => null);
        if(!Auth::check()){
            $result['status'] = 'error';
            $result['message'] = "請先登入後繼續";
            return $result;
        }else if(!WorkSheet::where('id',$data['id'])->first()){
            $result['status'] = 'error';
            $result['message'] = "此學單不存在。";
            return $result;
        }else if(Favorites::where('user_id', Auth::user()->id)->where('sheet_id',$data['id'])->first()){
            $result['status'] = 'success';
            $result['message'] = "此學單已在您的清單，請至會員中心 > 我的學單查看。";
            return $result;
        }else{
            $Favorites = new Favorites;
            $Favorites->user_id = Auth::user()->id;
            $Favorites->sheet_id = $data['id'];

            $Favorites->save();

            $result['status'] = 'success';
            $result['message'] = "成功加入我的學單。";
            return $result;

        }
    }

    public function examHistory()
    {
       $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 測驗紀錄",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 測驗紀錄",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/member/examHistory'),
        );
        View::share ( 'meta_tag', $meta_tag);

        $examList = Exams::with('response')->where('creator_id',Auth::user()->id)->orderBy('created_at','desc')->get();
        View::share ( 'examList', $examList);

        return response()->view('page/exam_history')->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        
    }

    public function examHistoryDetail(Request $request , $id)
    {
        if(is_null($id)  || !Exams::where('exam_id', $id)->where('creator_id', Auth::user()->id)->first()) abort(404);
        $item = Exams::with('response')->where('exam_id', $id)->where('creator_id', Auth::user()->id)->first();
        View::share ('item', $item);
       $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 測驗紀錄內頁",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 測驗紀錄內頁",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/member/examHistory/detail'),
        );
        View::share ( 'meta_tag', $meta_tag);

        return response()->view('page/exam_history_detail')->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        
    }

    public function generateUniqueId($length = 10)
    {
        $characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        $max = strlen($characters) - 1;

        do {
            // 隨機產生字串
            $random = '';
            for ($i = 0; $i < $length; $i++) {
                $random .= $characters[random_int(0, $max)];
            }

            // Eloquent 查詢：確認是否已存在此 id
            $exists = Exams::where('exam_id', $random)->exists();

        } while ($exists); // 重複則重新產生

        return $random;
    }
     
   
   
}

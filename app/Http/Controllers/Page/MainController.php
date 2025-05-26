<?php

namespace App\Http\Controllers\Page;
use Cache;
use Config;
use View;
use DateTime;
use DateTimeZone;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\WorkSheet;
use App\Models\Exams;
use App\Models\ExamResponses;


class MainController extends Controller
{
    public function index()
    {
        
        $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 首頁",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 首頁",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/'),
        );
        View::share ( 'meta_tag', $meta_tag);
        $worksheetList = WorkSheet::with('author')->where('is_enabled',1)->orderBy('updated_at','desc')->take(5)->get();
        View::share ( 'worksheetList', $worksheetList);
        return view('page/home');
    }

    public function worksheetList()
    {
        
        $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 學單列表",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 學單列表",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/list'),
        );
        View::share ( 'meta_tag', $meta_tag);

        $worksheetList = WorkSheet::with('author')->where('is_enabled',1)->orderBy('updated_at','desc')->get();
        View::share ( 'worksheetList', $worksheetList);

        return view('page/worksheet-list');
    }

    public function exam(Request $request , $id)
    {
         if(is_null($id)  || !Exams::where('exam_id', $id)->first())  return redirect()->route('app.exam.close');
        $item = Exams::with('worksheet')->where('exam_id', $id)->first();
        $item['worksheet']['question'] = json_decode($item['worksheet']['question']);
        View::share ('item', $item);

        if(strtotime(date('Y-m-d H:i').'+ 8 hour') < strtotime($item['start_time']) || strtotime(date('Y-m-d H:i').'+ 8 hour') > strtotime($item['end_time'])){
            return redirect()->route('app.exam.close');
        }
    
        
        $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 測驗開始",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 測驗開始",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/'),
        );
        View::share ( 'meta_tag', $meta_tag);
        return response()->view('page/exam')->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    }

    public function examClose()
    {
        session()->forget(['exam_participantCalled', 'exam_startTime']);
        $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 測驗關閉",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 測驗關閉",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/examClose'),
        );
        View::share ( 'meta_tag', $meta_tag);
        return view('page/exam_close');
    }

    public function examSuccess()
    {
        session()->forget(['exam_participantCalled', 'exam_startTime']);
        $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 測驗完成",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 測驗完成",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/examSuccess'),
        );
        View::share ( 'meta_tag', $meta_tag);
        return view('page/exam_success');
    }

    public function responseName(Request $request)
    {
        session([
            'exam_participantCalled' => $request->input('exam_participantCalled'),
            'exam_startTime' => now()->toDateTimeString()
        ]);
        return  redirect()->back();
        
    }

    
    public function responseUpload(Request $request)
    {
        $data = $request->all();
        $item = Exams::with('worksheet')->where('exam_id', $data['exam_id'])->first();
        $question = json_decode($item['worksheet']['question']);
        foreach($question as $key => $value){
            $question[$key]->response = [];
            if($value->type != '多選題'){
                if(isset($data['question'.($key+1)]) ){
                    array_push($question[$key]->response, $data['question'.($key+1)]); 
                }
                

            }else{
                 if(isset($data['question'.($key+1)]) ){
                $question[$key]->response = $data['question'.($key+1)];
                 }
            }
        }
        $start_time = new DateTime(date("Y-m-d H:i:s",strtotime(session('exam_startTime').'+ 8 hour')));
        $end_time = new DateTime(date("Y-m-d H:i:s",strtotime('+ 8 hour')));
        $interval = $start_time->diff($end_time);
        $diffInSeconds = ($interval->days * 24 * 60 * 60) + 
                 ($interval->h * 60 * 60) + 
                 ($interval->i * 60) + 
                 $interval->s;

        $response = new ExamResponses;
        $response->exam_id = $data['exam_id'];
        $response->participant_called = session('exam_participantCalled');
        $response->start_time =  date("Y-m-d H:i:s",strtotime(session('exam_startTime').'+ 8 hour'));
        $response->end_time = date("Y-m-d H:i:s",strtotime('+ 8 hour'));
        $response->duration = $diffInSeconds;
        $response->answer = json_encode($question, JSON_UNESCAPED_UNICODE);
        $response->save();
        session()->forget(['exam_participantCalled', 'exam_startTime']);
        return redirect()->route('app.exam.success');
        
    }

    public function contact()
    {
        
        $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 聯絡我們",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 聯絡我們",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/contact'),
        );
        View::share ( 'meta_tag', $meta_tag);
        return view('page/contact');
    }

    public function privacy()
    {
        
        $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 隱私政策",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 隱私政策",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/list'),
        );
        View::share ( 'meta_tag', $meta_tag);
        return view('page/privacy');
    }

    public function terms()
    {
        
        $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 使用條款",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 使用條款",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/terms'),
        );
        View::share ( 'meta_tag', $meta_tag);
        return view('page/terms');
    }

    public function faq()
    {
        
        $meta_tag = array(
            'company_name' => 'PenPen筆筆網',
            'title' => "PenPen - 常見問題",
            'description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',                           
            'image' => asset('/app_assets/img/logo.png'),
            'og_title' => "PenPen - 常見問題",
            'og_description' => 'PenPen 基於現代教育學理論，結合實踐經驗，打造出具備結構力、美學力、實作力價值的學習設計系統。',     
            'og_type' =>'WEB',                                  
            'og_image' => asset('/app_assets/img/logo.png'),
            'og_image_type' => 'image/png',
            'og_url' => url('/faq'),
        );
        View::share ( 'meta_tag', $meta_tag);
        return view('page/faq');
    }

   
}

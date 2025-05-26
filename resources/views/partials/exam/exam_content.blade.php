 @section('style')
<style>
    #end_block{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.7);
        padding: 10px;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        color:rgb(255, 255, 255); /* gray-700 */
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 9999999;

    }
</style>
@append
<div id="end_block">
停止作答
</div>
<form class="space-y-8" id="exam-form" action="{{ route('app.response.upload') }}" method="post">
    <input type="hidden" name="_token" value="{{ csrf_token() }}">
    <input type="hidden" name="exam_id" value="{{$item['exam_id']}}">
        <div class="min-h-screen bg-gray-50 pb-8">
            <div class="sticky top-0 bg-white shadow-md z-10">
                <div class="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col sm:flex-row justify-between items-center">
                        <div>
                            <h1 class="text-xl font-bold">{{$item['title']}}</h1>
                            <p class="text-sm text-gray-500">應試者: {{session('exam_participantCalled')}}</p>
                        </div>
                        <div class="flex items-center mt-4 sm:mt-0">
                            <div class="text-right mr-4">
                                <p class="text-sm text-gray-500">剩餘時間</p>
                                <p class="font-mono text-lg" id="countdown">00:00:00</p>
                            </div><button
                                class="submitBtn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">提交測驗</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                @if(isset($item['description']) && $item['description'] != null)
                <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 class="font-medium mb-2">測驗說明</h2>
                    <p class="text-gray-600">{{$item['description']}}</p>
                </div>
                @endif
                
                    
                     @foreach($item['worksheet']['question'] as $i => $question)
                     <div class="bg-white rounded-lg shadow-sm p-6">
                        <h3 class="font-medium text-lg mb-4">{{$i+1}}. {{$question->title}}</h3>
                        <div class="space-y-2">
                            <div class="grid gap-2 space-y-3"style="outline: none;">
                                @if($question->type == '單選題')
                                    @for($j = 1; $j <= count($question->option); $j++)
                                    <div class="flex items-center space-x-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="question{{$i+1}}" id="option{{$i+1}}-{{$j}}" value="{{$question->option[$j-1]}}" >
                                            <label class="form-check-label" for="option{{$i+1}}-{{$j}}">
                                                {{$question->option[$j-1]}}
                                            </label>
                                        </div>
                                    </div>
                                    @endfor
                                @elseif($question->type  == '多選題')
                                    @for($j = 1; $j <= count($question->option); $j++)
                                    <div class="flex items-center space-x-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="question{{$i+1}}[]" id="option{{$i+1}}-{{$j}}" value="{{$question->option[$j-1]}}" >
                                            <label class="form-check-label" for="option{{$i+1}}-{{$j}}">
                                                {{$question->option[$j-1]}}
                                            </label>
                                        </div>
                                    </div>
                                    @endfor
                                @elseif($question->type  == '是非題')
                                    @for($j = 1; $j <= count($question->option); $j++)
                                    <div class="flex items-center space-x-2">
                                        <div class="flex items-center space-x-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="question{{$i+1}}" id="option{{$i+1}}-{{$j}}" value="{{$question->option[$j-1]}}" >
                                            <label class="form-check-label" for="option{{$i+1}}-{{$j}}">
                                                {{$question->option[$j-1]}}
                                            </label>
                                        </div>
                                    </div>
                                    </div>
                                    @endfor
                                @elseif($question->type  == '問答題')
                                <div class="flex items-center space-x-2">
                                    <textarea class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]" name="question{{$i+1}}" id="question{{$i+1}}"></textarea>
                                </div>
                                @endif
                            </div>
                        </div>
                    </div>
                     @endforeach
                    <br>
                    <div class="flex justify-end"><button 
                            class="submitBtn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            type="submit">提交測驗</button></div>
               
            </div>
        </div>
 </form>

 @section('scripts')
<script>


$(document).ready(function () {
    window.onbeforeunload = function () {
    return "確定要重新整理或離開嗎？資料可能尚未儲存。";
    };
  $(document).on('contextmenu', function (e) {
    e.preventDefault();
  });
  $('.submitBtn').on('click', function (e) {
     window.onbeforeunload = null;
    let confirmSubmit = confirm("你確定要提交測驗嗎？");
    if (!confirmSubmit) {
      e.preventDefault();
      window.onbeforeunload = function () {
        return "確定要重新整理或離開嗎？資料可能尚未儲存。";
     };
    } else {
      $('#end_block').css('display','flex');
    }
  });
  

  let countdownMinutes = {{$item['worksheet']['duration']}};
  let endTime = new Date().getTime() + countdownMinutes * 60 * 1000;

  function updateCountdown() {
    let now = new Date().getTime();
    let remaining = endTime - now;

    if (remaining <= 0) {
      $('#countdown').text("00:00:00");
      clearInterval(timer);
      $('#end_block').css('display','flex'); // 顯示結束提示
      $('#exam-form').submit(); // 自動送出
    }

    let hrs = Math.floor(remaining / 1000 / 60 / 60);
    let mins = Math.floor((remaining / 1000 / 60) % 60);
    let secs = Math.floor((remaining / 1000) % 60);

    $('#countdown').text(
      String(hrs).padStart(2, '0') + ':' +
      String(mins).padStart(2, '0') + ':' +
      String(secs).padStart(2, '0')
    );
  }

  // 每秒更新一次畫面（計算依然靠時間戳）
  let timer = setInterval(updateCountdown, 1000);
  updateCountdown(); // 預設先跑一次
});
</script>
 @append
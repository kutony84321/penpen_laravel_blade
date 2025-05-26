 @section('style')
 <style>
     #pills-tab .active {
             background-color: rgb(239 246 255);
     }
     #pills-tab .pill-item {
        width: 100%;
     }

 </style>
 @append
<main class="flex-grow container mx-auto px-4 py-8">
     <div class="mb-6 flex justify-between items-center">
         <div>
             <h1 class="text-3xl font-bold">{{$item['title']}}
                            @if(strtotime(date('Y-m-d H:i').'+ 8 hour') < strtotime($item['start_time']))
                            <span class="px-2 py-1 rounded-full text-xs bg-red-100 text-green-800">尚未開始</span>
                            @elseif(strtotime(date('Y-m-d H:i').'+ 8 hour') > strtotime($item['end_time']))
                            <span class="px-2 py-1 rounded-full text-xs bg-gray-100 text-green-800">已結束</span>
                            @else
                            <span class="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">進行中</span>
                            @endif
             </h1>
             <p class="text-gray-600 mt-1">測驗期間: {{date("Y-m-d H:i",strtotime($item['start_time']))}} - {{date("Y-m-d H:i",strtotime($item['end_time']))}}</p>
             <p class="text-blue-600 mt-1">測驗連結: <a href="{{url('/exam/')}}/{{$item['exam_id']}}" target="_blank">{{url('/exam/')}}/{{$item['exam_id']}}</a></p>
         </div><button onclick="location.href='{{route('auth.member.examhistory')}}'"
             class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">返回列表</button>
     </div>
     <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div class="rounded-lg border bg-card text-card-foreground shadow-sm md:col-span-1">
             <div class="flex flex-col space-y-1.5 p-6">
                 <h3 class="text-2xl font-semibold leading-none tracking-tight">受試者列表 ({{count($item['response'])}})</h3>
             </div>
             <div class="p-6 pt-0">
                 <div class="space-y-2 nav" id="pills-tab">
                    @if(count($item['response']) > 0)
                    @foreach($item['response'] as $i => $res)
                     <div class="pill-item p-3 rounded-md cursor-pointer transition-colors border border-blue-200 @if($i == 0) active @endif" data-toggle="pill" data-target="#res-{{$i}}" >
                         <div class="font-medium">{{$res['participant_called']}}</div>
                         <div class="text-sm text-gray-500 mt-1">完成時間: {{$res['end_time']}}</div>
                         <div class="text-sm text-gray-500">花費時間: {{gmdate("H時 i分 s秒", $res['duration'])}}</div>
                     </div>
                    @endforeach
                    @else
                    尚無受試者
                    @endif
                 </div>
             </div>
         </div>
         <div class="rounded-lg border bg-card text-card-foreground shadow-sm md:col-span-2 tab-content">
             @if(count($item['response']) > 0)
             @foreach($item['response'] as $i => $res)
             <div class="tab-pane fade @if($i == 0) show active @endif" id="res-{{$i}}"  role="tabpanel">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="text-2xl font-semibold leading-none tracking-tight">受試詳細資料 - {{$res['participant_called']}}</h3>
                </div>
                <div class="p-6 pt-0">
                    <div class="space-y-6">
                        <div class="grid grid-cols-2 gap-4 text-sm">
                            <div><span class="font-medium">受試者: </span>{{$res['participant_called']}}</div>
                            <div><span class="font-medium">花費時間: </span>{{gmdate("H時 i分 s秒", $res['duration'])}}</div>
                            <div><span class="font-medium">開始時間: </span>{{$res['start_time']}}</div>
                            <div><span class="font-medium">完成時間: </span>{{$res['end_time']}}</div>
                        </div>
                        <div dir="ltr" data-orientation="horizontal">

                            <div role="tablist" aria-orientation="horizontal"
                                class="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
                                tabindex="0" data-orientation="horizontal" style="outline: none;">
                                    <button type="button" disabled class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                                    role="tab" aria-selected="true">答題詳情</button>
                            </div>
                            <div id="answer-detail">

                            @foreach(json_decode($res['answer']) as $j => $ans)
                                @if($ans->type == '單選題' || $ans->type == '多選題')
                                <div 
                                    class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 pt-4"
                                    style="">
                                    <div class="space-y-6">
                                        <div class="p-4 border rounded-md">
                                            <div class="flex justify-between items-start mb-2">
                                                <h3 class="font-medium">{{$j+1}}. {{$ans->title}} ({{$ans->type}})</h3>
                                                <!--<span
                                                    class="px-2 py-1 rounded text-xs bg-green-100 text-green-800">正確</span>-->
                                            </div>
                                            <div class="mt-2">
                                                <ul class="list-group list-group-flush text-xs">
                                                    @foreach($ans->option as $k => $opt)
                                                    <li class="list-group-item">{{$k+1}}. {{$opt}}</li>
                                                    @endforeach
                                                </ul> 
                                            </div>
                                            <div class="mt-2">
                                                <p class="text-sm text-gray-600 mb-1">回答:</p>
                                                <div class="space-y-1">
                                                    <div class="text-xs p-2 rounded bg-gray-50 border-l-4 border-gray-500">
                                                        @if(!empty($ans->response))
                                                            @if(count($ans->response) > 1)
                                                            {{implode(",",$ans->response)}}
                                                            @else
                                                            {{$ans->response[0]}}
                                                            @endif
                                                        @else
                                                        <i>無作答</i>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <p class="text-sm text-gray-600 mb-1">參考答案:</p>
                                                <div class="space-y-1">
                                                    <div class="text-xs p-2 rounded bg-gray-50 border-l-4 border-green-500">
                                                        @if(count($ans->answer) >1)
                                                        {{implode(",",$ans->answer)}}
                                                        @else
                                                        {{$ans->answer[0]}}
                                                        @endif
                                                        @if($ans->explanation != "")
                                                        <br>
                                                        <br>
                                                        <b>解析:<br>
                                                        {{$ans->explanation}}
                                                        </b>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                               
                                @elseif($ans->type == '是非題')
                                <div 
                                    class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 pt-4"
                                    style="">
                                    <div class="space-y-6">
                                        <div class="p-4 border rounded-md">
                                            <div class="flex justify-between items-start mb-2">
                                                <h3 class="font-medium">{{$j+1}}. {{$ans->title}} ({{$ans->type}})</h3>
                                                <!--<span
                                                    class="px-2 py-1 rounded text-xs bg-green-100 text-green-800">正確</span>-->
                                            </div>
                                           <div class="mt-2">
                                                <p class="text-sm text-gray-600 mb-1">回答:</p>
                                                <div class="space-y-1">
                                                    <div class="text-xs p-2 rounded bg-gray-50 border-l-4 border-gray-500">
                                                        @if(!empty($ans->response))
                                                           @if($ans->response[0] == 'true')
                                                           是
                                                           @else
                                                           否
                                                           @endif
                                                            
                                                        @else
                                                        <i>無作答</i>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <p class="text-sm text-gray-600 mb-1">參考答案:</p>
                                                <div class="space-y-1">
                                                    <div class="text-xs p-2 rounded bg-gray-50 border-l-4 border-green-500">
                                                        @if($ans->answer[0] == 'true')
                                                           是
                                                           @else
                                                           否
                                                           @endif
                                                        
                                                        
                                                        @if($ans->explanation != "")
                                                        <br>
                                                        <br>
                                                        <b>解析:<br>
                                                        {{$ans->explanation}}
                                                        </b>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                @elseif($ans->type == '問答題')
                                <div 
                                    class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 pt-4"
                                    style="">
                                    <div class="space-y-6">
                                        <div class="p-4 border rounded-md">
                                            <div class="flex justify-between items-start mb-2">
                                                <h3 class="font-medium">{{$j+1}}. {{$ans->title}} ({{$ans->type}})</h3>
                                            </div>
                                            <div class="mt-2">
                                                <p class="text-sm text-gray-600 mb-1">回答:</p>
                                                <div class="space-y-1">
                                                    <div class="text-xs p-2 rounded bg-gray-50 border-l-4 border-gray-500">
                                                        @if(!empty($ans->response))
                                                            @if(count($ans->response) > 1)
                                                            {{implode(",",$ans->response)}}
                                                            @else
                                                            {{$ans->response[0]}}
                                                            @endif
                                                        @else
                                                        <i>無作答</i>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <p class="text-sm text-gray-600 mb-1">參考答案:</p>
                                                <div class="space-y-1">
                                                    <div class="text-xs p-2 rounded bg-gray-50 border-l-4 border-green-500">
                                                        <i>問答題無正確詳解。</i>
                                                        @if($ans->explanation != "")
                                                        <br>
                                                        <br>
                                                        <b>建議答案與解析:<br>
                                                        {{$ans->explanation}}
                                                        </b>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                @endif
                            @endforeach

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
             @endforeach
             @endif
            
         </div>
     </div>
 </main>


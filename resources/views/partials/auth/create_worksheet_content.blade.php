 @section('style')
 <style>
     #step-two,#step-three {
         display: none;
     }

 </style>
 @append
 <main class="flex-grow container mx-auto px-4 py-8">
     <div class="mb-8">
        @if(isset($item))
        <h1 class="text-3xl font-bold mb-4">編輯學習單</h1>
        @else
        <h1 class="text-3xl font-bold mb-4">建立學習單</h1>
         <p class="text-gray-600">填寫以下表單建立新的學習單，添加題目並設定正確答案。</p>
        @endif
         
     </div>
     <form id="upload-form">
         <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                 <div class="flex flex-col space-y-1.5 p-6">
                     <h3 class="text-2xl font-semibold leading-none tracking-tight">基本資訊</h3>
                 </div>
                 <div class="p-6 pt-0 space-y-6">
                     <div class="space-y-2"><label
                             class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                             for="worksheet-title">學習單標題</label><input
                             class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                             placeholder="請輸入學習單標題" name="worksheet-title" id="worksheet-title" value="@if(isset($item)){{$item['title']}}@endif">
                     </div>
                     <div class="space-y-2"><label
                             class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                             for="worksheet-img">學習單主圖片</label>
                         <input type="file" class=" flex h-10 w-full  " id="worksheet-img" name="worksheet-img"
                             accept="image/*" />
                         <div class="dataPreview" style="margin-top:15px;">
                             @if(isset($item) && $item->image_name != null) 上傳的檔案: <i class = "fa fa-file-zip-o"></i> {{ $item->image_name }}
                             <br> <span style="color:red">※上傳且提交完成後檔案會自動改名，方便系統辨識。</span>@endif 
                         </div>
                     </div>
                     <div class="space-y-2"><label
                             class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                             for="worksheet-duration">建議測試時間（分鐘）</label><input type="number"
                             class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                             min="1" name="worksheet-duration" id="worksheet-duration" value="@if(isset($item)){{$item['duration']}}@else{{15}}@endif">
                     </div>
                     <div class="space-y-2">
                         <div class="mb-4"><label
                                 class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                 for=":rl:-form-item">適合對象（可複選）</label></div>
                         <div class="grid grid-cols-2 gap-4">
                             <div class="flex items-center space-x-3 space-y-0">
                                 <div class="form-check">
                                     @if(isset($item) && in_array('幼兒',json_decode($item['age'])))
                                     <input class="form-check-input" name="worksheet-age" type="checkbox" checked value="幼兒">
                                     @else
                                     <input class="form-check-input" name="worksheet-age" type="checkbox"  value="幼兒"  >
                                     @endif
                                     <label class="form-check-label">
                                         幼兒
                                     </label>
                                 </div>
                             </div>
                             <div class="flex items-center space-x-3 space-y-0">
                                 <div class="form-check">
                                     @if(isset($item) && in_array('國小',json_decode($item['age'])))
                                     <input class="form-check-input" name="worksheet-age" type="checkbox" checked value="國小">
                                     @else
                                     <input class="form-check-input" name="worksheet-age" type="checkbox" value="國小">
                                     @endif
                                     <label class="form-check-label">
                                         國小
                                     </label>
                                 </div>
                             </div>
                             <div class="flex items-center space-x-3 space-y-0">
                                 <div class="form-check">
                                     @if(isset($item) && in_array('國中',json_decode($item['age'])))
                                     <input class="form-check-input" name="worksheet-age" type="checkbox" checked value="國中">
                                     @else
                                     <input class="form-check-input" name="worksheet-age" type="checkbox" value="國中">
                                     @endif
                                     <label class="form-check-label">
                                         國中
                                     </label>
                                 </div>
                             </div>
                             <div class="flex items-center space-x-3 space-y-0">
                                 <div class="form-check">
                                     @if(isset($item) && in_array('高中',json_decode($item['age'])))
                                     <input class="form-check-input" name="worksheet-age" type="checkbox" checked value="高中">
                                     @else
                                     <input class="form-check-input" name="worksheet-age" type="checkbox" value="高中">
                                     @endif
                                     <label class="form-check-label">
                                         高中
                                     </label>
                                 </div>
                             </div>
                             <div class="flex items-center space-x-3 space-y-0">
                                 <div class="form-check">
                                     @if(isset($item) && in_array('成人',json_decode($item['age'])))
                                     <input class="form-check-input" name="worksheet-age" type="checkbox" checked value="成人">
                                     @else
                                     <input class="form-check-input" name="worksheet-age" type="checkbox" value="成人">
                                     @endif
                                     <label class="form-check-label">
                                         成人
                                     </label>
                                 </div>
                             </div>
                             <div class="flex items-center space-x-3 space-y-0">
                                 <div class="form-check">
                                     @if(isset($item) && in_array('高齡者',json_decode($item['age'])))
                                     <input class="form-check-input" name="worksheet-age" type="checkbox" checked value="高齡者">
                                     @else
                                     <input class="form-check-input" name="worksheet-age" type="checkbox" value="高齡者">
                                     @endif
                                     <label class="form-check-label">
                                         高齡者
                                     </label>
                                 </div>
                             </div>
                             <div class="flex items-center space-x-3 space-y-0">
                                 <div class="form-check">
                                     @if(isset($item) && in_array('特殊生',json_decode($item['age'])))
                                     <input class="form-check-input" name="worksheet-age" type="checkbox" checked value="特殊生">
                                     @else
                                     <input class="form-check-input" name="worksheet-age" type="checkbox" value="特殊生">
                                     @endif
                                     <label class="form-check-label">
                                         特殊生
                                     </label>
                                 </div>
                             </div>


                         </div>
                     </div>
                     <div class="space-y-2">
                        <label
                             class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                             for="worksheet-intro">學習單說明</label><textarea
                             class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                              name="worksheet-intro" id="worksheet-intro" >@if(isset($item)){{$item['intro']}}@endif</textarea>
                     </div>
                     <hr>
                     <div class="flex flex-row items-center space-x-3 space-y-0 mt-4">

                         <div class="form-check">
                            @if(isset($item) && $item['is_enabled'] == 1 )
                             <input class="form-check-input" name="worksheet-enable" checked type="checkbox" value="true">
                             @else
                             <input class="form-check-input" name="worksheet-enable" type="checkbox" value="true">
                             @endif
                             <label class="form-check-label">
                                 是否啟用此學單
                             </label>
                         </div>

                     </div>
                 </div>
             </div>
             <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                 <div class="flex flex-col space-y-1.5 p-6">
                     <h3 class="text-2xl font-semibold leading-none tracking-tight">題目管理</h3>
                 </div>

                 <div class="p-6 pt-0">
                     <div class="space-y-4 mb-3" id="question-list">
                     </div>
                     <div data-toggle="modal" data-target="#createWorksheetModal"
                         class="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                         <span class="mr-2">+</span>新增題目</div>
                 </div>

             </div>
         </div>
         <div class="mt-8 flex justify-end"><button onclick="location.href='{{route('auth.member')}}'"
                 class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mr-4"
                 type="button">取消</button><button 
                 class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                 type="submit">儲存學習單</button></div>
     </form>

 </main>

 <!-- 建立學習單視窗 -->
 <div class="modal fade" id="createWorksheetModal" tabindex="-1" role="dialog"
     aria-labelledby="createWorksheetModalLabel" aria-hidden="true">
     <div class="modal-dialog" role="document">
         <div class="modal-content">
             <div class="modal-body">
                 <div class="flex flex-col space-y-2 text-center sm:text-left">
                     <h2 id="worksheet-modal-title" class="text-lg font-semibold text-foreground">新增題目</h2>
                 </div>
                 <div id="step-one">
                     <div class="space-y-2 mb-2"><label
                             class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                             for="question-title">題目標題</label><input
                             class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                             placeholder="請輸入題目標題 或 問題" name="title" id="question-title"
                             aria-describedby=":rj:-form-item-description" aria-invalid="false" value=""></div>
                     <div class="space-y-2 mb-2"><label
                             class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                             for="question-type">題目類型</label>
                         <br>
                         <select class="form-control" id="question-type">
                             <option value="單選題" selected>單一選擇題</option>
                             <option value="多選題">多選選擇題</option>
                             <option value="是非題">是非題</option>
                             <option value="問答題">問答題</option>
                         </select></div>
                     <div class="space-y-2 mb-2" id="option-count-container"><label
                             class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                             for="option-count">選項數量</label><input type="number"
                             class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                             min="2" max="10" name="optionCount" id="option-count" value="2">
                     </div>
                     <!--
                     <div class="flex flex-row items-center space-x-3 space-y-0" id="option-pic-container">
                         <div class="form-check">
                             <input class="form-check-input" type="checkbox" value="" name="optionPic" id="optionPic">
                             <label class="form-check-label" for="optionPic">
                                 選項為圖片
                             </label>
                         </div>
                     </div>-->
                 </div>
                 <div id="step-two">

                 </div>
                 <div id="step-three">

                 </div>

                 <div class="flex justify-between pt-4"><button data-dismiss="modal" aria-label="Close"
                         class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                         type="button">取消</button><button id="next-step"
                         class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                         type="button">下一步</button></div>
                 <button type="button" data-dismiss="modal" aria-label="Close"
                     class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"><svg
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="lucide lucide-x h-4 w-4">
                         <path d="M18 6 6 18"></path>
                         <path d="m6 6 12 12"></path>
                     </svg><span class="sr-only">Close</span></button>

             </div>
         </div>
     </div>
 </div>
 @section('scripts')
 <script>
     var step = 1; //1:建立題目第一階段，2:建立題目第二階段。3:編輯題目階段
     var changeindex = null;
     
     @if(isset($item))
     var questionList = {!!$item['question']!!};
     questionRender();
     @else
     var questionList = [];
     @endif

     $('#upload-form').on('submit', function (e) {
         e.preventDefault(); // 防止表單預設送出行為
         let formData = new FormData();
         let file = $('#worksheet-img')[0].files[0];
         let title = $('#worksheet-title').val().trim(); 
         let intro = $('#worksheet-intro').val().trim(); 
         let duration = parseInt($('#worksheet-duration').val());
         // 取得使用者選擇的第一個檔案

         @if(isset($item))
         formData.append('id', {{$item['id']}});
         @endif

         if (file) {
             formData.append('file', file);
         }else{
            formData.append('file', null);
         }

        if (title === '') {
            alert('請填寫學習單標題！');
            return;
        }else{
            formData.append('title', title);
        }

        const ageChecked = $('input[name="worksheet-age"]:checked').length > 0;
        if (!ageChecked) {
            alert('請至少選擇一個適用年齡');
            return; // 阻止表單送出
        }else{
            let age = $('input[name="worksheet-age"]:checked').map(function () {
                return $(this).val();
            }).get();
             formData.append('age', JSON.stringify(age));
        }

        if(isNaN(duration) || duration < 1){
            alert('測驗時間需要大於1分鐘');
            return;
        }else{
            formData.append('duration', duration);
        }

        const enableChecked = $('input[name="worksheet-enable"]:checked').length > 0;
        if (!enableChecked) {
             formData.append('enable', 0);
        }else{
            formData.append('enable', 1);
        }

        const questionChecked = questionList.length > 0;
        if (!questionChecked) {
            alert('請新增至少一個問題');
            return;
        }else{
            formData.append('question', JSON.stringify(questionList));
        }

        formData.append('intro', intro);

         $.ajax({
             url: '{{route("auth.member.upload.worksheet")}}', // ← 你的後端接收 API 路徑
             type: 'POST',
             data: formData,
             headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
             contentType: false, // 必須 false，讓 jQuery 不要設定 Content-Type
             processData: false, // 必須 false，讓 jQuery 不處理 data
             success: function (response) {
                alert(response['message']);
                if(response['status'] == "success"){
                    location.replace('{{route('auth.member')}}');
                }
                
             },
             error: function (xhr, ajaxOptions, thrownError) {
                 alert('儲存失敗，請稍後再試');
                 console.error(thrownError);
             }
         });
     });


     function questionRender() {
         $('#question-list').empty();
         for (let i = 1; i <= questionList.length; i++) {

             if (questionList[i - 1]['type'] == '單選題' || questionList[i - 1]['type'] == '多選題') {
                 $('#question-list').append(`
                    <div class="p-4 border rounded-lg hover:bg-gray-50">
                            <div class="flex justify-between items-start mb-2"><span class="font-medium">題目 :
                            ${questionList[i-1]['title']}</span>
                                <div class="flex space-x-2">
                                    <div onclick="questionListChange(${i-1})"
                                    class="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">編輯</div>
                                    <div onclick="questionListDelete(${i-1})"
                                    class="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">刪除</div>
                                </div>
                            </div>
                            <p class="text-sm text-gray-500">題型: ${questionList[i-1]['type']}</p>
                            <p class="text-sm text-gray-500">選項數: ${questionList[i-1]['option'].length}</p>
                        </div>`);
             } else {
                 $('#question-list').append(`
                    <div class="p-4 border rounded-lg hover:bg-gray-50">
                            <div class="flex justify-between items-start mb-2"><span class="font-medium">題目 :
                            ${questionList[i-1]['title']}</span>
                                <div class="flex space-x-2">
                                    <div onclick="questionListChange(${i-1})"
                                    class="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">編輯</div>
                                    <div onclick="questionListDelete(${i-1})"
                                    class="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">刪除</div>
                                </div>
                            </div>
                            <p class="text-sm text-gray-500">題型: ${questionList[i-1]['type']}</p>
                        </div>`);
             }


         }
     }

     function questionListChange(index) {
         step = 3;
         changeindex = index;
        $('#step-one').css('display', 'none');
        $('#step-three').css('display', 'block');
        $('#next-step').text('儲存題目');
        $('#worksheet-modal-title').text('編輯題目');
        const title = questionList[index]['title'];
        const type = questionList[index]['type'];
        const explanation = questionList[index]['explanation'];
        const optionCount = questionList[index]['option'].length;
        // 根據題型動態產生 HTML
        let html = ``;
        if (type == '單選題') {
            html += `
        <div class="font-medium mb-3">
                    <div id="step-two-title">題目: <input
                             class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                             placeholder="請輸入題目標題 或 問題" name="change-title" id="question-title-change" value="${title}"></div>
                    <div class="text-sm text-gray-500 mt-1" id="step-two-type">題型: ${type}</div>
                </div>
                <div class="space-y-4 mb-3">
                    <div class="font-medium">選項設定</div>`;
            for (let i = 1; i <= optionCount; i++) {
                html += `
            <div class="form-check">
                    <input class="form-check-input" type="radio" name="option-group" id="option${i}" value="" >
                    <label class="form-check-label" for="option${i}">
                        <input type="text" class="form-control" name='option${i}-value' id="option${i}-value"  value="${questionList[index]['option'][i-1]}" placeholder="請輸入選項名稱">
                    </label>
                    </div>`;
            }
            html += `</div>
                    <p class="text-sm text-gray-500 mt-2">請選擇正確答案（單選）</p>
                </div>
                <div class="space-y-2 mb-1"><label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="explanation">解析說明</label><textarea
                        class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                        placeholder="請輸入此題的解析說明，幫助學生理解答案" name="explanation" id="explanation"
                    >${explanation}</textarea></div>
        `;

        } else if (type == '多選題') {
            html += `
        <div class="font-medium mb-3">
                    <div id="step-two-title">題目: <input
                             class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                             placeholder="請輸入題目標題 或 問題" name="change-title" id="question-title-change" value="${title}"></div></div>
                    <div class="text-sm text-gray-500 mt-1" id="step-two-type">題型: ${type}</div>
                </div>
                <div class="space-y-4 mb-3">
                    <div class="font-medium">選項設定</div>`;
            for (let i = 1; i <= optionCount; i++) {
                html += `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" name="option-group" id="option${i}">
                <label class="form-check-label" for="option${i}">
                    <input type="text" class="form-control" name='option${i}-value' id="option${i}-value" value="${questionList[index]['option'][i-1]}" placeholder="請輸入選項名稱">
                </label>
            </div>`;
            }
            html += `</div>
                    <p class="text-sm text-gray-500 mt-2">請選擇正確答案（可複選）</p>
                </div>
                <div class="space-y-2 mb-1"><label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="explanation">解析說明</label><textarea
                        class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                        placeholder="請輸入此題的解析說明，幫助學生理解答案" name="explanation" id="explanation"
                    >${explanation}</textarea></div>
        `;
        } else if (type == '是非題') {
            html += `
        <div class="font-medium mb-3">
                    <div id="step-two-title">題目: <input
                             class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                             placeholder="請輸入題目標題 或 問題" name="change-title" id="question-title-change" value="${title}"></div>
                    <div class="text-sm text-gray-500 mt-1" id="step-two-type">題型: ${type}</div>
                </div>
                <div class="space-y-4 mb-3">
                    <div class="font-medium">選項設定</div>
            
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="option-group" id="option1" value="true" >
                    <label class="form-check-label" for="option1">
                        是
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="option-group" id="option2" value="false" >
                    <label class="form-check-label" for="option2">
                        否
                    </label>
                    </div>
            </div>
                    <p class="text-sm text-gray-500 mt-2">請選擇正確答案（單選）</p>
                </div>
                <div class="space-y-2 mb-1"><label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="explanation">解析說明</label><textarea
                        class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                        placeholder="請輸入此題的解析說明，幫助學生理解答案" name="explanation" id="explanation"
                    >${explanation}</textarea></div>
        `;
        } else if (type === '問答題') {
            html += `
        <div class="font-medium mb-3">
                    <div id="step-two-title">題目: <input
                             class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                             placeholder="請輸入題目標題 或 問題" name="change-title" id="question-title-change" value="${title}"></div>
                    <div class="text-sm text-gray-500 mt-1" id="step-two-type">題型: ${type}</div>
                </div>
                <div class="bg-gray-50 p-4 rounded-md" style="text-align: center;"><p class="text-sm text-gray-500">問答題無需設定選項，受試者可以自由填寫答案。</p></div>

                <div class="space-y-2 mb-1"><label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="explanation">解析說明</label><textarea
                        class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                        placeholder="請輸入此題的解析說明，幫助學生理解答案" name="explanation" id="explanation"
                    >${explanation}</textarea></div>
        `;
        }
        $('#step-three').html(html);
        $('#createWorksheetModal').modal('show');
     }

     function questionListDelete(index) {
         questionList.splice(index, 1);
         questionRender();
     }

     function toggleOptionCountField() {
         const selectedValue = $('#question-type').val();
         if (selectedValue === '單選題' || selectedValue === '多選題') {
             $('#option-count-container').slideDown();
             $('#option-pic-container').slideDown();
         } else {
             $('#option-count-container').slideUp();
             $('#option-pic-container').slideUp();
         }
     }
     $(document).ready(function () {

         // 初始化狀態
         toggleOptionCountField();

         // 當選項改變時更新欄位顯示
         $('#question-type').on('change', function () {
             toggleOptionCountField();
         });



         $('#createWorksheetModal').on('hidden.bs.modal', function (event) {
             $('#step-two').empty();
             $('#step-three').empty();
             $('#next-step').text('下一步');
             $('#worksheet-modal-title').text('新增題目');
             $('#step-two').css('display', 'none');
             $('#step-three').css('display', 'none');
             $('#step-one').css('display', 'block');
             $('#question-title').val('');
             $('#option-count').val(2);
             $('#question-type option:first').prop('selected', true);
             step = 1;
             changeindex = null;
             toggleOptionCountField();
         });



         $('#next-step').on('click', function () {
             if (step == 1) {
                 const title = $('#question-title').val().trim();
                 const type = $('#question-type').val();
                 const optionCount = parseInt($('#option-count').val());

                 // 基本驗證
                 if (title === '') {
                     alert('請填寫題目標題！');
                     return;
                 }

                 if ((type === '單選題' || type === '多選題') && (isNaN(optionCount) || optionCount <
                         2)) {
                     alert('選項數量需為 2 個以上！');
                     return;
                 }

                 // 根據題型動態產生 HTML
                 let html = ``;
                 if (type == '單選題') {
                     html += `
                    <div class="font-medium mb-3">
                             <div id="step-two-title">題目: ${$('#question-title').val()}</div>
                             <div class="text-sm text-gray-500 mt-1" id="step-two-type">題型: ${$('#question-type').val()}</div>
                         </div>
                         <div class="space-y-4 mb-3">
                             <div class="font-medium">選項設定</div>`;
                     for (let i = 1; i <= optionCount; i++) {
                         html += `
                        <div class="form-check">
                                <input class="form-check-input" type="radio" name="option-group" id="option${i}" value="" >
                                <label class="form-check-label" for="option${i}">
                                    <input type="text" class="form-control" name='option${i}-value' id="option${i}-value" placeholder="請輸入選項名稱">
                                </label>
                                </div>`;
                     }
                     html += `</div>
                             <p class="text-sm text-gray-500 mt-2">請選擇正確答案（單選）</p>
                         </div>
                         <div class="space-y-2 mb-1"><label
                                 class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                 for="explanation">解析說明</label><textarea
                                 class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                                 placeholder="請輸入此題的解析說明，幫助學生理解答案" name="explanation" id="explanation"
                                ></textarea></div>
                    `;

                 } else if (type == '多選題') {
                     html += `
                    <div class="font-medium mb-3">
                             <div id="step-two-title">題目: ${$('#question-title').val()}</div>
                             <div class="text-sm text-gray-500 mt-1" id="step-two-type">題型: ${$('#question-type').val()}</div>
                         </div>
                         <div class="space-y-4 mb-3">
                             <div class="font-medium">選項設定</div>`;
                     for (let i = 1; i <= optionCount; i++) {
                         html += `
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" name="option-group" id="option${i}">
                            <label class="form-check-label" for="option${i}">
                                <input type="text" class="form-control" name='option${i}-value' id="option${i}-value" placeholder="請輸入選項名稱">
                            </label>
                        </div>`;
                     }
                     html += `</div>
                             <p class="text-sm text-gray-500 mt-2">請選擇正確答案（可複選）</p>
                         </div>
                         <div class="space-y-2 mb-1"><label
                                 class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                 for="explanation">解析說明</label><textarea
                                 class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                                 placeholder="請輸入此題的解析說明，幫助學生理解答案" name="explanation" id="explanation"
                                ></textarea></div>
                    `;
                 } else if (type == '是非題') {
                     html += `
                    <div class="font-medium mb-3">
                             <div id="step-two-title">題目: ${$('#question-title').val()}</div>
                             <div class="text-sm text-gray-500 mt-1" id="step-two-type">題型: ${$('#question-type').val()}</div>
                         </div>
                         <div class="space-y-4 mb-3">
                             <div class="font-medium">選項設定</div>
                     
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="option-group" id="option1" value="true" >
                                <label class="form-check-label" for="option1">
                                    是
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="option-group" id="option2" value="false" >
                                <label class="form-check-label" for="option2">
                                   否
                                </label>
                                </div>
                     </div>
                             <p class="text-sm text-gray-500 mt-2">請選擇正確答案（單選）</p>
                         </div>
                         <div class="space-y-2 mb-1"><label
                                 class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                 for="explanation">解析說明</label><textarea
                                 class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                                 placeholder="請輸入此題的解析說明，幫助學生理解答案" name="explanation" id="explanation"
                                ></textarea></div>
                    `;
                 } else if (type === '問答題') {
                     html += `
                    <div class="font-medium mb-3">
                             <div id="step-two-title">題目: ${$('#question-title').val()}</div>
                             <div class="text-sm text-gray-500 mt-1" id="step-two-type">題型: ${$('#question-type').val()}</div>
                         </div>
                         <div class="bg-gray-50 p-4 rounded-md" style="text-align: center;"><p class="text-sm text-gray-500">問答題無需設定選項，受試者可以自由填寫答案。</p></div>

                         <div class="space-y-2 mb-1"><label
                                 class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                 for="explanation">解析說明</label><textarea
                                 class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                                 placeholder="請輸入此題的解析說明，幫助學生理解答案" name="explanation" id="explanation"
                                ></textarea></div>
                    `;
                 }

                 // 顯示
                 step = 2;
                 $('#step-one').css('display', 'none');
                 $('#step-two').css('display', 'block');
                 $('#next-step').text('儲存題目');

                 $('#step-two').html(html);
             } else if (step == 2) {
                 const title = $('#question-title').val().trim();
                 const type = $('#question-type').val();
                 const explanation = $('#explanation').val().trim();
                 if (type == '單選題' || type == '多選題') {
                     const optionCount = parseInt($('#option-count').val());
                     for (let i = 1; i <= optionCount; i++) {
                         if ($(`#option${i}-value`).val() == "") {
                             alert('請填寫選項文字');
                             return; // 阻止表單送出
                         }
                         $(`#option${i}`).val($(`#option${i}-value`).val());

                     }
                     const hasChecked = $('input[name="option-group"]:checked').length > 0;
                     if (!hasChecked) {
                         alert('請至少選擇一個答案選項');
                         return; // 阻止表單送出
                     }
                     let answer = $('input[name="option-group"]:checked').map(function () {
                         return $(this).val();
                     }).get();

                     let option = $('input[name="option-group"]').map(function () {
                         return $(this).val();
                     }).get();

                     questionList.push({
                         type: type,
                         title: title,
                         option: option,
                         answer: answer,
                         explanation: explanation
                     });

                 } else if (type == '是非題') {
                     const hasChecked = $('input[name="option-group"]:checked').length > 0;
                     if (!hasChecked) {
                         alert('請至少選擇一個答案選項');
                         return; // 阻止表單送出
                     }
                     let answer = $('input[name="option-group"]:checked').map(function () {
                         return $(this).val();
                     }).get();

                     let option = $('input[name="option-group"]').map(function () {
                         return $(this).val();
                     }).get();
                     questionList.push({
                         type: type,
                         title: title,
                         option: option,
                         answer: answer,
                         explanation: explanation
                     });

                 } else if (type == '問答題') {
                     questionList.push({
                         type: type,
                         title: title,
                         option: [],
                         answer: [],
                         explanation: explanation
                     });
                 }

                 questionRender();
                 $('#createWorksheetModal').modal('hide');
             }else if (step == 3) {
                 const title = $('#question-title-change').val().trim();
                 const type = questionList[changeindex]['type'];
                 const explanation = $('#explanation').val().trim();

                 if (title === '') {
                     alert('請填寫題目標題！');
                     return;
                 }
                 if (type == '單選題' || type == '多選題') {
                     const optionCount = questionList[changeindex]['option'].length;
                     for (let i = 1; i <= optionCount; i++) {
                         if ($(`#option${i}-value`).val() == "") {
                             alert('請填寫選項文字');
                             return; // 阻止表單送出
                         }
                         $(`#option${i}`).val($(`#option${i}-value`).val());

                     }
                     const hasChecked = $('input[name="option-group"]:checked').length > 0;
                     if (!hasChecked) {
                         alert('請至少選擇一個答案選項');
                         return; // 阻止表單送出
                     }
                     let answer = $('input[name="option-group"]:checked').map(function () {
                         return $(this).val();
                     }).get();

                     let option = $('input[name="option-group"]').map(function () {
                         return $(this).val();
                     }).get();

                     questionList[changeindex] = {
                         type: type,
                         title: title,
                         option: option,
                         answer: answer,
                         explanation: explanation
                     };

                 } else if (type == '是非題') {
                     const hasChecked = $('input[name="option-group"]:checked').length > 0;
                     if (!hasChecked) {
                         alert('請至少選擇一個答案選項');
                         return; // 阻止表單送出
                     }
                     let answer = $('input[name="option-group"]:checked').map(function () {
                         return $(this).val();
                     }).get();

                     let option = $('input[name="option-group"]').map(function () {
                         return $(this).val();
                     }).get();
                     questionList[changeindex] = {
                         type: type,
                         title: title,
                         option: option,
                         answer: answer,
                         explanation: explanation
                     };

                 } else if (type == '問答題') {
                     questionList[changeindex] = {
                         type: type,
                         title: title,
                         option: [],
                         answer: [],
                         explanation: explanation
                     };
                 }

                 questionRender();
                 $('#createWorksheetModal').modal('hide');
             }

         });
     });

 </script>
 @append

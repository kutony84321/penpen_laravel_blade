<main class="flex-grow container mx-auto px-4 py-8">
    <div class="mb-8">
        <h1 class="text-3xl font-bold mb-4">建立測驗</h1>
        <p class="text-gray-600">從您的學習單中創建一個新的測驗</p>
    </div>
    <form id="upload-form">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tight">測驗資訊</h3>
            </div>
            <div class="p-6 pt-0 space-y-6">
                <div class="space-y-2"><label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="exam-title">測驗標題</label><input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        placeholder="請輸入測驗標題" name="title" id="exam-title"value=""></div>
                <div class="space-y-2"><label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="exam-description">測驗說明</label><textarea
                        class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                        placeholder="請輸入測驗說明（選填）" name="description" id="exam-description" ></textarea></div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2 flex flex-col"><label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="start_time">開始時間</label><input type="datetime-local" class="form-control" name="start_time" id="start_time"></div>
                    <div class="space-y-2 flex flex-col"><label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="end_time">結束時間</label><input type="datetime-local" class="form-control" name="end_time" id="end_time"></div>
                </div>
                <div class="space-y-2"><label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="sheet_id">選擇學習單</label>
                        <select class="form-control" name="sheet_id" id="sheet_id">
                             <option value="" selected>請選擇學單</option>
                             @foreach($myFavoriteWorksheet as $i => $item)
                                @if(isset($item['worksheet']) && !empty($item['worksheet']))
                                <option value="{{$item['worksheet']['id']}}">{{$item['worksheet']['title']}}</option>
                                @endif
                             @endforeach
                         </select>

                    <p id=":rb:-form-item-description" class="text-sm text-muted-foreground">
                        若您沒有可用的學習單。請先在<a href="{{route('app.list')}}"
                            class="text-blue-500 cursor-pointer hover:underline">學習單列表</a>頁面收藏學習單。</p>
                </div>
            </div>
        </div>
        <div class="mt-8 flex justify-end"><button onclick="location.href='{{route('auth.member')}}'"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mr-4"
                type="button">取消</button><button id=""
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                type="submit">建立測驗</button></div>
    </form>
</main>
 @section('scripts')
 <script>
    $('#upload-form').on('submit', function (e) {
         e.preventDefault(); // 防止表單預設送出行為
         let formData = new FormData();
         let title = $('#exam-title').val().trim(); 
         let description = $('#exam-description').val().trim(); 

        let startVal = $('#start_time').val();
        let endVal = $('#end_time').val();

        let sheet_id = $('#sheet_id').val();

        if (title === '') {
            alert('請填寫測驗標題！');
            return;
        }else{
            formData.append('title', title);
        }

        if (sheet_id == '') {
            alert('請選擇學習單');
            return;
        }else{
            formData.append('sheet_id', sheet_id);
        }

        if (sheet_id == '') {
            alert('請選擇學習單');
            return;
        }else{
            formData.append('sheet_id', sheet_id);
        }

        const start = new Date(startVal);
        const end = new Date(endVal);
        const now = new Date();

        if (start > end) {
        alert('開始時間不能晚於結束時間');
        return;
        }

        // 任一時間 < 現在
        if (start < now || end < now) {
        alert('開始與結束時間不能早於或等於現在時間，建議往後多設定幾分鐘。');
        return;
        }
        formData.append('start_time', startVal);
        formData.append('end_time', endVal);
        formData.append('description', description);

         $.ajax({
             url: '{{route("auth.member.add.exam")}}', // ← 你的後端接收 API 路徑
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
                    location.replace('{{route('auth.member.examhistory')}}');
                }
                
             },
             error: function (xhr, ajaxOptions, thrownError) {
                 alert('儲存失敗，請稍後再試');
                 console.error(thrownError);
             }
         });
     });
</script>
 @append

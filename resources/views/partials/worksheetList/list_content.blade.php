<main class="flex-grow">
    <section class="bg-penpen-light py-12">
        <div class="container mx-auto">
            <h1 class="text-3xl md:text-4xl font-bold mb-4 text-center">學單列表</h1>
            <p class="text-gray-600 text-center max-w-2xl mx-auto mb-8">探索各種領域的學習單，適合不同年齡層和學習需求。點擊卡片查看詳情。
            </p>
        </div>
    </section>
    <section class="py-12">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                 @if(count($worksheetList) != 0)
                 @foreach($worksheetList as $i => $item)
                <div class="card cursor-pointer transform transition-all hover:scale-105 worksheetcard" data-creater='false' data-id='{{$item["id"]}}' data-age='{{implode(",", json_decode($item["age"], true))}}' data-duration='{{$item["duration"]}}' data-create='{{date("Y-m-d",strtotime($item["updated_at"]))}}' data-author='{{$item["author"]["name"]}}' data-title='{{$item["title"]}}' data-intro='{{$item["intro"]}}' data-img='{{$item["image_name"]}}'>
                    
                    @if($item["image_name"] != null)
                    <div class="aspect-w-16 aspect-h-9 bg-penpen-light relative overflow-hidden"><img
                        src="{{asset('/app_assets/img/worksheet_img/'.$item['image_name'])}}"
                        class="object-cover w-full aspect-video"></div>
                    @else
                    <div class="aspect-w-16 aspect-h-9 bg-penpen-light relative overflow-hidden">
                        <div class="aspect-video w-full h-full flex items-center justify-center"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                stroke="currentColor" class="w-12 h-12 text-penpen-primary/40">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m-3-14.25v14.25">
                                </path>
                            </svg></div>
                    </div>
                    @endif

                    <div class="p-4">
                        <h3 class="font-medium text-lg mb-1 line-clamp-1">{{$item['title']}}</h3>
                        <p class="text-gray-600 text-sm ">適合對象：{{implode(',', json_decode($item['age'], true))}}</p>
                        <p class="text-gray-600 text-xs mb-2">作者：{{$item['author']['name']}}</p>
                        <div class="flex justify-between items-center text-xs text-gray-500">
                            <span>建議時間：{{$item['duration']}}分鐘</span><span>{{date('Y-m-d',strtotime($item['updated_at']))}}</span></div>
                    </div>
                </div>
                @endforeach
                @else
                尚無任何學單
                @endif
                
            </div>
        </div>
    </section>
</main>

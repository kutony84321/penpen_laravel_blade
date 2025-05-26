<main class="flex-grow container mx-auto px-4 py-8">
    <div class="mb-8">
        <h1 class="text-3xl font-bold mb-4">測驗紀錄</h1>
        <p class="text-gray-600">查看所有您建立的測驗及其結果</p>
    </div>
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div class="relative w-full overflow-auto">
            <table class="w-full caption-bottom text-sm">
                <thead class="[&amp;_tr]:border-b">
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            測驗標題</th>
                        <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            建立時間</th>
                        <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            有效期間</th>
                        <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            狀態</th>
                        <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            受試人數</th>
                        <th
                            class="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                            操作</th>
                    </tr>
                </thead>
                <tbody class="[&amp;_tr:last-child]:border-0">
                    @if(count($examList) != 0)
                    @foreach($examList as $i => $item)
                   
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{{$item['title']}}
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{{date("Y-m-d H:i",strtotime($item['created_at'].'+ 8 hour'))}}</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{{date("Y-m-d H:i",strtotime($item['start_time']))}} - {{date("Y-m-d H:i",strtotime($item['end_time']))}}
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            @if(strtotime(date('Y-m-d H:i').'+ 8 hour') < strtotime($item['start_time']))
                            <span class="px-2 py-1 rounded-full text-xs bg-red-100 text-green-800">尚未開始</span>
                            @elseif(strtotime(date('Y-m-d H:i').'+ 8 hour') > strtotime($item['end_time']))
                            <span class="px-2 py-1 rounded-full text-xs bg-gray-100 text-green-800">已結束</span>
                            @else
                            <span class="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">進行中</span>
                            @endif
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{{count($item['response'])}}</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right"><button onclick="location.href='{{url('/member/examHistory/detail')}}/{{$item->exam_id}}'"
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">查看詳情</button>
                        </td>
                    </tr>
                    @endforeach
                    @endif
                </tbody>
            </table>
        </div>
    </div>
</main>

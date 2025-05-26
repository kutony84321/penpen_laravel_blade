<main class="flex-grow container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-8">
        <div class="w-full md:w-1/4">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="text-2xl font-semibold leading-none tracking-tight">會員資料</h3>
                </div>
                <div class="p-6 pt-0 flex flex-col items-center">
                    <div
                        class="w-24 h-24 bg-penpen-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                        {{substr(Auth::user()->name, 0, 1)}}</div>
                    <h3 class="text-xl font-medium">{{Auth::user()->name}}</h3>
                    <p class="text-gray-500">{{Auth::user()->email}}</p>
                </div>
                <div class="flex items-center p-6 pt-0"><button onclick="location.href='{{route('auth.logout')}}'"
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">登出</button>
                </div>
            </div>
        </div>
        <div class="w-full md:w-3/4">
            <h2 class="text-2xl font-bold mb-6">功能選單</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="text-2xl font-semibold leading-none tracking-tight">建立學習單</h3>
                        <p class="text-sm text-muted-foreground">建立新的學習單項目</p>
                    </div>
                    <div class="p-6 pt-0">
                        <p class="text-gray-500">創建含有不同題型的學習單，支援圖片題目與答案。</p>
                    </div>
                    <div class="flex items-center p-6 pt-0"><button onclick="location.href='{{route('auth.member.create.worksheet')}}'"
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">建立學習單</button>
                    </div>
                </div>
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="text-2xl font-semibold leading-none tracking-tight">建立測驗</h3>
                        <p class="text-sm text-muted-foreground">從現有學習單建立測驗</p>
                    </div>
                    <div class="p-6 pt-0">
                        <p class="text-gray-500">設定測驗時間、標題與說明，並生成專屬測驗連結。</p>
                    </div>
                    <div class="flex items-center p-6 pt-0"><button onclick="location.href='{{route('auth.member.create.exam')}}'"
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">建立測驗</button>
                    </div>
                </div>
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="text-2xl font-semibold leading-none tracking-tight">我的學單</h3>
                        <p class="text-sm text-muted-foreground">已建立與已收藏的學習單</p>
                    </div>
                    <div class="p-6 pt-0">
                        <p class="text-gray-500">查看您已建立與已收藏的所有學習單項目。</p>
                    </div>
                    <div class="flex items-center p-6 pt-0"><button onclick="location.href='{{route('auth.member.myworksheet')}}'"
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">查看最愛</button>
                    </div>
                </div>
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="text-2xl font-semibold leading-none tracking-tight">測驗紀錄</h3>
                        <p class="text-sm text-muted-foreground">歷史測驗與其結果</p>
                    </div>
                    <div class="p-6 pt-0">
                        <p class="text-gray-500">查看所有測驗的詳細結果與統計資料。</p>
                    </div>
                    <div class="flex items-center p-6 pt-0"><button onclick="location.href='{{route('auth.member.examhistory')}}'"
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">檢視紀錄</button>
                    </div>
                </div>
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="text-2xl font-semibold leading-none tracking-tight">修改個人資料</h3>
                        <p class="text-sm text-muted-foreground">更新您的會員資訊</p>
                    </div>
                    <div class="p-6 pt-0">
                        <p class="text-gray-500">修改您的顯示名稱與個人設定。</p>
                    </div>
                    <div class="flex items-center p-6 pt-0"><button onclick="location.href='{{route('auth.member.change')}}'"
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">修改資料</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

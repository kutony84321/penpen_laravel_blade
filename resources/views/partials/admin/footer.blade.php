@inject('MainController', 'App\Http\Controllers\Page\MainController')
<!-- Footer Section Begin -->
<footer class="bg-gray-100 py-12">
    <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div><a class="flex items-center space-x-2 mb-4" href="{{route('app.home')}}">
                    <div
                        class="w-8 h-8 rounded-full bg-penpen-primary text-white flex items-center justify-center font-display font-bold text-lg">
                        P</div><span class="text-lg font-display font-semibold text-penpen-primary">PenPen</span>
                </a>
                <p class="text-gray-600 text-sm">透過視覺學習設計、實作與回饋並重的教育平台。結合結構力、美學力、實作力的學習設計原則。</p>
            </div>
            <div>
                <h3 class="font-medium text-lg mb-4">連結</h3>
                <ul class="space-y-2">
                    <li><a class="text-gray-600 hover:text-penpen-primary transition-colors" href="{{route('app.home')}}">首頁</a>
                    </li>
                    <li><a class="text-gray-600 hover:text-penpen-primary transition-colors"
                            href="{{route('app.list')}}">學單列表</a></li>
                    <li><a href="{{route('auth.login')}}" target="_blank" rel="noopener noreferrer"
                            class="text-gray-600 hover:text-penpen-primary transition-colors">成為教育者</a></li>
                </ul>
            </div>
            <div>
                <h3 class="font-medium text-lg mb-4">服務</h3>
                <ul class="space-y-2">
                    <li><a class="text-gray-600 hover:text-penpen-primary transition-colors" href="{{route('app.faq')}}">常見問題</a></li>
                    <li><a class="text-gray-600 hover:text-penpen-primary transition-colors" href="{{route('app.terms')}}">使用條款</a></li>
                    <li><a class="text-gray-600 hover:text-penpen-primary transition-colors" href="{{route('app.privacy')}}">隱私政策</a>
                    </li>
                    <li><a class="text-gray-600 hover:text-penpen-primary transition-colors" href="{{route('app.contact')}}">聯絡我們</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>© {{date("Y")}} PenPen. All rights reserved.</p>
        </div>
    </div>
</footer>
<!-- Footer Section End -->

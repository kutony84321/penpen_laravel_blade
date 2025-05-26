<div class="min-h-screen bg-gray-50 flex flex-col">
    <div class="container max-w-md mx-auto px-4 py-12 flex-grow flex flex-col justify-center">
        <div class="text-center mb-8"><a class="inline-flex items-center space-x-2" href="{{route('app.home')}}">
                <div
                    class="w-12 h-12 rounded-full bg-penpen-primary text-white flex items-center justify-center font-display font-bold text-xl">
                    P</div><span class="text-2xl font-display font-semibold text-penpen-primary">PenPen</span>
            </a>
            <h1 class="text-2xl font-bold mt-4">恭喜您</h1>
            <p class="text-gray-500 mt-1">您已完成本次測驗</p>
        </div>
        <div class="bg-white p-0 rounded-lg shadow-sm">
            <a href="{{route('app.home')}}" class="btn btn-outline-dark block">
                <i class="fa fa-external-link"></i>&nbsp;&nbsp;&nbsp;回到首頁
            </a>
        </div>
    </div>
</div>
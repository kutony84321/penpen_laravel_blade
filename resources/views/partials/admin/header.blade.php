<!-- Header Section Begin -->
<header class="py-4 px-6 bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto flex items-center justify-between"><a class="flex items-center space-x-2"
            href="{{route('app.home')}}">
            <div
                class="w-10 h-10 rounded-full bg-penpen-primary text-white flex items-center justify-center font-display font-bold text-xl">
                P</div><span class="text-xl font-display font-semibold text-penpen-primary">PenPen</span>
        </a>
        <nav class="hidden md:flex items-center space-x-6"><a
                class="text-gray-700 hover:text-penpen-primary transition-colors font-medium"
                href="{{route('app.home')}}">首頁</a><a
                class="text-gray-700 hover:text-penpen-primary transition-colors font-medium"
                href="{{route('app.list')}}">學單列表</a><a
                class="text-penpen-primary hover:text-penpen-dark transition-colors font-medium"
                href="{{route('auth.login')}}">成為教育者</a></nav>
        <div class="flex items-center space-x-4"><button onclick="location.href='{{route('auth.login')}}'"
                class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 hidden md:block">
                @if (\Auth::check()) 
                {{ Auth::user()->name }}
                @else    
                登入
                @endif
                
                </button><button
                class="md:hidden text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg></button></div>
    </div>
</header>
<!-- Header Section End -->
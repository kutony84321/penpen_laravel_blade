 <main class="flex-grow container mx-auto px-4 py-8">
     <div class="max-w-md mx-auto">
         <h1 class="text-2xl font-bold mb-6">修改個人資料</h1>
         <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
             <div class="flex flex-col space-y-1.5 p-6">
                 <h3 class="text-2xl font-semibold leading-none tracking-tight">個人資料設定</h3>
             </div>
             <form action="{{ route('auth.member.update') }}" method="post">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                 <div class="p-6 pt-0 space-y-4">
                     <div class="space-y-2"><label
                             class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                             for="name">顯示名稱</label><input
                             class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                             id="name" name="name"  placeholder="您的名稱" required="" value="{{Auth::user()->name}}"></div>
                     <div class="space-y-2"><label
                             class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                             for="email">電子信箱</label><input
                             class="flex h-10 w-full rounded-md border border-input px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-gray-50"
                             id="email" disabled="" value="{{Auth::user()->email}}">
                         <p class="text-sm text-gray-500">信箱無法變更</p>
                     </div>
                 </div>
                 <div class="items-center p-6 pt-0 flex justify-between"><button onclick="location.href='{{route('auth.member')}}'"
                         class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                         type="button">取消</button><button
                         class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                         type="submit">儲存變更</button></div>
             </form>
         </div>
     </div>
 </main>

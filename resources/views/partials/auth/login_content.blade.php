<div class="min-h-screen bg-gray-50 flex flex-col">
    <div class="container max-w-md mx-auto px-4 py-12 flex-grow flex flex-col justify-center">
        <div class="text-center mb-8"><a class="inline-flex items-center space-x-2" href="{{route('app.home')}}">
                <div
                    class="w-12 h-12 rounded-full bg-penpen-primary text-white flex items-center justify-center font-display font-bold text-xl">
                    P</div><span class="text-2xl font-display font-semibold text-penpen-primary">PenPen</span>
            </a>
            <h1 class="text-2xl font-bold mt-4">成為教育者</h1>
            <p class="text-gray-500 mt-2">使用Google帳戶登入/註冊以啟用更多功能</p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-sm">
            <a href="{{ url('auth/google') }}" class="btn btn-primary block">
                <i class="fa fa-google"></i>&nbsp;&nbsp;&nbsp;使用 Google 帳戶
            </a>
            {{--
            @if ($errors->has('msg'))
                <div class="alert alert-danger">
                    {{ $errors->first('msg') }}
                </div>
            @endif--}}
            <!--
            <div dir="ltr" class="w-full">
                <div role="tablist"
                    class="nav h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2 mb-6"
                    style="outline: none;">

                    <button type="button" id="login-tab" data-toggle="tab" data-target="#login-inner" type="button"
                        role="tab" aria-controls="login-inner" aria-selected="true"
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">登入</button>

                    <button type="button" id="register-tab" data-toggle="tab" data-target="#register-inner"
                        type="button" role="tab" aria-controls="register-inner" aria-selected="false"
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">註冊</button>
                </div>
                <div class="tab-content" id="myTabContent">
                    <div id="login-inner" role="tabpanel" aria-labelledby="login-tab" class="tab-pane fade show active">
                        <form class="space-y-4">
                            <div class="space-y-2"><label
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    for=":r3:-form-item">電子信箱</label><input
                                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    placeholder="your.email@example.com" name="email" id=":r3:-form-item"
                                    aria-describedby=":r3:-form-item-description" aria-invalid="false" value="">
                            </div>
                            <div class="space-y-2"><label
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    for=":r4:-form-item">密碼</label><input type="password"
                                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    placeholder="••••••••" name="password" id=":r4:-form-item"
                                    aria-describedby=":r4:-form-item-description" aria-invalid="false" value="">
                            </div><button
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                                type="submit">登入</button>
                        </form>
                    </div>
                    <div id="register-inner" role="tabpanel" aria-labelledby="register-tab" class="tab-pane fade">
                        <div data-state="active" data-orientation="horizontal" role="tabpanel"
                            aria-labelledby="radix-:r0:-trigger-register" id="radix-:r0:-content-register" tabindex="0"
                            class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <form class="space-y-4">
                                <div class="space-y-2"><label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for=":r5:-form-item">名稱</label><input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                        placeholder="您的名稱" name="name" id=":r5:-form-item"
                                        aria-describedby=":r5:-form-item-description" aria-invalid="false" value="">
                                </div>
                                <div class="space-y-2"><label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for=":r6:-form-item">電子信箱</label><input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                        placeholder="your.email@example.com" name="email" id=":r6:-form-item"
                                        aria-describedby=":r6:-form-item-description" aria-invalid="false" value="">
                                </div>
                                <div class="space-y-2"><label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for=":r7:-form-item">密碼</label><input type="password"
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                        placeholder="••••••••" name="password" id=":r7:-form-item"
                                        aria-describedby=":r7:-form-item-description" aria-invalid="false" value="">
                                </div>
                                <div class="space-y-2"><label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for=":r8:-form-item">確認密碼</label><input type="password"
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                        placeholder="••••••••" name="confirmPassword" id=":r8:-form-item"
                                        aria-describedby=":r8:-form-item-description" aria-invalid="false" value="">
                                </div><button
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                                    type="submit">註冊</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>-->
        </div>
    </div>
</div>

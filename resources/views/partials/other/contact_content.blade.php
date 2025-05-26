<main class="flex-grow container mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-8">聯絡我們</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!--
					<div>
						<h2 class="text-2xl font-semibold mb-6">傳送訊息給我們</h2>
						<form class="space-y-6">
							<div><label
									class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									for="name">姓名</label><input
									class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1"
									id="name" required="" value=""></div>
							<div><label
									class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									for="email">電子郵件</label><input type="email"
									class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1"
									id="email" required="" value=""></div>
							<div><label
									class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									for="subject">主旨</label><input
									class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1"
									id="subject" required="" value=""></div>
							<div><label
									class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									for="message">訊息內容</label><textarea
									class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
									id="message" required="" rows="5"></textarea></div><button
								class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
								type="submit">傳送訊息</button>
						</form>
					</div>-->
        <div>
            <h2 class="text-2xl font-semibold mb-6">聯絡資訊</h2>
            <div class="space-y-8">
                <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-mail h-5 w-5 text-penpen-primary mt-1 mr-4">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <div>
                        <h3 class="font-medium">電子郵件</h3>
                        <p class="text-gray-600 mt-1">kutony84322@gmail.com</p>
                    </div>
                </div>
                <!--{{--
                <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-phone h-5 w-5 text-penpen-primary mt-1 mr-4">
                        <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                        </path>
                    </svg>
                    <div>
                        <h3 class="font-medium">電話</h3>
                        <p class="text-gray-600 mt-1">+886 2 2345 6789</p>
                        <p class="text-gray-600">週一至週五 9:00-18:00</p>
                    </div>
                </div>
                <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-map-pin h-5 w-5 text-penpen-primary mt-1 mr-4">
                        <path
                            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                        </path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div>
                        <h3 class="font-medium">地址</h3>
                        <p class="text-gray-600 mt-1">台北市信義區信義路五段7號<br>台北101大樓 89樓</p>
                    </div>
                </div>--}}-->
                <div class="border-t border-gray-200 pt-8 mt-8">
                    <h3 class="font-medium mb-4">常見問題</h3>
                    <p class="text-gray-600 mb-4">在聯絡我們之前，您可能想查看我們的<a href="/faq"
                            class="text-penpen-primary hover:underline ml-1">常見問題</a>頁面，您的問題可能已經有答案。</p>
                </div>
            </div>
        </div>
    </div>
</main>

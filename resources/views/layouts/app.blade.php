<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

    <meta charset="utf-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no">
    @if(isset($meta_tag))
    <title>{{$meta_tag['title']}}</title>
    <meta name="description" content="{{$meta_tag['description']}}" />
    <meta itemprop="description" content="{{$meta_tag['description']}}">
    <meta name="image" content="{{$meta_tag['image']}}">
    <meta property="og:title" content="{{$meta_tag['og_title']}}" />
    <meta property="og:description" content="{{$meta_tag['og_description']}}" />
    <meta property="og:type" content="{{$meta_tag['og_type']}}" />
    <meta property="og:image" content="{{$meta_tag['og_image']}}" />
    <meta property="og:image:type" content="{{$meta_tag['og_image_type']}}">
    {{--
  <meta property="og:image:width" content="{{$meta_tag['og_image_width']}}">
    <meta property="og:image:height" content="{{$meta_tag['og_image_height']}}">--}}
    <meta property="og:url" content="{{$meta_tag['og_url']}}" />
    @endif
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="Cache-control" content="max-age=3600, must-revalidate">

    <meta name="source" content="{{$meta_tag['company_name']}}" />
    <meta itemprop="name" content="{{$meta_tag['company_name']}}">
    <meta name="author" content="{{$meta_tag['company_name']}}" />
    <meta name="copyright" content="{{$meta_tag['company_name']}}" />
    <meta name="application-name" content="{{$meta_tag['company_name']}}" />
    <link rel="icon" href="{{asset('/app_assets/img/favicon.png')}}?d={{date('Ymdhis')}}" />
    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet">

    <!-- Css Styles -->
    <link rel="stylesheet" href="{{asset('/app_assets/css/bootstrap.min.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('/app_assets/css/font-awesome.min.css')}}" type="text/css">
    <!--<link rel="stylesheet" href="{{asset('/app_assets/css/elegant-icons.css')}}" type="text/css">-->
    <!--<link rel="stylesheet" href="{{asset('/app_assets/css/nice-select.css')}}" type="text/css">-->
    <!--<link rel="stylesheet" href="{{asset('/app_assets/css/jquery-ui.min.css')}}" type="text/css">-->
    <!--<link rel="stylesheet" href="{{asset('/app_assets/css/owl.carousel.min.css')}}" type="text/css">-->
    <!--<link rel="stylesheet" href="{{asset('/app_assets/css/slicknav.min.css')}}" type="text/css">-->
    <link rel="stylesheet" href="{{asset('/app_assets/css/style.css')}}" type="text/css">
    <!--<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"> -->
    @yield('style')

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6XGPFWDZPB"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6XGPFWDZPB');
    </script>

</head>

<body>
    <div id="app">
        @yield('content-top')
        <main>
            <div class="container">
                @yield('content-body')
            </div>
        </main>
        @yield('content-bottom')
    </div>

    <!-- 學習單視窗 -->
    <div class="modal fade" id="worksheetModal" tabindex="-1" role="dialog" aria-labelledby="worksheetModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="worksheetModalLabel"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="flex flex-col space-y-1.5 text-center sm:text-left">
                        <p id="radix-:r2:" class="text-muted-foreground flex justify-between text-sm pt-2">
                            <span id="worksheetModalAuthor">作者：</span><span id="worksheetModalCreate">建立時間：</span></p>
                    </div>
                    <div class="py-4">
                        <div class="aspect-w-16 aspect-h-9 bg-penpen-light rounded-md mb-4 overflow-hidden" id="worksheetModalImg"><img 
                                src=""
                                alt="" class="object-cover w-full h-full"></div>
                        <div class="space-y-4">
                            <div class="flex space-x-4">
                                <div class="bg-penpen-light px-3 py-2 rounded text-sm"><span
                                        class="font-medium block">建議測試時間</span><span id="worksheetModalDuration">分鐘</span></div>
                                <div class="bg-penpen-light px-3 py-2 rounded text-sm"><span
                                        class="font-medium block">適合對象</span><span id="worksheetModalAge"></span></div>
                            </div>
                            <div id="worksheetModalIntro">
                                <h4 class="font-medium mb-2">學習單介紹</h4>
                                <p class="text-gray-700"></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" id="worksheetChange" class="btn btn-danger"><i class="fa fa-cog"></i> 編輯</button>
                    <!--<button type="button" id="worksheetTest" class="btn btn-outline-dark"><i class="fa fa-pencil"></i> 試測</button>-->
                    <button type="button" id="worksheetFavorite"  class="btn btn-info"><i class="fa fa-heart"></i> 加入我的學單</button>
                    <!--<button type="button" id="worksheetDownload" class="btn btn-light"><i class="fa fa-download"></i> 下載</button>-->
                </div>
            </div>
        </div>
    </div>

</body>
<!-- Js Plugins -->
<script src="{{asset('/app_assets/js/jquery-3.3.1.min.js')}}"></script>
<script src="{{asset('/app_assets/js/bootstrap.min.js')}}"></script>
<!--<script src="{{asset('/app_assets/js/jquery.nice-select.min.js')}}"></script>-->
<!--<script src="{{asset('/app_assets/js/jquery-ui.min.js')}}"></script>-->
<!--<script src="{{asset('/app_assets/js/jquery.slicknav.js')}}"></script>-->
<!--<script src="{{asset('/app_assets/js/mixitup.min.js')}}"></script>-->
<!--<script src="{{asset('/app_assets/js/owl.carousel.min.js')}}"></script>-->
<!--<script src="{{asset('/app_assets/js/main.js')}}"></script>-->
<!--<script src="https://unpkg.com/swiper/swiper-bundle.min.js"> </script>-->
<script>
    $(document).ready(function () {
        $('.worksheetcard').on('click', function(e){
            var target = $(this);
            var creater = target.data('creater');
            var id = target.data('id');
            var age = target.data('age');
            var duration = target.data('duration');
            var create = target.data('create');
            var author = target.data('author');
            var title = target.data('title');
            var intro = target.data('intro');
            var img = target.data('img');
            $('#worksheetFavorite').data('id', id);

            $('#worksheetModalLabel').text(title);
            $('#worksheetModalAuthor').text('作者：'+author);
            $('#worksheetModalCreate').text('更新時間：'+create);
            if(img == ''){
                $('#worksheetModalImg').css('display','none');
            }else{
                $('#worksheetModalImg').css('display','block');
                $('#worksheetModalImg img').attr('src','{{asset("/app_assets/img/worksheet_img")}}/'+img);
            }
            $('#worksheetModalDuration').text(duration+' 分鐘');
            $('#worksheetModalAge').text(age);
            if(intro == ''){
                $('#worksheetModalIntro').css('display','none');  
            }else{
                $('#worksheetModalIntro').css('display','block');  
                $('#worksheetModalIntro p').text(intro);
            }

            if(creater != true){
                $('#worksheetChange').css('display','none');  
            }else{
                $('#worksheetChange').css('display','block');
                $('#worksheetChange').attr('onclick','location.href="{{url("/member/updateWorksheet/")}}/'+id+'"');
            }
            
            $('#worksheetModal').modal('show');
        });
        
        $('#worksheetFavorite').on('click', function(e){
            @if(Auth::check())
            var target = $(this);
            var id = target.data('id');
            
             $.ajax({
                type : 'POST',
                url :"{{route('auth.member.favorite.join')}}",
                data: {"id": id},
                dataType: 'json',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function(data){
                    alert(data['message']);
                },
                error:function(xhr, ajaxOptions, thrownError){ 
                    console.log("favorite_ajaxerror");
                    console.log(thrownError);
                }
            });
            @else
            location.replace('{{route('auth.login')}}');
            @endif
        });
    });
</script>
@yield('scripts')

</html>

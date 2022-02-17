//每次调用$.get()或$.post()或$.ajax()的时候 会先调用ajaxPrefilter这个函数
$.ajaxPrefilter(function(options) {
    options.url = 'http://www.liulongbin.top:3007' + options.url
    console.log(options.url);

})
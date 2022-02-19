//每次调用$.get()或$.post()或$.ajax()的时候 会先调用ajaxPrefilter这个函数
$.ajaxPrefilter(function(options) {
    options.url = 'http://www.liulongbin.top:3007' + options.url
        //console.log(options.url);

    //统一为有权限的接口 设置headers请求
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }

    // 全局统一挂载complete回调函数
    options.complete = function(res) {
        // console.log('调用了');
        //console.log(res);
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            //1 强制清空htoken
            localStorage.removeItem('token');
            //2 强制跳转到登录页
            location.href = 'login.html'
        }
    }
})
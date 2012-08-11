
var HH = {"url":"http://www.stanford.edu/~jcye/cgi-bin/SportsNearby/www/index.html",
    "appid":"",
    "location":""
};

$("#page-login").bind('pageshow', function() {
    $('#btnLogin').attr("disabled","disabled");
});

    $("#page-login").bind('pagebeforeshow', function() {
    //fb authorization
    // Load the SDK Asynchronously
    (function(d){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));

    // Init the SDK upon load
    window.fbAsyncInit = function() {
        FB.init({
            appId   :       '345179745567347',
            channelUrl : '//'+window.location.hostname+'/channel', // Path to your Channel File
            status     : true, // check login status
            cookie     : true, // enable cookies to allow the server to access the session
            xfbml      : true  // parse XFBML
        });

        // listen for and handle auth.statusChange events
        FB.Event.subscribe('auth.statusChange', function(response) {
            if (response.authResponse) {
                // user has auth'd your app and is logged into Facebook
                login = true;
                FB.api('/me', function(me){
                    if (me) {
                        localStorage.setItem('appid',me.id);
                        HH.appid=me.id;
                        storeuserdetails(me);
                        watchlocation();
                    }
                });

            } else {
                alert('Authentication failed');
            }
        });

        $("#btnLogin").off('click').on('click',function logMeIn()
            {
                top.location = 'https://graph.facebook.com/oauth/authorize?client_id=345179745567347&scope=publish_stream,email,user_location,user_work_history&redirect_uri='+HH.url+'/index.html#page-home';

            });
    }

});


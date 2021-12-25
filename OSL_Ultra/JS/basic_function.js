



// JavaScript Events ==============================================================================================


// change header
window.onscroll = function()
{
    if (document.body.clientWidth < 868)
    {
        hide_navpage_onscroll();
    }
    else
    {
        try
        {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop = parseInt(scrollTop);
            // console.log(scrollTop);
            if(scrollTop > 150)
            {
                window.setTimeout(function(){goBlack();},100);
            }
            else
            {
                window.setTimeout(function(){goWhite();},100);
            }
            if (document.body.clientWidth < 868)
            {
                hide_navpage_onscroll();
            }
        }
        catch(err){}
    }
}
function goBlack()
{
    document.getElementById("headerBox").style.height="60px";
    document.getElementById("headerBox").style.backgroundColor="black";
    document.getElementById("headerBox").style.paddingTop="15px";
    document.getElementById("logo").src="IMG/logo1.png";
    document.getElementById("logo").style.height="25px";
    document.getElementById("wideNav").style.top="60px";
    document.getElementById("loginButton").style.top="14px";
}
function goWhite()
{
    document.getElementById("headerBox").style.height="95px";
    document.getElementById("headerBox").style.backgroundColor="white";
    document.getElementById("headerBox").style.paddingTop="25px";
    document.getElementById("logo").src="IMG/logo-christmas.png";
    document.getElementById("logo").style.height="45px";
    document.getElementById("wideNav").style.top="95px";
    document.getElementById("loginButton").style.top="32px";
}


// Show hidden navigation console
var count2 = 0;
function show_navpage(obj)
{
    count2++;
    if(count2 % 2 !== 0)
    {
        document.getElementById("hiddenLoginBox").style.height="180px";
        obj.style.transform="rotate(45deg)";
    }
    else
    {
        document.getElementById("hiddenLoginBox").style.height="35px";
        obj.style.transform="rotate(0deg)";
    }
}


// Hide navigation console when the page is scrolled
function hide_navpage_onscroll()
{
    document.getElementById("hiddenLoginBox").style.height="35px";
    document.getElementById("plus").style.transform="rotate(0deg)";
    count2++;
}


// Home page: mini search
var count3 = 0;
function mini_search()
{
    count3++;
    if(count3 % 2 !== 0)
    {
        document.getElementById("miniSearchHolder").style.width="175px";
        var search = document.getElementById("searchIcon");
        search.style.backgroundColor="var(--lig_grey)";
        search.setAttribute("autofocus", "autofocus");
    }
    else
    {
        document.getElementById("miniSearchHolder").style.width="0px";
        document.getElementById("searchIcon").style.backgroundColor="transparent";
    }
}


// Search page: draw out books
var book_clicks = 0;
function drawBooks(obj)
{
    if (document.body.clientWidth < 868)
    {
        book_clicks++;
        if (book_clicks % 2 != 0)
        {
            obj.style.zIndex="10";
            obj.style.width="100vw";
            obj.style.position="absolute";
            obj.style.backgroundColor="#262626";
        }
        else
        {
            obj.style.zIndex="0";
            obj.style.width="25vw";
            obj.style.position="relative";
            obj.style.backgroundColor="transparent";
        }
    }
}
var book_clicks1 = 0;
function drawBooks1(obj)
{
    if (document.body.clientWidth < 868)
    {
        book_clicks1++;
        if (book_clicks1 % 2 != 0)
        {
            obj.style.zIndex="10";
            obj.style.width="100vw";
            obj.style.position="absolute";
            obj.style.backgroundColor="#262626";
        }
        else
        {
            obj.style.zIndex="0";
            obj.style.width="25vw";
            obj.style.position="relative";
            obj.style.backgroundColor="transparent";
        }
    }
}


// Library page: close and clear pdf reader
function clear_pdf_reader()
{
    document.getElementById("pdf_reader_container").style.opacity="0";
    document.getElementById("prerz").style.zIndex="2";
    document.getElementById("alternative_text_box").style.opacity="0";
    document.getElementById("pdf_toolbar").style.opacity="0";
    document.getElementById("pdf_reader").removeAttribute('data');
    document.body.style.overflow="visible";
    $.removeCookie('content_url',{ path: '/'});
}


// Library page: lock scroll
var click_lock = 0;
function lock(obj)
{
    click_lock++;
    if (click_lock % 2 != 0)
    {
        document.body.style.overflow="hidden";
        obj.innerHTML="<path d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z'/>";
        obj.style.color="#871414";
        alert("Page Scroll Locked");
    }
    else
    {
        document.body.style.overflow="visible";
        obj.innerHTML="<path d='M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z'/>";
        obj.style.color="black";
        alert("Page Scroll Unlocked");
    }
}


// Library page: drag and drop
function allowDrop(obj)
{
	obj.preventDefault();
}
function drag(obj)
{
	obj.dataTransfer.setData("Text", obj.target.name);
}
function drop(obj)
{
	obj.preventDefault();
	var data = obj.dataTransfer.getData("Text");
	obj.target.setAttribute('data', data);
    obj.style.backgroundColor="#f4f4f4";
}


// Account page: autofocus
// function autoFocus()
// {
//     document.getElementById("accountId").setAttribute("autofocus", 'autofocus');
// }
// window.setTimeout(autoFocus, 2000);


// Account page: swtich pages
function gotoSignUp()
{
    document.getElementById("loginBox").style.left="-100vw";
    document.getElementById("gotoSignUp").style.right="calc(20px + 100vw)";
    document.getElementById("signUpBox").style.left="0vw";
    document.getElementById("gotoLogin").style.left="20px";
}
function gotoLogin()
{
    document.getElementById("loginBox").style.left="0vw";
    document.getElementById("gotoSignUp").style.right="20px";
    document.getElementById("signUpBox").style.left="100vw";
    document.getElementById("gotoLogin").style.left="calc(20px + 100vw)";
}
var switch_click = 0;
function mobileSwitch()
{
    switch_click++;
    if (switch_click % 2 != 0)
    {
        gotoSignUp();
        document.getElementById("hint").innerHTML="Login to OSL";
    }
    else
    {
        gotoLogin();
        document.getElementById("hint").innerHTML="Sign Up to OSL";
    }
}


// HTML DOM


// Welcome page: show scroll lines
function scroll_lines_step_one()
{
    try
    {
        document.getElementById("scroll_line_1").style.height="48%";
        document.getElementById("scroll_line_1").style.zIndex="1";
        document.getElementById("container_1").style.top="0%";
        document.getElementById("h1_active").style.scale="0.5";
        document.getElementById("h1_active").style.opacity="0";
    }
    catch(err){}
}
function scroll_lines_step_two()
{
    try
    {
        document.getElementById("scroll_line_1").style.height="100%";
        document.getElementById("scroll_line_1").style.scale="0.5";
        document.getElementById("scroll_line_1").style.opacity="0";
        document.getElementById("scroll_line_2").style.height="50%";
        document.getElementById("scroll_line_2").style.zIndex="1";
    }
    catch(err){}
}
document.onmousewheel = function()
{
    try
    {
        document.getElementById("register_area").style.height="calc(100% - 120px)";
        document.getElementById("scroll_line_2").style.opacity="0";
        document.getElementById("footerbox").style.zIndex="9999";
        document.getElementById("wapper").style.opacity="0";
    }
    catch(err){}
}
window.addEventListener("DOMMouseScroll", function()
{
    try
    {
        document.getElementById("register_area").style.height="calc(100% - 120px)";
        document.getElementById("scroll_line_2").style.opacity="0";
        document.getElementById("footerbox").style.zIndex="9999";
        document.getElementById("wapper").style.opacity="0";
    }
    catch(err){}
});
window.setTimeout(scroll_lines_step_one, 6000);
window.setTimeout(scroll_lines_step_two, 9000);




// JavaScript Register



// JavaScript End =============================================================================================================



















// JQuery Start =============================================================================================================


// JQuery Cookie (Secure / HTTPS Required)


// Window presetting function before shown
window.onload = function()
{
    try
    {
        light_settings();
        data_prefetch();
        var visited = $.cookie('visited');
        if (visited == 'true')
        {
            document.getElementById("alert").style.height="0px";
            $.cookie('visited_time', new Date().getTime(), { expires: 1, path: '/' });
        }
    }
    catch(err){}
    console.log("Please note that: there are warnings and errors in the console for this implementation due to the server of www.who.org forbidden requests from outside its own domain, and the CSS this website implements has several error messages in the console. None of the error in the console is caused by a faulty function of this coursework website.");
    console.log("任何可能的报错都由于iframe标签内元素被禁止的跨域访问造成，CSS报错也由对应网站资源产生，与本网站无关。");
}


// Home: policy alert
$(function()
{
    var visited = $.cookie('visited');
    if(visited === undefined)
    {
        try
        {
            document.getElementById("alert").style.height="230px";
        }
        catch(err){}
    }
    $('#closebox').click(function()
    {
        $.cookie('visited', 'true', { expires: 45, json: true, secure: true });
        document.getElementById("alert").style.height="0px";
    })
})


// Light settings for all pages
function light_settings()
{
    var press_count = 0;
    var get_press_count = $.cookie('click_light');
    if(get_press_count !== undefined)
    {
        press_count = get_press_count;
        if(press_count % 2 !== 0)
        {
            document.getElementById("light").src="IMG/light1.png";
            document.body.style.backgroundColor="#262626";
            document.documentElement.style.setProperty('--bl', 'white');
            document.documentElement.style.setProperty('--wh', '#262626');
            try
            {
                document.getElementById("search_library").style.color="white";
            }
            catch(err){}
        }
        else
        {
            document.getElementById("light").src="IMG/light.png";
            document.body.style.backgroundColor="white";
            document.documentElement.style.setProperty('--bl', 'black');
            document.documentElement.style.setProperty('--wh', 'white');
            try
            {
                document.getElementById("search_library").style.color="black";
            }
            catch(err){}
        }
    }
    else
    {
        document.getElementById("light").src="IMG/light.png";
        document.body.style.backgroundColor="white";
        document.documentElement.style.setProperty('--bl', 'black');
        document.documentElement.style.setProperty('--wh', 'white');
    }
    $('#light').click(function()
    {
        press_count++;
        if(press_count % 2 !== 0)
        {
            document.getElementById("light").src="IMG/light1.png";
            document.body.style.backgroundColor="#262626";
            document.documentElement.style.setProperty('--bl', 'white');
            document.documentElement.style.setProperty('--wh', '#262626');
            try
            {
                document.getElementById("search_library").style.color="white";
            }
            catch(err){}
            $.cookie('click_light', press_count, { expires: 1, path: '/', json: true, secure: true });
        }
        else
        {
            document.getElementById("light").src="IMG/light.png";
            document.body.style.backgroundColor="white";
            document.documentElement.style.setProperty('--bl', 'black');
            document.documentElement.style.setProperty('--wh', 'white');
            try
            {
                document.getElementById("search_library").style.color="black";
            }
            catch(err){}
            $.cookie('click_light', press_count, { expires: 1, path: '/', json: true, secure: true });
        }
    })
}


// Data fetch from index.html to library.html
function data_transfer(obj)
{
    var get_content = $(obj).attr("name");
    console.log(get_content);
    $.cookie('content_url', get_content, { expires: 1, path: '/', json: true, secure: true });
}
function data_prefetch()
{
    var get_cookie = $.cookie('content_url');
    if(get_cookie !== undefined)
    {
        try
        {
            var recieve = document.getElementById("pdf_reader");
            var recieve1 = document.getElementById("alt");
            var recieve2 = document.getElementById("alt_1");
            recieve.setAttribute('data', get_cookie);
            recieve1.setAttribute('href', get_cookie);
            recieve2.setAttribute('href', get_cookie);
        }
        catch(err){}
    }
    else
    {
        try
        {
            document.getElementById("pdf_toolbar").style.display="none";
            document.getElementById("pdf_reader").style.display="none";
            document.getElementById("prerz").style.zIndex="2";
        }
        catch(err){}
    }
}



// JSONP
// $(function () 
// {
//     var url = "https://covid19.who.int/&callback=callback";
//     $.ajax({
//         type: "get",
//         async: false,
//         url: url,
//         dataType: "jsonp",
//         jsonp: "callback",
//         jsonpCallback: "callback",
//         success: function (data) {
//             var json = JSON.stringify(data);
//             console.log(json);
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     });
// });


// JQuery End =============================================================================================================

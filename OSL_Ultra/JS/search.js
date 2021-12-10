
window.onload = function()
{
    light_settings();
    data_prefetch();
    store();
    over();
    out();
    showHistory();
}


// Local storage
function store()
{
    const input = document.querySelector("#search");
    const button = document.querySelector("#searchButton");
    const history = document.querySelector(".history");

    if (localStorage.length > 0)
    {
        for (var i = 0; i < localStorage.length; i++)
        {
            var key = localStorage.key(i);
            var li = document.createElement("li");
            let liText = document.createTextNode(localStorage.getItem(key));
            li.appendChild(liText);
            history.appendChild(li);

            let close = document.createElement("span");
            close.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='currentColor' class='bi bi-x-circle' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/><path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/></svg>";
            li.append(close);
            close.addEventListener("click", () =>
            {
                localStorage.removeItem(key);
                li.parentNode.removeChild(li);
            })
        }
    }
    button.addEventListener("click", () =>
    {
        if(input.value)
        {
            let key = new Date().valueOf();
            let value = input.value;
            localStorage.setItem(key, value);
            input.value = "";

            let li = document.createElement("li");
            let liText = document.createTextNode(localStorage.getItem(key));
            li.appendChild(liText);
            history.appendChild(li);

            let close = document.createElement("span");
            close.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='currentColor' class='bi bi-x-circle' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/><path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/></svg>";
            li.append(close);
            close.addEventListener("click", () =>
            {
                localStorage.removeItem(key);
                li.parentNode.removeChild(li);
            })
        }
    })
}


// show history
var is_over = false;
function showHistory()
{
    $("#search").focus(function()
    {
        var history = document.querySelector("section");
        history.style.display = "block";
    })
    $("#search").blur(function()
    {
        var history = document.querySelector("section");
        if (is_over == false)
        {
            history.style.display = "none";
        }
    })
}
function over()
{
    is_over = true;
}
function out()
{
    is_over = false;
}
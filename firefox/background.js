

var jupyter_path = "/home/rjn/";
var port = 8888;
console.log("well Fuck");
browser.webRequest.onBeforeRequest.addListener(
    function(details) {

    //from               "file:///home/rjn/Documents/arjunbazinga.github.io/temp.ipynb"
    //to  "http://localhost:8888/notebooks/Documents/arjunbazinga.github.io/temp.ipynb"
    let url = details.url;
    let del = "file://" + jupyter_path;
    url = url.slice(del.length);
    let prefix = "http://localhost:" + port + "/notebooks/";
    url = prefix + url
         return {redirectUrl: url};
    },
    {
        urls: [
              "file://*.ipynb",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

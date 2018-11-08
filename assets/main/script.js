window.onload = function () {
    let xhr = new XMLHttpRequest();
    let MainPageInfo;
    xhr.open('POST', '/data', false);
    xhr.send();
    if (xhr.status !== 200) {
        console.log( xhr.status + ': ' + xhr.statusText );
    } else {
        MainPageInfo = xhr.responseText;
        MainPageInfo = JSON.parse(MainPageInfo);
    }

    new Vue({
        el: "#main",
        data: {
            pageinfo: MainPageInfo
        }
    });
};
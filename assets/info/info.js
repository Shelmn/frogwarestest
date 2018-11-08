let xhr = new XMLHttpRequest();
let questInfo;
xhr.open('POST', '/info', false);
xhr.send();
if (xhr.status !== 200) {
    console.log( xhr.status + ': ' + xhr.statusText );
} else {
    questInfo = JSON.parse(xhr.responseText);
}
let xhr2 = new XMLHttpRequest();
let leafs;
xhr2.open('POST', '/getLeafs', false);
xhr2.send();
if (xhr2.status !== 200) {
    console.log( xhr2.status + ': ' + xhr2.statusText );
} else {
    leafs = JSON.parse(xhr2.responseText);
    console.log(leafs);
}
new Vue({
    el: "#main",
    data: {
        questinfo: questInfo,
        leaf: leafs
    }
});
let req = new Request('http://localhost:3000');

/*
fetch(req,{
    body: JSON.stringify({a:1,B:2}), // must match 'Content-Type' header
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    },
    credentials: 'include',//include,same-origin
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode:"cors"
})
    .then(function(response) {
        return response.text();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    })
    .catch(function(error) {
        console.log(JSON.stringify(error));
    });
*/














let controller = new AbortController();
let signal = controller.signal;
function consume(reader) {
    var total = 0
    return pump();
    function pump() {
        return reader.read().then(({done, value}) => {
            if (done) {
                return
            }
            total += value.byteLength
            console.log(`received ${value.byteLength} bytes (${total} bytes in total)`)
            controller.abort();
            return pump()
        })
    }
}

fetch(req,{signal})
    .then(res => consume(res.body.getReader()))
    .then(() => console.log("consumed the entire body without keeping the whole thing in memory!"))
    .catch(e => console.log("something went wrong: " + e))

/*fetch(req).then(res => res.blob().then(blob => {
    var a = document.createElement('a');
    var url = window.URL.createObjectURL(blob);   // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)
    var filename = res.headers.get('Content-Disposition');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
})).catch(e => console.log("something went wrong: " + e));*/


console.table(window);
console.trace("look");
console.count()
console.count()
console.count()

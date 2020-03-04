require('http').createServer((req,res)=>{
    res.writeHead(200,{
        'Access-Control-Allow-Origin':'http://localhost:63342',
        'Access-Control-Allow-Credentials':'true',
        'content-type': 'application/json'
    })
    require('fs').createReadStream("04._Thriller.flac").pipe(res);
 /*   require('fs').readFile("04._Thriller.flac", function(isErr, data){
        if (isErr) {
            res.end("Read file failed!");
            return;
        }
        res.writeHead(200,{
            'Access-Control-Allow-Origin':'http://localhost:63342',
            'Access-Control-Allow-Credentials':'true',
            'content-type': 'application/json'
        })
        res.write(data);
    })*/

    }).listen(3000,'127.0.0.1')

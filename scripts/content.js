var cheerio = require('cheerio');
var fs = require('fs');
var http = require('http');
var Content = require('./../models/content.js');
var assert = require('assert');

for (var i = 1; i <= 8; i++) {

    var option = {
        hostname: "m2.qiushibaike.com",
        path: "/article/list/text?page="+ i +"&count=100"
    };

    var req = http.request(option, function(res) {

        res.setEncoding('utf8');
        var body = "";
        res.on('data', function(resData) {
            body += resData;
        });

        res.on("end", function() {
            var data = eval(JSON.parse(body));
            data.items.forEach(function (res) {
                Content.save(res, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    assert.equal(null, err);
                    console.log(res.content);
                });
            });

        })
    }).on("error", function(e) {
        console.log(e.message);
    });
    //db.end();
    req.end();
}
var cheerio = require('cheerio');
var fs = require('fs');
var http = require('http');
var Content = require('./../models/content.js');
var assert = require('assert');

//Content.get({'comments_count' : {$gt : 50}});
Content.getContent({'comments_count' : {$lte : 2}});
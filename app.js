const http = require( 'http' );
const fs = require('fs');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;
var express = require("express");
var cors = require('cors');
var app = express(); 

app.use(cors());
app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
  });

app.get("/room", function(req, res){
  res.sendFile(path.join(__dirname, 'room.html'));
});

app.get("/prototype", function(req, res){
  res.sendFile(path.join(__dirname, 'prototype.html'));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
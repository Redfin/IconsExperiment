"use strict";

var koa = require("koa");
var app = koa();
var route = require("koa-route");
var serve = require("koa-static");

app.use(serve("views"));
app.use(serve("build"));
app.use(serve("bower_components"));
app.use(serve("js"))

app.use(route.get("/", function() {
  return this.redirect("/index.html");
}));

app.listen(3000);
console.log("listening on port 3000.");
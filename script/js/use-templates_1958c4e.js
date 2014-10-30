console.log('==============================');
console.log('= /script/js/use-template.js =');
console.log('==============================');
console.log('');

// use handlebars template

var tpl = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n<div class=\"body\">\n    ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n</div>";
  return buffer;
  });
var data = {
    title: 'use handlebars',
    body: 'It works!'
};
var html = tpl(data);
console.log('use handlebars from js: ');
console.log(html);

// use ejs template

var tpl = [function(locals, filters, escape, rethrow) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<ul>\n<% for(var i=0; i < supplies.length; i++) {%>\n   <li><%= supplies[i] %></li>\n<% } %>\n</ul>", filename: "template/ejs/foo.ejs" };
function rethrow(err, str, filename, lineno){
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;
  
  throw err;
}
try {
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<ul>\n');__stack.lineno=2; for(var i=0; i < supplies.length; i++) {; buf.push('\n   <li>', escape((__stack.lineno=3,  supplies[i] )), '</li>\n');__stack.lineno=4; } ; buf.push('\n</ul>'); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
}][0];
var data = {
    supplies: [ 'foo', 'bar' ]
}
var html = tpl(data);
console.log('');
console.log('use ejs from js: ');
console.log(html);

// use jade

var url = '/html/jade/foo.html';
var xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();
console.log('');
console.log('use jade file:');
console.log(xhr.responseText);
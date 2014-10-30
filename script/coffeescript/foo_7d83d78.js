(function() {
  var cubes, data, html, list, math, num, number, opposite, race, square, tpl,
    __slice = [].slice;

  number = 42;

  opposite = true;

  if (opposite) {
    number = -42;
  }

  square = function(x) {
    return x * x;
  };

  list = [1, 2, 3, 4, 5];

  math = {
    root: Math.sqrt,
    square: square,
    cube: function(x) {
      return x * square(x);
    }
  };

  race = function() {
    var runners, winner;
    winner = arguments[0], runners = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return print(winner, runners);
  };

  if (typeof elvis !== "undefined" && elvis !== null) {
    alert("I knew it!");
  }

  cubes = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      num = list[_i];
      _results.push(math.cube(num));
    }
    return _results;
  })();

  console.log('');

  console.log('=============================');

  console.log('= /script/coffee/foo.coffee =');

  console.log('=============================');

  console.log('');

  console.log(cubes);

  console.log('');

  console.log('locate resource in coffee:', 'http://localhost:8080/script/coffeescript/coffee_9621586.png');

  tpl = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

  data = {
    title: 'coffee use handlebars',
    body: 'It works!'
  };

  html = tpl(data);

  console.log('');

  console.log('use handlebars from coffee: ');

  console.log(html);

  tpl = [function(locals, filters, escape, rethrow) {
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

  data = {
    supplies: ['in coffee', 'EJS works!']
  };

  html = tpl(data);

  console.log('');

  console.log('use handlebars from coffee: ');

  console.log(html);

}).call(this);

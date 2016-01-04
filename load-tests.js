var process = require('process');
var glob = require('glob');

glob("test/*-spec.js", {}, function(err, files) {
  files.forEach(function (file) {
      process.stdout.write('require(\'./' + file + '\');');
  });
});

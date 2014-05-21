Package.describe({
  summary: "Hello world"
})

Package.on_use(function(api) {
  api.export("withLatency")
  api.add_files("hello.js");

});

Package.on_test(function(api) {
  api.use(["tinytest", "test-helpers", "hello"])
  api.add_files("hello_test.js");
});

testAsyncMulti("test-helpers - timeout", 300, [

  function(test, onComplete){
    withLatency(200, onComplete(function(){
      test.isTrue(true);
    }));
  },

  function(test ,onComplete){
    withLatency(200, onComplete(function(){
      test.isTrue(true);
    }));
  }

]);
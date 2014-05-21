withLatency = function(time, cb) {
  Meteor.setTimeout(function() {
    cb();
  }, time);
};

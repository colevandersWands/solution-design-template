tests({
  'symmetrical string 1': function() {
    eq("racecar", reversed_string("racecar"));
  },
  'symmetrical string 2': function() {
    eq("uiopoiu", reversed_string("uiopoiu"));
  },
  'empty string': function() {
    eq("", reversed_string(""));
  },
//   'escape charecter at the beginning': function() {
//     eq("n\", reversed_string("\n"));
//   },
//   'escape charecter at the end': function() {
//     eq("\n", reversed_string("n/"));
//   },
//   'escape charecter in the middle': function() {
//     eq("n\n", reversed_string("n\n"));
//   },
  'all numbers A': function() {
    eq("435", reversed_string("534"));
  },
  'all numbers B': function() {
    eq("0987", reversed_string("7890"));
  },
  'single letter': function() {
    eq("e", reversed_string("e"));
  },
  'single charecter': function() {
    eq("*", reversed_string("*"));
  },
  'ssoopper long string': function() {
    eq("888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888", reversed_string("888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888"));
  },
  'even number of letter': function() {
    eq("yrreir", reversed_string("rierry"));
  },
  'odd number of letters': function() {
    eq("yrreeir", reversed_string("rieerry"));
  }
});

